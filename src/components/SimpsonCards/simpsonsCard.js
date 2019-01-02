import React from "react"
import "./simpsonsCard.css"

const SimpsonsCard = props => (
	<div className="col-lg-4 ">
		<div className="card m-4 buffer">
			<div className="img-container ">
				<img className="rounded mx-auto d-block pt-2" alt={props.name} src={props.image} onClick={() => props.randomizeCard(props.id, props.clicked)} data={props.id}/>
			</div>
			<div className="content text-center">

				<strong>Name:</strong> {props.name}

			</div>

		</div>
	</div>
)

export default SimpsonsCard;
