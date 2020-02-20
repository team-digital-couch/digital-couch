import React from 'react'
import ReactDom from 'react-dom'
import {act} from 'react-dom/test-utils'
import {Timeline} from './Timeline'

let container = null

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)

    act(() => {
        ReactDom.render(<Timeline timelines={[
            {
                id: 1,
                user_id: 1,
                name: 'test',
                start_date: '2018-01-29',
                end_date: '2019-12-12'
            }
        ]}
        timelineLoading={false}
        eventLoading={false}
        selectedClient={0}
        getTimelines={() => {}} />, container)
    })
})

afterEach(() => {
    document.body.removeChild(container)
    container = null
})

//written by Josi Reis-West
describe('Timeline component', () => {
    test('Timeline selector should have two options', () => {
        const options = container.querySelectorAll('option')
        expect(options.length).toBe(2)
    })

    test('Passed in Timeline name option should render', () => {
        const option = container.querySelectorAll('option')
        expect(option[1].textContent).toBe('test')
    })
})