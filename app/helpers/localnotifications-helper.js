"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dialogs = require("ui/dialogs");
var Toast = require("nativescript-toast");
var LocalNotifications = require("nativescript-local-notifications");
var LocalNotificationsHelper = /** @class */ (function () {
    function LocalNotificationsHelper() {
        this.input = {
            "id": "12345",
            "title": "",
            "body": ""
        };
    }
    LocalNotificationsHelper.prototype.showWithSound = function () {
        var _this = this;
        LocalNotifications.requestPermission().then(function (granted) {
            if (granted) {
                LocalNotifications.schedule([{
                        id: _this.input.id,
                        title: _this.input.title,
                        body: _this.input.body,
                        at: new Date(new Date().getTime() + (10 * 1000))
                    }]).then(function () {
                    Toast.makeText("Notification scheduled!").show();
                }, function (error) {
                    console.dir(error);
                });
            }
        });
        // adding a handler, so we can do something with the received notification.. in this case an alert
        LocalNotifications.addOnMessageReceivedCallback(function (notificationData) {
            Dialogs.alert({
                title: "Notification received",
                message: "ID: " + notificationData.id +
                    "\nTitle: " + notificationData.title +
                    "\nBody: " + notificationData.body,
                okButtonText: "Excellent!"
            });
        });
    };
    LocalNotificationsHelper.prototype.continuous = function () {
        LocalNotifications.schedule([{
                id: 2,
                title: 'Cancel me, quickly!',
                body: 'Who thought this would be a good idea!?',
                interval: 'minute',
                sound: null,
                at: new Date(new Date().getTime() + (5 * 1000)),
            }]);
    };
    LocalNotificationsHelper.prototype.cancelAll = function () {
        LocalNotifications.cancelAll();
    };
    return LocalNotificationsHelper;
}());
exports.LocalNotificationsHelper = LocalNotificationsHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxub3RpZmljYXRpb25zLWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvY2Fsbm90aWZpY2F0aW9ucy1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvQ0FBc0M7QUFDdEMsMENBQTRDO0FBQzVDLHFFQUF1RTtBQUV2RTtJQUdFO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLElBQUksRUFBRSxPQUFPO1lBQ2IsT0FBTyxFQUFFLEVBQUU7WUFDWCxNQUFNLEVBQUUsRUFBRTtTQUNiLENBQUM7SUFDRixDQUFDO0lBRUQsZ0RBQWEsR0FBYjtRQUFBLGlCQTBCQztRQXpCQyxrQkFBa0IsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU87WUFDakQsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDVCxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDekIsRUFBRSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDakIsS0FBSyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSzt3QkFDdkIsSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTt3QkFDckIsRUFBRSxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7cUJBQ25ELENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDTCxLQUFLLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3JELENBQUMsRUFBRSxVQUFBLEtBQUs7b0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFRCxrR0FBa0c7UUFDbEcsa0JBQWtCLENBQUMsNEJBQTRCLENBQUMsVUFBQSxnQkFBZ0I7WUFDOUQsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDWixLQUFLLEVBQUUsdUJBQXVCO2dCQUM5QixPQUFPLEVBQUUsTUFBTSxHQUFHLGdCQUFnQixDQUFDLEVBQUU7b0JBQ3JDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLO29CQUNwQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsSUFBSTtnQkFDbEMsWUFBWSxFQUFFLFlBQVk7YUFDN0IsQ0FBQyxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNkNBQVUsR0FBVjtRQUNFLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMzQixFQUFFLEVBQUUsQ0FBQztnQkFDTCxLQUFLLEVBQUUscUJBQXFCO2dCQUM1QixJQUFJLEVBQUUseUNBQXlDO2dCQUMvQyxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsRUFBRSxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBRUQsNENBQVMsR0FBVDtRQUNFLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUFyREQsSUFxREM7QUFyRFksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgRGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tIFwibmF0aXZlc2NyaXB0LXRvYXN0XCI7XHJcbmltcG9ydCAqIGFzIExvY2FsTm90aWZpY2F0aW9ucyBmcm9tIFwibmF0aXZlc2NyaXB0LWxvY2FsLW5vdGlmaWNhdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2NhbE5vdGlmaWNhdGlvbnNIZWxwZXIge1xyXG5cclxuICBwdWJsaWMgaW5wdXQ6IGFueTtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaW5wdXQgPSB7XHJcbiAgICAgIFwiaWRcIjogXCIxMjM0NVwiLFxyXG4gICAgICBcInRpdGxlXCI6IFwiXCIsXHJcbiAgICAgIFwiYm9keVwiOiBcIlwiXHJcbiAgfTtcclxuICB9XHJcblxyXG4gIHNob3dXaXRoU291bmQoKTogdm9pZCB7XHJcbiAgICBMb2NhbE5vdGlmaWNhdGlvbnMucmVxdWVzdFBlcm1pc3Npb24oKS50aGVuKGdyYW50ZWQgPT4ge1xyXG4gICAgICBpZihncmFudGVkKSB7XHJcbiAgICAgICAgICBMb2NhbE5vdGlmaWNhdGlvbnMuc2NoZWR1bGUoW3tcclxuICAgICAgICAgICAgICBpZDogdGhpcy5pbnB1dC5pZCxcclxuICAgICAgICAgICAgICB0aXRsZTogdGhpcy5pbnB1dC50aXRsZSxcclxuICAgICAgICAgICAgICBib2R5OiB0aGlzLmlucHV0LmJvZHksXHJcbiAgICAgICAgICAgICAgYXQ6IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgKDEwICogMTAwMCkpXHJcbiAgICAgICAgICB9XSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgVG9hc3QubWFrZVRleHQoXCJOb3RpZmljYXRpb24gc2NoZWR1bGVkIVwiKS5zaG93KCk7XHJcbiAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5kaXIoZXJyb3IpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICB9KTtcclxuXHJcbiAgICAvLyBhZGRpbmcgYSBoYW5kbGVyLCBzbyB3ZSBjYW4gZG8gc29tZXRoaW5nIHdpdGggdGhlIHJlY2VpdmVkIG5vdGlmaWNhdGlvbi4uIGluIHRoaXMgY2FzZSBhbiBhbGVydFxyXG4gICAgTG9jYWxOb3RpZmljYXRpb25zLmFkZE9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2sobm90aWZpY2F0aW9uRGF0YSA9PiB7XHJcbiAgICAgIERpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgIHRpdGxlOiBcIk5vdGlmaWNhdGlvbiByZWNlaXZlZFwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiSUQ6IFwiICsgbm90aWZpY2F0aW9uRGF0YS5pZCArXHJcbiAgICAgICAgXCJcXG5UaXRsZTogXCIgKyBub3RpZmljYXRpb25EYXRhLnRpdGxlICtcclxuICAgICAgICBcIlxcbkJvZHk6IFwiICsgbm90aWZpY2F0aW9uRGF0YS5ib2R5LFxyXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJFeGNlbGxlbnQhXCJcclxuICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb250aW51b3VzKCk6IHZvaWQge1xyXG4gICAgTG9jYWxOb3RpZmljYXRpb25zLnNjaGVkdWxlKFt7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICB0aXRsZTogJ0NhbmNlbCBtZSwgcXVpY2tseSEnLFxyXG4gICAgICBib2R5OiAnV2hvIHRob3VnaHQgdGhpcyB3b3VsZCBiZSBhIGdvb2QgaWRlYSE/JyxcclxuICAgICAgaW50ZXJ2YWw6ICdtaW51dGUnLFxyXG4gICAgICBzb3VuZDogbnVsbCxcclxuICAgICAgYXQ6IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgKDUgKiAxMDAwKSksIC8vIDUgc2Vjb25kcyBmcm9tIG5vd1xyXG4gICAgfV0pO1xyXG4gIH1cclxuXHJcbiAgY2FuY2VsQWxsKCk6IHZvaWQge1xyXG4gICAgTG9jYWxOb3RpZmljYXRpb25zLmNhbmNlbEFsbCgpO1xyXG4gIH1cclxufVxyXG4iXX0=