import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false 
})
export class RegisterPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  register() {
    console.log('Registro exitoso');
    this.navCtrl.navigateForward('/home');
  }

  goToLogin() {
    this.navCtrl.navigateBack('/login');
  }
}
