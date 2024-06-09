import React from 'react'
import './card.css'
import img from '../../assets/Medical.jpg'
import {useNavigate} from 'react-router-dom'

const Card = ({title='Demo',imgSrc='./images/demo.png',redirect='/home'}) => {
  const navigate=useNavigate();
  return (
    <div className='card' onClick={()=>{navigate(redirect)}}>
      <div>
      <img src={imgSrc} />
      </div>
      <h2>{title}</h2>
    </div>
  )
}

export default Card;