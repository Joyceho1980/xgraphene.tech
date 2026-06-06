const { google } = require('googleapis');
const KEY = require('./google-key.json');

console.log('============================================');
console.log('  Step 2: Google Indexing API Test');
console.log('============================================');
console.log('');

async function testAPI() {
    console.log('[1] Creating auth with service account...');
    console.log('    client_email:', KEY.client_email);
    console.log('');
    
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: KEY,
            scopes: ['https://www.googleapis.com/auth/indexing'],
        });
        
        console.log('[2] Getting access token (this tests OAuth endpoint)...');
        const client = await auth.getClient();
        const accessToken = await client.getAccessToken();
        console.log('    ✅ Access token obtained!');
        console.log('    Token starts with:', accessToken.token.substring(0, 20) + '...');
        console.log('');
        
        console.log('[3] Testing Indexing API call...');
        const indexing = google.indexing({ version: 'v3', auth });
        
        try {
            const res = await indexing.urlNotifications.publish({
                requestBody: {
                    url: 'https://www.xgraphene.tech/',
                    type: 'URL_UPDATED',
                },
            });
            
            console.log('    ✅ API Call SUCCESS!');
            console.log('    Status:', res.status);
            console.log('    Response:', JSON.stringify(res.data, null, 2));
            console.log('');
            console.log('============================================');
            console.log('  ✅ ALL TESTS PASSED - API is ENABLED!');
            console.log('============================================');
            
        } catch (apiError) {
            console.error('    ❌ API Call FAILED!');
            console.error('');
            console.error('    Error Code:', apiError.code);
            console.error('    Error Message:', apiError.message);
            console.error('');
            
            if (apiError.code === 403) {
                console.error('    ⚠️  403 FORBIDDEN:');
                console.error('       → Indexing API not enabled for this project');
                console.error('       → OR Service account lacks permission');
            } else if (apiError.code === 401) {
                console.error('    ⚠️  401 UNAUTHORIZED:');
                console.error('       → Invalid credentials or expired key');
            } else if (apiError.code === 404) {
                console.error('    ⚠️  404 NOT FOUND:');
                console.error('       → Indexing API not enabled');
            } else if (apiError.code === 'ECONNREFUSED' || apiError.code === 'ETIMEDOUT') {
                console.error('    ⚠️  NETWORK ERROR:');
                console.error('       → Cannot reach Google servers');
                console.error('       → Check VPN/Proxy settings');
            }
            
            console.error('');
            console.error('============================================');
        }
        
    } catch (authError) {
        console.error('    ❌ Authentication FAILED!');
        console.error('    Error:', authError.message);
        console.error('');
        
        if (authError.message.includes('token')) {
            console.error('    ⚠️  Cannot reach oauth2.googleapis.com');
            console.error('    → Network/Proxy issue');
        }
    }
}

testAPI().catch(e => {
    console.error('FATAL ERROR:', e.message);
});