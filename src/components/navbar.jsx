import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  calcScore = () => {
    let score = 0;
    this.props.habits.forEach((habit) => (score += habit.count));
    return score;
  };

  render() {
    return (
      <nav className='navbar'>
        <i className='navbar-logo fab fa-pagelines'></i>
        <span>Habit Tracker</span>
        <span className='navbar-count'>{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
