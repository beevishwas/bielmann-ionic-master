import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Url: string = "";
  sslToggled: boolean = false;
  sslValue: string = "http://";

  constructor(public alertController: AlertController, public navCtrl: NavController,
     public router: Router, private storage: Storage, public toastController: ToastController) {
    storage.get('BM_SSL_URL').then((val) => {
      if (val && val != '') {
        this.router.navigate(['/login']);
      }
    });
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Please provide valid url.',
      duration: 2000
    });
    toast.present();
  }

  gologin() {
    if (this.Url != '') {
      this.storage.set('BM_SSL_URL', this.sslValue + this.Url);
      this.router.navigate(['/login']);
    } else {
      this.presentToast();
    }
  }

  ChangeSSLValue() {
    this.sslValue = this.sslToggled ? "https://" : "http://";

  }

}


