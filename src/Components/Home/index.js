import React from 'react';
import SignUp from '../SignUp/index';



import {Con,Container,Heading,Paragraph,Content} from './styledComponents';




function Home(){
    return (
    <Con>
        <Container >
            <Heading>Welcome to our community</Heading>
            <Paragraph>Fuse helps developers to build organized and well coded dashboard full of beautiful and rich modules. Join 
                us and start building your applications today.
            </Paragraph>
        </Container>
        <SignUp />
    </Con>
    )
}

export default Home;
