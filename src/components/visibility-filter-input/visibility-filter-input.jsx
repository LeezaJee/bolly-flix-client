import React from 'react'
import { connect } from 'react-redux'

import { Form } from 'react-bootstrap'

import { setFilter } from '../../actions/actions'

function VisibilityFilterInput(props) {
    return (
        <Form.Control
            onChange={(e) => props.setFilter(e.target.value)}
            value={props.visibilityFilter}
            placeholder="Type for Movie Search Here"
        />
    )
}

export default connect(null, { setFilter })(VisibilityFilterInput)
