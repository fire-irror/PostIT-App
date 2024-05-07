import styles from '../../css/selectPostIt/selectPostIt.module.css'
import Post1 from '../../assets/post1.svg'
import Post2 from '../../assets/post2.svg'
import Post3 from '../../assets/post3.svg'
import Post4 from '../../assets/post4.svg'
import Post5 from '../../assets/post5.svg'
import Post6 from '../../assets/post6.svg'
import Post7 from '../../assets/post7.svg'
import Post8 from '../../assets/post8.svg'
import { useState } from 'react'

const postImages = [Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8];

const SelectPostIt: React.FC = () =>{
  //사용자가 선택한 이미지 상태 나타내기 초기값 -> null
  const [selectImg, setSelectImg] = useState<string | null>(null)

  return(
    <div className={styles.Wrap}>
      <div className={styles.content}>
        <p className={styles.selectPost}>포스트잇 고르기</p>
      </div>

      <div className={styles.wrapPostImg}>
      {postImages.map((postImg, index) => (
          <img 
          //렌더링 할 때 사용할 유일한 키 지정
          key={index} 
          //파일 경로 지정
          src={postImg} 
          //하나하나 css를 주기 위해서 클래스를 동적으로 설정
          className={styles[`post${index + 1}`]}
          //이미지 대체 텍스트 지정
          alt={`Post ${index + 1}`} 

          //클릭했을 때 사용자가 클릭한 이미지가 나오게
          onClick={()=> setSelectImg(postImg)}
          />
        ))}
      </div>

        {/* 사용자가 클릭한 이미지가 뜨게 해주는 역할 */}
      {selectImg && (
        <div className={styles.WrapSelectImg}>
          <img src={selectImg} className={styles.selectImg} alt="select post"/>
        </div>
      )}
    </div>
  )
}

export default SelectPostIt;