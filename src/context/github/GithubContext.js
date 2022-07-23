import { createContext, useReducer } from 'react'

import githubReducer from './GithubReducer';


const GithubContext = createContext();



export const GithubProvider = ({children}) => {
    // const [users, setUsers] = useState([])
    // const [loading, setLoading] = useState(true)
    const initalState = {
        users:[],
        user: {},
        repos: [],
        loading: false
    }
    const [state, dispatch] = useReducer(githubReducer, initalState)


    return <GithubContext.Provider value={{
        ...state,
        dispatch,
        // getUser,
        // getUserRepos,
        // searchUsers,
        // clearUsers
       
        
    }}>{children}</GithubContext.Provider>
}

export default GithubContext