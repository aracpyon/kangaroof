import React from 'react';

class Dropdown extends React.Component {
  constructor(props){
    super(props)
    this.state = { 
      num_guests: this.props.num_guests,
      adults: 1,
      children: 0, 
      infants: 0
    }
  }

  render() {
    const { num_guests, adults, children, infants } = this.state;
    return (
    <div className="dropdown">
      <div className="people1">
        <span className="person">Adults</span>
        <div>
          <img className="minus" src={window.minus} width="22" height="22" />
          <div>{adults}</div>
          <img className="plus" src={window.plus} width="22" height="22" />
        </div>
      </div>
      <div className="people2">
        <span className="person">Children</span>
        <div>
          <img className="minus" src={window.minus} width="22" height="22" />
          <div>{children}</div>
          <img className="plus" src={window.plus} width="22" height="22" />
        </div>
      </div>
      <div className="people3">
        <span className="person">Infants</span>
        <div>
          <img className="minus" src={window.minus} width="22" height="22" />
          <div>{infants}</div>
          <img className="plus" src={window.plus} width="22" height="22" />
        </div>
      </div>
    </div>
      )
  }
  
}

export default Dropdown;