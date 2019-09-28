import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(public router: Router) { }

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
