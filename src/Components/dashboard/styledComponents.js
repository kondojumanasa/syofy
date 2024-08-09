import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;


export const Navbar = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #2c3e50;
    padding: 1rem;
`;

export const NavItem = styled.div`
    list-style: none;
`;

export const NavLink = styled.a`
    color: #ecf0f1;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;

    &:hover {
        background-color: #34495e;
        color: #ecf0f1;
    }
`;

export const Content = styled.div`
    flex: 1;
    padding: 2rem;
    background-color: #ecf0f1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    color: #2c3e50;
    text-align: center;
`;

export const Section = styled.section`
    flex: 1;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 2rem 0;

    h2 {
        margin-top: 0;
        color: #2c3e50;
    }

    p {
        color: #7f8c8d;
    }
`;

export const Footer = styled.footer`
    text-align: center;
    padding: 1rem;
    background-color: #2c3e50;
    color: #ecf0f1;
    border-radius: 10px;
`;
