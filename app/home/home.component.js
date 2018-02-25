"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var localnotifications_helper_1 = require("../helpers/localnotifications-helper");
var http_get_services_1 = require("../helpers/http-get.services");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(myService) {
        this.myService = myService;
        this.LocalNotifications = new localnotifications_helper_1.LocalNotificationsHelper;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.extractData();
        setInterval(function () {
            _this.extractData();
        }, 10000);
    };
    HomeComponent.prototype.extractData = function () {
        var _this = this;
        this.myService.getData()
            .subscribe(function (result) {
            _this.onGetDataSuccess(result);
        }, function (error) {
            _this.onGetDataError(error);
        });
    };
    HomeComponent.prototype.addZero = function (i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    };
    HomeComponent.prototype.onGetDataSuccess = function (res) {
        var _this = this;
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
        res.events.forEach(function (event) {
            _this.currenteventdate = new Date(event.session_added_at);
            //console.log(this.currentdate);
            if (_this.currenteventdate.getHours() == _this.currentdate.getHours()) {
                console.log(event.session_added_at);
                _this.LocalNotifications.showWithSound();
            }
        });
    };
    HomeComponent.prototype.onGetDataError = function (error) {
        var body = error.json() || "";
        var err = body.error || JSON.stringify(body);
        console.log("onGetDataError: " + err);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            providers: [http_get_services_1.MyHttpGetService]
        }),
        __metadata("design:paramtypes", [http_get_services_1.MyHttpGetService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxrRkFBZ0Y7QUFFaEYsa0VBQWdFO0FBUWhFO0lBV0ksdUJBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBRy9DLHVCQUFrQixHQUFHLElBQUksb0RBQXdCLENBQUM7SUFGbEQsQ0FBQztJQUlELGdDQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixXQUFXLENBQUM7WUFDUixLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFO2FBQ25CLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDZCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxFQUFFLFVBQUMsS0FBSztZQUNMLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU8sK0JBQU8sR0FBZixVQUFnQixDQUFDO1FBQ2IsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDVCxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNoQixDQUFDO1FBQ0QsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFTyx3Q0FBZ0IsR0FBeEIsVUFBeUIsR0FBRztRQUE1QixpQkFzQkM7UUFyQkc7Ozs7O1VBS0U7UUFDRixtQkFBbUI7UUFDbkIsMERBQTBEO1FBQzFELDBCQUEwQjtRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFOUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO1lBQ3hCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUN6RCxnQ0FBZ0M7WUFDaEMsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQSxDQUFDO2dCQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUNwQyxLQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDNUMsQ0FBQztRQUVMLENBQUMsQ0FBQyxDQUFDO0lBRUgsQ0FBQztJQUVPLHNDQUFjLEdBQXRCLFVBQXVCLEtBQXFCO1FBQ3hDLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDaEMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQW5FUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztTQUNoQyxDQUFDO3lDQVlpQyxvQ0FBZ0I7T0FYdEMsYUFBYSxDQW9FekI7SUFBRCxvQkFBQztDQUFBLEFBcEVELElBb0VDO0FBcEVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgTG9jYWxOb3RpZmljYXRpb25zSGVscGVyIH0gZnJvbSBcIi4uL2hlbHBlcnMvbG9jYWxub3RpZmljYXRpb25zLWhlbHBlclwiO1xyXG5cclxuaW1wb3J0IHsgTXlIdHRwR2V0U2VydmljZSB9IGZyb20gXCIuLi9oZWxwZXJzL2h0dHAtZ2V0LnNlcnZpY2VzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHByb3ZpZGVyczogW015SHR0cEdldFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwdWJsaWMgaG9zdDogc3RyaW5nO1xyXG4gICAgcHVibGljIHVzZXJBZ2VudDogc3RyaW5nO1xyXG4gICAgcHVibGljIG9yaWdpbjogc3RyaW5nO1xyXG4gICAgcHVibGljIHVybDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50ZGF0ZTogRGF0ZTtcclxuICAgIHByaXZhdGUgY3VycmVudGhvdXI6IHN0cmluZztcclxuICAgIHByaXZhdGUgY3VycmVudGV2ZW50ZGF0ZTogRGF0ZTtcclxuICAgIHByaXZhdGUgY3VycmVudGV2ZW50aG91cjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbXlTZXJ2aWNlOiBNeUh0dHBHZXRTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgTG9jYWxOb3RpZmljYXRpb25zID0gbmV3IExvY2FsTm90aWZpY2F0aW9uc0hlbHBlcjtcclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmV4dHJhY3REYXRhKCk7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmV4dHJhY3REYXRhKCk7XHJcbiAgICAgICAgfSwgMTAwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGV4dHJhY3REYXRhKCkge1xyXG4gICAgICAgIHRoaXMubXlTZXJ2aWNlLmdldERhdGEoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25HZXREYXRhU3VjY2VzcyhyZXN1bHQpO1xyXG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25HZXREYXRhRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFplcm8oaSkge1xyXG4gICAgICAgIGlmIChpIDwgMTApIHtcclxuICAgICAgICAgICAgaSA9IFwiMFwiICsgaTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkdldERhdGFTdWNjZXNzKHJlcykge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgdGhpcy5ob3N0ID0gcmVzLmhlYWRlcnMuSG9zdDtcclxuICAgICAgICB0aGlzLnVzZXJBZ2VudCA9IHJlcy5oZWFkZXJzW1wiVXNlci1BZ2VudFwiXTtcclxuICAgICAgICB0aGlzLm9yaWdpbiA9IHJlcy5vcmlnaW47XHJcbiAgICAgICAgdGhpcy51cmwgPSByZXMudXJsO1xyXG4gICAgICAgICovXHJcbiAgICAgICAgLy9jb25zb2xlLmRpcihyZXMpO1xyXG4gICAgICAgIC8vVE9ETyBsb2dpayBzb20gaMOkbXRhciBldmVudHMgc29tIGxhZ3RzIGluIHNlbmFzdGUgdGltbWVuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXMuZXZlbnRzKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgIFxyXG4gICAgICAgIHJlcy5ldmVudHMuZm9yRWFjaChldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ZXZlbnRkYXRlID0gbmV3IERhdGUoZXZlbnQuc2Vzc2lvbl9hZGRlZF9hdCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRkYXRlKTtcclxuICAgICAgICBpZih0aGlzLmN1cnJlbnRldmVudGRhdGUuZ2V0SG91cnMoKSA9PSB0aGlzLmN1cnJlbnRkYXRlLmdldEhvdXJzKCkpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudC5zZXNzaW9uX2FkZGVkX2F0KTtcclxuICAgICAgICAgICAgdGhpcy5Mb2NhbE5vdGlmaWNhdGlvbnMuc2hvd1dpdGhTb3VuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pO1xyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkdldERhdGFFcnJvcihlcnJvcjogUmVzcG9uc2UgfCBhbnkpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0gZXJyb3IuanNvbigpIHx8IFwiXCI7XHJcbiAgICAgICAgY29uc3QgZXJyID0gYm9keS5lcnJvciB8fCBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uR2V0RGF0YUVycm9yOiBcIiArIGVycik7XHJcbiAgICB9XHJcbn1cclxuIl19