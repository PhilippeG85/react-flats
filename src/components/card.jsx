import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Card extends Component {
  handleClick = () => {
    this.props.slectFlat(this.props.index);
  }

  render() {
    const match = this.props.selectedFlat == this.props.flat;
    const {
      name, price, priceCurrency, imageUrl
    } = this.props.flat;

    const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${imageUrl}')`
    };

    return (
      <div className={`card${match ? ' active' : ''}`} style={style}>
        <div className="card-category">
          {price} {priceCurrency}
        </div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick}></a>
      </div>
    );
  }
}

export default Card;
