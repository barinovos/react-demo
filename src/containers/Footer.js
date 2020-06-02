import { connect } from 'react-redux'
import Footer from '../components/Footer'

const mapStateToProps = state => ({
  count: state.todos.length
})

export default connect(mapStateToProps)(Footer)
