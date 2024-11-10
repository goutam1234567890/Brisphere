import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import DetailsPage from './components/DetailsPage'
import Successful from './components/Successful'
import AppProvider from './context/AppProvider'

class App extends Component {
  render(){
    return(
      <AppProvider>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/details" component={DetailsPage} />
          <Route exact path="/success" component={Successful} />
        </Switch >
      </AppProvider>
    )
  }
}

export default App
