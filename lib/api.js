import { createClient } from 'microcms-js-sdk';

// Initialize Client SDK.
const client = createClient({
  serviceDomain: "process.env.SERVICE_DOMAIN",
  apiKey: "process.env.API_KEY",
});
