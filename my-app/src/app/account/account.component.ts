import { Component, Input} from '@angular/core';
import {AccountService} from '../account.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  

constructor(private accountSrv: AccountService){}

  onSetTo(status: string) {
  
    this.accountSrv.updateStatus(this.id,status);
   this.accountSrv.statusUpdated.emit(status);
  }

}
