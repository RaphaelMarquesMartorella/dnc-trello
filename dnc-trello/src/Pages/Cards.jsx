import {useState, useEffect} from 'react'
import Card1 from '../components/Card1'
import Card2 from '../components/Card2'
import Card3 from '../components/Card3'
import Card4 from '../components/Card4'
import './Cards.css'

const Cards = () => {


  return (
    <div style={{position:'absolute', left:'0vh',
     top:'14vh', bottom:'0vh', right:'0vh' ,
      background:'#0C70F2', display:"flex"}}>
        
        <Card1 />
        <Card2/>
        <Card3 />
        <Card4 />
        
    
    </div>
  )}


export default Cards

