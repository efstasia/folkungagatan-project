import React from 'react';
import { CustomerCard } from '../components/CustomerCard';
import customer1 from '../images/Helena-150x150.jpg';
import customer2 from '../images/Carin-150x150.jpg';
import customer3 from '../images/Jonas-Sahlström-150x150.jpg';
import customer4 from '../images/Emilia-150x150.jpg';
import customer5 from '../images/Jenny-150x150.jpg';
import customer6 from '../images/katya-150x150.jpg';

export const Costumers = () => {
  return (
    <>
      <p className='customer-title'>vad säger kunderna?</p>
      <div className='customer-reviews'>
        <CustomerCard
          customerImage={customer1}
          text='”Vi har samarbetat och varit kund till Tomass länge och vårt förtroende och uppdrag har växt betydligt. Vi vet att vi får bästa möjliga service, kvalité, leverans och viktigast av allt ett personligt förtroende och ansvarstagande. Tomass är professionell, har en hög servicegrad, en lång erfarenhet av AD, trycksaker, och projektledning som vi som kund generöst har fått ta del av. Det är kul och utvecklande att arbeta med Tomass.”'
          secondaryText='Helena Waker
CEO Association of Trade Partners Sweden/Stockholm Fashion District
'
        ></CustomerCard>
        <CustomerCard
          customerImage={customer2}
          text='”Pålitlig, positiv, noggrann, lösningsinriktad och kvalitetsmedveten!
Har anlitat Tomass i många år och alltid varit mycket nöjd. Tomass löser det mesta, oavsett svårighetsgrad eller när det brinner i knuten.”'
          secondaryText='Carin Granlund Olsen
Konsult varumärkes- och marknadskommunikation, Podium AB'
        ></CustomerCard>
        <CustomerCard
          customerImage={customer3}
          text='”During several years I have known and worked with Tomass Lindström, and I have come to know him as both a good colleague and friend.
Tomass is a highly structured person with full customer attention in combination with the gift of getting things done, on time. Therefore, as a customer, you feel safe to work with Tomass knowing that you get the best possible attention and the best final result. ”'
          secondaryText='Jonas Sahlström
Head of Brand at Business Sweden, The Swedish Trade & Invest Council'
        ></CustomerCard>
        <CustomerCard
          customerImage={customer4}
          text='”Tomass är noggrann, trevlig och oerhört kunnig. Jag känner mig alltid trygg med att han levererar i tid och i toppklass. Det är ett privilegium att få jobba med honom! ”'
          secondaryText='Emilia Schönning
Trade Marketing Manager, Röhnisch Sportswear AB'
        ></CustomerCard>
        <CustomerCard
          customerImage={customer5}
          text='”Tomass är otroligt driven och levererar i tid och med högservice, alltid med kundens behov i fokus. Han är en av de mest lösnings orienterade personer jag jobbat med. ”'
          secondaryText='Jenny Bufacchi
Marketing Coordinator, Kasthall'
        ></CustomerCard>
        <CustomerCard
          customerImage={customer6}
          text='”Till Tomass går jag när jag vill få någonting gjort med stor noggrannhet och precision. Tomass personliga engagemang och känsla för detaljer och att han alltid levererar inom budget och i tid gör att han alltid är mitt förstahandsval. Tomass leder projektet med kreativitet, kunnighet och med ett mindset att allt går att lösa.”'
          secondaryText='Katya Högberg
Arkitekt SIR/MSA at Tengbom'
        ></CustomerCard>
      </div>
    </>
  );
};
