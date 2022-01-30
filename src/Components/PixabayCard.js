import './cards.css'
import {useEffect, useState} from "react";
import axios from "axios";

const PixabayCard =({search})=>{
    const apiKey=process.env.REACT_APP_API_KEY_PIXABAY
    const [results,setResults]=useState('')

    useEffect(()=>{
        axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${search}`)
            .then(response=>setResults(response.data.hits))
    },[search])
    return (
        <div className='cards'>
            <a className='header-cards' href="https://pixabay.com/">
                <img src="https://pixabay.com/static/img/logo.png" alt='Pixabay Logo'/>
            </a>
            <p>Nb resultats {results.length}</p>
            <div className='cards-img'>
                {console.log('PIXABAY RESULT : ',results)}
                {results?results.map(result=><img key={result.id} className='listImg' src={result.webformatURL} alt={result.tags}/>):""}
            </div>
        </div>
    )

}
export default PixabayCard