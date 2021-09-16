import React, { useState } from 'react'
import axios from 'axios'

const Register = ({ updateUser }) => {

    const [register, setRegister] = useState({
        email: '',
        password: '',
        mode: 'login'
    })
    const [error, setError] = useState(false)

    const { email, password, mode } = register

    const handleChange = (e) => {
        const { name, value } = e.target
        setRegister({
            ...register,
            [name]: value
        })
    }

    const handleSubmit = async(e) => {
        try {
            e.preventDefault()
        
            const { email, password, mode } = register

            const data = {
                email,
                password,
                username: email,
                identifier: email
            }

            let url = ''

            if(mode === 'login'){
                url = "http://localhost:1337/auth/local"
            }
            if(mode === 'signup'){
                url = "http://localhost:1337/auth/local/register"
            }

            const userCreation = await axios.post(url, data)
            setRegister({
                email: '',
                password: ''
            })

            if(updateUser && typeof updateUser === 'function'){
                localStorage.setItem('user', JSON.stringify(userCreation.data))
                updateUser(userCreation.data)
            }
        } catch (error) {
            setError(error)
        }
    }

    return (
        <div>
            <h1>{mode}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} id="email" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} id="password" onChange={handleChange}/>
                </div>
                <button type="submit">{mode}</button>
            </form>
            {mode === 'login' && <p onClick={() => setRegister({mode: 'signup'})}>Want to Signup?</p>}
            {mode === 'signup' && <p onClick={() => setRegister({mode: 'login'})}>Want to Login?</p>}
            {error ? <span style={{color: 'red'}}>User does not exist</span> : null}
        </div>
    )
}

export default Register
