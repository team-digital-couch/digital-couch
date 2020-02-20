import React from 'react'
import ReactDom from 'react-dom'
import {act} from 'react-dom/test-utils'
import {Dashboard} from './Dashboard'

//Written by Phoenix Shane

let container = null

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    act(() => {
        ReactDom.render(<Dashboard
            isProvider={false}
            selectedClient={0}
            userLoading={false}
            connectionLoading={false}
            clients={[]}
            userInfo={{
                id: 1,
                user_id: 1,
                first_name: 'firstname',
                last_name: 'lastname',
                pronouns: 'they/them',
                email: 'test@gmail.com',
                phone: 'phone'
            }}
            getUserInfo={() => {}}
        />, container)})
})

afterEach(() => {
    document.body.removeChild(container)
    container = null
})

test('Dashboard should render correct number of items', () => {
    const items = container.querySelectorAll('.user-info-item')
    expect(items.length).toBe(5)
})

test('Dashboard correctly renders first name', () => {
    const name = container.querySelector('#first_name')
    expect(name.textContent).toBe('firstname')
})

test('Dashboard correctly renders last name', () => {
    const name = container.querySelector('#last_name')
    expect(name.textContent).toBe('lastname')
})

test('Dashboard correctly renders phone', () => {
    const phone = container.querySelector('#phone')
    expect(phone.textContent).toBe('phone')
})