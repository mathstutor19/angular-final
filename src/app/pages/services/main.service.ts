import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private _url = 'http://localhost:3000/boards';
  constructor(private http: HttpClient) {}

  getBoards() {
    return this.http.get(this._url);
  }

  getSpecificBoard(id: string) {
    return this.http.get(this._url + '/' + id);
  }

  create(newBoard: object) {
    return this.http.post(this._url, newBoard);
  }

  update(board: any, newBoard: any) {
    return this.http.put(this._url + '/' + board.id, newBoard);
  }

  delete(board: any) {
    return this.http.delete(this._url + '/' + board.id);
  }
}
