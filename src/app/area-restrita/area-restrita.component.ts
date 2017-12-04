import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Routes, RouterModule} from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-area-restrita',
  templateUrl: './area-restrita.component.html',
  styleUrls: ['./area-restrita.component.css']
})
export class AreaRestritaComponent implements OnInit {

master = {"user":"admin","password":"pass"};
user = {"user":"","pass":""};
logged: boolean;


  constructor() {
    this.master.user="admin";
    this.master.password="pass";
    this.logged = false;
  }

  public login(user){
    if(this.user.user == this.master.user && this.user.pass == this.master.password){
      localStorage.setItem('userLogin', user.user);
      window.location.href="/adminpanel";
    }
    else{
      alert("Login Inválido!");
    }
   
  }

  ngOnInit() {
       if(localStorage.getItem('userLogin')=="admin"){
      window.location.href="/adminpanel";
    }
    else{
      this.logged = false;
    }
  }

}
