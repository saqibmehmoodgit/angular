import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ApiResponse } from "./airportsResponse";
const baseUrl = "http://localhost:8080/";

@Injectable({
  providedIn: "root",
})
export class ApiCallService {
  constructor(private http: HttpClient) {}

  getAll() {
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer  " + sessionStorage.getItem("token"),

      //  eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYXFpYiIsImlhdCI6MTU5MzQ0NzY2MiwiZXhwIjoxNTkzNTM0MDYyfQ.3hcGTK0G8NNj2Zhu8d5zs_pqW9OIy-dJmey-Ma3ieUrzZPd-XnyHDdhnRIUiw7r_Il7ZfShAK0qr2TdqUilXVA
    });
    return this.http.get<ApiResponse>(baseUrl + "airPorts", {
      headers: reqHeader,
    });
  }

  // getAllAilrLines() {
  //   return this.http.get<ApiResponse>(baseUrl + "airline");
  // }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data) {
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer  " + sessionStorage.getItem("token"),

      //  eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYXFpYiIsImlhdCI6MTU5MzQ0NzY2MiwiZXhwIjoxNTkzNTM0MDYyfQ.3hcGTK0G8NNj2Zhu8d5zs_pqW9OIy-dJmey-Ma3ieUrzZPd-XnyHDdhnRIUiw7r_Il7ZfShAK0qr2TdqUilXVA
    });
    return this.http.post(baseUrl + "saveflights", data, {
      headers: reqHeader,
    });
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
