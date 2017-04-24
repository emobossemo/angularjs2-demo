import { ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import * as person from './hy/person';

export interface State {
  person: person.State
}

const reducers = {
	person: person.reducer
}

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (false/*environment.production*/) {
    // return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}