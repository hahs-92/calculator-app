//ESTILOS
import styles from '../styles/components/NumberKey.module.css'

const NumberKey = (props) => {
    const theme1 = true,
          theme2 = false,
          theme3 = false

    return(
        <>
            {
                theme1 &&
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
                theme2 &&
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
                theme3 &&
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