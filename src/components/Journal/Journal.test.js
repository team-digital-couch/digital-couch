import React from 'react';
import ReactDOM from 'react-dom';
import {Journal} from './Journal.js'
import {act, Simulate} from 'react-dom/test-utils';

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container)

    act(() => {
        ReactDOM.render(<Journal 
            journals={[{
            start_date: 'February 21, 2020',
            content: 'journal content',
            title: 'journal title'
            }]}
            events={[{start_date: 'May 26, 1993',
            content: 'event content',
            title: 'event title'}]}
            userId={1}
            selectedClient={2}
            isProvider={false}
    />, container)
    })
})

afterEach(() => {
    document.body.removeChild(container);
    container = null;
})

describe('Journal Component', () => {
    test('Journal should render correct number of Objects', () => {
        const h1 = container.querySelector("h1:nth-child(1)");
        expect().toEqual(1)
    })
})
