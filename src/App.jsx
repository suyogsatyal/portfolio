import React from "react";
import Sidebar from "./assets/Sidebar";
import Hero from "./assets/Hero";
import MobNavbar from "./assets/MobNavbar";

function App() {
	return (
		<div className="App border border-gray-400 flex flex-col xl:flex-row my-14 justify-around">
			<Sidebar />
			<Hero />
			<MobNavbar />
		</div>
	)
}

export default App