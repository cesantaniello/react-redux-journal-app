import cloudinary from 'cloudinary';
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({ 
    cloud_name: 'ddvyehc8b', 
    api_key: '978343733914881', 
    api_secret: 'mJHkLxigk8xVRTm_Qk8qj2ov9v0',
    secure: true
});

describe('Tests on fileUpload', () => {
    test('Should load a file and return an URL', async (done) => {
        const resp = await fetch('https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg');
        const blob = await resp.blob();

        const file = new File([blob], 'foto.jpg');
        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

        const segments = url.split('/');
        const imageId = segments[segments.length-1].replace('.jpg','');

        cloudinary.v2.api.delete_resources(imageId, {}, () => {
            done();
        });
    })

    test('Should return an error', async () => {
        const file = new File([], 'foto.jpg');
        const url = await fileUpload(file);

        expect(url).toBe(null);
    })    
})