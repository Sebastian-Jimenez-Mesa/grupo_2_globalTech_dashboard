import React from 'react'
import logo from "../../assets/Logo-letras-blanco.png"
import "././topbar.css"
export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topbarLeft'>
            
                    <img src={logo} alt="Digital House" width={200}/>
               
            </div>
        </div>
    </div>
  )
}

