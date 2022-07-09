import PropTypes from 'prop-types'
const Button = ({color, text, onclick}) => {


  return (
    <button className='btn' onClick={onclick} style={{backgroundColor: color}}>{text}</button>
  )
}
Button.defaultProps = {
    color: 'steelblue',
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button