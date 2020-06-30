import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  syncNow,
  cancelSync,
  syncBg,
  cancelSyncBg,
  addTodoBatch,
  searchTodos,
} from '../actions'
import SyncPanel from '../components/SyncPanel'

const mapStateToProps = ({ syncNowState, syncTaskStatus, search }) => ({
  isSyncNow: syncNowState.started,
  isSyncStopped: syncNowState.stopped,
  syncTaskStatus,
  search,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      syncNow,
      cancelSync,
      syncBg,
      cancelSyncBg,
      addTodoBatch,
      searchTodos,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SyncPanel)
