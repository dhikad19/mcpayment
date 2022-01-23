import React from 'react'
import { Link } from 'react-router-dom'
import {
    GoogleLogo,
    FacebookLogo,
    RegisterContainer,
    RegisterWrapper,
    RegisterTop,
    TopText,
    TopLink,
    RegisterCenter,
    RegisterInput,
    RegisterButton,
    RegisterH2,
    RegisterSpan,
    RegisterBottom,
    ButtonFb,
    ButtonGoogle,
    ButtonBottom,
    BottomCredit,
    BottomText,
    Label,
    Submit
} from './RegisterElements';

const Register = () => {
    return (
        <RegisterContainer>
            <RegisterWrapper>
                <RegisterTop>
                    <TopText>Register</TopText>
                    <TopLink>Already have an account? <Link to='login'>Login</Link></TopLink>
                </RegisterTop>
                <RegisterCenter>
                    <RegisterInput type="text" placeholder="Telephone Number" required />
                    <RegisterButton>Send OTP</RegisterButton>
                </RegisterCenter>
                <RegisterH2><RegisterSpan>Or Register With</RegisterSpan></RegisterH2>
                <RegisterBottom>
                    <ButtonBottom>
                        <ButtonFb><FacebookLogo />Facebook</ButtonFb>
                        <ButtonGoogle><GoogleLogo />Google</ButtonGoogle>
                    </ButtonBottom>
                </RegisterBottom>
                <BottomCredit>
                    <BottomText>
                        With Register, <Link to='#'>I agree to the terms and policies of MC Payment,</Link> & <Link to="#">Privacy Policy</Link>
                    </BottomText>
                </BottomCredit>
            </RegisterWrapper>
            <Label><Submit type="checkbox" value="agreed" /> I want to get exclusive offers and promotions from MC Payment</Label>
        </RegisterContainer>
    )
}

export default Register;
