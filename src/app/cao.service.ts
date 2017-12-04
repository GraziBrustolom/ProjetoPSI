import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Cao} from './cao';
import 'rxjs/add/operator/map';

@Injectable()
export class CaoService {

private _url = "/api/caes/";


  constructor(private _http: Http) { }

  getCaes(){
    return this._http.get(this._url)
    .map((response: Response) => response.json());
  }
  
  deleteCao(caoDel: Cao){
    return this._http.delete(this._url + caoDel._id)
    .map((response: Response) => response.json());
  }

  addCao(caoAdd:Cao){
    let headers = new Headers ({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this._http.post(this._url, JSON.stringify(caoAdd),options).map((response: Response) => response.json());
  }

  updateCao(caoUpdate: Cao){
    let headers = new Headers ({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
        return this._http.put(this._url + caoUpdate._id, JSON.stringify(caoUpdate),options)
        .map((response: Response) => response.json());
  }

}
