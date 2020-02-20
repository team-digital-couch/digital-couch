import React from 'react';
import ReactDom from 'react-dom';
import {ProviderNotes} from './ProviderNotes';
import {act} from 'react-dom/test-utils'
//Anthony 'Danger' Coats
let container = null

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)

    act(() => {
        ReactDom.render(<ProviderNotes
            providerNotes={[{
                id: 1,
                time: '5pm',
                content: 'this is content'
            }]}
            isProvider={false}
            selectedClient={1}
            username='test provider'
            client_name='Goku'
            getProviderNotes={() => {}}
            />, container)
    })
})

afterEach(() => {
    document.body.removeChild(container)
    container = null;
})

describe('Provider Notes Component', () => {
    test('providerNotes should render one item', () => {
        const providerNotes = container.querySelectorAll('.note-container')
        // console.log(providerNotes)
        expect(providerNotes.length).toBe(1)
    })
    test('providerNotes should render correct content', () => {
        const content = container.querySelector('.note-content')
        expect(content.textContent).toBe('this is content')
    })

    test('Page title renders', () => {
        const title = container.querySelector('.page-title')
        expect(title.textContent).toBe('Provider Notes')
    })

    test('Input placeholder for content has right value', () => {
        const input = container.querySelector('textarea')
        expect(input.placeholder).toBe('Add a new Note')
    })

    test('Subtitle should display correct information', () => {
        const title = container.querySelector('.provider-notes-subtitle')
        expect(title.textContent).toBe("test provider's Notes for Goku")
    })
})