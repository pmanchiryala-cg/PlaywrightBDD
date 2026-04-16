// src/api/authService.js
export function getAuthHeaders() {
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error('Missing CLIENT_ID or CLIENT_SECRET in .env');
  }

  return {
    client_id: clientId,
    client_secret: clientSecret,
    'Content-Type': 'application/json',
  };
}