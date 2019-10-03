import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LogicService } from '../services/logic.service'
import { ToastController } from '@ionic/angular';
import { GlobalVariable } from '../common/globals';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;
  baseUrl: string;
  constructor(public loadingController: LoadingController, public alertController: AlertController,
    public router: Router, public navCtrl: NavController, private storage: Storage, public restProvider: LogicService, public toastController: ToastController) {
    storage.get(GlobalVariable.CookieName.baseUrl).then((val) => {
      console.log("Base Url", val);
      if (val && val != '') {
        this.baseUrl = val;
      }
    });
  }

  ngOnInit() {
  }

  async submit() {
    if (this.username && this.password) {
      this.presentLoading()
      let body = `email=${this.username}&password=${this.password}`;
      this.restProvider.Login(this.baseUrl, { email: this.username, password: this.password })
        .then((result) => {
          this.loadingController.dismiss();
          console.log("Login result : ", JSON.stringify(result));
          this.router.navigate(['/dashboard']);
        }, (err) => {
          this.loadingController.dismiss();
          console.log(err);
        });
    } else {
      this.presentToast()
    }

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Please fill all the details.',
      duration: 2000
    });
    toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 200000,
      showBackdrop: false
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }


}

