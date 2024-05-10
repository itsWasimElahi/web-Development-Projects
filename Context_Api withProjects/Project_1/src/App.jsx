
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>                         {/*// is trha humne all props ki access dedi un sb childrens ko jo is ma wrapped honge*/} 
      <h1>React Context Hook is working To Run Your Project</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
