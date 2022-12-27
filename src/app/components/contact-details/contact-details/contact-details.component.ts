import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import * as allActions from 'src/app/store/contact-details/contact-details.action';
import {ContactModel} from 'src/app/models/contact-details.model';
import { Subscription } from 'rxjs';
import * as fromApp from 'src/app/store/app.reducer';
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})

export class ContactDetailsComponent implements OnInit,OnDestroy {
  constructor(private store : Store<fromApp.AppState>){}

  user?: ContactModel;
  subscriber? : Subscription;
  @Output() closeEvent = new EventEmitter<string>();
  
  ngOnInit() {
    this.listen(); 
  }

  ngOnDestroy() {
    this.subscriber?.unsubscribe();
  }

  listen(){
    this.subscriber = this.store.select('insertContact').subscribe(result=>{
      this.user=result;
    }); 
  }

  drawerClose(){
    this.closeEvent.emit('close');
  }
}
