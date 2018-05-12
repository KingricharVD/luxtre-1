// @flow
import { request } from './lib/request';
import { LUXGATE_API_HOST, LUXGATE_API_PORT } from './index';

export type GetLuxgateCoinInfoParams = {
  coin: string,
  password: string
};

export const getLuxgateCoinInfo = (
  { coin, password }: GetLuxgateCoinInfoParams
): Promise<string> => (
  request({
    hostname: LUXGATE_API_HOST,
    method: 'POST',
    port: LUXGATE_API_PORT,
  }, {
    method: 'getasset',
    coin: coin,
    password: password
  })
);