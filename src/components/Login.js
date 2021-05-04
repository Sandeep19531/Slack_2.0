import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';

function Login() {
    const signIn = e=>{
        e.preventDefault();
        //todo Google sign-in in one line
        auth.signInWithPopup(provider).catch((error)=>
            alert(error.message)
        )
    }; 
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src='https://cdn.brandfolder.io/5H442O3W/at/pl546j-7le8zk-6gwiyo/Slack_Mark.svg' />
                <h1>Sign In</h1>
                <Profile>
                <a target = {"_blank"} href={"https://www.linkedin.com/in/sandeep-chander-62a638167/"}>My LinkedIn</a>
                <a target = {"_blank"} href={"https://github.com/Sandeep19531"}>My Github</a>
                </Profile>
                <Button onClick={signIn}>
                    Sign In with Google
                </Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login;

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items:center
`;
const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align:center;
    background-color: white;
    border-radius:10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);  
    >img{
        object-fit:contain;
        height: 100px;
        margin-bottom:40px;
    }
    > button{
        margin-top:50px;
        text-transform: inherit !important;
        background-color: #0a8448;
        color: white;
        :hover{
            color: black;
        }
    }
`;

const Profile = styled.div`
    display: flex;
    justify-content: space-between;
    >a{
        text-decoration:none;
        cursor:pointer;
        padding : 8px;
        width:  100px;
        text-align: center;
        background-color: blue;
        color: white;
        font-weight: 300px;
        border-radius: 10px;
        margin: 20px 5px 0px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);
        text-transform: inherit !important;
        :hover{
            background-color: white;
            color: blue;
        }
    }
`;