var React = require('react');
var EmailField = require('./EmailField');
var NameField = require('./NameField');

var LeadCapture = React.createClass({

    submitted(){
        if(this.email.state.value == "") {
            alert(this.name.state.value + "! At least try. You didn't enter anything for your email");
        }
        else if(!this.email.state.valid){
            alert("Come on " + this.name.state.value + ", please provide a correct email");
            this.name.clear();
            this.email.clear();
        }
        else {
            alert("Thank you for your submission " + this.name.state.value);
            this.name.clear();
            this.email.clear();
        }
    },

    render(){
        return (
            <div className="LeadCapture col-xs-6 col-xs-offset-3">
                <h1>Please enter your name and email</h1>
                <form>
                    <div className="form-group">
                        <NameField className="form-control" ref={(NameField) => {this.name = NameField;}} />
                    </div>
                    <div className="form-group">
                        <EmailField className="form-control" ref={(EmailField) => {this.email = EmailField;}} />
                    </div>
                        <button className="btn btn-primary" onClick={this.submitted}>submit</button>
                </form>
            </div> /*className="LeadCapture col-xs-6 col-xs-offset-3"*/
        );s
    }

});

module.exports = LeadCapture;