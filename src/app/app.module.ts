import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ServerComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { AlertsComponent } from './alerts/alerts.component';
import { warningAlertsComponent } from './alerts/warningAlerts/warningAlerts.component';
import {winningAlertsComponent} from "./alerts/winningAlerts/winningAlerts.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AlertsComponent,
    warningAlertsComponent,
    winningAlertsComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
