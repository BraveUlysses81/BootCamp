var React = require('react');
var validator = require('email-validator');

var EmailField = React.createClass({

    getInitialState : function(){
        return{
            valid : true,
            value : ""
        }
    },

    onChange(){
        var val = validator.validate(this.refs.newEmail.value);
        if(this.refs.newEmail.value == ""){
            this.setState({
                valid : false,
                value : this.refs.newEmail.value
            });
        }
        else if(val){
            this.setState({
                valid : true,
                value : this.refs.newEmail.value
            });
        }else{
            this.setState({
                valid : false,
                value : this.refs.newEmail.value
            });
        }
    },

    clearEmail(){
        this.setState({
            value : ""
        });
    },

    render(){
        return (
            <div className="ProgramForm" >
                    <input ref="newEmail" type="text" className={this.state.valid} value={this.state.value} onChange={this.onChange} placeholder=" Enter Email"></input>
            </div>
        );
    }
});


module.exports = EmailField;