import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { airLineResponse } from "./airLineResponse";
import { ContentsFlights } from "./flights";
import { flightsResponse } from "./flightsResponse";
const baseUrl = "http://localhost:8080/";

@Injectable({
  providedIn: "root",
})
export class flightsApiService {
  constructor(private http: HttpClient) {}

  getAllFlights() {
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    });
    return this.http.get<flightsResponse>(baseUrl + "findByDateAirports", {
      headers: reqHeader,
    });
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
