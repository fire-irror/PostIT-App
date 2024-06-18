import styles from '../../css/result/Result.module.css';
import { ref, set } from "firebase/database";
import { postImages } from "../PostIt/SelectPostIt";
import { useNavigate } from 'react-router-dom';
import { db } from "../../firebase/config";
import { useEffect, useState } from "react";
import { uid } from "uid";

// 이미지 import
import post1_result from "../../assets/post1_result.svg";
import post2_result from "../../assets/post2_result.svg";
import post3_result from "../../assets/post3_result.svg";
import post4_result from "../../assets/post4_result.svg";
import post5_result from "../../assets/post5_result.svg";
import post6_result from "../../assets/post6_result.svg";
import post7_result from "../../assets/post7_result.svg";
import post8_result from "../../assets/post8_result.svg";


const Result: React.FC = () => {
  const selectedImageIndex = localStorage.getItem('selectedImageIndex');

  const nav = useNavigate()
  // 선택한 이미지 저장 상태 
  const [selectImg, setSelectImg] = useState<string | null>(null);
  const [postContent, setPostcontent] = useState<string | null>(null);
  const [postName, setPostName] = useState<string | null>(null);

  const [showModel, setShowModel] = useState(false);

  const handleGoMain = () => {
    nav('/start')
  }

  useEffect(() => {
    if (selectedImageIndex && !isNaN(Number(selectedImageIndex))) {
      const index = Number(selectedImageIndex);
      const image = postImages[index];
      setSelectImg(image);
    }
  }, [selectedImageIndex]);

  useEffect(() => {
    const savePostContent = localStorage.getItem('postContent');
    setPostcontent(savePostContent);
  }, []);

  useEffect(() => {
    const savePostName = localStorage.getItem('name');
    setPostName(savePostName);
  }, []);

  const writeData = () => {
    const timestamp = new Date().toISOString().replace(/[-:.]/g, '');

    set(ref(db, 'postit/' + timestamp), {
      img: selectImg,
      content: postContent,
      name: postName,
    });
    setShowModel(true);
  };

  return (
    <div className={styles.container}>
      {selectImg && (
        <img src={selectImg} className={styles.selectImg} />
      )}
      {postContent && (
        <p className={styles.postContent}>{postContent}</p>
      )}

      <div className={styles.WrapDoneBtn}>
        <button className={styles.DoneBtn} onClick={writeData}>작성완료</button>
      </div>

      {showModel && (
        <div className={styles.modal}>
          <div className={styles.modalcontent}>
          <div className={styles.wrapImg}>
              {selectedImageIndex === '0' && (
                <img src={post1_result} className={styles.res1} />
              )}
              {selectedImageIndex === '1' && (
                <img src={post2_result} className={styles.res2} />
              )}
              {selectedImageIndex === '2' && (
                <img src={post3_result} className={styles.res3} />
              )}
              {selectedImageIndex === '3' && (
                <img src={post4_result} className={styles.res4} />
              )}
              {selectedImageIndex === '4' && (
                <img src={post5_result} className={styles.res5} />
              )}
              {selectedImageIndex === '5' && (
                <img src={post6_result} className={styles.res6} />
              )}
              {selectedImageIndex === '6' && (
                <img src={post7_result} className={styles.res7} />
              )}
              {selectedImageIndex === '7' && (
                <img src={post8_result} className={styles.res8} />
              )}
            </div>
            <p className={styles.modaltitle}>포스트잇 등록 완료!</p>
            <p className={styles.content}>PC 화면을 봐보세요! 방금<br /> 등록한 포스트잇이 있을거에요~</p>
            <div className={styles.wrapBtn}>
              <button className={styles.goMain} onClick={handleGoMain}>메인으로 이동</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Result;