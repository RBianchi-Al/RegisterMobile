import React from 'react';

import { TouchableOpacityProps } from 'react-native';
import {Container, Title} from './styles'

interface PropsButton extends TouchableOpacityProps{
    title: string
}

export function ButtonSubmit({title, ...rest}: PropsButton){
    return (
        <Container {...rest}>
            <Title>{title}</Title>
        </Container>
    )
}