import React, { Component, PropTypes } from 'react';
import List from '../List/List';

class KabanBoard extends Component {
  render(){
    return(
      <div className="app">
        <List id="todo" title="To Do" cards={
          this.props.cards.filter((card) => card.status == 'todo')
        }/>
        <List id="in-progress" title="In Progress" cards={
          this.props.cards.filter((card) => card.status == 'in-progress')
        }/>
        <List id="done" title="Done" cards={
          this.props.cards.filter((card) => card.status == 'done')
        }/>
      </div>
    );
  }
};

KabanBoard.PropTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
};

export default KabanBoard;
