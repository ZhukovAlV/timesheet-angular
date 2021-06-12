/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { User } from '../models/user';

/**
 * User Controller
 */
@Injectable({
  providedIn: 'root',
})
class UserControllerService extends __BaseService {
  static readonly addUserUsingPOSTPath = '/user/add';
  static readonly deleteUserUsingDELETEPath = '/user/delete/{id}';
  static readonly findAllUserUsingGETPath = '/user/findAll';
  static readonly saveUserUsingPUTPath = '/user/save';
  static readonly findByIdUsingGETPath = '/user/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * addUser
   * @param params The `UserControllerService.AddUserUsingPOSTParams` containing the following parameters:
   *
   * - `userId`:
   *
   * - `surname`:
   *
   * - `name`:
   *
   * - `login`:
   *
   * @return OK
   */
  addUserUsingPOSTResponse(params: UserControllerService.AddUserUsingPOSTParams): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.userId != null) __params = __params.set('userId', params.userId.toString());
    if (params.surname != null) __params = __params.set('surname', params.surname.toString());
    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.login != null) __params = __params.set('login', params.login.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/user/add`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * addUser
   * @param params The `UserControllerService.AddUserUsingPOSTParams` containing the following parameters:
   *
   * - `userId`:
   *
   * - `surname`:
   *
   * - `name`:
   *
   * - `login`:
   *
   * @return OK
   */
  addUserUsingPOST(params: UserControllerService.AddUserUsingPOSTParams): __Observable<User> {
    return this.addUserUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * deleteUser
   * @param id id
   * @return OK
   */
  deleteUserUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<{[key: string]: boolean}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/user/delete/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: boolean}>;
      })
    );
  }
  /**
   * deleteUser
   * @param id id
   * @return OK
   */
  deleteUserUsingDELETE(id: number): __Observable<{[key: string]: boolean}> {
    return this.deleteUserUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as {[key: string]: boolean})
    );
  }

  /**
   * findAllUser
   * @return OK
   */
  findAllUserUsingGETResponse(): __Observable<__StrictHttpResponse<Array<User>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/user/findAll`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<User>>;
      })
    );
  }
  /**
   * findAllUser
   * @return OK
   */
  findAllUserUsingGET(): __Observable<Array<User>> {
    return this.findAllUserUsingGETResponse().pipe(
      __map(_r => _r.body as Array<User>)
    );
  }

  /**
   * saveUser
   * @param params The `UserControllerService.SaveUserUsingPUTParams` containing the following parameters:
   *
   * - `userId`:
   *
   * - `surname`:
   *
   * - `name`:
   *
   * - `login`:
   *
   * @return OK
   */
  saveUserUsingPUTResponse(params: UserControllerService.SaveUserUsingPUTParams): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.userId != null) __params = __params.set('userId', params.userId.toString());
    if (params.surname != null) __params = __params.set('surname', params.surname.toString());
    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.login != null) __params = __params.set('login', params.login.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/user/save`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * saveUser
   * @param params The `UserControllerService.SaveUserUsingPUTParams` containing the following parameters:
   *
   * - `userId`:
   *
   * - `surname`:
   *
   * - `name`:
   *
   * - `login`:
   *
   * @return OK
   */
  saveUserUsingPUT(params: UserControllerService.SaveUserUsingPUTParams): __Observable<User> {
    return this.saveUserUsingPUTResponse(params).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * findById
   * @param id id
   * @return OK
   */
  findByIdUsingGETResponse(id: number): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/user/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * findById
   * @param id id
   * @return OK
   */
  findByIdUsingGET(id: number): __Observable<User> {
    return this.findByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as User)
    );
  }
}

module UserControllerService {

  /**
   * Parameters for addUserUsingPOST
   */
  export interface AddUserUsingPOSTParams {
    userId?: number;
    surname?: string;
    name?: string;
    login?: string;
  }

  /**
   * Parameters for saveUserUsingPUT
   */
  export interface SaveUserUsingPUTParams {
    userId?: number;
    surname?: string;
    name?: string;
    login?: string;
  }
}

export { UserControllerService }