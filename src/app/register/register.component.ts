import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
userData={
  firstname:'',
  lastname:'',
  email:'',
  password:''
}
  constructor(private data:AuthService , private router:Router) { }

  ngOnInit(): void {
  }

  register(){
this.data.register(this.userData).subscribe(res=>{
  // console.log(res);
  
  this.router.navigate(['/login'])
})  }
}

