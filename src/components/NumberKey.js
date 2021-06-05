import { useContext } from 'react'
//CONTEXT
import { AppContext } from '../context/AppContext'
//ESTILOS
import styles from '../styles/components/NumberKey.module.css'

const NumberKey = (props) => {
    const { theme } = useContext(AppContext)    

    return(
        <>
            {
                theme === 'THEME1' &&
                <button 
                type='button' 
                aria-label='NumberKey' 
                onClick={ props.handleClickNumber }
                className={ `${ styles.NumberKey } ${ styles.NumberKey__theme1 }` }
                >
                    { props.number }
                </button>
            }
            {
                theme === 'THEME2' &&
                <button 
                type='button' 
                aria-label='NumberKey' 
                onClick={ props.handleClickNumber }
                className={ `${ styles.NumberKey } ${ styles.NumberKey__theme2 }` }
                >
                    { props.number }
                </button>
            }
            {
                theme === 'THEME3' &&
                <button 
                type='button' 
                aria-label='NumberKey' 
                onClick={ props.handleClickNumber }
                className={ `${ styles.NumberKey } ${ styles.NumberKey__theme3 }` }
                >
                    { props.number }
                </button>
            }
        </>
    ) 
}

export default NumberKey