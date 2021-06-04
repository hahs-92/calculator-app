//ESTILOS
import styles from '../styles/components/NumberKey.module.css'

const NumberKey = (props) => {

    
    return(
        <button 
        type='button' 
        aria-label='NumberKey' 
        onClick={ props.handleClickNumber }
        className={ props.size ? `${ styles.NumberKey } ${ styles.NumberKey__size }` : styles.NumberKey   }
        style={ {  background: `${ props.BG }`, color: `${ props.color }`, boxShadow:`${ props.shadow }` } }
        >
            { props.number }
        </button>
    ) 
}

export default NumberKey