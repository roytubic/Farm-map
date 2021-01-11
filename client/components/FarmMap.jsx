import React from 'react'
import { connect } from 'react-redux'

// This component will need a pin drop function where it will drop a pin on a paddock on the map and allow the user to write bullet point notes
// The user will also need to be able delete certain bullet points, or notes as a whole
// Will also need to be able to edit them
// Bullet points need to be specific to the farm in question, so they must save, but specfically to that saved farm
// Background image will be the imported farm map from the import function, so for the user, it looks like they are dropping the pins directly on the paddock related to the comment/note
// Will need an image for the pin (colour coding based on what kind of note further down the line?)
// Double/right click event to drop the pin, single click event to access a pin
// On single click event, the current note will show up, with a click event to add a bullet point and on each bullet point, an edit and delete click event and a delete entire pin click event button. 

export class FarmMap extends React.Component{

}

export default connect(mapStateToProps)(FarmMap)