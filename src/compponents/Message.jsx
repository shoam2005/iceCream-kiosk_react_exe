import styles from './message.module.css'

const Message = (props) => {
  if (!props.text) return null

  const typeClass = props.type === 'yellow' ? styles.yellow : styles.red

  return (
    <div className={`${styles.notice} ${typeClass}`} role="alert">
      {props.text}
    </div>
  )
}

export default Message