import styles from '../../css/common/Header.module.css'
import backBtn from '../../assets/backBtn.svg'
import { useNavigate } from 'react-router-dom'

const Header: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className={styles.WrapHeaderNextBtn}>
        {/* back 버튼 눌렀을 때 앞으로 -1칸 이동 */}
      <img src={backBtn} className={styles.backBtn} onClick={() => navigate(-1)}/>
        {/* <p className={styles.headerNextBtn}>다음</p> */}
      </div>
    </div>
  )
}

export default Header;