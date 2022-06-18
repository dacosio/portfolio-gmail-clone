import { Button, IconButton } from '@mui/material'
import React from 'react'
import './Sidebar.css'
import AddIcon from '@mui/icons-material/Add';
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen, openSendMessage } from './features/mailSlice';

const Sidebar = () => {

    const sidebarOptionData = [
        {Icon: InboxIcon, title: "Inbox", number: 54, selected: true},
        {Icon: StarIcon, title: "Starred", number: 54, selected:false},
        {Icon: AccessTimeIcon, title: "Snoozed", number: 54, selected:false},
        {Icon: LabelImportantIcon, title: "Important", number: 54, selected:false},
        {Icon: NearMeIcon, title: "Sent", number: 54, selected:false},
        {Icon: NoteIcon, title: "Drafts", number: 54, selected:false},
        {Icon: ExpandMoreIcon, title: "More", number: 54, selected:false},
    ]
    const dispatch = useDispatch()
    const selectSendMessage = useSelector(selectSendMessageIsOpen)
    const openCompose = () => {
        dispatch(openSendMessage())
    }

    return (
        <div className="sidebar">
            <Button onClick={openCompose}  className="sidebar__compose"  startIcon={<AddIcon fontSize="large"/>}>Compose</Button>
            {sidebarOptionData && sidebarOptionData.map((s, idx) => (
                <SidebarOption key={idx} Icon={s.Icon} title={s.title} number={s.number} selected={s.selected}/>
            ))}
            <div className="sidebar__footer">
                <div className="sideber__footerIcons">
                <IconButton>
                    <PersonIcon />
                </IconButton>
                <IconButton>
                    <DuoIcon />
                </IconButton>
                <IconButton>
                    <PhoneIcon />
                </IconButton>
                </div>
            </div>
        </div>
    )
}


export default Sidebar