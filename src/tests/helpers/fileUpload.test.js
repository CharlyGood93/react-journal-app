import cloudinary from 'cloudinary';
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({
  cloud_name: 'dvwozhtyq',
  api_key: '313742852338669',
  api_secret: 'Ph-F4Vd4VAhP1dCOmwejpFwoWTY'
});

describe('Pruebas en fileUpload', (done) => {
  test('Debe de cargar un archivo y retornar el URL ', async () => {
    const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
    const blob = await resp.blob();
    const file = new File([blob], 'picture.png');
    const url = await fileUpload(file);
    expect(typeof url).toBe('string');
    const segments = url.split('/');
    const imgId = segments[segments.length - 1].replace('.png', '');
    cloudinary.v2.api.delete_resources(imgId, {}, () => {
      done();
    });
  });

  test('Debe de retornar un error ', async () => {
    const file = new File([], 'picture.png');
    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});
