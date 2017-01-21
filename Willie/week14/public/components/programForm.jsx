var React = require('react');

var ProgramForm = React.createClass({

    submitted(event){
        event.preventDefault();
        var foodBeverage = {
            food: this.refs.newFood.value,
            beverage: this.refs.newBev.value
        };
        this.props.onNewUpdate(foodBeverage);
    },

    render(){
        return (
            <div className="ProgramForm" >
                <form>
                    Favorite food: <input ref="newFood" type="text" name="name" placeholder="required"></input>
                    Favorite beverage: <input ref="newBev" type="text" name="mood" placeholder="required"></input>
                    <button onClick={this.submitted}>submit</button>
                </form>
            </div>
        );
    }
});


module.exports = ProgramForm;