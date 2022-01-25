import './cards.css'
import {useEffect, useState} from "react";
import axios from "axios";

const FlatIconCard =({search})=>{
    const APIKey=process.env.REACT_APP_API_KEY_FLATICON
    const [results,setResults]=useState('')
    const [auth,setAuth]=useState('')

    useEffect(()=>{
        axios.post(`https://api.flaticon.com/v3/app/authentication`,{apikey:APIKey})
        .then(response=> setAuth(response.data))
        if(auth!=''){
         axios.get(`https://api.flaticon.com/v3/search/icons/`,{Authorization:auth.data.token,q:search})
            .then(response=>console.log('REPONSE GET', response))
        }
        console.log('VALEUR TOKEN',auth.data.token)
    },[search])
    return (
        <div className='cards'>

            <a className='header-cards' href="https://www.flaticon.com/">
                <img src="https://media.flaticon.com/dist/min/img/logo/flaticon_negative.svg" alt='Flaticon Logo'/>
            </a>
            <p>Nb resultats {results.length}</p>
            <div className='cards-img'>
                {console.log('PIXABAY RESULT : ',results)}
                {results?results.map(result=><img className='listImg' src={result.webformatURL} alt={result.tags}/>):""}
            </div>
        </div>
    )

}
export default FlatIconCard