import styles from '../../css/result/Result.module.css';
import { postImages } from "../PostIt/SelectPostIt";

import { useEffect, useState } from "react";

const Result: React.FC = () => {
  const selectedImageIndex = localStorage.getItem('selectedImageIndex')
  
  //선택한 이미지 저장 상태 
  const [selectImg, setSelectImg] = useState<string | null>(null);
  const [postContent, setPostcontent] = useState<string | null>(null)

  useEffect(()=>{
    if(selectedImageIndex && !isNaN(Number(selectedImageIndex))){
      const index = Number(selectedImageIndex);

      const image = postImages[index];
      setSelectImg(image)
    }
  },[selectedImageIndex]);

  useEffect(()=>{
    const savePostContent = localStorage.getItem('postContent')
    setPostcontent(savePostContent)
  },[]);

  return (
    <div>
      {selectImg && (
        <img src={selectImg} className={styles.selectImg}/>
      )}
      {postContent && (
        <p className={styles.postContent}>{postContent}</p>
      )}

      <div className={styles.WrapDoneBtn}>
      <button className={styles.DoneBtn}>작성완료</button>
      </div>
    </div>
  );
}

export default Result;
