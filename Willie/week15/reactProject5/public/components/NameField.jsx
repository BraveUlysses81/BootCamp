var React = require('react');

var NameField = React.createClass({

    getInitialState : function(){
        return{
            value : ""
        }
    },

    onChange(){
        this.setState({
            value : this.refs.newName.value
        });
    },

    clearName(){
        this.setState({
            value : ""
        });
    },

    render(){
        return (
            <div className="NameField">
                    <input ref="newName" type="text" value={this.state.value} onChange={this.onChange} placeholder=" Enter Name"></input>
            </div>
        );
    }
});

module.exports = NameField;