import { Component, OnInit } from "@angular/core";

import { LocalNotificationsHelper } from "../helpers/localnotifications-helper";

import { MyHttpGetService } from "../helpers/http-get.services";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    providers: [MyHttpGetService]
})
export class HomeComponent implements OnInit {

    public host: string;
    public userAgent: string;
    public origin: string;
    public url: string;
    private currentdate: Date;
    private currenthour: string;
    private currenteventdate: Date;
    private currenteventhour: string;

    constructor(private myService: MyHttpGetService) {
    }

    LocalNotifications = new LocalNotificationsHelper;

    ngOnInit(): void {
        this.extractData();
        setInterval(() => {
            this.extractData();
        }, 10000);
    }

    extractData() {
        this.myService.getData()
            .subscribe((result) => {
                this.onGetDataSuccess(result);
            }, (error) => {
                this.onGetDataError(error);
            });
    }

    private addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    private onGetDataSuccess(res) {
        /*
        this.host = res.headers.Host;
        this.userAgent = res.headers["User-Agent"];
        this.origin = res.origin;
        this.url = res.url;
        */
        //console.dir(res);
        //TODO logik som hämtar events som lagts in senaste timmen
        //console.log(res.events);
        this.currentdate = new Date();
       
        res.events.forEach(event => {
        this.currenteventdate = new Date(event.session_added_at);
        //console.log(this.currentdate);
        if(this.currenteventdate.getHours() == this.currentdate.getHours()){
            console.log(event.session_added_at);
            this.LocalNotifications.showWithSound();
        }
        
    });
       
    }

    private onGetDataError(error: Response | any) {
        const body = error.json() || "";
        const err = body.error || JSON.stringify(body);
        console.log("onGetDataError: " + err);
    }
}
