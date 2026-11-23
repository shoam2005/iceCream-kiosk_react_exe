import styles from './summaryOrder.module.css'

const SummaryOrder = (props) => {
  const pricePerScoop = props.pricePerScoop ?? 7
  const totalPrice = props.totalScoops * pricePerScoop

  return (
    <div className={styles.summarycard}>
      <h2>Summary Order:</h2>
      <div>Total scoops: {props.totalScoops}</div>
      <div>Price: {totalPrice}</div>
      {props.totalScoops === 0 && <span>Your order is empty</span>}
    </div>
  )
}

export default SummaryOrder