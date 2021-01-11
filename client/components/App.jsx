import React from 'react'
import { connect } from 'react-redux'

import Import from './Import'
import FarmList from './FarmList'

export class App extends React.Component {
  state = {
    
  }

  componentDidMount () {
    
  }


  // Farmlist will need to be toggled on and off and then will show a list of the farm maps you can click to access
  // Import will be an import function to import a map of your farm, which is used as a template to create a farm listed in FarmList
  render () {
    return (
      <div className='app'>
        <h1>Farm map manager</h1>
        <ul>
          
          <FarmList />
          <Import />
        </ul>
      </div>
    )
  }
}



export default connect(mapStateToProps)(App)
