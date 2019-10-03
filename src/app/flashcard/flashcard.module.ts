import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';
import { LogicService } from '../services/logic.service'
import { IonicModule } from '@ionic/angular';

import { FlashcardPage } from './flashcard.page';

const routes: Routes = [
  {
    path: '',
    component: FlashcardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    IonicStorageModule.forRoot()
  ],
  declarations: [FlashcardPage],
  providers: [LogicService]
})
export class FlashcardPageModule {}
