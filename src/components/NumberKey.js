import { useContext } from 'react'
//CONTEXT
import { AppContext } from '../context/AppContext'
//ESTILOS
import styles from '../styles/components/NumberKey.module.css'

const NumberKey = (props) => {
    const { theme } = useContext(AppContext)    

    return(
        <button 
            type='button' 
            aria-label='NumberKey' 
            onClick={ props.handleClickNumber }
            className={ `${ styles.NumberKey } ${ styles[`NumberKey__${ theme }`] }` }
            >
                { props.number }
        </button>     
    ) 
}

export default NumberKey