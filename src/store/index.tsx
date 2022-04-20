import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { dictionaryReducer } from './reducers/dictionary';
import { chineseReducer } from './reducers/chinese';
import { englishReducer } from './reducers/english';
import { recordReducer } from './reducers/record';
import { mathSubjectReducer } from './reducers/math';

// redux state 树的根
let rootReducer = combineReducers({
  dictionary: dictionaryReducer, //字典表管理
  chinesePage: chineseReducer, // 中文
  englishPage: englishReducer, // 英文
  record: recordReducer, // 学习记录
  mathSubject: mathSubjectReducer, // 数学题
});

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
