import React from 'react'

const Header = ({title}) => {
  return (
    <div>
        <header>
            <h1>{title}</h1>
        </header>
    </div>
  )
}
Header.defaultProps = {
  title : "To Do List"
}

export default Header