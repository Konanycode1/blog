<<<<<<< HEAD
export const InProduction = process.env.NODE_ENV == "production"
export const apiUrl = InProduction ?'': "http://localhost:3000/"
=======
// eslint-disable-next-line no-undef
export const inProduction = process.env.NODE_ENV === 'production';

export const apiUrl = inProduction ? '' : 'http://localhost:3000';
>>>>>>> 30328a8c3fe039ada5ba02ca46ed8cc11a01c387
