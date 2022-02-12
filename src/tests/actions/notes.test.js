import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startNewNote } from '../../actions/notes';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore({
    auth: {
        uid: 'test'
    }
});

describe('Tests with note actions', () => {
    test('should make a new note with startNewNote', async() => {
        await store.dispatch(startNewNote());
    })
})