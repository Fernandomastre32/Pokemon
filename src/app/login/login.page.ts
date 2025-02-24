import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  goToHome() {
    this.navCtrl.navigateForward('/home');
  }

  goToRegister() {
    this.navCtrl.navigateForward('/register');
  }
}