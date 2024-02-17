import React from 'react'

const Background: React.FC = () => {
  return (
    <div
      className='bg-black fixed inset-0 -z-20 flex items-center justify-center'
      style={{ pointerEvents: 'none', backgroundColor: '#000000' }}>
    </div>
  )
}

export default Background;