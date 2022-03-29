import "./App.css";
import logo from './components/logo.jpg';
import island from './components/island.jpg';
import ant from './components/ant.png';

function App() {
  return (
		<div className='App'>
			<div className='container'>
				<nav class='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
					<a class='navbar-brand' href='#'>
						<img
							src={logo}
							width='30'
							height='30'
							class='d-inline-block align-top logo'
							alt=''></img>
						Who's that Villager?
					</a>
					<button
						class='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span class='navbar-toggler-icon'></span>
					</button>
					<div class='collapse navbar-collapse' id='navbarNav'>
						<ul class='navbar-nav'>
							<li class='nav-item'>
								<a class='nav-link' href='#'>
									Account
								</a>
							</li>
							<li class='nav-item'>
								<a class='nav-link' href='#'>
									History
								</a>
							</li>
							<li class='nav-item'>
								<a class='nav-link' href='#'>
									Setting
								</a>
							</li>
						</ul>
					</div>
				</nav>
				<div className='body'>
					<div class='stuff'>
						<img src={ant} alt='character image' class='responsive' />
					</div>
					<div class='a1'>
						<button type='button' class='btn btn-lg btn-info'>
							Name
						</button>
					</div>
					<div class='a2'>
						<button type='button' class='btn btn-lg btn-info'>
							Name
						</button>
					</div>
					<div class='a3'>
						<button type='button' class='btn btn-lg btn-info'>
							Name
						</button>
					</div>
					<div class='a4'>
						<button type='button' class='btn btn-lg btn-info'>
							Name
						</button>
					</div>
				</div>
			</div>
			<div class='island-img responsive'>
				<img
					src={island}
					width='160'
					height='200'
					id='island'
					alt='island icon'
					class='responsive'
				/>
			</div>
		</div>
	);
}

export default App;
