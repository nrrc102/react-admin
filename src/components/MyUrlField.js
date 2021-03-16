import React from 'react'
import {makeStyles} from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';

const useStyles = makeStyles({
    link:{
        decoration: 'none'
    },
    icon:{
        width: '0.5rem',
        paddingLeft: 2
    }
})


export default function MyUrlField({record={}, source}) {
    const classes = useStyles();
    return (
        <a className={classes.link} href={record[source]}>
            {record[source]}
            <LaunchIcon className={classes.icon}/>
        </a>
    )
}
