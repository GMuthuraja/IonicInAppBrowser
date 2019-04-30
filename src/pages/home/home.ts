import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserEvent } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private theInAppBrowser: InAppBrowser) {

  }

  public openWithInAppBrowser(url : string){
    
      let target = "_blank";
      const close_inapp = this.theInAppBrowser.create(url, target);
   
      close_inapp.on("exit").subscribe((ev: InAppBrowserEvent) => {
        alert("fdsfs");
      });
  }

  

}
