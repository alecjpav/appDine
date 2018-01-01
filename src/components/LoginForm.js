import React, { Component } from 'react';

class LoginForm extends Component {
    render() {
        return (
            <form>

                <input
                    placehodler="User Name"
                />

                <input
                    type="password"
                    placehodler="User Name"
                />

                <button type="submit">Log in</button>

            </form>
        )
    }
}

export default LoginForm;