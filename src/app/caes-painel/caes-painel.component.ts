import { Component, OnInit } from '@angular/core';
import {Cao} from './../cao';
import {CaoService} from './../cao.service';
import {Solicitacao} from './../solicitacao';
import {SolicitacaoService} from './../solicitacao.service';


@Component({
  selector: 'app-caes-painel',
  templateUrl: './caes-painel.component.html',
  styleUrls: ['./caes-painel.component.css'],
  providers: [CaoService, SolicitacaoService]
})
export class CaesPainelComponent implements OnInit {



  dogPic: string ="../../img/dog.jpg";


caesTest: Array<Cao>;
auxSlct: Solicitacao = new Solicitacao();


  constructor(private _caoService: CaoService, private _solicitacaoService: SolicitacaoService) { 
  }


public getCaoData(caoSclt: Cao){

  this.auxSlct.caoId = caoSclt._id;
  this.auxSlct.caoNome = caoSclt.nome;
}

public solicitarAdocao(slct: Solicitacao){
     this._solicitacaoService.addSlct(slct)
    .subscribe(resNewCao => {})
}


  ngOnInit() {
    this._caoService.getCaes().
    subscribe(resCaoData => this.caesTest = resCaoData);
  }

}
