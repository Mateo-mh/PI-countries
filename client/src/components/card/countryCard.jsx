import { Link } from "react-router-dom"

import style from './countryCard.module.css'

const CountryCard = ({id,name,flags,continents})=>{

    return (
        <div className={style.card}>
            <Link to={`/details/${id}`} className={style.nameLink}>
            <img src={flags} alt={`Flag of ${name}`}/>
        <div className="card_text">
            <h2>{`${name}`}</h2>
            <h2>{`${continents}`}</h2>
        </div>
        </Link>
    </div>

        
    )
}

export default CountryCard