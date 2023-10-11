import { createContext,useState } from "react";

const AuthContext = createContext({
    isLogged:false,
    token:"",
    username:"",
    login: (data) => {},
    logout: () => {}
})

export const AuthContextProvider = (props) => {
    
    const [token,setToken] = useState(null)
    const [username,setUsername] = useState("")

    const userIsLog = !!token;

    const loginHandler = (data) => {
        setToken(data.token);
        setUsername(data.user_name)
    }


    const logoutHandler = () => {
        setToken(null);
        setUsername(null);
    }

    const contextValue = {
        token:token,
        username:username,
        isLogged:userIsLog,
        login: loginHandler,
        logout : logoutHandler,
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext 