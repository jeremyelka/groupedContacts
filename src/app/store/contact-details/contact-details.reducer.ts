import * as contactDetailActions from './contact-details.action';
import {ContactModel} from 'src/app/models/contact-details.model';


export interface State {
  contactDetail : ContactModel,
}

export function contactDetailReducer(state : State,action:any){
  switch (action.type) {
        case contactDetailActions.INSERT_CONTACT_DETAIL:
          return {
            ...state,
            ...action.payload
          };
    }
}