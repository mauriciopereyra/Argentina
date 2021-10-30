import './Banner.css'
import logo from './logo-afa-1c.png'
import banner from './banner.jpg'
import banner2 from './banner2.jpg'
import banner3 from './banner3.jpg'

var images = [
	banner,
	banner2,
	banner3,
  ]


function changeBackground(){
	var i = 0;
	
	setInterval(function() {
		  document.getElementsByClassName('Banner')[0].style.backgroundImage = "url(" + images[i] + ")";
		  i = i + 1;
		  if (i == images.length) {
			i =  0;
		  }
	}, 6000);
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