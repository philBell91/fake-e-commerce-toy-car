import React, { Component } from 'react';
import Card from './components/card';
import './App.css';
import Navbar from './components/navbar';
import blueCar from './images/blue-car.jpg';
import orangeCar from './images/orange-car.jpg';
import redCar from './images/red-car.jpg';
import redCarVintage from './images/red-car-vintage.jpg';
import vintageCar from './images/vintage-car.jpg';
import yellowCar from './images/yellow-car.jpg';

class App extends Component {

  state = {
    cards: [
      { id: 0, name: 'Car Blue', price: 1.99, image: blueCar, q: 0 },
      { id: 1, name: 'Car Orange', price: 2.99, image: orangeCar, q: 0 },
      { id: 2, name: 'Car Red', price: 3.99, image: redCar, q: 0 },
      { id: 3, name: 'Vintage Car Red', price: 4.99, image: redCarVintage, q: 0 },
      { id: 4, name: 'Vintage Car ', price: 5.99, image: vintageCar, q: 0 },
      { id: 5, name: 'Car Yellow', price: 10.99, image: yellowCar, q: 0 },
    ]
  }

  handleDelete = cardId => {
    const cards = this.state.cards.filter(card => card.id !== cardId)
    this.setState({ cards });
  }

  handleIncrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id].q++;
    this.setState({ cards });
  }

  handleDecrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id].q--;
    this.setState({ cards });
  }

  render() {
    return (
      <>
        <Navbar />
        <div className='container'>
          <h1 className='container' style={{ textAlign: 'center' }}>Customize your order</h1>
          <hr></hr>
          <div className='row'>
            {this.state.cards.map(card => (
              <Card key={card.id}
                card={card}
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
