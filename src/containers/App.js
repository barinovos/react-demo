import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getTodos } from '../actions'
import App from '../components/App'

const mapStateToProps = ({ error, loading, congrats }) => ({
  error,
  loading,
  congrats,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getTodos,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
