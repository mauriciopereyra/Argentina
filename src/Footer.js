import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faYoutube  } from "@fortawesome/free-brands-svg-icons"

function Footer(){
	return (
		<div className="Footer">
			<div className="socialMedia">
				<a href="https://www.facebook.com/AFAOFICIAL/">
					<FontAwesomeIcon icon={faFacebook} />
				</a>
				<a href="https://twitter.com/AFA">
					<FontAwesomeIcon icon={faTwitter} />
				</a>
				<a href="https://www.instagram.com/afa.oficial/">
					<FontAwesomeIcon icon={faInstagram} />
				</a>
				<a href="https://www.youtube.com/user/AFAOficial">
					<FontAwesomeIcon icon={faYoutube} />
				</a>			
			</div>
			<div className="footer-description">
				<p>Seleccion Argentina de Futbol - Fanpage</p>
			</div>
		</div>
		)
}


export default Footer

