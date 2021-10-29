import './NextMatches.css'
import Match from './match'
import Argentina from './argentina.svg'
import Brazil from './brazil.svg'
import Peru from './peru.svg'
import Uruguay from './uruguay.svg'

function NextMatches(){
	return (
		<div className="NextMatches" id="next">
			<div className="section-title">
				<h1>Next matches</h1>
			</div>
			<div className="player">
				
			</div>
			<div className="matches">
				<Match type="small" day="15" month="OCT" status="Finalizado" description="Fecha 12" competition="Eliminatorias" home_logo={Argentina} home_name="Argentina" away_logo={Peru} away_name="Peru" home_score="1" away_score="0" />
				<Match type="big" day="13" month="NOV" status="20:00 hs (ARG)" description="Fecha 13" competition="Eliminatorias" home_logo={Uruguay} home_name="Uruguay" away_logo={Argentina} away_name="Argentina" home_score="" away_score="" />
				<Match type="small" day="17" month="NOV" status="20:30 hs (ARG)" description="Fecha 14" competition="Eliminatorias" home_logo={Argentina} home_name="Argentina" away_logo={Brazil} away_name="Brasil" home_score="" away_score="" />
			</div>		
		</div>

		)
}


export default NextMatches


