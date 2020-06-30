import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SyncPanel = ({
  syncNow,
  cancelSync,
  isSyncNow,
  isSyncStopped,
  syncBg,
  cancelSyncBg,
  syncTaskStatus,
  addTodoBatch,
}) => {
  const [randomCount, setRandomCount] = useState(5)

  const onMakeBatchCall = () => {
    const dateHash = Date.now()
    ;[...Array(randomCount).keys()].forEach(i =>
      addTodoBatch(`Rnd ${i}${dateHash}`)
    )
  }

  return (
    <div className="sync-panel">
      <h2>Sync with remote DB</h2>
      <div className="block">
        <button onClick={syncNow} disabled={isSyncNow}>
          Sync now
        </button>
        <button className="cancel" onClick={cancelSync}>
          Cancel
        </button>
        {isSyncNow ? (
          <div className="sync-now">Syncing now...</div>
        ) : (
          <p>
            {isSyncStopped ? 'Sync was cancelled' : 'Sync is not started yet'}
          </p>
        )}
      </div>
      <div className="block">
        <button
          onClick={syncBg}
          disabled={syncTaskStatus && syncTaskStatus.started}
        >
          Run sync task
        </button>
        <button className="cancel" onClick={cancelSyncBg}>
          Cancel
        </button>
        {syncTaskStatus && syncTaskStatus.started ? (
          <div className="progress">
            <span>{syncTaskStatus.progress} %</span>
            <input
              type="range"
              readOnly={true}
              value={syncTaskStatus.progress}
            />
          </div>
        ) : (
          <p>There is no sync task yet</p>
        )}
      </div>
      <div className="block block-info">
        <strong>All API calls are now queued</strong>
      </div>
      <div className="block">
        <h3>Create random ToDos</h3>
        <input
          type="number"
          placeholder="amount of new ToDos"
          value={randomCount}
          onChange={ev => setRandomCount(+ev.target.value)}
        />
        <button onClick={onMakeBatchCall}>New {randomCount} ToDos</button>
      </div>
    </div>
  )
}

SyncPanel.propTypes = {
  syncNow: PropTypes.func.isRequired,
  isSyncNow: PropTypes.bool,
  isSyncStopped: PropTypes.bool,
  cancelSync: PropTypes.func,
  syncBg: PropTypes.func.isRequired,
  cancelSyncBg: PropTypes.func,
  syncTaskStatus: PropTypes.shape({
    started: PropTypes.bool,
    progress: PropTypes.number,
  }),
  addTodoBatch: PropTypes.func,
}

export default SyncPanel