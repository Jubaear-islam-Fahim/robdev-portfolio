import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useEffect, useState } from "react";
import "./App.scss"; 
import Footer from "./components/global/Footer/Footer";
import Header from "./components/global/Header/Header"; 
import Home from "./page/Home";
import Impressum from './page/Impressum'
import Datenschutz from "./page/Datenschutz";

import { render } from "react-dom";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";


function App() {
	const [loader, setLoader] = useState(true);

	const handleLoad = () => {
		setLoader(false);
	};

	window.addEventListener("onload", handleLoad);

	useEffect(() => {
		setTimeout(() => {
			handleLoad();
		}, 2300);
	}, []);

	useEffect(() => {
		// 👇️ scroll to top on page load
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, []);

	return (
		<div className="App">
			<div className={`loader ${loader ? "" : "active"}`}>
				<div className={`loader-bg ${loader ? "" : "active"}`}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div className={`loader-txt w-100 ${loader ? "" : "active"}`}>
					<div className="overflow-hidden loader-txt-inner">
						<span>Designer,</span>
						<span>Entwickler,</span>
						<span>Skateboarder</span>
					</div>
				</div>
			</div>
			<BrowserRouter>
				<Routes>
					<Route index element={<div><Header /> <Home/> <Footer /></div>} />
					<Route path="/impressum" element={<div className="outPage"><Header /> <Impressum/>  <Footer /></div>} />
					<Route path="/datenschutz" element={<div className="outPage"><Header /> <Datenschutz/> <Footer /></div>} />
				</Routes>
			</BrowserRouter>  
		</div>
	);
}

export default App;
