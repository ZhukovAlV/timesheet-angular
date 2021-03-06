/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { IterableUser } from '../models/iterable-user';
import { User } from '../models/user';
import { OptionalUser } from '../models/optional-user';
import { ResponseEntity } from '../models/response-entity';

/**
 * User Controller
 */
@Injectable({
  providedIn: 'root',
})
class UserControllerService extends __BaseService {
  static readonly findAllUsingGETPath = '/user';
  static readonly addUserUsingPOSTPath = '/user';
  static readonly updateUserUsingPUTPath = '/user';
  static readonly findByIdUsingGETPath = '/user/{userId}';
  static readonly deleteUserUsingDELETEPath = '/user/{userId}';

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
  findAllUsingGETResponse(): __Observable<__StrictHttpResponse<IterableUser>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/user`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IterableUser>;
      })
    );
  }
  /**
   * findAll
   * @return OK
   */
  findAllUsingGET(): __Observable<IterableUser> {
    return this.findAllUsingGETResponse().pipe(
      __map(_r => _r.body as IterableUser)
    );
  }

  /**
   * addUser
   * @param user user
   * @return OK
   */
  addUserUsingPOSTResponse(user: User): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = user;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/user`,
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
   * @param user user
   * @return OK
   */
  addUserUsingPOST(user: User): __Observable<User> {
    return this.addUserUsingPOSTResponse(user).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * updateUser
   * @param user user
   * @return OK
   */
  updateUserUsingPUTResponse(user: User): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = user;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/user`,
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
   * updateUser
   * @param user user
   * @return OK
   */
  updateUserUsingPUT(user: User): __Observable<User> {
    return this.updateUserUsingPUTResponse(user).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * findById
   * @param userId userId
   * @return OK
   */
  findByIdUsingGETResponse(userId: number): __Observable<__StrictHttpResponse<OptionalUser>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/user/${encodeURIComponent(String(userId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OptionalUser>;
      })
    );
  }
  /**
   * findById
   * @param userId userId
   * @return OK
   */
  findByIdUsingGET(userId: number): __Observable<OptionalUser> {
    return this.findByIdUsingGETResponse(userId).pipe(
      __map(_r => _r.body as OptionalUser)
    );
  }

  /**
   * deleteUser
   * @param userId userId
   * @return OK
   */
  deleteUserUsingDELETEResponse(userId: number): __Observable<__StrictHttpResponse<ResponseEntity>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/user/${encodeURIComponent(String(userId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResponseEntity>;
      })
    );
  }
  /**
   * deleteUser
   * @param userId userId
   * @return OK
   */
  deleteUserUsingDELETE(userId: number): __Observable<ResponseEntity> {
    return this.deleteUserUsingDELETEResponse(userId).pipe(
      __map(_r => _r.body as ResponseEntity)
    );
  }
}

module UserControllerService {
}

export { UserControllerService }
