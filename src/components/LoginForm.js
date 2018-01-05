import React, { Component } from 'react';

class LoginForm extends Component {
    render() {
        return (
            <form>

                <input
                    placeholder="User Name"
                />

                <input
                    type="password"
                    placeholder="User Name"
                />

                <button type="submit">Log in</button>

            </form>
        )
    }
}

export default LoginForm;
