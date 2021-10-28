import './Stats.css'

import Stat from './Stat'
import Trophy from './Trophy'

function Stats(){
	return (
		<div className="Stats">
			<div className="Stats-container">
				<Stat number="2" competition="World Cup" />
				<Stat number="15" competition="Copa America" />
				<Stat number="1" competition="Confederations" />
				<Stat number="2" competition="Olympics" />
				<Stat number="20" competition="Total" />
			</div>

			<div className="trophies-container">
				<Trophy competition="World Cup"/>
				<Trophy competition="World Cup"/>
				<Trophy competition="Copa America"/>
				<Trophy competition="Copa America"/>
				<Trophy competition="Copa America"/>
				<Trophy competition="Copa America"/>
				<Trophy competition="Copa America"/>
				<Trophy competition="Copa America"/>
				<Trophy competition="Copa America"/>
				<Trophy competition="Copa America"/>
				<Trophy competition="Copa America"/>
				<Trophy competition="Copa America"/>
				<Trophy competition="Copa America"/>
				<Trophy competition="Copa America"/>
				<Trophy competition="Copa America"/>
				<Trophy competition="Copa America"/>
				<Trophy competition="Copa America"/>
				<Trophy competition="Confederations Cup"/>
				<Trophy competition="Gold Medal"/>
				<Trophy competition="Gold Medal"/>
			</div>
		</div>
		)
}


export default Stats


