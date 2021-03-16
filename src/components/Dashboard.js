import * as React from 'react'
import {Card, CardContent, CardHeader} from '@material-ui/core'
import {Title} from 'react-admin'

export default function Dashboard() {
    return (
       <Card>
           <Title title="Cebugi"/>
           {/* <CardHeader title="Cebugi"></CardHeader> */}
           <CardContent>Social Distancing</CardContent>
       </Card>
    )
}
