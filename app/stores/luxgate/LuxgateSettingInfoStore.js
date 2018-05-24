// @flow
import { observable, computed, action, runInAction } from 'mobx';
import BigNumber from 'bignumber.js';
import Store from '../lib/Store';
import { matchRoute, buildRoute } from '../../utils/routing';
import Request from '.././lib/LocalizedRequest';
import CachedRequest from '../lib/LocalizedCachedRequest';
import { ROUTES } from '../../routes-config';

import type {
  SetCoinSettingResponse, 
} from '../../api/common';

export const ELECTRUM_PORT = 10000;
export const ELECTRUM_ADDRESS = "electrum2.cipig.net";
export default class LuxgateSettingInfoStore extends Store {

  // REQUESTS
  @observable setCoinSettingRequest: Request<SetCoinSettingResponse> = new Request(this.api.luxgate.setCoinSetting);

  @observable coinSettings = [];
  
  setup() {
    super.setup();

    const { router, luxgate } = this.actions;
    const { settingInfo } = luxgate;
    settingInfo.saveSettings.listen(this._saveSettings);
  }
  @action _saveSettings = async (settings: Array) => {
    this.coinSettings = settings;
    /*
    const info: GetPasswordInfoResponse = await this.getPasswordInfoRequest.execute(phrase).promise;
    if(info !== "")
    {
      const objInfo = JSON.parse(info);
      if(objInfo.userpass)
      {
        this.password = objInfo.userpass;
        this.isLogined = true;
      }
    }*/
  };

  @action _logoutAccount = () => {
    this.myPhrase = '';
    this.isLogined = false;
  };

}
