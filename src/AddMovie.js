import React,{useState,useContext} from 'react';
import  {MovieContext} from './MovieContext'


const AddMovie = ()=>{
    const [name,setName] = useState('');
    const [prices,setPrice] = useState('');
    const [movies,setMovies] = useContext(MovieContext)


    const updateName = (e)=>{
        setName(e.target.value)
    }
    const updatePrice = (e)=>{
        setPrice(e.target.value)
    }
    const addMovie = e =>{
        e.preventDefault()
        setMovies(prevMovis=>[...prevMovis,{name,name,prices:prices}])
    }
    return (
        <form onSubmit={addMovie}>
            <input type='text' name='name' value ={name} onChange={updateName} />
            <input type='text' name='price' value ={prices} onChange={updatePrice} />
           <button>Submit</button>
        </form>
    )
}

export default AddMovie