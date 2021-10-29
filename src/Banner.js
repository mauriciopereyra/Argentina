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
				<li><a href="#next">News</a></li>
				<li><a href="#gallery">Gallery</a></li>
				<li><a href="#stats">Stats</a></li>
			</ul>
		</div>
		)
}

export default Banner