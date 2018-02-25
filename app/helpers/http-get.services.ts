import { Injectable } from "@angular/core";
import { Observable as RxObservable } from "rxjs/Observable";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

@Injectable()
export class MyHttpGetService {
    private serverUrl = "https://abundolive.se/api/v1/city_events/59a1f5c0a51e4120d6f8dc1b";

    constructor(private http: HttpClient) { }

    getData() {
        let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl, { headers: headers })
            .map(res => res);
    }

    getResponseInfo() {
        let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl, { headers: headers })
            .do(res =>  res);
    }

    private createRequestHeader() {
        let headers = new HttpHeaders();
        // set headers here e.g.
        headers.append("AuthKey", "my-key");
        headers.append("AuthToken", "my-token");
        headers.append("Content-Type", "application/json");

        return headers;
    }
}