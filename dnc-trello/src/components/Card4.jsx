import React from 'react'
import {useState, useEffect} from 'react'

const Card4 = () => {

    
    const [value4, setValue4] = useState('')
    const [allowNextStepForthCard, setAllowNextStepForthCard] = useState(false)
    const [items4, setItems4] = useState([])
    const [cardsTitleValueForthCard, setCardsTitleValueForthCard] = useState('')
    const [cardsValueForthCard, setCardsValueForthCard] = useState('')
    console.log(items4)

    const addText = (e) => {
      setAllowNextStepForthCard(true)
      console.log(allowNextStepForthCard)
      
      
    }

    const textArea1Value = (e) => {
      
      setValue4(e.target.value)
      
      

    }

    const textArea2Value = (e) => {
      setCardsValueForthCard(e.target.value)
      
    }

    

    const addCard = () => {
      if (cardsValueForthCard!=''){
        setItems4([...items4 ,cardsValueForthCard])
      }
      setCardsTitleValueForthCard(value4)
      setAllowNextStepForthCard(false)
      
      
    }

    const ChangeTitle = () => {
      setCardsTitleValueForthCard('')
      setCardsValueForthCard('')
      setValue4('')
    }

    const removeTodo = () => {
        const newItems = items4.filter((_, i) => i !== index)
        setItems4(newItems)
    }
    

  return (
    <div className='card'>
         
          
          <h3>
            Feito
          </h3>
          
          <h4>
          Clique para adicionar um cartão
          </h4>
          {cardsTitleValueForthCard && (
            <h2 style={{paddingBottom:'10px'}}>{cardsTitleValueForthCard} <span onClick={ChangeTitle} style={{position:'absolute', left:'390px'}}>...</span></h2>
          )
          }
         
          {items4.map((product, index) => (
            <p style={{height:'35px', borderRadius:'6px'}} key={index}>{product}<span onClick={ () => removeTodo(index)} style={{position:'absolute',
          left:"380px", fontSize:"18px"}}>X</span></p>
          ))}
          
          
          
          {(!allowNextStepForthCard ) ?
          
          <div>
            {(!cardsTitleValueForthCard) ? 
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
            {(cardsTitleValueForthCard==false) ? 
            <div className='textarea1'>
            <textarea onChange={textArea1Value} name="" id="" cols="30" rows="1" placeholder='Título' maxLength='20'></textarea>
            </div>:
            <div className='textarea2'>
              <textarea onChange={textArea2Value} name="" id="" cols="30" rows="3" placeholder='Descrição'  maxLength='100'></textarea>
            </div>
            } 
              
           
            </div> }
           
          {(allowNextStepForthCard) && 
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

export default Card4