import {Component} from '@angular/core'

@Component({
  selector: 'app-server',
  templateUrl: './server.components.html',
  styles:[`
  .online{
  color: aqua;
  }
  `]
})
export class ServerComponent {
  serverId = 10;
  serverStatus = '';

  constructor(){
    this.serverStatus=Math.random()>0.5?'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus ==='offline'? 'red' : 'green';
  }
}
