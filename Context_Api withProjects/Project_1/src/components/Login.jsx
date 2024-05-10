import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'
// ye Login template updated values ko store kr rha aur state ko update kr rha jo k initially Null tha 
function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)   // set user getting from UserContextProvider.jsx

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})   // ye setUser state update kr rha ha aur more than one variable ko as object update kr rha ha jin ki jagah pehle Null aarha tha jisko ab override krdiya ha 
    }                                   // ab profile template is updated variables ki values recieve kr skega after submit and state updtes
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}   // onChange ki wajah se username aur password Null se wo hogya jo humne input field ma likha tha 
        onChange={(e) => setUsername(e.target.value) }   
        placeholder='username'  />
        {"    "}
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login