import React from 'react'
import { connect } from 'react-redux'

// This component will hold a list of farms via the component FarmMap
// Will provide a quick outline of information and a link to the FarmMap
// Will need a hide and show trigger to show the list

import FarmMap from './FarmMap'

export class FarmList extends React.Component{

}


export default connect(mapStateToProps)(FarmList)
