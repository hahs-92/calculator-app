//ESTILOS
import { factorialDependencies } from 'mathjs'
import styles from '../styles/components/Button.module.css'

const Button = (props) => {
    const theme1 = true,
        theme2 = false,
        theme3= false
    return(
        <>
            {
                theme1 &&
                <button 
                className={ props.class ? `${ styles.Button } ${  styles.Button__theme1 } ${  styles.Button__theme1__complementary }` :  `${ styles.Button } ${  styles.Button__theme1 }` }
                type='button' 
                aria-label='NumberKey' 
                onClick={ props.handleClick }
                >
                    { props.text }
                </button>
            }
            {
                theme2 &&
                <button 
                className={ props.class ? `${ styles.Button } ${  styles.Button__theme2 } ${  styles.Button__theme2__complementary }` :  `${ styles.Button } ${  styles.Button__theme2 }` }
                type='button' 
                aria-label='NumberKey' 
                onClick={ props.handleClick }
                >
                    { props.text }
                </button>
            }
            {
                theme3 &&
                <button 
                className={ props.class ? `${ styles.Button } ${  styles.Button__theme3 } ${  styles.Button__theme3__complementary }` :  `${ styles.Button } ${  styles.Button__theme3 }` }
                type='button' 
                aria-label='NumberKey' 
                onClick={ props.handleClick }
                >
                    { props.text }
                </button>
            }
        </>
    ) 
}

export default Button