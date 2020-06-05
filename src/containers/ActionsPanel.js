import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteAllTodo, deleteAllCompletedTodo } from '../actions'
import ActionsPanel from '../components/ActionsPanel'

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      deleteAllTodo,
      deleteAllCompletedTodo,
    },
    dispatch
  )

export default connect(
  null,
  mapDispatchToProps
)(ActionsPanel)
