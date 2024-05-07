import styles from '../../css/writePost/WritePost.module.css'

const WritePost: React.FC = () => {
  return (
    <div className={styles.WrapWrite}>
      <div className={styles.content}>
        <p className={styles.title}>포스트잇 작성</p>

        <div className={styles.WrapTextarea}>
          <textarea
            className={styles.Writetextarea}
            placeholder='포스트잇 내용을 입력해주세요'
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