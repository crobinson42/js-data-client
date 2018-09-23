import { DataStore } from "js-data";
import { HttpAdapter } from "js-data-http";
// import {HttpAdapter} from '../../js-data-http/src/index'

const store = new DataStore();

const adapter = new HttpAdapter({
  // node.js dev server
  basePath: "http://localhost:3000"
});

store.registerAdapter("http", adapter, { default: true });

store.defineMapper("user");

// create
store
  .create("user", { name: "John" })
  .then(user => {
    console.log("user.create", user);
    return user.id;
  })
  .catch(err => {
    // todo: how to handle both client and back-end validation messages the same?
    console.log('err', err.response)
    console.log("err", err.message);
  })
  .then((createdId) => {
    // find
    return store.find('user', createdId)
      .then(user => {
        console.log("user.find", user);
        return user.id
      })
      .catch(err => {
        console.log("err", err.message);
      });
  })
  .then((findId) => {
    // findAll
    return store.findAll('user', { name: 'John' })
      .then(user => {
        console.log("user.findAll", user);
        return findId
      })
      .catch(err => {
        console.log("err", err.message);
      });
  })
  .then((findId) => {
    // update
    return store.update('user', findId, { name: 'john-updated' + new Date().toISOString() })
      .then(user => {
        console.log("user.update", user);
        return user.id
      })
      .catch(err => {
        console.log("err", err.message);
      });
  })
  .then((updateId) => {
    window.destroy = function (id) {
      store.destroy('user',id).then((res) => console.log('res', res)).catch(err => console.log('err', err))
    }
  })
  .catch(err => {
    console.log(`
        
        ERROR final catch
    
    `, err)
  })