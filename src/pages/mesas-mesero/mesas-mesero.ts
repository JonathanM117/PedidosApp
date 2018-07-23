import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-mesas-mesero',
  templateUrl: 'mesas-mesero.html',
})
export class MesasMeseroPage {

  constructor(public nav: NavController, public navParams: NavParams) {}

  public createAccount() {
    this.nav.push('RegisterPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MesasMeseroPage');
  }

}
