import styles from "@/styles/Corpo.module.css"
import { emitWarning } from "process";
import { useEffect, useState } from "react"
import Button from "./Button"
import * as math from "mathjs"

export default function Corpo(){

    const [valor, setValor] = useState("");


    return(
        <div className={styles.conteiner}>
            <div>
                <input className={styles.conteinerinput}  
                type="text" 
                value={valor} 
                readOnly
 />
            </div>
            <div className={styles.conteinerbtn}> 
                <div className={styles.linhabtn}>
                <Button  click={() => setValor(valor + "1") }>1</Button>
                <Button  click={() => setValor(valor + "2") }>2</Button>
                <Button  click={() => setValor(valor + "3") }>3</Button>
                <Button click={() => setValor(valor + " + ") }>+</Button>
                </div>
                <div>
                <Button  click={() => setValor(valor + "4") }>4</Button>
                <Button  click={() => setValor(valor + "5") }>5</Button>
                <Button  click={() => setValor(valor + "6") }>6</Button>
                <Button click={() => setValor(valor + " - ") }>-</Button>
                </div>
                <div>
                <Button  click={() => setValor(valor + "7") }>7</Button>
                <Button click={() => setValor(valor + "8") }>8</Button>
                <Button click={() => setValor(valor + "9") }>9</Button>
                <Button click={() => setValor(valor + " * ") }>*</Button>
                </div>
                <div>
                <Button  click={() => setValor("") }>C</Button>
                <Button  click={() => setValor(valor + "0") }>0</Button>
                <Button  click={() => setValor(math.evaluate(valor)) }>OK</Button>
                <Button  click={() => setValor(valor + " / ") }>/</Button>
                </div>
            </div>
        </div>
    )
}