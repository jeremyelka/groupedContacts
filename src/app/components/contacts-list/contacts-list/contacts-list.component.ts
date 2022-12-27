import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ApiService } from 'src/app/services/api/api.service';
import { Store } from '@ngrx/store';
import * as allActions from 'src/app/store/contact-details/contact-details.action';
import {ContactModel} from 'src/app/models/contact-details.model';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class ContactsListComponent implements OnInit {
  allContactlength?: number;
  title: string=environment.title;
  tabs: string[] = environment.tabs;
  aplhabeticList?: any = {};

  constructor(private apiService:ApiService,private store : Store<ContactModel>){}

  ngOnInit(): void {
    this.getContactList();
  }

  getContactList(){
    let params = new HttpParams();
    params = params.append('results',environment.numberCards);
    this.apiService.get(environment.userUrl,params).subscribe(res=>{
      this.allContactlength = res?.results?.length;
      this.sortToAlphabetic(res?.results);
    })
  }

  sortToAlphabetic(data:[]){
    data.forEach((element:any) => {
      if(!this.aplhabeticList[element?.name?.first[0].toLowerCase()]){
        this.aplhabeticList[element?.name?.first[0].toLowerCase()]=[];
      }
      this.aplhabeticList[element?.name?.first[0].toLowerCase()].push({firstname:element.name.first,lastname:element.name.last,country:element.location.country,phone:element.phone,email:element.email,birth:element.dob.date,username:element.login.username,img:element.picture.large})
    });
  }

  inserContact(el:ContactModel){
    this.store.dispatch(new allActions.InsertContact({firstname:el.firstname,lastname:el.lastname,country:el.country,phone:el.phone,email:el.email,birth:el.birth,username:el.username,img:el.img}));
  }


}
