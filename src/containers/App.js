import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getTodos } from '../actions'
import App from '../components/App'

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
