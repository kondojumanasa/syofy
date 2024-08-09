import styled from 'styled-components';



export const Container1=styled.div`

    height: 70%;
    width: 30%;
    background-color: #ffffff;
    padding: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items:center;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`

export const Head=styled.p`
font-size:15px;
`
export const LoginHead=styled.h1`
font-size:20px;
color:blue;
`


export const Input=styled.input`
border:1px solid #A2BFF4;
padding:5px;
`

export const Form=styled.form`

`

export const LoginCon=styled.div`
display:flex;
    flex-direction:column;
    width:230px;
    background-color:;
    ; 
`

export const Button = styled.button`
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 10px;

    &:hover {
        background-color: #0056b3;
    }
`;
