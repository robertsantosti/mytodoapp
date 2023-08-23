import PropTypes from 'prop-types'

export const ButtonComponent = ({onClick, disabled, loading, children, type = 'button'}) => {
  return (
    <button onClick={onClick} disabled={disabled} type={type}>
      { loading ? 'Carregando' : children }
    </button>
  )
}

ButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string, 
}