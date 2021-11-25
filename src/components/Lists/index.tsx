import React from "react";
import { Hour, Date,DetailsText, Container, DetailsPointer, Icon, TitlePointer, Pointer} from "./styles";


interface PropsPointerList {
    title: string;
    hours: string;
    date: string;
    type: 'check' | 'clock' 
}

const icon = {
    check: 'check',
    clock: 'clock'
}

export function ListsPointer({
    date,
    title,
    hours,
    type
}: PropsPointerList) {
    
    return (
        <Container>
            <Pointer>
            <DetailsPointer>
                <TitlePointer>{title}</TitlePointer>
            <DetailsText>
                <Date>{date}</Date>
                <Hour>{hours} </Hour>
           </DetailsText>
            </DetailsPointer>
                <Icon name={icon[type]} type={type}/>
            </Pointer>
        </Container>
    )
}