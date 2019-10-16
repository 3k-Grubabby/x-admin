import React,{useContext} from 'react'
import {MovieContext} from './MovieContext'

const Nav = () =>{
    const [movies,setMovies] = useContext(MovieContext)

    return (
        <nav>   
            <h3>wang</h3>
            <p>list of movies:{movies.length}</p>
        </nav>  
    );
}
export default Nav;