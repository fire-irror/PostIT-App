import React, { useState } from 'react'
import styles from '../../css/writePost/WritePost.module.css'

const WritePost: React.FC = () => {
  //포스트잇의 내용을 저장하기 위함
  const [postContent, setPostcontent] = useState<String>('');

  const handleWirte = (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
    const inputValue: string = event.target.value;
    //만약에 입력된 글자 수가 100 이하인 경우에만 글자가 써짐
    if(inputValue.length <=100){
    //입력된 내용을 상태 저장
    setPostcontent(inputValue)
    }else{
      //100이 넘어가면 초과 alert
      alert('글자수 초과')
    }
  }

  //남은 글자 수 계산
  const remainLetter = 100-postContent.length;

  return (
    <div className={styles.WrapWrite}>
      <div className={styles.content}>
        <p className={styles.title}>포스트잇 작성</p>
        <p className={styles.remainLetter}>{remainLetter}/100</p>

        <div className={styles.WrapTextarea}>
          <textarea
            className={styles.Writetextarea}
            placeholder='포스트잇 내용을 입력해주세요'
            value={postContent}
            onChange={handleWirte}
          />

          
        </div>
      </div>

      <div className={styles.WrapDoneBtn}>
        <button className={styles.doneBtn}>작성완료</button>
      </div>
    </div>
  )
}


export default WritePost