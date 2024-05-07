import styles from '../../css/common/Header.module.css'
import backBtn from '../../assets/backBtn.svg'
import { useNavigate } from 'react-router-dom'

const BackBtn: React.FC = () => {
  const navigate = useNavigate()


  return (
    <div>
      <div className={styles.WrapHeaderNextBtn}>
      <img src={backBtn} className={styles.backBtn} onClick={() => navigate(-1)}/>
      </div>
    </div>
  )
}

export default BackBtn;