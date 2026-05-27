const { SocksProxyAgent } = require('socks-proxy-agent');
const { google } = require('googleapis');

const KEY = require('./google-key.json');

const PROXY = process.env.SOCKS_PROXY || 'socks5://127.0.0.1:10807';
const agent = new SocksProxyAgent(PROXY);

const URLS = [
  '/',
  '/ABOUT/AboutOrigin.html',
  '/ABOUT/AboutMission.html',
  '/ABOUT/AboutPhilosophy.html',
  '/SCIENCE/Technology.html',
  '/SCIENCE/Mechanism.html',
  '/SCIENCE/Evidence.html',
  '/science.html',
  '/PRODUCTS/FILM/GrapheneFilm.html',
  '/PRODUCTS/ProductPage.html',
  '/PRODUCTS/CABIN/cabin.html',
  '/PRODUCTS/CAPSULE/capsule-b2b.html',
  '/PRODUCTS/PORTABLES/DeepRecovery.html',
  '/PRODUCTS/PORTABLES/NeuralResilience.html',
  '/PRODUCTS/PORTABLES/VisceralVitality.html',
  '/applications.html',
  '/partnership.html',
  '/NEWS/index.html',
  '/NEWS/pku-clinical-trial.html',
  '/CONTACT/index.html',
];

const BASE = 'https://www.xgraphene.tech';
const DELAY = 1200;

async function main() {
  console.log(`Using proxy: ${PROXY}`);

  const auth = new google.auth.GoogleAuth({
    credentials: KEY,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const indexing = google.indexing({ 
    version: 'v3', 
    auth,
    httpOptions: {
      agent,
    },
  });

  let ok = 0;
  let fail = 0;

  for (let i = 0; i < URLS.length; i++) {
    const url = BASE + URLS[i];
    try {
      const res = await indexing.urlNotifications.publish({
        requestBody: {
          url,
          type: 'URL_UPDATED',
        },
      });
      const status = res.status;
      const notified = res.data.urlNotificationMetadata?.latestUpdate?.notifyTime
        || res.data.urlNotificationMetadata?.latestRemove?.notifyTime
        || 'OK';
      console.log(`[${status}] ${url} — ${notified}`);
      ok++;
    } catch (err) {
      console.error(`[ERR] ${url} — ${err.message}`);
      fail++;
    }

    if (i < URLS.length - 1) {
      await new Promise(r => setTimeout(r, DELAY));
    }
  }

  console.log(`\n=== Done: ${ok} OK, ${fail} FAIL ===`);
}

main().catch(e => {
  console.error('FATAL:', e.message);
  process.exit(1);
});