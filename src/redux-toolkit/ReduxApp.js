import '../styles/app.css'
import ReduxList from './ReduxList'
import { Provider } from "react-redux"
import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <ReduxList />
      </div>
    </Provider>
  )
}

export default App
