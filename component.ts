import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pname:string ='';
  pcity:string='';
 pstate:string='';
 bname:string='';
 bcity:string='';
 bstate:string='';
 name:string ='';
 city:string='';
state:string='';
cname:string='';
ccity:string='';
cstate:string='';
filladdress($event){
 if($event.target.checked== true){
this.bname=this.pname;
this.bcity=this.pcity;
this.bstate=this.pstate;
 }
 else
 {
  this.bname="";
  this.bcity="";
  this.bstate="";
 }
 
}
filladdress1($event){
  if($event.target.checked== true){
 this.cname=this.name;
 this.ccity=this.city;
 this.cstate=this.state;
  
  }else
  {
    this.cname="";
    this.ccity="";
    this.cstate="";
  }
  
}
}
