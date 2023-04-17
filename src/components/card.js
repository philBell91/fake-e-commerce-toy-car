import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="col" >
                <div className="card" style={{ width: '18rem', textAlign: 'center', marginBottom: '3rem' }}>
                    <button className='btn btn-primary' onClick={() => this.props.onIncrement(this.props.card)}>Add <span className='badge badge-light'>{this.props.card.q}</span></button>
                    {/* <button className='btn btn-primary' onClick={() => this.props.onDecrement(this.props.card)}>Remove <span className='badge badge-light'>{this.props.card.q}</span></button> */}
                    <img alt={this.props.card.name} src={this.props.card.image} className='card-img-top' height={'200px'} />
                    <div className='card-body'>
                        <div className='card-body'>
                            <h5>{this.props.card.name}</h5>
                            <p className='card-text'>€ {this.props.card.price}</p>
                            <button className='btn btn-outline-danger' onClick={() => this.props.onDelete(this.props.card.id)}>Remove</button>
                        </div>
                    </div>
                </div >
            </div >
        );
    }

}

export default Card;