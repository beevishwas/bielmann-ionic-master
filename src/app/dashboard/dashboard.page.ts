import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { GlobalVariable } from '../common/globals';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  baseUrl: String
  constructor(private storage: Storage, public router: Router) {
    storage.get(GlobalVariable.CookieName.baseUrl).then((val) => {
      console.log("Base Url", val);
      if (val && val != '') {
        this.baseUrl = val;
      }
    });
   }

  // "imgdisplay":
  // [
  //  {
  //    "image": "assets/images/poc.png",

  //   "Name": "Printofsale"
  // },
  // {
  //    "image": "assets/images/settings.png",

  //   "Name": "Printofsale"
  //  },
  // ]




  ngOnInit() {
  }

  onFlashCardClick() {
    this.router.navigate(['/flashcard']);
  }
  onPOSClick() {
    this.router.navigate(['/pointofsale']);
  }


  onTodoClick() {
    this.router.navigate(['/todo']);
  }

  onSettings() {
    this.router.navigate(['/settings']);
  }

}
