import './Stats.css'

import Stat from './Stat'
import Trophy from './Trophy'

function scrollListener(){

	var bar_list = document.getElementsByClassName('bar')


	setTimeout(() => {  
		for (let i = 0; i < bar_list.length; i++) {
			
			document.addEventListener('scroll', function (e) {
				var top  = window.pageYOffset + window.innerHeight,
					isVisible = top > bar_list[i].offsetTop;
			  
				 if (isVisible) {
				   bar_list[i].classList.add('fill');
				 }
			  });

		  }
	}, 2000);


}


function Stats(){
	return (
		<div className="Stats" id="stats" onLoad={scrollListener()}>
			<div className="section-title">
				<h1>Stats</h1>
			</div>
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


