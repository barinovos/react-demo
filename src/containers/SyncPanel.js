import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { syncNow, cancelSync, syncBg, cancelSyncBg } from '../actions'
import SyncPanel from '../components/SyncPanel'

const mapStateToProps = ({ syncNowState }) => ({
  isSyncNow: syncNowState.started,
  isSyncStopped: syncNowState.stopped,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      syncNow,
      cancelSync,
      syncBg,
      cancelSyncBg,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SyncPanel)
