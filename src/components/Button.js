//ESTILOS
import styles from '../styles/components/Button.module.css'

const Button = (props) => {

    
    return(
        <button 
        type='button' 
        aria-label='NumberKey' 
        onClick={ props.handleClick }
        className={ styles.Button  }
        style={ {  background: `${ props.BG }`, color: `${ props.color }`, boxShadow:`${ props.shadow }` } }
        >
            { props.text }
        </button>
    ) 
}

export default Button