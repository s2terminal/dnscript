import * as DNS from "dns";

export type DNSRequest = {
  hostname: string;
  rrtype?: string;
  nameserver?: string;
};

const DEFAULT_NAMESERVER = '1.1.1.1';

export const resolve = async (request: DNSRequest): Promise<any> => {
  if (!request.nameserver) request.nameserver = DEFAULT_NAMESERVER;
  if (!request.rrtype) request.rrtype = 'A';

  const resolver = new DNS.promises.Resolver();
  resolver.setServers([request.nameserver]);
  const record = await resolver.resolve(request.hostname, request.rrtype);
  if (request.rrtype === 'CNAME') {
    return resolve({
      hostname: record[0],
      rrtype: 'A',
      nameserver: DEFAULT_NAMESERVER
    })
  }
  return record;
};

export const dnsDescribeDig = (request: DNSRequest): string => {
  if (!request.nameserver) request.nameserver = DEFAULT_NAMESERVER;
  if (!request.rrtype) request.rrtype = 'A';

  return `requesting... ${request.rrtype} ${request.hostname} @${request.nameserver}`;
};
