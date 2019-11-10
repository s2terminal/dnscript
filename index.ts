import { resolve } from './lib';

// main
(async () => {
  const record = await resolve({ hostname: 's2terminal.com' });
  console.log(record);
})();
