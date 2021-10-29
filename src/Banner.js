import './Banner.css'
import logo from './logo-afa-1c.png'
import banner from './banner.jpg'

var images = [
	"banner.jpg",
	"banner2.jpg",
	"banner3.jpg",
  ]


function changeBackground(){
	var i = 0;
	
	setInterval(function() {
		  document.getElementsByClassName('Banner')[0].style.backgroundImage = "url(" + images[i] + ")";
		  i = i + 1;
		  if (i == images.length) {
			i =  0;
		  }
	}, 5000);
}

function Banner(){
	return (
		<div className="Banner" onLoad={changeBackground()}>
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