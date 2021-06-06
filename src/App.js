import { useState } from 'react'
import { evaluate} from 'mathjs'
//COMPONENTS
import NumberKey from './components/NumberKey'
import Button from './components/Button'
import Switch from './components/Switch'
//CONTEXT
import { AppContext } from './context/AppContext'
//ESTILOS
import './styles/Global.css'
import styles from './styles/App.module.css'


export default function App() {
  const [ theme, setTheme ] = useState('theme1')
  const [ screen, setScreen ] = useState([])

  const handleClickNumber = (e) => {
    let newNumber = e.target.outerText
    setScreen([ ...screen, newNumber ])
    // setScreen(screen => [screen, ...numbers] )
  }

  const handleResetScreen = () => {
    setScreen([])
  }

  const handleDeleteNumber = () => {
    let newNumbers = []
    if( screen.length > 0){
        for(let i = 0; i < screen.length - 1 ; i++) {
          newNumbers.push(screen[i])
        }
        setScreen( newNumbers )
    } else {
      return false
    }
  }

  const replaceAll = (str, search) => {
    return str.split(search).join('')
  }

  const handleCalc = () => {
    let result
    let values = []
    try {
      values = screen.toString()
      values = replaceAll(values, ',')
      // result = eval(values)
      result = evaluate(values)
      setScreen([ result])
    } catch (error) {
      console.log(error.message)
      setScreen([ 'Syntax Error' ])
    }
  }

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      <div className={ `${ styles.App } ${ styles[`App__${ theme }`] }` }>
          <section className={ `${ styles.Container } ${ styles[`Container__${ theme }`] }`}>
            <section className={ styles.Header }>
              <article>
                <h1>calc</h1>
              </article>
      
              <article className={ styles.Switch_Theme }>
                <h3 className={ styles.Switch_Theme_title }>THEME</h3>
                <Switch />
              </article>
            </section>
      
            <section className={ `${ styles.Display } ${ styles[`Display__${ theme }`] }` }>
              <div className={ styles.Display_container }>
                {
                  screen.length > 0
                  ? <h1>{ screen }</h1> 
                  : <h1>0</h1>
                }
              </div>
            </section>
      
            <section className={ `${ styles.KeyBoard } ${ styles[`KeyBoard__${ theme }`] }` }>
              <div className={ styles.KeyBoard_container }>
                <article>
                  <NumberKey number='7' handleClickNumber={ handleClickNumber }/>
                </article>
                <article>
                <NumberKey number='8'  handleClickNumber={ handleClickNumber }/>
                </article>
                <article>
                <NumberKey number='9'  handleClickNumber={ handleClickNumber }/>
                </article>
                <article>
                <Button text='DEL' handleClick={ handleDeleteNumber }/>
                </article>
                <article>
                <NumberKey number='4' handleClickNumber={ handleClickNumber } />
                </article>
                <article>
                <NumberKey number='5'  handleClickNumber={ handleClickNumber }/>
                </article>
                <article>
                <NumberKey number='6'  handleClickNumber={ handleClickNumber }/>
                </article>
                <article>
                <NumberKey number='+'  handleClickNumber={ handleClickNumber } />
                </article>
                <article>
                <NumberKey number='1'  handleClickNumber={ handleClickNumber }/>
                </article>
                <article>
                <NumberKey number='2'  handleClickNumber={ handleClickNumber }/>
                </article>
                <article>
                <NumberKey number='3'  handleClickNumber={ handleClickNumber }/>
                </article>
                <article>
                <NumberKey number='-'  handleClickNumber={ handleClickNumber }/>
                </article>
                <article>
                <NumberKey number='.'  handleClickNumber={ handleClickNumber }/>
                </article>
                <article>
                <NumberKey number='0'  handleClickNumber={ handleClickNumber }/>
                </article>
                <article>
                <NumberKey number='/'  handleClickNumber={ handleClickNumber }/>
                </article>
                <article>
                <NumberKey number='*'  handleClickNumber={ handleClickNumber }/>
                </article>
                <article className={ styles.Reset }>
                <Button text='RESET' handleClick={ handleResetScreen }/>
                </article>
                <article className={ styles.Equal } >
                <Button text='=' class='true' handleClick={ handleCalc }/>
                </article>
      </div>
            </section>
      
          </section>
      </div>
    
    </AppContext.Provider>
  );
}
 