import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage {
  constructor(private navCtrl: NavController) {}

  goToCatalog() {
    this.navCtrl.navigateForward('/catalog');
  }

  goToDetails() {
    this.navCtrl.navigateForward('/details');
  }

  logout() {
    this.navCtrl.navigateRoot('/login');
  }

  openCamera() {
    console.log('Abrir cámara...');
    // Aquí puedes agregar código para acceder a la cámara
  }
}
