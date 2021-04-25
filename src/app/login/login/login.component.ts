import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from './login';
import { LoginService } from './login.service';
import { AlertsService } from 'src/app/shared/service/alerts.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	public formLogin: FormGroup;
	public loginModel: Login = new Login();

	constructor(
		public formBuilder: FormBuilder,
		public service: LoginService,
		public alertas: AlertsService,
		public router: Router
	) { }

	ngOnInit(): void {
		this.formLogin = this.formBuilder.group({
			email: [this.loginModel.email, [Validators.required, Validators.email]],
			password: [this.loginModel.password, [Validators.required]]
		});
	}

	submit() {
		if (this.formLogin) {
			this.service.login(this.formLogin.value).subscribe((resp: any) => {
				if (resp[0]) {
					this.router.navigateByUrl('inventario');
				} else {
					this.alertas.errors('Revisar email y/o contraseña')
				}
			})
		}
	}

}
