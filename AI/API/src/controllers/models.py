from flask import Flask
from flask_restx import Api, Resource, reqparse
from werkzeug.datastructures import FileStorage
from PIL import Image
import matplotlib.pyplot as plt

import torch

from src.server.instance import server
from src.database.db import db

app, api = server.app, server.api

models = db.getModels()
models_info = db.getModelsInfo()

@api.route('/detect')
class ObjectDetection(Resource):
    def get(self,):
        return models_info

    def post(self,): 
        parser = reqparse.RequestParser()
        print(f'Parser: {parser}')
        parser.add_argument('file', location='files', type=FileStorage, required=True)
        args = parser.parse_args()
        print(f'Args: {args}')
        uploaded_file = args['file']  # This is FileStorage instance

        print(f'Uploaded file: {uploaded_file}')

        img = Image.open(uploaded_file)
        
        model = models[0]
        results = model(img)

        outputs = results.pandas().xyxy[0]
        outputs['class'] = outputs.index
        labels = outputs[['class','name']]
        outputs_json = labels.to_json(orient='records')
        print(outputs_json)
        #output_names_json = label_outputs['name']

        return outputs_json, 200