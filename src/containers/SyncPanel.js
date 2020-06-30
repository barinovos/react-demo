import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  syncNow,
  cancelSync,
  syncBg,
  cancelSyncBg,
  addTodoBatch,
} from '../actions'
import SyncPanel from '../components/SyncPanel'

const mapStateToProps = ({ syncNowState, syncTaskStatus }) => ({
  isSyncNow: syncNowState.started,
  isSyncStopped: syncNowState.stopped,
  syncTaskStatus,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      syncNow,
      cancelSync,
      syncBg,
      cancelSyncBg,
      addTodoBatch,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SyncPanel)
