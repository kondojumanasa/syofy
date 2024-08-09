import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container1, LoginHead, Form, Head, Input, LoginCon, Button } from './styledcomponents';


function Login() {
    const [useremail, setUserEmail] = useState('');
    const [userpassword, setUserPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const loginData = {
            user_email: useremail,
            user_password: userpassword
        };

        try {
            const response = await fetch('https://syoft.dev/Api/userlogin/api/userlogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Login successful:', data);
                alert('Login successful!');
                navigate('/dashboard'); // Navigate to dashboard page
            } else {
                alert('Login failed');
            }
        } catch (error) {
            console.error('Error logging in:', error.message);
            alert('An error occurred during login');
        }
    };

    return (
        <Container1>
            <LoginHead>Login</LoginHead>
            <Form onSubmit={handleLogin}>
                <LoginCon>
                    <Head>Email *</Head>
                    <Input
                        type='text'
                        value={useremail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        required
                    />
                </LoginCon>
                <LoginCon>
                    <Head>Password *</Head>
                    <Input
                        type='password'
                        value={userpassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                        required
                    />
                </LoginCon>
                <Button type='submit'>Login</Button>
            </Form>
        </Container1>
    );
}

export default Login;
