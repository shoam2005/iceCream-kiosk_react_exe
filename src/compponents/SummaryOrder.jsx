import styles from './summaryOrder.module.css'
const SummaryOrder=(props)=>{
    return(
        <>
        <div className={styles.summarycard}>
            <h2>Summary Order:</h2>
            <div>Total scoops:{props.totalScoops}</div>
            <div>Price:{props.totalScoops*7}</div>
            {props.totalScoops==0&&<span>Your order is empty</span>}
        </div>
        </>
    )
}
export default SummaryOrder