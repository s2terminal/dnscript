import { resolve, DNSRequest, dnsDescribeDig } from './lib';

const dig = async (request: DNSRequest): Promise<void> => {
  console.log(dnsDescribeDig(request));
  console.log(await resolve(request));
}

// main
(async () => {
  await dig({ hostname: 'example.com' });
  // await dig({ hostname: 'cname.example.com', rrtype: 'CNAME', nameserver: '1.1.1.1' });
})();
