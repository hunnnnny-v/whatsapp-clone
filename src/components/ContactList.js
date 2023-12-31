import styled from "styled-components";
import { AiOutlineMore } from "react-icons/ai";
import {AiOutlineUsergroupDelete} from "react-icons/ai";
import {AiOutlineMessage} from "react-icons/ai";
import { FaSyncAlt} from "react-icons/fa";
import { contactList} from "../Data";
const Container = styled.div`
display:flex;
flex-direction:column;
height:100%;
flex:0.8;
`;

const ProfileInfoDiv = styled.div`
display:flex;
flex-direction:row;
background:#ededed;
padding:15px
`; 


const ProfileImage = styled.img`
width:50px;
height:50px;
border-radius:50%
`;

const SearchBox = styled.div`
background:#f6f6f6;
padding:10px;
display:flex;

`;

export const SearchContainer = styled.div`
display:flex;
background:#f6f6f6;
flex-direction:row;
border-radius:16px;
width:100%;
padding:25px 0;


`;
const SearchIcon = styled.img`
width:28px;
height:28px;
padding-left:10px
`;
export const SearchInput = styled.input`
width:100%;
outline:none;
border:none;
font-size:17px;
padding-left:15px;
`;
const ContactItem = styled.div`
    display:flex;
    flex-direction:row;
    border-bottom:1px solid #f2f2f2;
    background:white;
    cursor:pointer;
    padding:15px;
`;

const ProfileIcon = styled(ProfileImage)`
width:38px;
height:38px;
`;
const ContactName = styled.span`
font-size:16px;
width:100%;
color:black;
`;

const MessageText = styled.span`
width:20%;
font-size:14px;
margin-top:3px;
color:rgba(0,0,0,0.8);`;

const ContactInfo = styled.div`
display:flex;
flex-direction:column;
width:100%;
margin:0 19px;

`;

const ContactComponent=(props)=>{
    const {userData} = props;
    return ( <ContactItem>
        <ProfileIcon src={userData.profilePic}/>
        <ContactInfo>
            <ContactName>{userData.name}</ContactName>
            <MessageText>Hello</MessageText>
        </ContactInfo>
        <MessageText>10:04 PM</MessageText>
        </ContactItem>
    );
};
const ContactList = () =>{
    return (<Container>
         <ProfileInfoDiv>
            <ProfileImage src="/profile/hunnnnnnnnnnyyyyyy.jpeg"/>
            <AiOutlineMore/>
        <AiOutlineUsergroupDelete/>
        <AiOutlineMessage/>
        <FaSyncAlt/>
        </ProfileInfoDiv>
        <SearchBox>
            <SearchContainer>
               <SearchIcon src={"/profile/search-icon.svg"}/>
               <SearchInput placeholder="Search or start a new chat"/>
            </SearchContainer>
        </SearchBox>
        {contactList.map((userData)=>
        (
        <ContactComponent userData={userData}/>
        ))}
    </Container>
    );
}
export default ContactList;