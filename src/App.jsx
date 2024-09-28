import { useMemo, useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, networkAtom, notificationsAtom,messagingAtom, totalNotificationSelector } from './atoms'

function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
   
}


function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // const totalNotificationCount = useMemo (() =>{
  //   return networkNotificationCount + jobsAtomCount+ notificationsAtomCount + messagingAtomCount;;
  // },[networkNotificationCount,jobsAtomCount,notificationsAtomCount,messagingAtomCount
  // ])

  
 

  return (
    <>
    <button>Home</button>

    <button>My network({networkNotificationCount >= 100? "99+": networkNotificationCount })</button>
    <button>Jobs {jobsAtomCount}</button>
    <button>Messaging({messagingAtomCount})</button>
    <button>Notifications({notificationsAtomCount})</button>
    <button>Me ({totalNotificationCount})</button>
    </>
  )
}


export default App
