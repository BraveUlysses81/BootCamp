var Program = React.createClass({

    getDefaultProps(){
        return{
            name : "Human",
            mood : "happy"
        }
    },

    getInitialState(){
        return {
            name : this.props.name,
            mood : this.props.mood
        }
    },

    fart(e){
        e.preventDefault();
        this.setState({
            name: this.refs.newName.value,
            mood: this.refs.newMood.value
        })
    },

    render(){
        return (
            <div className="Program">
                <h1>How are you {this.state.name}? I understand that today you feel: {this.state.mood}</h1>
                <form>
                    Change the name: <input ref="newName" type="text" name="name" placeholder="required"></input>
                    Change the mood: <input ref="newMood" type="text" name="mood" placeholder="required"></input>
                    <button onClick={this.fart}>submit</button>
                </form>
            </div>
        );
    }
});

/*Program.defaultProps = {
    name: "Human",
    mood: "happy"
};*/

ReactDOM.render(<Program name="joey joe jo"/>, document.getElementById('react-container'));