import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import styles from '../../css/common/SplashScreen.module.css'

const SplashScreen: React.FC = ()=>{
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false);
      navigate('/start')
    },3000)

    return() =>clearTimeout(timer)
  },[navigate])

  return(
    <div className={`${styles['SplashScreen']} ${loading ? 'visible' : 'hidden'}`}>
      <div className={styles['SplashContent']}>
        <img src={logo} className={styles.SplashLogo}/>
      </div>
    </div>
  )
}

export default SplashScreen;