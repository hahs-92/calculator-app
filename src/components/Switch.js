import { useContext, useEffect, useState } from 'react'
//CONTEXT
import { AppContext } from '../context/AppContext'
//ESTILOS
import styles from '../styles/components/Switch.module.css'

const Switch = () => {
    // const [ theme, setTheme ] = useState('THEME1')
    const { theme, setTheme } = useContext(AppContext)
    const [ justify, setJustify ] = useState('flex-start')
   
    const handleTheme1 = () => {
        setTheme('theme1')
    }

    const handleTheme2 = () => {
        setTheme('theme2')
    }

    const handleTheme3 = () => {
        setTheme('theme3')
    }

    const setJustifyContent = () => {
        if(theme === 'theme1'){
            setJustify('flex-start')
        }
        if(theme === 'theme2') {
            setJustify('center')
        }
        if(theme === 'theme3') {
            setJustify('flex-end')
        }
    }

    useEffect(() => {
        setJustifyContent()
        // eslint-disable-next-line 
    },[ theme ])

    return(
        <article className={ styles.Switch }>
            <section className={ styles.Numbers }>
                <h3>1</h3>
                <h3>2</h3>
                <h3>3</h3>
            </section>
            <section className={ `${ styles.Button } ${ styles[`Button__${ theme }`]}` }>
                <button type='button' aria-label='switch' style={ { justifyContent: justify }}>
                    <div className={ `${ styles.Circle } ${ styles[`Circle__${ theme }`] }` }></div>
                    <section className={ styles.Wrapper }>
                        <div onClick={ handleTheme1 }></div>
                        <div onClick={ handleTheme2 }></div>
                        <div onClick={ handleTheme3 }></div>
                    </section>
                </button>
            </section>
        </article> 
    )
}

export default Switch