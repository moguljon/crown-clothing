import React, { Component } from 'react';
import './sign-in.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
   constructor() {
       super();

       this.state = {
           email: '',
           password: ''
       }
   }

   handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: '', password: ''});
   }

   handleChange = (event) => {
       const { value, name } = event.target;

       this.setState({ [name]: value });
   }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <p>Sign in with your email and password</p>

                <form onSubmit={this.handleSubmit} className='form'>
                    <input 
                        type='email' 
                        name='email' 
                        value={this.state.email} 
                        onChange={this.handleChange}
                        className='input'
                        required />
                    <label>Email</label>
                   
                    <input 
                        type='password' 
                        name='password' 
                        value={this.state.password}
                        onChange={this.handleChange} 
                        className='input'
                        required />
                    <label>Password</label>

                    <div className='btn-container'>
                        <button className='btn-primary' type='submit' value='submit form'>Submit</button>
                        <button className='btn-ghost' onClick={signInWithGoogle}>Sign In with google</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn