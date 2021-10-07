import PropTypes from 'prop-types'

const BaseTemplate = ({header, children}) => (
  <div>
    {header}
    {children}
  </div>
)

BaseTemplate.propTypes = {
  header: PropTypes.node,
  children: PropTypes.node,
}

export default BaseTemplate
