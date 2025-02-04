import React from 'react'
import wide from '../assets/images/image-web-3-desktop.jpg'
import './Block.css'

const Block = () => {
  return (
    <div className='block'>
        <div className='Middle'>

           <div className='Left'>
             <div className='Top'>
              <img src={wide} className="wide-img"></img>
             </div>
             <div className='bottom'></div>
           </div>

           <div className='Right'></div>

          </div>
    </div>
  )
}

export default Block