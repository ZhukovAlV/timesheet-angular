/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { IterableTimeData } from '../models/iterable-time-data';
import { TimeData } from '../models/time-data';

/**
 * Time Data Controller
 */
@Injectable({
  providedIn: 'root',
})
class TimeDataControllerService extends __BaseService {
  static readonly findAllUsingGETPath = '/timedata';
  static readonly addTimeDataUsingPOSTPath = '/timedata';
  static readonly updateTimeDataUsingPUTPath = '/timedata';
  static readonly deleteTimeDataUsingDELETEPath = '/timedata/{timeDataId}';
  static readonly findByUserIdUsingGETPath = '/timedata/{userId}';
  static readonly findByYearAndMonthUsingGETPath = '/timedata/{userId}/{year}/{month}';

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
  findAllUsingGETResponse(): __Observable<__StrictHttpResponse<IterableTimeData>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/timedata`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IterableTimeData>;
      })
    );
  }
  /**
   * findAll
   * @return OK
   */
  findAllUsingGET(): __Observable<IterableTimeData> {
    return this.findAllUsingGETResponse().pipe(
      __map(_r => _r.body as IterableTimeData)
    );
  }

  /**
   * addTimeData
   * @param timeData timeData
   * @return OK
   */
  addTimeDataUsingPOSTResponse(timeData: TimeData): __Observable<__StrictHttpResponse<TimeData>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = timeData;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/timedata`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TimeData>;
      })
    );
  }
  /**
   * addTimeData
   * @param timeData timeData
   * @return OK
   */
  addTimeDataUsingPOST(timeData: TimeData): __Observable<TimeData> {
    return this.addTimeDataUsingPOSTResponse(timeData).pipe(
      __map(_r => _r.body as TimeData)
    );
  }

  /**
   * updateTimeData
   * @param timeData timeData
   * @return OK
   */
  updateTimeDataUsingPUTResponse(timeData: TimeData): __Observable<__StrictHttpResponse<TimeData>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = timeData;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/timedata`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TimeData>;
      })
    );
  }
  /**
   * updateTimeData
   * @param timeData timeData
   * @return OK
   */
  updateTimeDataUsingPUT(timeData: TimeData): __Observable<TimeData> {
    return this.updateTimeDataUsingPUTResponse(timeData).pipe(
      __map(_r => _r.body as TimeData)
    );
  }

  /**
   * deleteTimeData
   * @param timeDataId timeDataId
   * @return OK
   */
  deleteTimeDataUsingDELETEResponse(timeDataId: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/timedata/${encodeURIComponent(String(timeDataId))}`,
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
   * deleteTimeData
   * @param timeDataId timeDataId
   * @return OK
   */
  deleteTimeDataUsingDELETE(timeDataId: number): __Observable<{}> {
    return this.deleteTimeDataUsingDELETEResponse(timeDataId).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * findByUserId
   * @param userId userId
   * @return OK
   */
  findByUserIdUsingGETResponse(userId: number): __Observable<__StrictHttpResponse<IterableTimeData>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/timedata/${encodeURIComponent(String(userId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IterableTimeData>;
      })
    );
  }
  /**
   * findByUserId
   * @param userId userId
   * @return OK
   */
  findByUserIdUsingGET(userId: number): __Observable<IterableTimeData> {
    return this.findByUserIdUsingGETResponse(userId).pipe(
      __map(_r => _r.body as IterableTimeData)
    );
  }

  /**
   * findByYearAndMonth
   * @param params The `TimeDataControllerService.FindByYearAndMonthUsingGETParams` containing the following parameters:
   *
   * - `year`: year
   *
   * - `userId`: userId
   *
   * - `month`: month
   *
   * @return OK
   */
  findByYearAndMonthUsingGETResponse(params: TimeDataControllerService.FindByYearAndMonthUsingGETParams): __Observable<__StrictHttpResponse<{[key: string]: TimeData}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/timedata/${encodeURIComponent(String(params.userId))}/${encodeURIComponent(String(params.year))}/${encodeURIComponent(String(params.month))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: TimeData}>;
      })
    );
  }
  /**
   * findByYearAndMonth
   * @param params The `TimeDataControllerService.FindByYearAndMonthUsingGETParams` containing the following parameters:
   *
   * - `year`: year
   *
   * - `userId`: userId
   *
   * - `month`: month
   *
   * @return OK
   */
  findByYearAndMonthUsingGET(params: TimeDataControllerService.FindByYearAndMonthUsingGETParams): __Observable<{[key: string]: TimeData}> {
    return this.findByYearAndMonthUsingGETResponse(params).pipe(
      __map(_r => _r.body as {[key: string]: TimeData})
    );
  }
}

module TimeDataControllerService {

  /**
   * Parameters for findByYearAndMonthUsingGET
   */
  export interface FindByYearAndMonthUsingGETParams {

    /**
     * year
     */
    year: number;

    /**
     * userId
     */
    userId: number;

    /**
     * month
     */
    month: number;
  }
}

export { TimeDataControllerService }
