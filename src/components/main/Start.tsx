import StartImg from '../../assets/startLogo.svg'
import StartLogo from '../../assets/logo.svg'
import styles from '../../css/main/Start.module.css'


const Start: React.FC = () => {
  return (
    <div>
      <img src={StartLogo} className={styles.StartLogo} />
      <p className={styles.StartContent}>포스트잇을<br /> 작성해주세요!</p>
      <img src={StartImg} className={styles.StartImg} />

      <div className={styles.WrapStartBtn}>
        <button className={styles.StartBtn}>포스트잇 쓰러가기!</button>
      </div>
    </div>
  )
}

export default Start;