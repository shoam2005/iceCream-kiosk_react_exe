import styles from './flavorCard.module.css'

const FlavorCard = (props) => {
  const isAddDisabled = props.isSoldOut || props.isLimitReached
  const isRemoveDisabled = props.isSoldOut || props.scoopsSelected === 0

  return (
    <div className={props.isSoldOut ? styles.soldout : styles.card}>
      <div>{props.name}</div>
      <div>{props.scoopsSelected}</div>
      {props.isSoldOut && <div>Sold Out</div>}

      <button
        className={styles.button}
        onClick={props.onRemove}
        disabled={isRemoveDisabled}
      >
        -
      </button>

      <button
        className={styles.button}
        onClick={props.onAdd}
        disabled={isAddDisabled}
      >
        +
      </button>
    </div>
  )
}

export default FlavorCard