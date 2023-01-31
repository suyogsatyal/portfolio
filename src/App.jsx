import React from "react";
import Sidebar from "./assets/Sidebar";
import Hero from "./assets/Hero";
import MobNavbar from "./assets/MobNavbar";

function App() {
	return (
		<div className="App flex flex-col xl:flex-row my-2 sm:my-8 lg:my-11 justify-around">
			<Sidebar />
			<Hero />
			<MobNavbar />
		</div>
	)
}

export default App