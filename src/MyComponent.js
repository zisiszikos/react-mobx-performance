import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

class MyComponent extends Component {
    componentDidMount() {
        console.timeEnd('Time');
    }
    componentDidUpdate() {
        console.timeEnd('Time');
    }
    render() {
        console.time('Time');
        const { users } = this.props;
        return (
            <div>
                <p>Users list:</p>
                <div>
                    {users.map((user, index) => (
                        <UserName name={user.name} index={index} key={index} />
                    ))}
                </div>
            </div>
        );
    }
}

const UserName = ({ name, index }) => {
    return (
        <div>
            <h3>
                {name} {index} <span>is a user. {index * 100}</span>
            </h3>
        </div>
    );
};

export default inject(stores => ({
    users: stores.account.users
}))(observer(MyComponent));
