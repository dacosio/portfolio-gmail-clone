import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import IconBtn from './IconBtn'
import './Mail.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import EmailIcon from '@mui/icons-material/Email';
import DeleteIcon from '@mui/icons-material/Delete';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';

const Mail = () => {
    const navigate = useNavigate();
    const selectedOpenMail = useSelector(selectOpenMail)

    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconBtn Icon={<ArrowBackIcon />} onClick={() => navigate(-1)}/>
                    <IconBtn Icon={<MoveToInboxIcon />}/>
                    <IconBtn Icon={<ErrorIcon />}/>
                    <IconBtn Icon={<EmailIcon />}/>
                    <IconBtn Icon={<DeleteIcon />}/>
                    <IconBtn Icon={<WatchLaterIcon />}/>
                    <IconBtn Icon={<CheckCircleIcon />}/>
                    <IconBtn Icon={<LabelImportantIcon />}/>
                    <IconBtn Icon={<MoreVertIcon />}/>
                </div>
                <div className="mails__toolsRight">
                    <IconBtn Icon={<UnfoldMoreIcon />}/>
                    <IconBtn Icon={<PrintIcon />}/>
                    <IconBtn Icon={<ExitToAppIcon />}/>
                </div>
            </div>
            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>{selectedOpenMail?.subject}</h2>
                    <LabelImportantIcon className="mail__important" />
                    <p>{selectedOpenMail?.title}</p>
                    <p className="mail__time">{selectedOpenMail?.time}</p>
                </div>
                <div className="mail__message">
                    <p>{selectedOpenMail?.description}</p>
                </div>

            </div>
        </div>
    )
}

export default Mail