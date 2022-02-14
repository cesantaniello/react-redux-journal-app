import { login, logout } from "../../actions/auth";
import { types } from "../../types/types";

describe('Tests on Auth actions', () => {
    test('Login and logout should be right', async () => {
        const uid = '123';
        const displayName = 'test';

        const loginAction = login(uid, displayName);
        const logoutAction = logout();

        expect(loginAction).toEqual({
            type: types.login,
            payload: {
                uid,
                displayName
            }
        });

        expect(logoutAction).toEqual({
            type: types.logout
        });
    })
})