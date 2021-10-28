function Stat(props){
	return (
			<div className="container">
				<div className="img-container">
				</div>
				<div className="circle">
					{props.number}
				</div>
				<div className="bar">
					{props.competition}
				</div>
			</div>

		)
}


export default Stat
