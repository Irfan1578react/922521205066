import React from 'react'

const Header = ({title}) => {
  return (
    <div>
        <h1>{title}</h1>
    </div>
  )
}
Header.defaultProps={
    title:"Social Media App"
}
export default Header
