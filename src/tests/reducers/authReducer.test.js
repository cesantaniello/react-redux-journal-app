import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe('Tests on authReducer', () => {
    test('should do login', () => {
        const initState = {};
        const action = {
            type: types.login,
            payload: {
                uid: '123',
                displayName: 'Juan'
            }
        };

        const state = authReducer(initState, action);
        
        expect(state).toEqual({
            uid: '123',
            name: 'Juan'
        })
    })

    test('should not make changes on the state', () => {
        const initState = {                
            uid: '123',
            displayName: 'Juan'
        };

        const action = {
            type: 'hola desde prueba unitaria',
        };

        const state = authReducer(initState, action);
        
        expect(state).toEqual(initState);
    })    
})