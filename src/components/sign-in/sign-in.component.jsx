import React from 'react'
import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  render () {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name='email'
            type='email'
            label='Email'
            autoComplete='username'
            value={this.state.email}
            required
          />

          <FormInput
            handleChange={this.handleChange}
            name='password'
            type='password'
            label='Password'
            autoComplete='current-password'
            value={this.state.password}
            required
          />

          <div className="button-container">
            <CustomButton type='submit'>
              Sign In
            </CustomButton>

            <CustomButton type='submit' onClick={signInWithGoogle} isGoogleSignIn={true}>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn