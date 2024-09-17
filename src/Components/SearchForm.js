import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchForm.css';
import { IoCarSportSharp } from "react-icons/io5";
import { LiaSearchPlusSolid } from "react-icons/lia";

const SearchForm = () => {
    const [makes, setMakes] = useState([]);
    const [models, setModels] = useState([]);
    const [years, setYears] = useState([]);
    const [selectedMake, setSelectedMake] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

    useEffect(() => {
        // Fetch make options
        axios.get('/api/makes').then(response => {
            setMakes(response.data);
        });
    }, []);
 
    useEffect(() => {
        if (selectedMake) {
            // Fetch model options based on selected make
            axios.get(`/api/models?make=${selectedMake}`).then(response => {
                setModels(response.data);
            });
        } else {
            setModels([]);
        }
    }, [selectedMake]);

    useEffect(() => {
        if (selectedModel) {
            // Fetch year options based on selected model
            axios.get(`/api/years?model=${selectedModel}`).then(response => {
                setYears(response.data);
            });
        } else {
            setYears([]);
        }
    }, [selectedModel]);

    const handleSearch = () => {
        // Perform search based on selected criteria
        console.log('Searching for:', { selectedMake, selectedModel, selectedYear });
    };

    return (
        <div className="search-form-container">
            <h2> <LiaSearchPlusSolid /><IoCarSportSharp />Search Inventory</h2>
            <div className="search-form">
                <select value={selectedMake} onChange={(e) => setSelectedMake(e.target.value)}>
                    <option  value="">Make</option>
                    {makes.map(make => (
                        <option key={make} value={make}>{make}</option>
                    ))}
                </select>
                <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)} >
                    <option value="">Model</option>
                    {models.map(model => (
                        <option key={model} value={model}>{model}</option>
                    ))}
                </select>
                <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} >
                    <option value="">Year</option>
                    {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
                <button onClick={handleSearch}>Search</button>
                <button onClick={() => { setSelectedMake(''); setSelectedModel(''); setSelectedYear(''); }}>Reset</button>
            </div>
        </div>
    );
};

export default SearchForm;
