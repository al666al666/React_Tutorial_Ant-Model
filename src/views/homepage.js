import React from 'react';
import AppHero from '../components/Homepage/hero';
import AppAbout from '../components/Homepage/about'; 
import AppFeature from '../components/Homepage/feature'; 
import AppWork from '../components/Homepage/works'; 
import AppFaq from '../components/Homepage/faq'; 
import AppPricing from '../components/Homepage/ques'
import AppForm from '../components/Homepage/form'; 
function AppHome() {
    return (
        <div className="main">
            <AppHero />
            <AppAbout/>
            <AppFeature/>
            <AppWork/>
            <AppFaq/>
            <AppPricing/>
            <AppForm/>
        </div>
    )
}

export default AppHome