import React from 'react'
import {useState, useEffect} from 'react'

const Card2 = () => {

    
    const [value2, setValue2] = useState('')
    const [allowNextStepSecondCard, setAllowNextStepSecondCard] = useState(false)
    const [items2, setItems2] = useState([])
    const [cardsTitleValueSecondCard, setCardsTitleValue2] = useState('')
    const [cardsValue, setCardsValue2] = useState('')
    console.log(items2)

    const addText = (e) => {
      setAllowNextStepSecondCard(true)
      console.log(allowNextStepSecondCard)
      
      
    }

    const textArea1Value = (e) => {
    
    setValue2(e.target.value)
      
      

    }

    const textArea2Value = (e) => {
      setCardsValue2(e.target.value)
      
    }

    

    const addCard = () => {
      if (cardsValue!=''){
        setItems2([...items2 ,cardsValue])
      }
      setCardsTitleValue2(value2)
      setAllowNextStepSecondCard(false)
      
      
    }

    const ChangeTitle = () => {
      setCardsTitleValue2('')
      setCardsValue2('')
      setValue2('')
    }

    const removeTodo = () => {
        const newItems2 = items2.filter((_, i) => i !== index); 
        setItems2(newItems2) 
    }
    
    

  return (
    <div className='card'>
         
          
          <h3>
            A fazer
          </h3>
          
          <h4>
          Clique para adicionar um cartão
          </h4>
          {cardsTitleValueSecondCard && (
            <h2 style={{paddingBottom:'10px'}}>{cardsTitleValueSecondCard} <span onClick={ChangeTitle} style={{position:'absolute', left:'390px'}}>...</span></h2>
          )
          }
         
          {items2.map((product, index) => (
            <p style={{height:'35px', borderRadius:'6px'}} key={index}>{product}<span onClick={() => removeTodo(index)} style={{position:'absolute',
          left:"380px", fontSize:"18px"}}>X</span></p>
          ))}
          
          
          
          {(!allowNextStepSecondCard ) ?
          
          <div>
            {(!cardsTitleValueSecondCard) ? 
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
            {(cardsTitleValueSecondCard==false) ? 
            <div className='textarea1'>
            <textarea onChange={textArea1Value} name="" id="" cols="30" rows="1" placeholder='Título' maxLength='20'></textarea>
            </div>:
            <div className='textarea2'>
              <textarea onChange={textArea2Value} name="" id="" cols="30" rows="3" placeholder='Descrição'  maxLength='100'></textarea>
            </div>
            } 
              
           
            </div> }
           
          {(allowNextStepSecondCard) && 
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

export default Card2