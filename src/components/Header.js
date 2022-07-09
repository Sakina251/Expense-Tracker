// import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'



const Header = ({title, onAdd, showAdd}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button 
        color= {showAdd?'red':'green'} 
        text={showAdd ?'Close':'Add'} 
        onclick={onAdd}/>
        {/* <Button color= 'red' text='Hello1'/>
        <Button color= 'blue' text='Hello2'/> */}
    </header>
  )
}

Header.defaultProps = {
    title : 'Task tracker',
}

// Header.PropTypes = (title = PropTypes.string)
    
// const headerStyle = {
//   color: 'red', backgroundColor: 'black'
// }

export default Header