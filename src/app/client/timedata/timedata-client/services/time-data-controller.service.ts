/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TimeData } from '../models/time-data';

/**
 * Time Data Controller
 */
@Injectable({
  providedIn: 'root',
})
class TimeDataControllerService extends __BaseService {
  static readonly addTimeDataUsingPOSTPath = '/timedata/add';
  static readonly findAllUsingGETPath = '/timedata/all';
  static readonly deleteTimeDataUsingDELETEPath = '/timedata/delete/{id}';
  static readonly updateTimeDataUsingPUTPath = '/timedata/update';
  static readonly findByIdUsingGETPath = '/timedata/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
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
      this.rootUrl + `/timedata/add`,
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
   * findAll
   * @return OK
   */
  findAllUsingGETResponse(): __Observable<__StrictHttpResponse<Array<TimeData>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/timedata/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TimeData>>;
      })
    );
  }
  /**
   * findAll
   * @return OK
   */
  findAllUsingGET(): __Observable<Array<TimeData>> {
    return this.findAllUsingGETResponse().pipe(
      __map(_r => _r.body as Array<TimeData>)
    );
  }

  /**
   * deleteTimeData
   * @param id id
   * @return OK
   */
  deleteTimeDataUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/timedata/delete/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * deleteTimeData
   * @param id id
   * @return OK
   */
  deleteTimeDataUsingDELETE(id: number): __Observable<string> {
    return this.deleteTimeDataUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as string)
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
      this.rootUrl + `/timedata/update`,
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
   * findById
   * @param id id
   * @return OK
   */
  findByIdUsingGETResponse(id: number): __Observable<__StrictHttpResponse<TimeData>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/timedata/${encodeURIComponent(String(id))}`,
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
   * findById
   * @param id id
   * @return OK
   */
  findByIdUsingGET(id: number): __Observable<TimeData> {
    return this.findByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as TimeData)
    );
  }
}

module TimeDataControllerService {
}

export { TimeDataControllerService }
