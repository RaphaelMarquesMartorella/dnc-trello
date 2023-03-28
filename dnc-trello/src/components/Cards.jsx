import {useState, useEffect} from 'react'
import './Cards.css'

const Cards = () => {

    const [value1, setValue1] = useState('')
    const [allowNextStep, setAllowNextStep] = useState(false)
    const [items, setItems] = useState([])
    const [cardsValue, setCardsValue] = useState('')
    console.log(items)

    const addText = (e) => {
      setAllowNextStep(true)
      console.log(allowNextStep)
    }

    const textArea1Value = (e) => {
      setCardsValue(e.target.value)
      
    }

    

    const addCard = () => {
      setItems([...items ,cardsValue])
    }

  return (
    <div style={{position:'absolute', left:'0vh',
     top:'14vh', bottom:'0vh', right:'0vh' ,
      background:'#0C70F2', display:"flex"}}>
        <div className='card'>
         
          
          <h3>
            Planejamento
          </h3>
          
          <h4>
          Clique para adicionar um cartão
          </h4>
          {items.map((product, key, index) => (
            <p key={key}>{product}<span onClick={(i) => index.filter == i} style={{position:'absolute',
          left:"400px", fontSize:"18px"}}>X</span></p>
          ))}
          {(!allowNextStep ) ?
          <div>
          <button onClick={addText} className='addTextButton'>Add Card</button>
          </div>
          : 
          <div className='textareas'>
            
            <textarea onChange={textArea1Value} className='textarea1' name="" id="" cols="15" rows="2" placeholder='Título' maxLength='12'></textarea>
            <textarea className='textarea2' name="" id="" cols="30" rows="4" placeholder='Descrição'  maxLength='100'></textarea>
            </div> }
           
          {(allowNextStep) && 
          <div className='buttons'>
          <button onClick={addCard} className='blue__button'>
            Adicionar cartão
          </button>
          <button className='gray__button'>
          Cancelar
          </button>
        </div> 
          }
          
        
          
          
          
          
           
    </div>
    {/* <div className='card'>
          <h3>
          A fazer
          </h3>
          
          <h4>
          Clique para adicionar um cartão
          </h4>
          <div className='textareas'>
            <textarea className='textarea1' name="" id="" cols="15" rows="2" placeholder='Título' maxLength='12'></textarea>
            <textarea className='textarea2' name="" id="" cols="30" rows="4" placeholder='Descrição'  maxLength='100'></textarea>
          </div>
          
          <div className='buttons'>
            <button className='blue__button'>
              Adicionar cartão
            </button>
            <button className='gray__button'>
            Cancelar
            </button>
          </div>
           
    </div>
    <div className='card'>
          <h3>
            Fazendo
          </h3>
          
          <h4>
          Clique para adicionar um cartão
          </h4>
          <div className='textareas'>
            <textarea className='textarea1' name="" id="" cols="15" rows="2" placeholder='Título' maxLength='12'></textarea>
            <textarea className='textarea2' name="" id="" cols="30" rows="4" placeholder='Descrição'  maxLength='100'></textarea>
          </div>
          <div className='buttons'>
            <button className='blue__button'>
              Adicionar cartão
            </button>
            <button className='gray__button'>
            Cancelar
            </button>
          </div>
           
    </div>
    <div className='card'>
          <h3>
            Feito
          </h3>
          
          <h4>
          Clique para adicionar um cartão
          </h4>
          <div className='textareas'>
            <textarea className='textarea1' name="" id="" cols="15" rows="2" placeholder='Título' maxLength='12'></textarea>
            <textarea className='textarea2' name="" id="" cols="30" rows="4" placeholder='Descrição' maxLength='100'></textarea>
          </div>
          <div className='buttons'>
            <button className='blue__button'>
              Adicionar cartão
            </button>
            <button className='gray__button'>
            Cancelar
            </button>
          </div>
          
           
    </div> */}
    </div>
  )}


export default Cards