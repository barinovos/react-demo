import { connect } from 'react-redux'
import Error from '../components/Error'

export default connect(({ error }) => ({
  show: error.show,
  message: error.message,
}))(Error)
