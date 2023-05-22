import { useState } from "react";
import styled from 'styled-components';


export default function Card({num, card, cardstatus, setcardstatus}) {
    const [txt, settxt] = useState('Pergunta '+(num+1));
    const [status, setstatus] = useState(0);


    //console.log("card.question ="+card.question);
    console.log("cardstatus ="+cardstatus);
    
    function clickCard (i, s) {
        console.log("Entrou clickCard s="+s);
        if (s == 0) { 
            settxt(card.question);
            setstatus(1);
        }
        if (s == 1) { 
            settxt(card.answer);
            setstatus(2);
        }
        if (s > 1) {
            settxt('Pergunta '+(num+1));
            setstatus(s+1);
        }
    }
    
    if (status == 0) {
        console.log("txt ="+txt+" status ="+status);
        return(
        <FlashCard onClick={() => clickCard(num, status)}>
            <h1> {txt} </h1>
            <img src="../assets/seta_play.png"/>

        </FlashCard> 

        );  
    }
    if (status == 1) {
        console.log("txt ="+txt+" status ="+status);
        return(
        <FlashCardOpen>
            <h1> {txt} </h1>
            <FlashCardOpenTurnAround onClick={() => clickCard(num, status)}>
            <img src="../assets/seta_virar.png"/>
            </FlashCardOpenTurnAround>

        </FlashCardOpen>
        );
    }
    if (status == 2) {
        console.log("txt ="+txt+" status ="+status);
        return(
            <FlashCardOpen>
            <h1> {txt} </h1>
              <FlashCardOpenButtons>
                <B1>Não lembrei</B1>
                <B2>Quase não lembrei</B2>
                <B3>Zap</B3>
              </FlashCardOpenButtons>
            </FlashCardOpen>
        );
    }

}

  //cardStatus 0 = not answer | 1 - Open Question Card | 2 - Answer Open with buttons | 3 = answer almost ok | 4 = answer ok | 5 = answer not ok

const FlashCard = styled.div` 
  margin-bottom: 25px;
  width: 300px;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:#FFFFFF;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  h1 {
    margin-left: 15px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }

  h2 {
    margin-left: 15px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-decoration-line: line-through;
    color: #FF922E;
  }

  h3 {
    margin-left: 15px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-decoration-line: line-through;
    color: #2FBE34;
  }

  h4 {
    margin-left: 15px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-decoration-line: line-through;
    color: #FF3030;
  }
  img {
    width: 20px;
    height: 23px;
    margin-right: 22px;
  }
`;  

const FlashCardOpen = styled.div` 
  width: 299px;
  height: 131px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 25px;

  h1 {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    display:flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 18px;
    margin-left: 15px;
  }
`;

const FlashCardOpenTurnAround = styled.div` 
  display: flex; 
  justify-content: flex-end;
  align-items: center;

  img {
    width: 30px;
    height: 20px;
    margin-right: 15px;
    margin-bottom: 6px;
`;

const FlashCardOpenButtons = styled.div` 
    display: flex; 
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    margin-left: 17px;
    margin-right: 17px;
  
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;
`;

const B1 = styled.div` 
    background: #FF3030;
    border-radius: 5px;
    border-color: #FF3030;;
    width: 85.17px;
    height: 37.17px;
    color: #FFFFFF;
`;
  
const B2 = styled.div` 
    background: #FF922E;
    border-radius: 5px;
    border-color: #FF922E;
    width: 85.17px;
    height: 37.17px;
    color: #FFFFFF;
`;
  
const B3 = styled.div` 
    background: #2FBE34;
    border-radius: 5px;
    border-color: #2FBE34;
    width: 85.17px;
    height: 37.17px;
    color: #FFFFFF;
`;