import { useContext } from 'react'
//CONTEXT
import { AppContext } from'../context/AppContext'
//ESTILOS
import styles from '../styles/components/Button.module.css'

const Button = (props) => {
    const { theme } = useContext(AppContext)

    return(   
        <button 
            className={ props.class 
                ? `${ styles.Button } ${  styles[`Button__${ theme }`] } ${  styles[`Button__${ theme }__complementary`] }` 
                :  `${ styles.Button } ${  styles[`Button__${ theme }`] }` }
            type='button' 
            aria-label='NumberKey' 
            onClick={ props.handleClick }
            >
                { props.text }
        </button>
    ) 
}

export default Button