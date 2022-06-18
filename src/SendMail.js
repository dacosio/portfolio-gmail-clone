import React from 'react'
import './SendMail.css'
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebaseConnection';
import { serverTimestamp } from 'firebase/firestore';

const SendMail = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const dispatch = useDispatch();
    const closeCompose = () => {
        dispatch(closeSendMessage())
    }

    const onSubmit = data => {
        console.log(data)
        db.collection('emails').add(
            {
                to: data.to,
                subject: data.subject,
                message: data.message,
                timestamp: serverTimestamp()
            }
        )
        closeCompose();
    }

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon onClick={closeCompose} className="sendMail__close" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="To" type="text" {...register("to", {required: true})} />
                {errors.to && <p className="sendMail__error">This field is required</p>}
                <input placeholder="Subject" type="text" {...register("subject",{required: true})} />
                {errors.subject && <p className="sendMail__error">This field is required</p>}
                <input placeholder="Message..." type="text" className="sendMail__message" {...register("message",{required: true})} />
                {errors.message && <p className="sendMail__error">This field is required</p>}

                <div className="sendMail__options">
                    <Button 
                        className="sendMail__send" 
                        variant="contained" 
                        color="primary" 
                        type="submit"
                    >
                            Send
                    </Button>
                </div>
            </form>

        </div>
    )
}

export default SendMail