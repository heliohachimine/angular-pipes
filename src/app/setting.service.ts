import { Injectable } from '@angular/core';

@Injectable()
export class SettingServiceService {

  constructor() { }

  getLocale(){
    return 'en-US';
  }

}
