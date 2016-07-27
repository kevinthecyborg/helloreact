var GreeterMessage = React.createClass({
  render: function () {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }

    this.props.onNewName(updates);
  },
  render:function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name" placeholder="Name goes here"/>
        <br/>
        <textarea rows="5" placeholder="Message goes here"></textarea>
        <br/>
        <button>Set Name</button>
      </form>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Default Name',
      message: 'This is the default message!'
    };
  },
  getInitialState: function () {
    return {
      name: this.props.name
      // add message
    };
  },
  handleNewName: function (name) {
    this.setState({
      updates: updates
    });
  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  }
});

var firstName = 'Kevin';

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
