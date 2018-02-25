import * as Dialogs from "ui/dialogs";
import * as Toast from "nativescript-toast";
import * as LocalNotifications from "nativescript-local-notifications";

export class LocalNotificationsHelper {

  public input: any;

  constructor() {
    this.input = {
      "id": "12345",
      "title": "",
      "body": ""
    };
  }

  showWithSound(): void {
    LocalNotifications.requestPermission().then(granted => {
      if(granted) {
          LocalNotifications.schedule([{
              id: this.input.id,
              title: this.input.title,
              body: this.input.body,
              at: new Date(new Date().getTime() + (10 * 1000))
          }]).then(() => {
              Toast.makeText("Notification scheduled!").show();
          }, error => {
              console.dir(error);
          });
      }
  });

    // adding a handler, so we can do something with the received notification.. in this case an alert
    LocalNotifications.addOnMessageReceivedCallback(notificationData => {
      Dialogs.alert({
        title: "Notification received",
        message: "ID: " + notificationData.id +
        "\nTitle: " + notificationData.title +
        "\nBody: " + notificationData.body,
        okButtonText: "Excellent!"
      });
    });
  }

  continuous(): void {
    LocalNotifications.schedule([{
      id: 2,
      title: 'Cancel me, quickly!',
      body: 'Who thought this would be a good idea!?',
      interval: 'minute',
      sound: null,
      at: new Date(new Date().getTime() + (5 * 1000)), // 5 seconds from now
    }]);
  }

  cancelAll(): void {
    LocalNotifications.cancelAll();
  }
}
