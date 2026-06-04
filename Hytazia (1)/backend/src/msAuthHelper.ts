import axios from 'axios';

export async function exchangeCodeForToken(code:string){
  const params = new URLSearchParams({
    client_id: process.env.MS_CLIENT_ID!,
    client_secret: process.env.MS_CLIENT_SECRET!,
    code,
    grant_type: 'authorization_code',
    redirect_uri: process.env.MS_REDIRECT_URI!
  });
  const resp = await axios.post('https://login.microsoftonline.com/consumers/oauth2/v2.0/token', params.toString(), {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });
  return resp.data;
}

// Additional functions: getXBLToken, getXSTSToken, getMinecraftProfile should be implemented following MS/Xbox docs
