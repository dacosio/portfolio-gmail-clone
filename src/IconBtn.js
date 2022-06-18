import React from 'react'
import { IconButton } from '@mui/material'


const IconBtn = (props) => {
    return (
        <IconButton onClick={props.onClick}>
            {props.Icon}
        </IconButton>
    )
}

export default IconBtn