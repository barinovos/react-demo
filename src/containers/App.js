import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import App from '../components/App'
import { getTodos } from '../actions'

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getTodos,
    },
    dispatch
  )

export default connect(
  null,
  mapDispatchToProps
)(App)
