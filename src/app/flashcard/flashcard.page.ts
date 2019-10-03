import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { LogicService } from '../services/logic.service';
import { GlobalVariable } from '../common/globals';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.page.html',
  styleUrls: ['./flashcard.page.scss'],
})
export class FlashcardPage implements OnInit {

  baseUrl: String;
  prePage: String;
  page: String;
  flashCardResponse:any;
  constructor(private storage: Storage, public loadingController: LoadingController, public toastController: ToastController,
          public restProvider: LogicService) { 
            this.prePage = "20";
            this.page = "1";  
            storage.get(GlobalVariable.CookieName.baseUrl).then((val) => {
              console.log("Flash Card Base Url", val);              
                this.baseUrl = val;
                this.getFlashCardList(this.prePage, this.page);
            });   
          }

  ngOnInit() {
  }

  async getFlashCardList(prepage: String, pageNo: String){
    this.restProvider.getFlashList(this.baseUrl, {perpage_record: prepage, page: pageNo})
    .then((result) => {
      this.loadingController.dismiss();
      console.log("FlashCard List result : ", JSON.stringify(result));
      //this.flashCardResponse = result.data.data[0];
    }, (err) => {
      this.loadingController.dismiss();
      console.log(err);
    });
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
