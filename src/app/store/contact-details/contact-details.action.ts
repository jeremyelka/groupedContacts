import { Action } from '@ngrx/store';
import {ContactModel} from 'src/app/models/contact-details.model';
export const INSERT_CONTACT_DETAIL = '[contactDetailState] INSERT_CONTACT_DETAIL';

export class InsertContact implements Action {
    readonly type = INSERT_CONTACT_DETAIL;
    constructor(public payload: ContactModel ) {}
  }

export type InsertContactActions = | InsertContact