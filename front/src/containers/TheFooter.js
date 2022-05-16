import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a >EDU'COM</a>
        
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Alimenté par</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">AHMED&Moutia</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
