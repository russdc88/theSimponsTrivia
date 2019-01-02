import React, { Component } from 'react';
import './App.css';
import Topnavbar from './components/Navbar/Nav';
import SimpsonsCard from './components/SimpsonCards/simpsonsCard'
import characters from './simpsons.json'

function shuffle(a) {
	var j, x, i;
	for (i = a.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			x = a[i];
			a[i] = a[j];
			a[j] = x;
	}
	return a;
}



class App extends Component {

	state = {
		simpsons: characters,
		score: 0,
		highScore: 0
	}

	resetGame = () => {
		if(this.state.score > this.state.highScore){
			this.setState({highScore: this.state.score})
		}
		this.state.simpsons.forEach(card =>{
			card.clickedon = false
		})
		this.setState({score: 0})
		alert('Game over')
	}
	


	handleClick = (id,clicked) => {
	

		this.state.simpsons.find((item) => {
			if (item.id === id){
				console.log(item)
				if (item.clickedon === false){
					item.clickedon = true
					this.setState({score: this.state.score + 1})
				}
				else{
					this.resetGame()
				}
			}
		})
		
		
		let simpsons = shuffle(this.state.simpsons)




		this.setState({
			simpsons: simpsons
		})
				
    
  };



	render() {
		
		return (
			<div className='App'>
				<Topnavbar score= {this.state.score} highScore={this.state.highScore} />
				<div className="row">
					{this.state.simpsons.map(character => (
						<SimpsonsCard randomizeCard={this.handleClick} key= {character.id} name={character.name} image={character.image} id= {character.id} clicked={character.clickedon}
							/>
					))}
				</div>
			</div>
		);
	}
}

export default App;
