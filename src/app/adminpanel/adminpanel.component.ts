import { Component, OnInit } from '@angular/core';
import {Cao} from './../cao';
import {CaoService} from './../cao.service';
import {Solicitacao} from './../solicitacao';
import {SolicitacaoService} from './../solicitacao.service';


@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css'],
  providers: [CaoService, SolicitacaoService]
})
export class AdminpanelComponent implements OnInit {


newCao: Cao = new Cao();
editCao: Cao = new Cao();
auxCao: Cao = new Cao();
auxSlct: Solicitacao = new Solicitacao();
caesTest: Array<Cao>;
logged: boolean;
solicitacoes: Array<Solicitacao>;

constructor(private _caoService: CaoService, private _solicitacaoService: SolicitacaoService) {
  this.logged = false;
}


public getSlctData(slct: Solicitacao){
this.auxSlct._id = slct._id;
this.auxSlct.caoId = slct.caoId;
this.auxSlct.caoNome = slct.caoNome;
this.auxSlct.email = slct.email;
this.auxSlct.nomeSolicitante = slct.nomeSolicitante;
this.auxSlct.telefone = slct.telefone;
}

public getCaoData(caoEdit:Cao){
this.auxCao._id = caoEdit._id;
this.auxCao.nome = caoEdit.nome;
this.auxCao.idade = caoEdit.idade;
this.auxCao.raca = caoEdit.raca;
this.auxCao.vacinado = caoEdit.vacinado;
}

public updateRequest(aprvRes: Boolean, slctUpdt: Solicitacao){

  if(aprvRes == true){
    slctUpdt.aprovacao = "Aprovada";
 this._solicitacaoService.updateAprovacao(slctUpdt).
    subscribe(resUpdateData => slctUpdt = resUpdateData);
  }
  else
  {
    this._solicitacaoService.deleteSolicitacao(slctUpdt).subscribe(
          resUpdateData => {},
          error => console.log(error)
         );
  }

      this.ngOnInit();
}


public adicionar(caoAdd: Cao){

  this._caoService.addCao(caoAdd)
  .subscribe(resNewCao => {
    this.caesTest.push(resNewCao);
    
  })
}

public editar(caoEdit: Cao){
 this._caoService.updateCao(caoEdit).
    subscribe(resUpdateData => caoEdit = resUpdateData);
    this.ngOnInit();
}

public remover(caoDel:Cao) {
this._caoService.deleteCao(caoDel).subscribe(
        res => {},
        error => console.log(error)
      );
    this.ngOnInit();
     
}




  ngOnInit() {
    if(localStorage.getItem('userLogin') != "admin"){
            window.location.href="/arearestrita";
            
    }
    else{
      this.logged=true;

       this._caoService.getCaes().
    subscribe(resCaoData => this.caesTest = resCaoData);

    this._solicitacaoService.getSolicitacoes().
    subscribe(resSolicitacoes => this.solicitacoes = resSolicitacoes);


    }
  }

}