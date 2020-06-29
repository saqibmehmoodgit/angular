import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ApiResponse } from "./airportsResponse";
const baseUrl = "http://localhost:8080/";

@Injectable({
  providedIn: "root",
})
export class CustomerBooking {
  constructor(private http: HttpClient) {}

  create(data) {
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    });
    return this.http.post(baseUrl + "saveBooking", data, {
      headers: reqHeader,
    });
  }

  // getAllAilrLines() {
  //   return this.http.get<ApiResponse>(baseUrl + "airline");
  // }

  // get(id) {
  //   return this.http.get(`${baseUrl}/${id}`);
  // }

  // update(id, data) {
  //   return this.http.put(`${baseUrl}/${id}`, data);
  // }

  // delete(id) {
  //   return this.http.delete(`${baseUrl}/${id}`);
  // }

  // deleteAll() {
  //   return this.http.delete(baseUrl);
  // }

  // findByTitle(title) {
  //   return this.http.get(`${baseUrl}?title=${title}`);
  // }
}
