import React ,{useState ,createContext} from 'react'

export const MovieContext = createContext();


export const MovieProvider = (props)=>{
    const [movies,setMovies] = useState([
        {
            name:'k2',
            prices:'$10',
            id:3
        },
        {
            name:'k3',
            prices:'$20',
            id:2
        },
        {
            name:'k4',
            prices:'$30',
            id:4
        }
    ]);
    
    return (

        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider> 
    );
    

}
