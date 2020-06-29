import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { airLineResponse } from "./airLineResponse";
import { TokenResponse } from "./tokenResponse";
const baseUrl = "http://localhost:8080/api/auth/signin";

@Injectable({
  providedIn: "root",
})
export class jsonTokenService {
  constructor(private http: HttpClient) {}

  getJsonToken() {
    var data = {
      userName: "saqib",
      userPassword: "saqib123",
    };

    return this.http.post<TokenResponse>(baseUrl, data);
  }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data) {
    return this.http.post(baseUrl, data);
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByTitle(title) {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
}
