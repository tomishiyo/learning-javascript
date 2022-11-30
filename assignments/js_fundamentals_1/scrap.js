const day = 'saturday';

if (day === 'monday') {
   console.log('SFMC Meeting');
   console.log('Do weekly');
} else if (day === 'tuesday') {
   console.log('GR Meeting');
} else if (day === 'wednesday' || day === 'thursday') {
   console.log('HUB Meeting');
} else if (day === 'friday') {
   console.log('Report');
} else if (day === 'saturday' || day === 'sunday') {
   console.log('enjoy the weekend!');
} else {
   console.log('Invalid date!')
}