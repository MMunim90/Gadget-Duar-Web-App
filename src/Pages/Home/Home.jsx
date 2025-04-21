import React, { useState } from 'react';
import Banner from '../../components/Banner/Banner';
import PhonesContainer from '../../components/PhonesContainer/PhonesContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    const [phones, setPhones] = useState(data);

    const handleSearch = (e, text) => {
        e.preventDefault();
        if(text === '') return setPhones(data);
        const searchedPhones = data.filter(phone => phone?.name?.toLowerCase().includes(text.toLowerCase()) || phone.brand?.toLowerCase().includes(text.toLowerCase()));
        setPhones(searchedPhones);
    }
    return (
        <div>
            <Banner handleSearch={handleSearch}></Banner>
            <PhonesContainer phones={phones}></PhonesContainer>
        </div>
    );
};

export default Home;