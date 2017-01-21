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

var ProgramTextOutput = React.createClass({

    render(){
        return (
            <div className="ProgramTextOutput">
                <h1>Your favorite dessert: {this.props.food}</h1>
                <h1>Your favorite beverage: {this.props.beverage}</h1>
            </div>
        );
    }
});

var Program = React.createClass({

    getDefaultProps(){
        return{
            food : 'red velvet cake',
            beverage : 'strawberry lemonade'
        };
    },

    getInitialState(){
        return{
            food : this.props.food,
            beverage : this.props.beverage
        };
    },

    handleNewUpdate(obj){
        this.setState({
        food : obj.food,
        beverage : obj.beverage
        });
    },

    render(){
        var food;
        var beverage;
        return (
            <div className="ProgramTextOutput">
                <ProgramTextOutput food={this.state.food} beverage={this.state.beverage} />
                <ProgramForm onNewUpdate={this.handleNewUpdate} />
            </div>
        );
    }

});

ReactDOM.render(<Program />, document.getElementById('react-container'));

