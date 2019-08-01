import { Component} from '@angular/core';
import  { AccountService} from '../account.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers:[LoggingService]
})
export class NewAccountComponent {

 constructor(private accountSrv:AccountService){
   this.accountSrv.statusUpdated.subscribe((status:string)=>alert('New Status '+status));
 }

  onCreateAccount(accountName: string, accountStatus: string) {
   this.accountSrv.addAccount(accountName,accountStatus);
    

  
  }
}
