import { combineReducers } from 'redux';
import reports from './reportsReducer';

const allReducers= combineReducers({
  reports
});

export default allReducers;