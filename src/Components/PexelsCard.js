import './cards.css'
import {useEffect, useState} from "react";
import axios from "axios";


const PexelsCard=({search,...props})=>{
    const apiKey=process.env.REACT_APP_API_KEY_PEXELS
    const [results,setResults]=useState('')

    useEffect(()=>{
       axios.get(`https://api.pexels.com/v1/search?query=${search}`, {headers: {authorization: apiKey}},)
           .then(response => setResults(response.data.photos))
           .catch(err => console.error('ERREUR AXIOS', err))
    },[search])
    return (
    <div className='cards'>
        <a className='header-cards' href="https://www.pexels.com">
            <img src="https://images.pexels.com/lib/api/pexels.png" alt='Pexels Logo'/>
        </a>
        <p>Nb resultats {results.length}</p>
        <div className='cards-img'>
            {results?results.map( result=> <img key={result.id} className='listImg' src={result.src.tiny} alt={result.alt} /> ):"" }
            {console.log(results)}
        </div>

    </div>
    )
}
export default PexelsCard