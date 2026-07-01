

export const mapLoginResponse = (data) => ({
  accessToken: data.access_token,
  refreshToken: data.refresh_token,
  
});