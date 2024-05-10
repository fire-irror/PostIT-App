import styles from '../../css/result/Result.module.css';
import {ref, set} from "firebase/database";
import { postImages } from "../PostIt/SelectPostIt";
import {db} from "../../firebase/config"
import { useEffect, useState } from "react";
import {uid} from "uid";

const Result: React.FC = () => {
  const selectedImageIndex = localStorage.getItem('selectedImageIndex')
  
  //선택한 이미지 저장 상태 
  const [selectImg, setSelectImg] = useState<string | null>(null);
  const [postContent, setPostcontent] = useState<string | null>(null);

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

  const writeData = () => {
    const uuid = uid();
    set(ref(db, 'postit/' + uuid), {
      img:selectImg,
      content:postContent
    });
  }

  return (
    <div>
      {selectImg && (
        <img src={selectImg} className={styles.selectImg}/>
      )}
      {postContent && (
        <p className={styles.postContent}>{postContent}</p>
      )}

      <div className={styles.WrapDoneBtn}>
      <button className={styles.DoneBtn} onClick={writeData}>작성완료</button>
      </div>
    </div>
  );
}

export default Result;
