import React from 'react'
import ReactDom from 'react-dom'
import {act} from 'react-dom/test-utils'
import {TimelineEvent} from './TimelineEvent'

let container = null

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)

    act(() => {
        ReactDom.render(<TimelineEvent
            isProvider={false}
            events={[
                {
                    id: 1,
                    title: 'test event',
                    time: '2018-12-31',
                    content: 'i was sad and stuff'
                }
            ]}
            selectedClient={0}
            timelineId={1} />, container)
    })
})

afterEach(() => {
    document.body.removeChild(container)
    container = null
})

describe('Timeline Event component', () => {
    test('TimelineEvents should render one item', () => {
        const events = container.querySelectorAll('.event')
        expect(events.length).toBe(1)
    })

    test('TimelineEvent should render correct title', () => {
        const eventTitle = container.querySelector('.event-title')
        expect(eventTitle.textContent).toBe('Title: test event')
    })

    test('TimelineEvent should render correct content', () => {
        const eventContent = container.querySelector('.event-content')
        expect(eventContent.textContent).toBe("i was sad and stuff")
    })
})