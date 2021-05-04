import React from 'react'
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOptions from './SidebarOptions';
import { InsertComment,Inbox, Drafts, BookmarkBorder, ExpandLess, PeopleAlt, Apps, FileCopy, ExpandMore, Add } from '@material-ui/icons';
import {useCollection} from 'react-firebase-hooks/firestore';
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Sidebar() {
    const [channels, loading, error] = useCollection(db.collection("rooms"));
    const [user] = useAuthState(auth);
    return (
        <SideContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Munshi</h2>
                    <h3>
                        <FiberManualRecordIcon/>
                        {user?.displayName}
                    </h3>
                </SidebarInfo>
                <CreateIcon/>
            </SidebarHeader>
            <SidebarOptions Icon = {InsertComment} title = "Threads" />
            <SidebarOptions Icon = {Inbox} title = "Mentions & reactions" />
            <SidebarOptions Icon = {Drafts} title = "Saved" />
            <SidebarOptions Icon = {BookmarkBorder} title = "Channel Browser" />
            <SidebarOptions Icon = {PeopleAlt} title = "People & user groups" />
            <SidebarOptions Icon = {Apps} title = "Apps" />
            <SidebarOptions Icon = {FileCopy} title = "File Browser" />
            <SidebarOptions Icon = {ExpandLess} title = "Show Less" />
            <hr />
            <SidebarOptions Icon = {ExpandMore} title = "Channels" />
            <hr />
            <SidebarOptions Icon = {Add} addChannelOption title = "Add Channels" />
            {channels?.docs.map(doc =>(
                 <SidebarOptions key = {doc.id} id ={doc.id} title = {doc.data().name}  />
            ))}
        </SideContainer>
    )
}

export default Sidebar;

const SideContainer = styled.div`
    background-color: var(--slack-color);
    flex:0.3;
    max-width:260px;
    margin-top:60px;
    color:white;
    > hr{
        margin-top: 10px;
        margin-bottom:10px;
        border: 1px solid #49274b;
    }
`;
const SidebarHeader = styled.div`
    display:flex;
    border-bottom: 1px solid  #49274b;
    padding:13px;
    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`;
const SidebarInfo = styled.div`
    flex:1;
    >h2{
        font-size:15px;
        font-weight: 900px;
        margin-bottom: 5px;
    }
    >h3{
        display:flex;
        font-size: 13px;
        font-weight:400;
        align-items:center;
    }
    >h3> .MuiSvgIcon-root{
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`;
