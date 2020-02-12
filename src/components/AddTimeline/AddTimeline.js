import React, { Component } from 'react'

export default class AddTimeline extends Component {
    constructor() {
        super()

        this.state = {
            name: ''
        }
    }
    render() {
        return (
            <div>
                <label htmlFor='name'>Name</label>
                <input name='name' />
                <input />
            </div>
        )
    }
}
