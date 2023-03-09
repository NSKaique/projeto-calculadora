import styles from "@/styles/Button.module.css"

export default function Button(props){
    return(
        <button className={styles.btn}  value={props.nome} onClick={props.click}>{props.children}</button>
    )
}