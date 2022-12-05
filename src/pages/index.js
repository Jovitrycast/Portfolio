import React from 'react';
import Home from './home';
import AboutMe from './AboutMe';
import Skills from './skills';
import Projects from './Projects';
import Footer from './Footer'
import Contact from './Contact'

function App() {
	
	return (
		<div className='mainBG'>
			<Home/>
			<AboutMe/>
			<Skills/>
			<Projects/>
			<Contact/>
			<Footer/>
		</div>
	);
}

export default App;