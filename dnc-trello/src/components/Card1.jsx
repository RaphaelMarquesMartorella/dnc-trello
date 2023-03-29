import React from 'react'
import {useState, useEffect} from 'react'

const Card1 = () => {

    
    const [value1, setValue1] = useState('')
    const [allowNextStep, setAllowNextStep] = useState(false)
    const [items, setItems] = useState([])
    const [cardsTitleValue, setCardsTitleValue] = useState('')
    const [cardsValue, setCardsValue] = useState('')
    console.log(items)

    const addText = (e) => {
      setAllowNextStep(true)
      console.log(allowNextStep)
      
      
    }

    const textArea1Value = (e) => {
      const currentValue = e.target.value
      setValue1(currentValue)
      
      

    }

    const textArea2Value = (e) => {
      setCardsValue(e.target.value)
      
    }

    

    const addCard = () => {
      if (cardsValue!=''){
        setItems([...items ,cardsValue])
      }
      setCardsTitleValue(value1)
      setAllowNextStep(false)
      
      
    }

    const ChangeTitle = () => {
      setCardsTitleValue('')
      setCardsValue('')
      setValue1('')
    }
    
    const removeTodo = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
      };
    

  return (
    <div className='card'>
         
          
          <h3>
            Planejamento
          </h3>
          
          <h4>
          Clique para adicionar um cartão
          </h4>
          {cardsTitleValue && (
            <h2 style={{paddingBottom:'10px'}}>{cardsTitleValue} <span onClick={ChangeTitle} style={{position:'absolute', left:'390px'}}>...</span></h2>
          )
          }
         
          {items.map((product, index) => (
            <p style={{height:'35px', borderRadius:'6px'}} key={index}>{product}<span onClick={() => removeTodo(index)} style={{position:'absolute',
          left:"380px", fontSize:"18px"}}>X</span></p>
          ))}
          
          
          
          {(!allowNextStep ) ?
          
          <div>
            {(!cardsTitleValue) ? 
            <div>
              <button onClick={addText} className='addTextButton'>Add Title</button>
            </div>:
            <div>
              <button onClick={addText} className='addTextButton'>Add Card</button>
            </div>
        }
          </div>
          : 
          <div className='textareas'>
            {(cardsTitleValue==false) ? 
            <div className='textarea1'>
            <textarea onChange={textArea1Value} name="" id="" cols="30" rows="1" placeholder='Título' maxLength='20'></textarea>
            </div>:
            <div className='textarea2'>
              <textarea onChange={textArea2Value} name="" id="" cols="30" rows="3" placeholder='Descrição'  maxLength='100'></textarea>
            </div>
            } 
              
           
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
  )
}

export default Card1