import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function Footer(){
	return (
		<div className="Footer">
			<div className="socialMedia">
				<FontAwesomeIcon icon="fa-brands fa-facebook-f" />
				<FontAwesomeIcon icon="fa-brands fa-facebook-f" />
				<FontAwesomeIcon icon="fa-brands fa-facebook-f" />
				<FontAwesomeIcon icon="fa-brands fa-facebook-f" />
				<FontAwesomeIcon icon={faCoffee} />
			</div>
		</div>
		)
}


export default Footer

