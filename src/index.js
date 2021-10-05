import fslightbox from 'fslightbox';

fsLightboxInstances['first-lightbox'].open(0);
fsLightboxInstances['second-lightbox'].props.onOpen = () => console.log('Lightbox open!');

/* import { suma, saludo } from './operaciones';
import Swal from 'sweetalert2';

document.write(`<h1>${suma(1, 2)}</h1`);
console.log(suma(1, 2));
console.log(saludo); */

/* Swal.fire({
    title: 'Abby RT was here',
    text: 'salud2',
    imageUrl: 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-gatos-negros-mitos-y-realidades.jpg?itok=Pj-tPrRK',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
}) */

/* Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
  }); */
/* import _ from 'lodash';
function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
  }

  document.body.appendChild(component()); */