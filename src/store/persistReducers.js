import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persitedReducer = persistReducer({
    key: 'shorturl',
    storage,
    whitelist: ['auth', 'user'],
  },
  reducers);

  return persitedReducer;
};
