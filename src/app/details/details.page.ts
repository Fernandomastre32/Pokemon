import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: false
})
export class DetailsPage  {

  constructor(private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.navigateBack('/catalog');
  }
}