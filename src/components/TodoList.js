import React, {PropTypes} from 'react';
// import FuelSavingsResults from './FuelSavingsResults';
// import FuelSavingsTextInput from './FuelSavingsTextInput';

class TodoList extends React.Component {
  // constructor(props, context) {
  //   super(props, context);

  //   this.save = this.save.bind(this);
  //   this.onTimeframeChange = this.onTimeframeChange.bind(this);
  //   this.fuelSavingsKeypress = this.fuelSavingsKeypress.bind(this);
  // }

  buildTodoItems() {
    // REPLACE WITH INDIVIDUAL TODOS
    return [(<div>Whatup</div>), (<div>dude</div>)];
    // return this.props.results.map(function(result) {
    //       return <ListItemWrapper data={result}/>;
    //     });
  }

  save() {
    // this.props.saveFuelSavings(this.props.fuelSavings);
  }

  render() {
    // const {fuelSavings} = this.props;

    let todoItems = this.buildTodoItems();

    return (
      <div>
        <div className="card-list">{todoItems}</div>
      </div>
    );
  }
}

// TodoList.propTypes = {
//   saveFuelSavings: PropTypes.func.isRequired,
//   calculateFuelSavings: PropTypes.func.isRequired,
//   fuelSavings: PropTypes.object.isRequired
// };

export default TodoList;
