import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  focus: any;
  focus1: any;
  username:any;
  password:string | undefined;
  constructor(
    private router:Router,
    private adminService:AdminService
  ) { }

  danger : boolean = false ;
  sucess : boolean = false ;
  message : string = '';

 form:any ={}
  ngOnInit() {

  }
  validation() {
    if (this.form.username == null || this.form.password == null || this.form.username.trim() === "" || this.form.password.trim() === "") {
      this.message = "Username or Password is empty!";
      this.sucess = false;
      this.danger = true;
    } else {
      console.log(this.form);
      this.adminService.login(this.form).subscribe(
        (isUser: boolean) => {
          if (isUser) {
            this.message = "Login successful!";
            this.sucess = true;
            this.danger = false;
            console.log(isUser);
  
            this.adminService.loginUser(this.form).subscribe((data: any) => {
              this.form = data;
              console.log(data);
              console.log(this.form);
              window.sessionStorage.removeItem("ADMIN");
              window.sessionStorage.setItem("ADMIN", JSON.stringify(data));
              this.router.navigate(['/sidebar-admin']);
            });
          } else {
            this.message = "Invalid Username or Password!";
            this.sucess = false;
            this.danger = true;
          }
        },
        (error: any) => {
          console.error(error);
          this.message = "An error occurred. Please try again.";
          this.sucess = false;
          this.danger = true;
        }
      );
    }
  }

}
