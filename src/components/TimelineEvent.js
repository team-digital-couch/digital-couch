import React, { Component } from 'react'
import {connect} from 'react-redux'

class TimelineEvent extends Component {
    edit = () => {}

    delete = () => {}
    
    render() {
        return (
            <div>
                {this.props.events.map(v => (
                    <div key={v.id}>
                        <span>Date: {v.isApproximate ? 'Approximately ' : ''}{v.date}</span>
                        <span>Title: {v.title}</span>
                        <span>What happened:</span>
                        <p>{v.content}</p>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                ))}
            </div>
        )
    }
}

const checkout = state => ({
    events: state.timelineReducer.events
})

export default connect(checkout)(TimelineEvent)