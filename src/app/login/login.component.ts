import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service'
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService,) { }

  ngOnInit(): void {
  }

  // Login
  onLogin(data){
    this.auth.login(data).subscribe(
      (res:any)=>{
        console.log(res.status)
        if (res.status === true){
          this.router.navigate(['/analytics']);
          localStorage.setItem('token',res.data.token)
          // console.log("token :",localStorage['token'])
        }
        else{
            $(".login-details form input").addClass('error-input')
            setTimeout(()=>{
              $(".login-details form input").removeClass('error-input')
            }, 2000);
        }
      },
      (error)=>{
        $(".login-details form input").addClass('error-input')
        setTimeout(()=>{
              $(".login-details form input").removeClass('error-input')
        }, 2000)
      }
    )
  }
  // end

  // Checking Login Status
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  // end

}
