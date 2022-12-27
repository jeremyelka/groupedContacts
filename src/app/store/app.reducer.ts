import { ActionReducerMap } from '@ngrx/store';
import * as contactDetailActions from './contact-details/contact-details.action';
import * as InsertContact from './contact-details/contact-details.reducer';

export interface AppState {
    insertContact: any;
}

export const appReducer:ActionReducerMap<AppState>= {
  insertContact: InsertContact.contactDetailReducer
};