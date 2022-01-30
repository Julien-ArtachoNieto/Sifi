import './cards.css'
import {useEffect, useState} from "react";
import axios from "axios";

const FlatIconCard =({search})=>{
    const APIKey=process.env.REACT_APP_API_KEY_FLATICON
    const [results,setResults]=useState('')
    const [auth,setAuth]=useState(false)

    useEffect(()=>{
        if(auth){
            const headers ={'Accept':'application/json','Authorization':auth.data.token};
            axios.get(`https://api.flaticon.com/v3/search/icons/added?q=${search}&styleColor=black&styleShape=fill&packId=110841&limit=75`,{headers:{'Authorization': `Bearer ${auth.data.token}`,'Accept':'application/json'}})
                .then(response=>setResults(response.data.data))
            }
    },[auth])
    useEffect(()=>{
        axios.post(`https://api.flaticon.com/v3/app/authentication`,{apikey:APIKey})
        .then(response=> setAuth(response.data))
    },[search])
    return (
        <div className='cards'>

            <a className='header-cards' href="https://www.flaticon.com/">
                <img src="https://media.flaticon.com/dist/min/img/logo/flaticon_negative.svg" alt='Flaticon Logo'/>
            </a>
            <p>Nb resultats {results.length}</p>
            {console.log(auth)}
            <div className='cards-img'>

                {results?results.map(result=><img key={result.id} className='listImg' src={result.images[64]} alt={result.description} />):""}
            </div>
        </div>
    )

}
export default FlatIconCard