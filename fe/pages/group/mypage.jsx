import React from 'react'

const mypage = (props) => {


  return (
    <div>mypagezzz
      <div className='flex justify-around border-t-2 mx-2'>
        <div>{props.groupId}</div>
        <div>{props.groupScore}</div>
        <div>{props.groupMileage}</div>
        <div>{props.item}</div>
      </div>
    </div>
    
  )
}

export default mypage