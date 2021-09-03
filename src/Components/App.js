import React, { useState } from 'react';
import { Form } from './Form/Form';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contacts from './Contact/Contact';
import Filter from './Filter/Filter';
import { useLocalStorage } from '../hooks/useLocalStorage';
import s from './App.css';
// import JoyRide from "react-joyride";
import Tour from './Tour/Tour';

export function App() {
    const [contacts, setContacts] = useLocalStorage('contacts', [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]);

    const [filterName, setFilterName] = useState('');

    const getSubmitData = data => {
        (contacts.find(
            contact => contact.name.toLowerCase() === data.name.toLowerCase(),
        ) &&
            toast.warning('This name already exists!')) ??
            setContacts(prevState => [...prevState, data]);
    };

    const handelDelete = data =>
        setContacts(prevState =>
            prevState.filter(contact => contact.id !== data),
        );

    const changeFilterValue = event => {
        setFilterName(event.target.value);
    };

    const getVisibleContacts = () => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filterName.toLowerCase()),
        );
    };

    const getContacts = getVisibleContacts();

    // const Tour = () => {
    //     return (
    //       <>
    //         <JoyRide
    //           steps={TOUR_STEPS}
    //           run={true}
    //           continuous={true}
    //           showSkipButton={true}
    //           showProgress={true}
    //           styles={{
    //             tooltipContainer: {
    //               textAlign: "left"
    //             },
    //             buttonNext: {
    //               backgroundColor: "rgba(0, 139, 139, 0.845)",
    //               color: 'bisque'
    //             },
    //             buttonBack: {
    //               marginRight: 10
    //             },
    //             buttonClose: {
    //                 color: "red"
    //             },
    //             buttonSkip:{
    //                 backgroundColor: "bisque",
    //                 color: "rgb(0, 139, 139)"
    //             }
    //           }}
    //           locale={{
    //             last: "End tour",
    //             skip: "Close tour"
    //           }}
    //         />
    //       </>
    //     );
    //   };

    return (
        <>
            <Tour />
            <h1 className={s.title}>Phone book</h1>
            <Form submitMethod={getSubmitData} />
            <h2 className={s.title}>Contacts</h2>
            <Filter value={filterName} onChange={changeFilterValue} />
            <Contacts contacts={getContacts} deleteFunction={handelDelete} />
            <ToastContainer />
        </>
    );
}
