// Vercel Serverless Function — GitHub OAuth for Decap CMS
// Required environment variables: GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET, ORIGIN

export default async function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID || process.env.OAUTH_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET || process.env.OAUTH_CLIENT_SECRET;
  const origin = process.env.ORIGIN || 'https://xgraphene.tech';

  // Step 1: Redirect to GitHub OAuth
  if (req.method === 'GET' && !req.query.code) {
    const params = new URLSearchParams({
      client_id: clientId,
      scope: 'repo,user',
      redirect_uri: `${origin}/api/auth`,
    });
    res.writeHead(302, { Location: `https://github.com/login/oauth/authorize?${params}` });
    return res.end();
  }

  // Step 2: Exchange code for token
  if (req.method === 'GET' && req.query.code) {
    try {
      const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code: req.query.code,
        }),
      });

      const data = await tokenRes.json();

      if (data.error) {
        res.writeHead(302, { Location: `${origin}/admin/?error=${encodeURIComponent(data.error_description || data.error)}` });
        return res.end();
      }

      // Pass token back to Decap CMS via postMessage
      const html = `
<!DOCTYPE html>
<html><head><script>
  (function() {
    window.opener.postMessage(
      ${JSON.stringify({
        token: data.access_token,
        provider: 'github',
        backendName: 'github',
      })},
      "${origin}"
    );
    window.close();
  })();
</script></head><body><p>Logged in. This window will close automatically.</p></body></html>`;
      res.setHeader('Content-Type', 'text/html');
      return res.end(html);
    } catch (err) {
      res.writeHead(302, { Location: `${origin}/admin/?error=${encodeURIComponent('Failed to exchange code for token')}` });
      return res.end();
    }
  }

  // Step 3: Handle POST (Decap CMS may POST for token exchange)
  if (req.method === 'POST') {
    return res.end(JSON.stringify({ error: 'Use GET /api/auth to start OAuth flow' }));
  }

  res.status(405).end();
}
