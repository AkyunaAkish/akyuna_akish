import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import sideNavReducer from '../components/Shared/reducers/sideNav';
import topNavReducer from '../components/Shared/reducers/topNav';
import dimensionsReducer from '../components/Shared/reducers/dimensions';

const rootReducer = combineReducers({
  form: formReducer,
  sideNav: sideNavReducer,
  topNav: topNavReducer,
  dimensions: dimensionsReducer
});

export default rootReducer;