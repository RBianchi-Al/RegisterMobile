import React from 'react';
import {Container,
        Photo,
        TextHello,
        UserInfo,
        UserDetail,
        TextName,
        Header,
        UserWrapper,
        HighlightCards,
        HighlightList,
        Icon,} from './styles';
import { CardHours } from '../../components/Cards';
import { ListsPointer } from '../../components/Lists';


export function Home(){
 
    return (
        <Container>
            <Header>
            <UserWrapper>
               <UserInfo>
               <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/48865223?v=4' }}></Photo>
                   <UserDetail>
                       <TextHello>Olá,</TextHello>
                       <TextName>Renata</TextName>
                    </UserDetail>
                </UserInfo>
                <Icon name="power"/>
            </UserWrapper>
           </Header>
        <HighlightCards>
            <CardHours/>
        </HighlightCards>
        <HighlightList>
            <ListsPointer
             date = "12/10/2021"
             title = "Saída Almoço"
             hours = "12h30m"
             type = "clock"

            />
            <ListsPointer
              date = "12/10/2021"
              title = "Entrada manhã"
              hours = "12h30m"
              type = "check"
            />
            <ListsPointer
            
            date = "11/10/2021"
            title = "Saída Tarde"
            hours = "12h30m"
            type = "check"
            />
            <ListsPointer
              date = "12/10/2021"
              title = "Entrada Tarde"
              hours = "12h30m"
              type = "check"
            />

<           ListsPointer
              date = "12/10/2021"
              title = "Saída Manhã"
              hours = "12h30m"
              type = "check"
            />  
           
        </HighlightList>
        </Container>
    )
}