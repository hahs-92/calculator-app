import { useContext } from 'react'
//CONTEXT
import { AppContext } from '../context/AppContext'
//ESTILOS
import styles from '../styles/components/Switch.module.css'

const Switch = () => {
    // const [ theme, setTheme ] = useState('THEME1')
    const { theme, setTheme } = useContext(AppContext)
   
    const handleTheme1 = () => {
        setTheme('THEME1')
    }

    const handleTheme2 = () => {
        setTheme('THEME2')
    }

    const handleTheme3 = () => {
        setTheme('THEME3')
    }

    return(
        <>
            {
                theme === 'THEME1' &&
                <article className={ styles.Switch }>
                    <section className={ styles.Numbers }>
                        <h3>1</h3>
                        <h3>2</h3>
                        <h3>3</h3>
                    </section>
                    <section className={ `${ styles.Button } ${ styles.Button__theme1}` }>
                        <button type='button' aria-label='switch' style={ { justifyContent: 'flex-start' }}>
                            <div className={ `${ styles.Circle } ${ styles.Circle__theme1 }` }></div>
                            <section className={ styles.Wrapper }>
                                <div onClick={ handleTheme1 }></div>
                                <div onClick={ handleTheme2 }></div>
                                <div onClick={ handleTheme3 }></div>
                            </section>
                        </button>
                    </section>
                </article>
            }
            {
                theme === 'THEME2' &&
                <article className={ styles.Switch }>
                    <section className={ styles.Numbers }>
                        <h3>1</h3>
                        <h3>2</h3>
                        <h3>3</h3>
                    </section>
                    <section className={ `${ styles.Button } ${ styles.Button__theme2 }` }>
                        <button type='button' aria-label='switch' style={ { justifyContent: 'center' }}>
                            <div className={ `${ styles.Circle } ${ styles.Circle__theme2 }` }></div>
                            <section className={ styles.Wrapper }>
                                <div onClick={ handleTheme1 }></div>
                                <div onClick={ handleTheme2 }></div>
                                <div onClick={ handleTheme3 }></div>
                            </section>
                        </button>
                    </section>
                </article>
            }
            {
                theme === 'THEME3' &&
                <article className={ styles.Switch }>
                    <section className={ styles.Numbers }>
                        <h3>1</h3>
                        <h3>2</h3>
                        <h3>3</h3>
                    </section>
                    <section className={ `${ styles.Button } ${ styles.Button__theme3 }` }>
                        <button type='button' aria-label='switch' style={ { justifyContent: 'flex-end' }}>
                            <div className={ `${ styles.Circle } ${ styles.Circle__theme3 }` }></div>
                            <section className={ styles.Wrapper }>
                                <div onClick={ handleTheme1 }></div>
                                <div onClick={ handleTheme2 }></div>
                                <div onClick={ handleTheme3 }></div>
                            </section>
                        </button>
                    </section>
                </article>
            }
        </>
    )
}

export default Switch