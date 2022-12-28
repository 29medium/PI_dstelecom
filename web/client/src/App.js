import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";

// import Home from "./pages/Home";
import Main from "./pages/Main";
import Relatorios from "./pages/Relatorios";
import Relatorio from "./pages/Relatorio";
import Estatistica from "./pages/Estatistica";
import Pendentes from "./pages/Pendentes";
import Equipa from "./pages/Equipa";
import Login from "./components/Login";
import useToken from "./components/useToken";


function App () {
	const {token,setToken} = useToken();
	
	if (!token) {
		return <Login setToken={setToken} />;
	}
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Estatistica />} />
				<Route exact path="/relatorios" element={<Relatorios />} />
				<Route exact path="/relatorio" element={<Relatorio />} />
				
				<Route exact path="/pendentes" element={<Pendentes />} />
				<Route exact path="/equipa" element={<Equipa />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;