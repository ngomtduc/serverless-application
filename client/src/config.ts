// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'ayebleuq37'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  domain: 'dev-lxqme-9r.us.auth0.com',            // Auth0 domain
  clientId: '0ArrsgcCVI7osyxzpBn31b7c8uijh4vK',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
