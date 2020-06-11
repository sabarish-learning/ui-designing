export class AppComponent  {
  pname:string ='';
   pcity:string='';
  pstate:string='';
  bname:string='';
  bcity:string='';
  bstate:string='';
filladdress($event){
  if($event.target.checked== true){
 this.bname=this.pname;
 this.bcity=this.pcity;
 this.bstate=this.pstate;
  
  }else
  {
    this.bname="";
    this.bcity="";
    this.bstate="";
  }
  
}
}
