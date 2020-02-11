import React, { Component } from 'react'
import {connect} from 'react-redux'

class TimelineEvent extends Component {
    render() {
        return (
            <div>
                {this.props.events.map(v => (
                    <div key={v.id}>
                        <span>Date: {v.isApproximate ? 'Approximately ' : ''}{v.date}</span>
                        <span>Title: {v.title}</span>
                        <span>What happened:</span>
                        <p>{v.content}</p>
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