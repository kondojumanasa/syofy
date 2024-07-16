import React, { useEffect, useState } from 'react';
import {
    Container,
    Navbar,
    NavItem,
    NavLink,
    Content,
    Header,
    Section,
    Footer
} from './styledComponents';

const Dashboard = () => {

    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        // Fetch user profile details from an API endpoint or localStorage
        const fetchUserProfile = async () => {
            try {
                // Example: Fetching user profile from an API endpoint
                const response = await fetch('https://syoft.dev/Api/userlogin/api/userlogin', {
                    method: 'GET',
                    headers: {
                        // Add headers as needed, e.g., authorization token
                        'Content-Type': 'application/json'
                    },
                    // Add credentials if required
                    credentials: 'include'
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserProfile(data); // Set user profile data to state
                } else {
                    console.error('Failed to fetch user profile');
                }
            } catch (error) {
                console.error('Error fetching user profile:', error.message);
            }
        };

        fetchUserProfile();
    }, []); // Empty dependency array ensures this effect runs only once



    return (
        <Container>
            <Navbar>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/profile">Profile</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/settings">Settings</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">Logout</NavLink>
                </NavItem>
            </Navbar>
            <Content>
                <Header>Dashboard</Header>
                <Section>
                    <h2>Welcome to your Dashboard</h2>
                    {userProfile ? (
                        <p>
                            Here you can manage your profile. Your name is {userProfile.user_firstname}{' '}
                            {userProfile.user_lastname}.
                        </p>
                    ) : (
                        <p>Loading user profile...</p>
                    )}
                </Section>
                <Footer>© 2024 Your Company</Footer>
            </Content>
        </Container>
    );
};

export default Dashboard;
