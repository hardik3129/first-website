import rootReduser from './redux/reduser'
import { createStore } from 'redux'

const Store = createStore(rootReduser)

export default Store;