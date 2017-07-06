var React = require('react');

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

module.exports = ProgramTextOutput;