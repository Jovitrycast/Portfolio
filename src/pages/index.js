import React from 'react';
import Home from './home';
import AboutMe from './AboutMe';
import Skills from './skills';
import Projects from './Projects';
import Footer from './Footer'

function App() {
	
	return (
		<div className='mainBG'>
			<Home/>
			<AboutMe/>
			<Skills/>
			<Projects/>
			<Footer/>
		</div>
	);
}

export default App;