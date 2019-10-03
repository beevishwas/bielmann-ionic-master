import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogicService {

  constructor(public http: HttpClient) {
  }
  Login(baseUrl: String, data) {
    return new Promise((resolve, reject) => {
      this.http.post(baseUrl + '/api/auth/login_keycloak', data, {
        headers:{
          'content':"application/json",
          'content-type':"application/x-www-form-urlencoded"
        }
      })
        .subscribe(res => {
          console.log("Login result : ", JSON.stringify(res));
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
    console.log("Flash Base : ", baseUrl);
    // let params = new HttpParams();
    // params.set('perpage_record', JSON.stringify(prePageRecord));
    // params.set('page', JSON.stringify(page));
    return new Promise((resolve, reject) => {
      this.http.post(baseUrl + '/api/flashcards/getList', data,
      {
        headers:{
          'content':"application/json",
          'content-type':"application/x-www-form-urlencoded",
          'Authorization': "Bearer eyJhbGciOiJFUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJSdmNUMU9LMzllYmhpUjJBNGg0dmZ6WUdnRWowb1R5Wk0ta2FJeEJJVjZRIn0.eyJqdGkiOiIyZWQxZmJkZS02ZDY3LTQyYmYtOWQwNi0yMjViMjU0Y2U5MzAiLCJleHAiOjE1NzAxMjM5NzAsIm5iZiI6MCwiaWF0IjoxNTcwMTIzNjcwLCJpc3MiOiJodHRwOi8vMTAuNDQuMy40OjgwODAvYXV0aC9yZWFsbXMvYmllbG1hbm4iLCJhdWQiOiJhZG1pbi1jbGkiLCJzdWIiOiI3ZjU0MmQzYy01NWFiLTQ1YTUtYjg4My02ODQzMDg5NTFkMGMiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhZG1pbi1jbGkiLCJhdXRoX3RpbWUiOjAsInNlc3Npb25fc3RhdGUiOiJmMzg4MGJjMS1kMzg4LTQyNjAtYTcyYi1lYWRkMDQzZWNiN2EiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVzb3VyY2VfYWNjZXNzIjp7fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJUZXN0MSBUZXN0MSIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3R0ZXN0MSIsImdpdmVuX25hbWUiOiJUZXN0MSIsImZhbWlseV9uYW1lIjoiVGVzdDEiLCJlbWFpbCI6InRlc3R0ZXN0MUBtYWlsLmRyb2dlcmllLWJpZWxtYW5uLmNoIn0.MEUCIEC3Poyr550cv_21z81H80miXw3f7htZqG67KoN87AGnAiEA0AUeUw6C5oQGy8YHHyJJ8g1W3YIifUG4p4w7V8ExboA"
        }
      })
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
