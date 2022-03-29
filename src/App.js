import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import logo from './components/logo.jpg';
import island from './components/island.jpg';
import ant from './components/ant.png';

function App() {
	const [first, setFirst] = useState('Name')
	const [second, setSecond] = useState('Name')
	const [third, setThird] = useState('Name')
	const [fourth, setFourth] = useState('Name')
	const [image, setImage] = useState('https://www.clipartmax.com/png/middle/461-4613415_bachelor-of-fine-arts-animation-cartoon-play-button-png.png')

	function handleClick(){
		axios.get(
			`http://acnhapi.com/v1a/villagers`
		).then((res) => {
			let total = res.data.length;
			let randoms = [];
			for(let i = 0; i < 4; i++){
				let num = Math.floor(Math.random() * total)
				randoms.push(res.data.splice(num,1));
			};
			let imageNum = Math.floor(Math.random() * 4)
			setImage(randoms[imageNum][0]['image_uri'])
			setFirst(randoms[0][0]['name']['name-USen']);
			setSecond(randoms[1][0]['name']['name-USen']);
			setThird(randoms[2][0]['name']['name-USen']);
			setFourth(randoms[3][0]['name']['name-USen']);
		})
	};

  return (
		<div className='App'>
			<div className='container'>
				<nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
					<a className='navbar-brand' href='#'>
						<img
							src={logo}
							width='30'
							height='30'
							className='d-inline-block align-top logo'
							alt=''></img>
						Who's that Villager?
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarNav'>
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<a className='nav-link' href='#'>
									Account
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='#'>
									History
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='#'>
									Setting
								</a>
							</li>
						</ul>
					</div>
				</nav>
				<div className='body'>
					<div className='stuff'>
						<img src={image} alt='character image' className='responsive' />
					</div>
					<div className='a1'>
						<button type='button' onClick={handleClick} className='btn btn-lg btn-info'>
							{first}
						</button>
					</div>
					<div className='a2'>
						<button type='button' onClick={handleClick} className='btn btn-lg btn-info'>
							{second}
						</button>
					</div>
					<div className='a3'>
						<button type='button' onClick={handleClick} className='btn btn-lg btn-info'>
							{third}
						</button>
					</div>
					<div className='a4'>
						<button type='button' onClick={handleClick} className='btn btn-lg btn-info'>
							{fourth}
						</button>
					</div>
				</div>
			</div>
			<div className='island-img responsive'>
				<img
					src={island}
					width='160'
					height='200'
					id='island'
					alt='island icon'
					className='responsive'
				/>
			</div>
		</div>
	);
}

export default App;
