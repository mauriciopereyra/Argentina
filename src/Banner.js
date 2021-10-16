import './Banner.css'
import logo from './logo-afa-1c.png'

function Banner(){
	return (
		<div className="Banner">
			<div className="afa-logo">
				<img
					src={logo}
				>
				</img>
			</div>
			<div className="Title fade-in3">
				<h2 className="fade-in">
					Seleccion
				</h2>
				<h1 className="fade-in2">
					Argentina
				</h1>
			</div>
		</div>
		)
}

export default Banner