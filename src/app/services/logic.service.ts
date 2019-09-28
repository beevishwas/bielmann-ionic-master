import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogicService {

  constructor(public http: HttpClient) {
  }
  Login(baseUrl: String, data) {
    return new Promise((resolve, reject) => {
      this.http.post('http://api.drogerie-bielmann.ch' + '/api/auth/login_keycloak', JSON.stringify(data.params))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getNews(baseUrl: String, data) {
    return new Promise((resolve, reject) => {
      this.http.post('http://bielmann.tecgroup.dyndns.biz' + '/api/news/getNews', JSON.stringify(data.params))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  getFlashList(baseUrl: String, data) {
    return new Promise((resolve, reject) => {
      this.http.post('http://bielmann.tecgroup.dyndns.biz' + '/api/flashcards/getList', JSON.stringify(data.params))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getAllBoard(baseUrl: String, data) {
    return new Promise((resolve, reject) => {
      this.http.post('http://bielmann.tecgroup.dyndns.biz' + '/api/forum/getAllBoards', JSON.stringify(data.params))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getTodoList(baseUrl: String, data) {
    return new Promise((resolve, reject) => {
      this.http.post('http://bielmann.tecgroup.dyndns.biz' + '/api/todo/getAllTasks', JSON.stringify(data.params))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getNewsDetails(baseUrl: String, data) {
    return new Promise((resolve, reject) => {
      this.http.post('http://bielmann.tecgroup.dyndns.biz' + '/api/news/getNewsDetail', JSON.stringify(data.params))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getPointOfSales(baseUrl: String, data) {
    return new Promise((resolve, reject) => {
      this.http.post('http://bielmann.tecgroup.dyndns.biz' + '/api/pointofsales/getList', JSON.stringify(data.params))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
