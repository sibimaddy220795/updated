import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Specialities from './components/pages/Specialities';
import ContactUs from './components/pages/ContactUs';
import Appointments from './components/pages/Appointments';
import Footer from './components/Footer';
import MedicalDisciplines from './components/MedicalDisciplines';
import OurJourney from './components/OurJourney';
import DoctorProfile from './components/DoctorProfile';
import CancerHospital from './components/CancerHospital';
import UniversalMultiSpecialityHospital from './components/UniversalMultiSpecialityHospital';
import ModernHospitalPlanning from './components/ModernHospitalPlanning';
import Events from './components/Events';
import Nursing from './components/Nursing';
import ICU from './components/ICU';
import Clinical from './components/Clinical';
import Social from './components/social';
import Addbar from './components/Addbar';




function App() {
  return (
    <div>
    <Router>
  
      <Navbar />
      <Addbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/About' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/Specialities' component={Specialities} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/Appointments' component={Appointments} />
        <Route path='/Medical Disciplines' component={MedicalDisciplines} />
        <Route path='/Events' component={Events} />
        <Route path='/OurJourney' component={OurJourney} />
        <Route path='/DoctorProfile' component={DoctorProfile} />
        <Route path='/CancerHospital' component={CancerHospital} />
        <Route path='/UniversalMultiSpecialityHospital' component={UniversalMultiSpecialityHospital} />
        <Route path='/ModernHospitalPlanning' component={ModernHospitalPlanning} />
        <Route path='/Nursing' component={Nursing} />
        <Route path='/ICU' component={ICU} />
        <Route path='/Clinical' component={Clinical} />
      </Switch>
      <Social />
      <Footer/>
    </Router>
  
    </div> 
  );
}
export default App;