import React from 'react';
import axios from 'axios';
// import Auth from '../../lib/Auth';
class AuthRegister extends React.Component {
  state = {
    email: 'coding4Life@hemail.com'
  }
  handleSubmit = event => {
    event.preventDefault();
    axios.post('api/register', this.state)
      .then(() => this.props.history.push('/drinks'));
  }
  handleChange = ({target: {name, value}}) => {
    // console.log('event.target.name is', event.target.name);
    this.setState({[name]: value});
  }
  render(){
    return(
      <section>
        <form onSubmit={this.handleSubmit}>
          <input name="email" placeholder="example@email.com"
            onChange={this.handleChange} value={this.state.email|| '' }/>
          {/* <span style={{color: 'crimson'}}>{this.state.errors.email}</span> */}
          <button>Register</button>
        </form>
      </section>
    );
  }
}

export default AuthRegister;
