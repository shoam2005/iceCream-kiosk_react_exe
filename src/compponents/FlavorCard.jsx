import styles from './flavorCard.module.css'
const FlavorCard=(props)=>{
    return(
        <>
        <div className={props.isSoldOut?styles.soldout:styles.card}>
        <div>{props.name}</div>
        <div>{props.scoopsSelected}</div>
        {props.isSoldOut&&<div>sold out</div>}
        <button className={styles.button}>-</button>
        <button className={styles.button} >+</button>
        
        </div>
        </>
    )
}
export default FlavorCard