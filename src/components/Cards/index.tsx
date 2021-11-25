import React, { useEffect, useState } from 'react';

import {Container,
        Header,
        Icon,
        TitleHours,
        HoursNow} from './styles';
const date = new Date();
export function CardHours(){
    
 const [time, setTime] = useState({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      });
    
      useEffect(() => { 
        const timer = setInterval(() => {
          const date = new Date();
          setTime({
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds()
          });
        }, 1000);
        
        return () => clearInterval(timer);
      }, []);
   return (
    <Container>
        <HoursNow>Clique para registrar</HoursNow>
       <Header>
            <TitleHours> {time.hours}:{time.minutes}:{time.seconds}</TitleHours>
        </Header> 
    </Container>
   )
}