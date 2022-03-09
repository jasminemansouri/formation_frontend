import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  admin={
    email:'',
    password:''
  }
token:any
  constructor(private data:AuthService , private router:Router) { }

  ngOnInit(): void {
  }
login(){
  this.data.login(this.admin).subscribe(res=>{
    // console.log(res);
    this.token=res;
    localStorage.setItem('appToken' , this.token.myToken);
    this.router.navigate(['/admin'])

    
  })
}

}
