function loginWithGoogle() {
  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=https://sayz-beta.vercel.app/auth/google&response_type=code&scope=email profile`;
}

function loginWithFacebook() {
  window.location.href = `https://www.facebook.com/v10.0/dialog/oauth?client_id=FACEBOOK_CLIENT_ID&redirect_uri=https://sayz-beta.vercel.app/auth/facebook&state=yourState`;
}
