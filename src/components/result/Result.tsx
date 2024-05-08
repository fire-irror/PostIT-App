// import styles from '../../css/result/Result.module.css';
import { postImages } from "../PostIt/SelectPostIt";

import { useEffect, useState } from "react";

const Result: React.FC = () => {
  const selectedImageIndex = localStorage.getItem('selectedImageIndex')

  //선택한 이미지 저장 상태 
  const [selectImg, setSelectImg] = useState<string | null>(null);

  useEffect(()=>{
    if(selectedImageIndex && !isNaN(Number(selectedImageIndex))){
      const index = Number(selectedImageIndex);

      const image = postImages[index];
      setSelectImg(image)
    }
  },[selectedImageIndex]);

  return (
    <div>
      {selectImg && (
        <img src={selectImg} />
      )}
    </div>
  );
}

export default Result;
