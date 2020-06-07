import { connect } from 'react-redux'
import Loader from '../components/Loader'

export default connect(({ loading }) => ({ loading }))(Loader)
