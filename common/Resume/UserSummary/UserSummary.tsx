import React from 'react'
import { SummaryDescription, SummaryTitle, SummaryUser, UserSummaryDetails } from '../Styles'

export const UserSummary:React.FC<UserSummaryI> = (UserSummaryI) => {
  return (
   <UserSummaryDetails>
        <SummaryUser>{UserSummaryI?.username}</SummaryUser>
        <SummaryTitle>{UserSummaryI?.title}</SummaryTitle>
        <SummaryDescription>{UserSummaryI?.description}</SummaryDescription>
   </UserSummaryDetails>
  )
}

interface UserSummaryI{
    username: string,
    title: string,
    description:string
}