import copa_america from "./copa-america.png"
import world_cup from "./world-cup.png"
import confederations_cup from "./confederations-cup.png"
import gold_medal from "./gold-medal.png"


function Trophy(props){
	if (props.competition == 'World Cup'){
		return (
				<img 
					src={world_cup}
				>
				</img>
			)
	} else if(props.competition == 'Copa America'){
		return (
				<img 
					src={copa_america}
				>
				</img>
			)
	} else if(props.competition == 'Confederations Cup'){
		return (
				<img 
					src={confederations_cup}
				>
				</img>
			)		
	} else {
		return (
				<img 
					src={gold_medal}
				>
				</img>
			)			
	}

}



export default Trophy