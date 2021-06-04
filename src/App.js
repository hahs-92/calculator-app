import { useState } from 'react'
import { evaluate} from 'mathjs'
//COMPONENTS
import NumberKey from './components/NumberKey'
import Button from './components/Button'
import Switch from './components/Switch'
//ESTILOS
import './styles/Global.css'
import styles from './styles/App.module.css'


export default function App() {
  const theme1 = true,
        theme2= false,
        theme3= false
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
      setTimeout(() =>{
        handleResetScreen()
      },500)
    }
  }


  return (
    <>
      {
        theme1 &&
        <div className={ `${ styles.App } ${ styles.App__theme1 }` }>
          <section className={ `${ styles.Container } ${ styles.Container__theme1 }`}>
            <section className={ styles.Header }>
              <article>
                <h1>calc</h1>
              </article>

              <article className={ styles.Switch_Theme }>
                <h3 className={ styles.Switch_Theme_title }>THEME</h3>
                <Switch />
              </article>
            </section>

            <section className={ `${ styles.Display } ${ styles.Display__theme1 }` }>
              <div className={ styles.Display_container }>
                {
                  screen.length > 0
                  ? <h1>{ screen }</h1> 
                  : <h1>0</h1>
                }
              </div>
            </section>

            <section className={ `${ styles.KeyBoard } ${ styles.KeyBoard__theme1 }` }>
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
      }
      {
        theme2 &&
        <div className={ `${ styles.App } ${ styles.App__theme2 }` }>
          <section className={ `${ styles.Container } ${ styles.Container__theme2 }`}>
            <section className={ styles.Header }>
              <article>
                <h1>calc</h1>
              </article>
              <article className={ styles.Switch_Theme }>
                <h3 className={ styles.Switch_Theme_title }>THEME</h3>
                <Switch />
              </article>
            </section>

            <section className={ `${ styles.Display } ${ styles.Display__theme2 }` }>
              <div className={ styles.Display_container }>
                {
                  screen.length > 0
                  ? <h1>{ screen }</h1> 
                  : <h1>0</h1>
                }
              </div>
            </section>

            <section className={ `${ styles.KeyBoard } ${ styles.KeyBoard__theme2 }` }>
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
      }
      {
        theme3 &&
        <div className={ `${ styles.App } ${ styles.App__theme3 }` }>
          <section className={ `${ styles.Container } ${ styles.Container__theme3 }`}>
            <section className={ styles.Header }>
              <article>
                <h1>calc</h1>
              </article>

              <article className={ styles.Switch_Theme }>
                <h3 className={ styles.Switch_Theme_title }>THEME</h3>
                <Switch />
              </article>
            </section>

            <section className={ `${ styles.Display } ${ styles.Display__theme3 }` }>
              <div className={ styles.Display_container }>
                {
                  screen.length > 0
                  ? <h1>{ screen }</h1> 
                  : <h1>0</h1>
                }
              </div>
            </section>

            <section className={ `${ styles.KeyBoard } ${ styles.KeyBoard__theme3 }` }>
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
      }
    </>
  );
}
 