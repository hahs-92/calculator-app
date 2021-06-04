import { useState } from 'react'
//COMPONENTS
import NumberKey from './components/NumberKey'
import Button from './components/Button'

//ESTILOS
import './styles/Global.css'
import styles from './styles/App.module.css'


export default function App() {
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
      result = eval(values)
      setScreen([ result])
    } catch (error) {
      // console.error(error.message)
      setScreen([ 'Syntax Error' ])
    }
  }

  return (
    <div className={ styles.App }>
      <section className={ styles.Container }>
        <section className={ styles.Header }>
          <article>
            <h1>calc</h1>
          </article>

          <article>
            Theme
          </article>
        </section>

        <section className={ styles.Display }>
          <div className={ styles.Display_container }>
            {
              screen.length > 0
              ? <h1>{ screen }</h1> 
              : <h1>0</h1>
            }
          </div>
        </section>

        <section className={ styles.KeyBoard }>
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
            <Button
              text='DEL' 
              BG='var(--Dark-moderate-cyan-key-BG)' 
              color='var(--White)'
              shadow='inset 0px -5px 0px var(--Very-dark-cyan-key-shadow)'
              handleClick={ handleDeleteNumber }
              />
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
            <Button
              text='RESET' 
              BG='var(--Dark-moderate-cyan-key-BG)' 
              color='var(--White)'
              shadow='inset 0px -5px 0px var(--Very-dark-cyan-key-shadow)'
              handleClick={ handleResetScreen }
              />
            </article>
            <article className={ styles.Equal } >
            <Button 
              text='=' 
              BG='var(--Orange-key-BG-toggle)'  
              color='var(--White)'
              shadow='inset 0px -5px 0px var(--Dark-orange-key-shadow)'
              handleClick={ handleCalc }
              />
            </article>
          </div>
        </section>

      </section>
    </div>
  );
}
 