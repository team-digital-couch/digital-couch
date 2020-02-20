import {getProviderNotes} from './providerNotesReducer';
//Anthony 'Danger' Coats' tests
describe('Provider Notes reducer', () => {
    test('getProviderNotes should return an action which is an Object', () => {
        const action = getProviderNotes();
        expect(action).toBeInstanceOf(Object)
    })

    test('getProviderNotes should return an action with GET_JOURNALS', () => {
        const action = getProviderNotes();
        expect(action.type).toBe('GET_PROVIDER_NOTES')
    })

    test('getProviderNotes should return an action with a payload type of Promise', () => {
        const action = getProviderNotes();
        expect(action.payload).toBeInstanceOf(Promise)
    })
})