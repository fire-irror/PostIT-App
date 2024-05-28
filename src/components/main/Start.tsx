import StartImg from '../../assets/startLogo.svg'
import StartLogo from '../../assets/logo.svg'
import styles from '../../css/main/Start.module.css'
import { useNavigate } from 'react-router-dom';

const Start: React.FC = () => {
  const navigate = useNavigate()

  //버튼 클릭시 포스트잇 고르는 화면으로 이동
  const handleStartBtn = () => {
    navigate('/search')
  }

  return (
    <div>
      <div className={styles.wrapImg}>
        <img src={StartLogo} className={styles.StartLogo} />
      </div>
      <div className={styles.container}>
        <p className={styles.StartContent}>포스트잇을<br /> 작성해주세요!</p>
        <img src={StartImg} className={styles.StartImg} />

        <div className={styles.WrapStartBtn}>
          <button className={styles.StartBtn} onClick={handleStartBtn}>포스트잇 쓰러가기!</button>
        </div>
      </div>
    </div>
  )
}

export default Start;