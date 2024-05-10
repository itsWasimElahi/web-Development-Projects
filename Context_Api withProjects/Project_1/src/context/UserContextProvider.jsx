import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {  // jo bhi prop aarha usko as it is aagay pass krdo
    const [user, setUser] = React.useState(null)  // where user is variable and setUser is method/fn()
    return(
        <UserContext.Provider value={{user, setUser}}>   {/* ye aik template bn gaiye UserContextProvider k naam se is me user, setUser ko as variable states ko pass kr diya  jo start ma Null ha childrens ko jo k all templates wrapped in UserContextProvider honge    */}
        {children}                                       {/*children is like outlet layer in router because the user context will provide its data to every children  i,e, Cards , Login etc */}
        </UserContext.Provider>
    )
}

export default UserContextProvider