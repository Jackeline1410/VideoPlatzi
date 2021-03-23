import data from '@/api.json'
import {createStore} from 'redux'
import reducer from './reducers/data'

const initialState = {
  data: {...data},
  search: []
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
)

export default store