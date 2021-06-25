/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { IterableOrgdata } from '../models/iterable-orgdata';
import { Orgdata } from '../models/orgdata';
import { OptionalOrgdata } from '../models/optional-orgdata';

/**
 * Orgdata Controller
 */
@Injectable({
  providedIn: 'root',
})
class OrgdataControllerService extends __BaseService {
  static readonly findAllUsingGETPath = '/orgdata';
  static readonly addOrgdataUsingPOSTPath = '/orgdata';
  static readonly updateOrgdataUsingPUTPath = '/orgdata';
  static readonly findByIdUsingGETPath = '/orgdata/{orgId}';
  static readonly deleteOrgdataUsingDELETEPath = '/orgdata/{orgId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * findAll
   * @return OK
   */
  findAllUsingGETResponse(): __Observable<__StrictHttpResponse<IterableOrgdata>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/orgdata`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IterableOrgdata>;
      })
    );
  }
  /**
   * findAll
   * @return OK
   */
  findAllUsingGET(): __Observable<IterableOrgdata> {
    return this.findAllUsingGETResponse().pipe(
      __map(_r => _r.body as IterableOrgdata)
    );
  }

  /**
   * addOrgdata
   * @param orgdata orgdata
   * @return OK
   */
  addOrgdataUsingPOSTResponse(orgdata: Orgdata): __Observable<__StrictHttpResponse<Orgdata>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = orgdata;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/orgdata`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Orgdata>;
      })
    );
  }
  /**
   * addOrgdata
   * @param orgdata orgdata
   * @return OK
   */
  addOrgdataUsingPOST(orgdata: Orgdata): __Observable<Orgdata> {
    return this.addOrgdataUsingPOSTResponse(orgdata).pipe(
      __map(_r => _r.body as Orgdata)
    );
  }

  /**
   * updateOrgdata
   * @param orgdata orgdata
   * @return OK
   */
  updateOrgdataUsingPUTResponse(orgdata: Orgdata): __Observable<__StrictHttpResponse<Orgdata>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = orgdata;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/orgdata`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Orgdata>;
      })
    );
  }
  /**
   * updateOrgdata
   * @param orgdata orgdata
   * @return OK
   */
  updateOrgdataUsingPUT(orgdata: Orgdata): __Observable<Orgdata> {
    return this.updateOrgdataUsingPUTResponse(orgdata).pipe(
      __map(_r => _r.body as Orgdata)
    );
  }

  /**
   * findById
   * @param orgId orgId
   * @return OK
   */
  findByIdUsingGETResponse(orgId: number): __Observable<__StrictHttpResponse<OptionalOrgdata>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/orgdata/${encodeURIComponent(String(orgId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OptionalOrgdata>;
      })
    );
  }
  /**
   * findById
   * @param orgId orgId
   * @return OK
   */
  findByIdUsingGET(orgId: number): __Observable<OptionalOrgdata> {
    return this.findByIdUsingGETResponse(orgId).pipe(
      __map(_r => _r.body as OptionalOrgdata)
    );
  }

  /**
   * deleteOrgdata
   * @param orgId orgId
   * @return OK
   */
  deleteOrgdataUsingDELETEResponse(orgId: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/orgdata/${encodeURIComponent(String(orgId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * deleteOrgdata
   * @param orgId orgId
   * @return OK
   */
  deleteOrgdataUsingDELETE(orgId: number): __Observable<{}> {
    return this.deleteOrgdataUsingDELETEResponse(orgId).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module OrgdataControllerService {
}

export { OrgdataControllerService }
