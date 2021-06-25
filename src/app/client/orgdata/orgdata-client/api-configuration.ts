/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = '//localhost:8600/service-orgdata';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
