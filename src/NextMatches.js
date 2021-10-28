import './NextMatches.css'
import Match from './match'


function NextMatches(){
	return (
		<div className="NextMatches">
			<div className="player">
				
			</div>
			<div className="matches">
				<Match type="small" day="15" month="OCT" status="Finalizado" description="Fecha 12" competition="Eliminatorias" home_logo="https://upload.wikimedia.org/wikipedia/en/c/c1/Argentina_national_football_team_logo.svg" home_name="Argentina" away_logo="https://upload.wikimedia.org/wikipedia/en/3/36/Fpf-logo.svg" away_name="Peru" home_score="1" away_score="0" />
				<Match type="big" day="13" month="NOV" status="20:00 hs (ARG)" description="Fecha 13" competition="Eliminatorias" home_logo="https://upload.wikimedia.org/wikipedia/en/4/43/Uruguay_national_football_team_seal.svg" home_name="Uruguay" away_logo="https://upload.wikimedia.org/wikipedia/en/c/c1/Argentina_national_football_team_logo.svg" away_name="Argentina" home_score="" away_score="" />
				<Match type="small" day="17" month="NOV" status="20:30 hs (ARG)" description="Fecha 14" competition="Eliminatorias" home_logo="https://upload.wikimedia.org/wikipedia/en/c/c1/Argentina_national_football_team_logo.svg" home_name="Argentina" away_logo="https://upload.wikimedia.org/wikipedia/en/9/99/Brazilian_Football_Confederation_logo.svg" away_name="Brasil" home_score="" away_score="" />
			</div>		
		</div>

		)
}


export default NextMatches


