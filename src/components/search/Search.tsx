import React from "react";
import styles from '../../css/search/search.module.css'
import logo from '../../assets/logo.svg'
import searchImg from '../../assets/search.svg'

const Search: React.FC = () => {

  return(
    <div className={styles.container}>
      <img src={logo} className={styles.logo}/>

      <input 
      className={styles.searchInput}
      placeholder="검색어를 입력해주세요"
      />
      <img src={searchImg} className={styles.searchImg}/>
      <p className={styles.title}>부스</p>
    </div>
  )
}

export default Search 