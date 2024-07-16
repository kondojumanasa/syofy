import React,{useState} from 'react';

//import Home from '../Home';

import {SignUpContainer,Container,Title,Box,SmallTitle,Heading,Btn,Input,Span,Form} from './styledComponents';


function SignUpForm(){
    const [fullname,setFullName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [company,setCompany]=useState('');

    const handleSubmit=(event)=>{
        event.preventdefault();
        console.log('singup:',{fullname,email,password,company});
    };

    return (

           
        <SignUpContainer >
            <Heading > Sign up</Heading>
            <SmallTitle >Already have an account? <Span>Sign in</Span></SmallTitle>

            <Form onSubmit={handleSubmit}>

                <Container >
                <Title >
                    Full name *
                </Title>
                <Input type='text' value={fullname} onChange={(e)=>setFullName(e.value.target)}/>
                </Container>

                <Container >
                    <Title>
                        Email address *
                    </Title>
                    <Input type='text' value={email} onChange={(e)=>setEmail(e.value.target)}/>
                </Container>
                <Container >
                    <Title>
                        Password *
                    </Title>
                    <Input type='password' value={password} onChange={(e)=>setPassword(e.value.target)}/>
                </Container>
                <Container >
                    <Title>
                        Company *
                    </Title>
                    <Input type='text' value={company} onChange={(e)=>setCompany(e.value.target)}/>
                </Container>

                <Box > 
                <Input type='checkbox' />
                <Title> I agree to the <Span style={{color:'blue'}}>Term of Service</Span> and <Span style={{color:'blue'}}>Privacy 
                Policy</Span></Title>
                </Box>

                <Btn>Create your free account</Btn>
            </Form>
        </SignUpContainer>
       
    )
}

export default SignUpForm;