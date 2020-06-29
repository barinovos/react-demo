import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import App from '../components/App'
import { getTodos } from '../actions'

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
