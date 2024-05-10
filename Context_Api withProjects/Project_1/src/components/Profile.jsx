import React, {useContext} from 'react'
import UserContext from '../context/UserContext'
// ye profile tag updated stored value se data retrieve/recieve kr rha jo k User object/var ma update hua ha useState ma 
function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div>please login</div>  // agr user object/var abhi NUll hi ha state tau ye msg show kro  // is trha is tag ne UserContextProvider k state se values leli hain directly with context Hook 

    return <div>Welcome {user.username}</div>
}

export default Profile