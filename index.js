import { DataStore } from "js-data";
// import { DataStore } from "./js-data/src/";
// import { HttpAdapter } from "js-data-http";
// import {HttpAdapter} from '../../js-data-http/src/index'
// import { Definitions, Store } from '@therms/models';
import {LocalStorageAdapter} from 'js-data-localstorage'


const store = new DataStore();
window.Store = store;

const adapter = new LocalStorageAdapter();
// const adapter = new HttpAdapter({
//   basePath: "http://localhost:3000"
// });

store.registerAdapter('localstorage', adapter, { default: true });
// store.registerAdapter("http", adapter, { default: true });


store.defineMapper('user', {});

/*****************************/

window.User = Store.as('user');



/*****************************/

function runTest() {
  store
    .create("user", { name: "John" })
    .then(user => {
      console.log("user.create", user);
      return user.id;
    })
    .catch(err => {
      // todo: how to handle both client and back-end validation messages the same?
      console.log("err", err.response);
      console.log("err", err.message);
    })
    .then(createdId => {
      // find
      return store
        .find("user", createdId)
        .then(user => {
          console.log("user.find", user);
          return user.id;
        })
        .catch(err => {
          console.log("err", err.message);
        });
    })
    .then(findId => {
      // findAll
      return store
        .findAll("user", { name: "John" })
        .then(user => {
          console.log("user.findAll", user);
          return findId;
        })
        .catch(err => {
          console.log("err", err.message);
        });
    })
    .then(findId => {
      // update
      return store
        .update("user", findId, {
          name: "john-updated" + new Date().toISOString(),
          organization: "5ba71c35af8ad44e6fd7478a"
        })
        .then(user => {
          console.log("user.update", user);
          return user.id;
        })
        .catch(err => {
          console.log("err", err.message);
        });
    })
    .then(updateId => {
      window.destroy = function(id) {
        store
          .destroy("user", id)
          .then(res => console.log("res", res))
          .catch(err => console.log("err", err));
      };
    })
    .catch(err => {
      console.log(
        `

        ERROR final catch

    `,
        err
      );
    });
}
window.runTest = runTest;
