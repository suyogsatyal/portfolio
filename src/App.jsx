import React, { useEffect, createContext, useState } from "react";
import Home from "./pages/Home"
export const ModeContext = createContext();


function App() {
	const [mode, setMode] = useState(localStorage.getItem('isChecked'))

	return (
		<ModeContext.Provider value={{setMode}}>
			<section className={(mode == 'true') ? 'dark' : ' '}>
				<Home />
			</section>
		</ModeContext.Provider>
	)
}

export default App