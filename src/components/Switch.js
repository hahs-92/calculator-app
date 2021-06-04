//ESTILOS
import styles from '../styles/components/Switch.module.css'

const Switch = () => {
    const theme1 = true,
          theme2 = false,
          theme3 = false
    return(
        <>
            {
                theme1 &&
                <article className={ styles.Switch }>
                    <section className={ styles.Numbers }>
                        <h3>1</h3>
                        <h3>2</h3>
                        <h3>3</h3>
                    </section>
                    <section className={ `${ styles.Button } ${ styles.Button__theme1}` }>
                        <button type='button' aria-label='switch'>
                            <div></div>
                        </button>
                    </section>
                </article>
            }
            {
                theme2 &&
                <article className={ styles.Switch }>
                    <section className={ styles.Numbers }>
                        <h3>1</h3>
                        <h3>2</h3>
                        <h3>3</h3>
                    </section>
                    <section className={ `${ styles.Button } ${ styles.Button__theme2 }` }>
                        <button type='button' aria-label='switch'>
                            <div></div>
                        </button>
                    </section>
                </article>
            }
            {
                theme3 &&
                <article className={ styles.Switch }>
                    <section className={ styles.Numbers }>
                        <h3>1</h3>
                        <h3>2</h3>
                        <h3>3</h3>
                    </section>
                    <section className={ `${ styles.Button } ${ styles.Button__theme3 }` }>
                        <button type='button' aria-label='switch'>
                            <div></div>
                        </button>
                    </section>
                </article>
            }
        </>
    )
}

export default Switch