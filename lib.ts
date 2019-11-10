import * as DNS from "dns";

export type DNSRequest = {
  hostname: string;
}

export const resolve = async (request: DNSRequest): Promise<DNS.LookupAddress> => {
  const record: DNS.LookupAddress = await DNS.promises.lookup(request.hostname);
  return record;
}
