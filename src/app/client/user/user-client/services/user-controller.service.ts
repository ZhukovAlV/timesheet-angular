/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { User } from '../models/user';
import { ResponseEntity } from '../models/response-entity';
import { OptionalUser } from '../models/optional-user';

/**
 * User Controller
 */
@Injectable({
  providedIn: 'root',
})
class UserControllerService extends __BaseService {
  static readonly addUserUsingPOSTPath = '/user/add';
  static readonly findAllUsingGETPath = '/user/all';
  static readonly deleteUserUsingDELETEPath = '/user/delete/{id}';
  static readonly updateUserUsingPUTPath = '/user/update';
  static readonly findByIdUsingGETPath = '/user/{userId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
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
   * @param user user
   * @return OK
   */
  addUserUsingPOST(user: User): __Observable<User> {
    return this.addUserUsingPOSTResponse(user).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * findAll
   * @return OK
   */
  findAllUsingGETResponse(): __Observable<__StrictHttpResponse<Array<User>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/user/all`,
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
   * findAll
   * @return OK
   */
  findAllUsingGET(): __Observable<Array<User>> {
    return this.findAllUsingGETResponse().pipe(
      __map(_r => _r.body as Array<User>)
    );
  }

  /**
   * deleteUser
   * @param id id
   * @return OK
   */
  deleteUserUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<ResponseEntity>> {
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
        return _r as __StrictHttpResponse<ResponseEntity>;
      })
    );
  }
  /**
   * deleteUser
   * @param id id
   * @return OK
   */
  deleteUserUsingDELETE(id: number): __Observable<ResponseEntity> {
    return this.deleteUserUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as ResponseEntity)
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
      this.rootUrl + `/user/update`,
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
}

module UserControllerService {
}

export { UserControllerService }
