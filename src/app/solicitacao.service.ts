import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Solicitacao} from './solicitacao';
import 'rxjs/add/operator/map';

@Injectable()
export class SolicitacaoService {

private _url = "/api/solicitacao/";


  constructor(private _http: Http) { }

  getSolicitacaoById(solicitacao: Solicitacao){
    return this._http.get(this._url + solicitacao._id)
    .map((response: Response) => response.json());
  }

    getSolicitacoes(){
    return this._http.get(this._url)
    .map((response: Response) => response.json());
  }
  
  deleteSolicitacao(solicitacao: Solicitacao){
    return this._http.delete(this._url + solicitacao._id)
    .map((response: Response) => response.json());
  }

  updateAprovacao(slctUpdate: Solicitacao){
     let headers = new Headers ({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
        return this._http.put(this._url + slctUpdate._id, JSON.stringify(slctUpdate),options)
        .map((response: Response) => response.json());
  }


  addSlct(slctAdd:Solicitacao){
   let headers = new Headers ({'Content-Type': 'application/json'});
   let options = new RequestOptions({headers: headers});
   return this._http.post(this._url, JSON.stringify(slctAdd),options).map((response: Response) => response.json());
  }

  


}
