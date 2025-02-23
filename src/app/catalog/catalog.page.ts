import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
  standalone: false
})
export class CatalogPage  {
  constructor(private navCtrl: NavController) {}

  goToDetails() {
    this.navCtrl.navigateForward('/details');
  }

  goBack() {
    this.navCtrl.navigateBack('/home');
  }
}