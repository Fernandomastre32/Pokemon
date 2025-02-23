import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cam',
  templateUrl: './cam.page.html',
  styleUrls: ['./cam.page.scss'],
  standalone: false
})
export class CamPage  {

  constructor(private navCtrl: NavController) {}


  goBack() {
    this.navCtrl.navigateBack('/home');
  }
}
