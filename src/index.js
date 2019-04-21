import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { observable, decorate } from 'mobx';
import MyComponent from './MyComponent';

class Account {
    users = [];
}

decorate(Account, {
    users: observable
})

const account = new Account();

account.users.replace(new Array(100000).fill({
    name: 'Jack'
}));

console.log('initial render');

ReactDOM.render(
    <Provider account={account}>
        <MyComponent />
    </Provider>,
    document.getElementById('root')
);

setTimeout(() => {
    console.log('add one');
    account.users.push({
        name: 'Me'
    });
}, 10000);

setTimeout(() => {
    console.log('update one');
    account.users[1] = {
        name: 'Joe'
    };
}, 15000);

setTimeout(() => {
    console.log('unmount all');
    account.users.clear();
}, 20000);
