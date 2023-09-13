import {Link} from 'react-router-dom'

import style from './landingPage.module.css'

const LandingPage = ()=>{
   
    return (        
        <div className={style.card}>
            <div className={style.bg}>
                <h1>Countries</h1>
                <Link to='/home' className={style.link}>
                    <div>
                        <button className={style.button}>¡Lets get Started!</button>
                    </div>   
                </Link>
            </div>
                <div className={style.blob}></div>
        </div>

        
    )
}

export default LandingPage