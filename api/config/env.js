export const InProduction = process.env.NODE_ENV == "production"
export const apiUrl = InProduction ?'': "http://localhost:3000/"