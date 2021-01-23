import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { dictionaryReducer } from './reducers/dictionary';
import { chineseReducer } from './reducers/chinese';
import { recordReducer } from './reducers/record';

// redux state 树的根
let rootReducer = combineReducers({
  dictionary: dictionaryReducer, //字典表管理
  chinesePage: chineseReducer, // 中文
  record: recordReducer, // 学习记录
});

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
