from flask import Flask
from flask_restx import Api

class Server():
    def __init__(self,):
        self.app = Flask(__name__)
        self.api = Api(self.app,
            version='1.0',
            title='Object Detecion API',
            description='API with Machine Learning models deployed',
            doc='/docs'
        )
        self.drop = None 
        self.crop_size = 0

    def getDrop(self,):
        return self.drop 
    
    def setDrop(self,drop):
        self.drop = drop

    def getCropSize(self,):
        return self.crop_size 
    
    def setCropSize(self,size):
        self.crop_size = size

server = Server()