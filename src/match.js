function Match(props){
	return (
			<div className={`match match-${props.type}`}>
				<div className="date">
					<div className="day">
						{props.day}
					</div>
					<div className="month">
						{props.month}
					</div>
				</div>				
				<div className="status">
					{props.status}
				</div>
				<div className="description">
					{props.description}
				</div>
				<div className="competition">
					{props.competition}
				</div>
				<div className="home-logo">
					<img src={props.home_logo}>
					</img>
				</div>
				<div className="home-name">
					{props.home_name}
				</div>
				<div className="separator">
					{props.home_score} - {props.away_score}
				</div>
				<div className="away-name">
					{props.away_name}
				</div>
				<div className="away-logo">
					<img src={props.away_logo}>
					</img>
				</div>


			</div>
		)
}

export default Match