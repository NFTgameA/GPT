import React from 'react'
//cần cho props children vào thì nó mới vào page.js
const LandingLayoutPage = (props:{
    children:React.ReactNode
}) => {
  return (
    <div>{props.children}</div>
  )
}

export default LandingLayoutPage