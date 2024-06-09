import React from 'react'
import './reports.css'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Card from '../../Components/Card/Card'

const Reports = () => {

  const departments=[
    {name:'Pathology',
     imgSrc:'./images/pathology.png',
      redirect:'/pathology'},
      {name:'Microbiology',
        imgSrc:'./images/microbiology.png',
        redirect:'/microbiology' },
        {name:'Biochemistry',
          imgSrc:'./images/biochemistry.png',
          redirect:'/biochemistry'},
  ]

  return (
    <>
      <Header/>
      <Navbar/>
      <div className='reports'>
        <h2>Choose the Department:</h2>
        <div className='departments'>
        {
            departments.map((item,index)=>{
             return <Card title={item.name} imgSrc={item.imgSrc} redirect={item.redirect}/>
                })
          }
        </div>
       </div>
    </>
  )
}

export default Reports;