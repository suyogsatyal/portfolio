import Sidebar from '../assets/Sidebar';
import Hero from '../assets/Hero';

function Home() {
    return (
        <div className={`bg-gray-300 dark:bg-[#121212] productSansRegular w-full min-h-screen` }>
			<div className="App container relative flex flex-col xl:flex-row pt-2 sm:pt-8 lg:pt-11 justify-around">
                <Sidebar />
                <Hero />
            </div>
        </div>
    );
}

export default Home;