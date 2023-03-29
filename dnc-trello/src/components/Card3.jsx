import React from 'react'
import {useState, useEffect} from 'react'

const Card3 = () => {

    
    const [value3, setValue3] = useState('')
    const [allowNextStepThirdCard, setAllowNextStepThirdCard] = useState(false)
    const [items3, setItems3] = useState([])
    const [cardsTitleValueThirdCard, setCardsTitleValueThirdCard] = useState('')
    const [cardsValueThirdCard, setCardsValueThirdCard] = useState('')
    console.log(items3)

    const addText = (e) => {
      setAllowNextStepThirdCard(true)
      console.log(allowNextStepThirdCard)
      
      
    }

    const textArea1Value = (e) => {
       
      setValue3(e.target.value)
      
      

    }

    const textArea2Value = (e) => {
      setCardsValueThirdCard(e.target.value)
      
    }

    

    const addCard = () => {
      if (cardsValueThirdCard!=''){
        setItems3([...items3 ,cardsValueThirdCard])
      }
      setCardsTitleValueThirdCard(value3)
      setAllowNextStepThirdCard(false)
      
      
    }

    const ChangeTitle = () => {
      setCardsTitleValueThirdCard('')
      setCardsValueThirdCard('')
      setValue3('')
    }

    const removeTodo = () => {
        const newItems = items3.filter((_, i) => i !== index)
        setItems3(newItems)
    }
    

  return (
    <div className='card'>
         
          
          <h3>
            Fazendo
          </h3>
          
          <h4>
          Clique para adicionar um cartão
          </h4>
          {cardsTitleValueThirdCard && (
            <h2 style={{paddingBottom:'10px'}}>{cardsTitleValueThirdCard} <span onClick={ChangeTitle} style={{position:'absolute', left:'390px'}}>...</span></h2>
          )
          }
         
          {items3.map((product, index) => (
            <p style={{height:'35px', borderRadius:'6px'}} key={index}>{product}<span onClick={() => removeTodo(index)} style={{position:'absolute',
          left:"380px", fontSize:"18px"}}>X</span></p>
          ))}
          
          
          
          {(!allowNextStepThirdCard ) ?
          
          <div>
            {(!cardsTitleValueThirdCard) ? 
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
            {(cardsTitleValueThirdCard==false) ? 
            <div className='textarea1'>
            <textarea onChange={textArea1Value} name="" id="" cols="30" rows="1" placeholder='Título' maxLength='20'></textarea>
            </div>:
            <div className='textarea2'>
              <textarea onChange={textArea2Value} name="" id="" cols="30" rows="3" placeholder='Descrição'  maxLength='100'></textarea>
            </div>
            } 
              
           
            </div> }
           
          {(allowNextStepThirdCard) && 
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

export default Card3