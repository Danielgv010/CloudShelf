function initGoogleTokenClient() {
    if (window.google && google.accounts && google.accounts.oauth2) {
        google.accounts.oauth2.initTokenClient({
            client_id: '684296714229-honu1stfuui5lp9ot7pdm48g2lb0j2df.apps.googleusercontent.com',
            scope: 'https://www.googleapis.com/auth/drive',
            callback: (tokenResponse) => {
                fetch('/account/store-token', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({access_token: tokenResponse.access_token})
                });
            },
        }).requestAccessToken();
    } else {
        setTimeout(initGoogleTokenClient, 100); // Try again in 100ms
    }
}

document.addEventListener('DOMContentLoaded', initGoogleTokenClient);