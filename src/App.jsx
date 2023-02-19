import React from "react";
import Sidebar from "./assets/Sidebar";
import Hero from "./assets/Hero";
import MobNavbar from "./assets/MobNavbar";

function App() {
	return (
		<div className="App flex flex-col xl:flex-row mt-2 sm:mt-8 lg:mt-11 justify-around">
			<Sidebar />
			<Hero />
		</div>
	)
}

export default App
