import './App.css'
import Profilo from './userPage/profilo'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import userSlice from './store/userSlice'
const store = configureStore({
  reducer: {
    //key : value
    user: userSlice,
  },
})

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Profilo />
      </div>
    </Provider>
  )
}

export default App
