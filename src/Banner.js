import './Banner.css'
import logo from './logo-afa-1c.png'
import banner from './banner.jpg'

function Banner(){
	return (
		<div className="Banner">
			<div className="Title-and-logo">
				<div className="Title fade-in3">
					<h2 className="fade-in">
						Selección
					</h2>
					<h1 className="fade-in2">
						Argentina
					</h1>
				</div>
			</div>
			<ul className="main-nav fade-in4">
				<li><a href="#">News</a></li>
				<li><a href="#">Gallery</a></li>
				<li><a href="#">Stats</a></li>
			</ul>
		</div>
		)
}

export default Banner