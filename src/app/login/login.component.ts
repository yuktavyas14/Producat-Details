import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductName } from '../Model/product-name';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token:string="";
  userdata:any;
  data:ProductName=new ProductName();
  

  constructor(private _service:ServiceService , private route:Router) { }

  ngOnInit(): void {
  }
save(){
  debugger;
     console.log(this.data);
     this._service.login(this.data).subscribe(res=>{
       this.token=res.access_token;
      localStorage.setItem('access_token',"Bearer "+res.access_token)
      });
      // if(this.token){
      //   this.route.navigateByUrl('/product');
      // }

      this.route.navigateByUrl('/product');
      }

    
     
}





