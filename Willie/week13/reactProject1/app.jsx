var MyComp = React.createClass({
    render(){
        return (
            <div>
                <h1>I love learning to code with React JS</h1>
                <p>How's it going {this.props.username}?
                    I understand that today you want to learn about {this.props.subject}.
                    Is that correct?</p>
            </div>
        );
    }
});

MyComp.defaultProps = {
    username: "human",
    subject: "node.js"
};

ReactDOM.render(<MyComp subject = "pasta"/>, document.getElementById('react-container'));