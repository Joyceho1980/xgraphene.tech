const fs = require('fs');
const path = require('path');

console.log('============================================');
console.log('  Step 1: Credential Loading Check');
console.log('============================================');
console.log('');

// 检查文件是否存在
const keyPath = path.join(__dirname, 'google-key.json');
console.log('[1] Checking file path:', keyPath);
console.log('[2] File exists:', fs.existsSync(keyPath));

if (fs.existsSync(keyPath)) {
    try {
        const keyData = JSON.parse(fs.readFileSync(keyPath, 'utf8'));
        console.log('');
        console.log('[3] ✅ File loaded successfully!');
        console.log('');
        console.log('--- Credential Info ---');
        console.log('project_id:', keyData.project_id);
        console.log('client_email:', keyData.client_email);
        console.log('client_id:', keyData.client_id);
        console.log('private_key_id:', keyData.private_key_id);
        console.log('token_uri:', keyData.token_uri);
        console.log('auth_uri:', keyData.auth_uri);
        console.log('');
        console.log('[4] ✅ All fields loaded correctly!');
    } catch (err) {
        console.error('[ERROR] Failed to parse JSON:', err.message);
    }
} else {
    console.error('[ERROR] google-key.json not found!');
}

console.log('');
console.log('============================================');