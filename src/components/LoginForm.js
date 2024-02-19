import React from 'react'

const LoginForm = () => {
  return (
    <div className='login ml-12'>
        <h2>Login Form</h2>
        <div className='form-group'> 
            <label htmlFor='email' > Email</label>
            <input type='email' />
        </div>
        <div className='form-group'> 
            <label htmlFor='password' > Password</label>
            <input type='password' />
        </div>
        <div className='form-group'> 
            <label htmlFor='checkbox' > Remember me</label>
            <input type='checkbox' />
        </div>
        <button type='submit' className='btn btn-success'>SIGN IN</button>
    </div>
  )
}

export default LoginForm