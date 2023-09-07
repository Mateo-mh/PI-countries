import {Link} from 'react-router-dom'

import style from './landing.module.css'

const Landing = ()=>{
   
    return (        
        <div className={style.background}>

            <div className={style.container}>
                <h1>Countries</h1>
            
                <Link to='/home' className={style.link}>
                    <div>
                        <button className={style.btn}><span className={style.start}>¡Lets get Started✈️!</span></button>
                    </div>   
                </Link>    
            </div>
        </div>
        
    )
}

export default Landing