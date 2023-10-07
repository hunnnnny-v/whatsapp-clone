import styled from "styled-components";
import React, { useState } from "react";
import { SearchContainer} from "./ContactList";
import { messagesList } from "../Data";


const Container = styled.div`
display:flex;
flex-direction:column;
height:100%;
flex:2;
background-color:#f6f7f8;
`;

const ProfileHeader = styled.div`
display:flex;
flex-direction:row;
background-color:#ededed;
padding:10px;
align-items:center;
gap:10px;
`;
const ProfileImage = styled.img`
width:40px;
height:40px;
border-radius:50%;
`;
const ChatBox= styled.div`
display:flex;
background:#f0f0f0;
padding:10px;
align-items:center;
bottom:0;
`;

const EmojiImage = styled.img`
width:30px;
height:28px;
opacity:0.4;
cursor:pointer;
`;

const MessageContainer = styled.div`
display:flex;
flex-direction:column;
height:100%;
background:#e5ddd6;
`;

const MessageDiv = styled.div`
display:flex;
margin:5px 16px;
justify-content:${(props)=>(props.isYours?'flex-end' : 'flex-start')};
`;

const Message = styled.div`
background:${(props)=>(props.isYours?"#daf8cb" : "white") };
max-width:50%;
color:#303030;
padding:8px 10px;
font-size:19px;
`;


const Input = styled.input`
  flex: 1;
  outline: none;
  border: none;
  font-size: 19px;
`;

const SendButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;
const Conversation = () =>{
    const [message, setMessage] = useState(""); 


    
    const sendMessage = () => {
        // Function to send a message
        if (message.trim() !== "") {
          messagesList.push({
            senderID: 0,
            text: message.trim()
          });
          setMessage(""); // Clear input field after sending
        }
      };
    return(<Container>
        <ProfileHeader>
            <ProfileImage src="/profile/pp1.jpeg"/>
            Hunny Vaglay
        </ProfileHeader>
        <MessageContainer>
            {messagesList.map((messageData)=> (
                <MessageDiv isYours ={messageData.senderID===0}>
                    <Message isYours={messageData.senderID===0}>{[messageData.text]}</Message>
                </MessageDiv>
            ))}

        </MessageContainer>
        <ChatBox>
            <SearchContainer>
                <EmojiImage src={"/profile/data.svg"}/>
            </SearchContainer>
            <Input
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />
             <SendButton onClick={sendMessage}>📋</SendButton>
        </ChatBox>
        </Container>
    );
};
export default Conversation;