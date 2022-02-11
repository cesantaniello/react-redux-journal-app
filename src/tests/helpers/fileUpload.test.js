import { fileUpload } from "../../helpers/fileUpload";

describe('Tests on fileUpload', () => {
    test('Should loading a file and return an URL', async () => {
        const resp = await fetch('https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg');
        const blob = await resp.blob();

        const file = new File([blob], 'foto.jpg');
        const url = await fileUpload(file);

        expect(typeof url).toBe('string');
    })

    test('Should return an error', async () => {
        const file = new File([], 'foto.jpg');
        const url = await fileUpload(file);

        expect(url).toBe(null);
    })    
})