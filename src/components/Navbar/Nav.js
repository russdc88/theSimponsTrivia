import React from 'react';

import './Nav.css';

const Topnavbar = props => (
	
		
			<div className="jumbotron jumbotron-fluid text-center">
				<div className="container">
					<h1 className="display-4">Simpsons Memorization Game!</h1>
					<p className="h4">Click on an image. Don't click the same image twice or you lose!</p>

					<p className="h4 pt-3"> Score: {props.score} Highscore: {props.highScore}</p>
				</div>
			</div>
		)

export default Topnavbar;