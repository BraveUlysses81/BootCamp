var React = require('react');
var ProgramForm = require('./programForm');
var ProgramTextOutput = require('./programTextOutput');

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

module.exports = Program;