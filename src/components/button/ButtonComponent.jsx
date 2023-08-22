import PropTypes from 'prop-types'

export const ButtonComponent = ({onClick, disabled, loading, children}) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      { loading ? 'Carregando' : children }
    </button>
  )
}

ButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool, 
}