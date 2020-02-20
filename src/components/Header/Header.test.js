import React from 'react'
import ReactDom from 'react-dom'
import {act} from 'react-dom/test-utils'
import {Header} from './Header'

//Written by Phoenix Shane

let container = null

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    act(() => {
        ReactDom.render(<Header
            userId={1}
            username='test1'
            avatar='bogusurl'
            userLoading={false}
            getMe={() => {}} 
        />, container)})
})

afterEach(() => {
    document.body.removeChild(container)
    container = null
})

test('Header avatar image has correct source', () => {
    const img = container.querySelector('.header-avatar')
    expect(img.src).toBe('http://localhost/bogusurl')
})

