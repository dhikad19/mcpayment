import React from 'react';
import { Link } from 'react-router-dom';
import {
    GoogleLogo,
    FacebookLogo,
    LoginContainer,
    LoginWrapper,
    LoginTop,
    TopText,
    TopLink,
    LoginCenter,
    LoginInput,
    LoginButton,
    CenterLink,
    CenterTextLink,
    LoginH2,
    LoginSpan,
    LoginBottom,
    ButtonFb,
    ButtonGoogle,
    ButtonBottom,
} from './LoginElements'

const LogIn = () => {
    return (
        <LoginContainer>
            <LoginWrapper>
                <LoginTop>
                    <TopText>Login</TopText>
                    <TopLink>Don't have an account? <Link to='register'>Register</Link></TopLink>
                </LoginTop>
                <LoginCenter>
                    <LoginInput type="text" placeholder="Telephone/Username/Email" required />
                    <LoginInput type="password" placeholder="Password" required />
                    <LoginButton>Login</LoginButton>
                </LoginCenter>
                <CenterLink>
                    <CenterTextLink>Forgot Password</CenterTextLink>
                    <CenterTextLink>Login with SMS</CenterTextLink>
                </CenterLink>
                <LoginH2><LoginSpan>Or Login With</LoginSpan></LoginH2>
                <LoginBottom>
                    <ButtonBottom>
                        <ButtonFb><FacebookLogo />Facebook</ButtonFb>
                        <ButtonGoogle><GoogleLogo />Google</ButtonGoogle>
                    </ButtonBottom>
                </LoginBottom>
            </LoginWrapper>
        </LoginContainer>
    )
}

export default LogIn
