import React, { Suspense, useEffect, useState } from 'react';
import './App.css';
import i18n from  './i18n';
import LocalContext from './context/LocalContext';
import { ConfigProvider } from 'antd';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Landpage from './components/pages/landpage-view-screen';
import Spinner from './components/UI/Atoms/Spinner';
import TrackShipment from './components/pages/track-shipment-view-screen'
function App() {

  const [locale, setLocale] = useState(i18n.language);
  
  const defaultValue = {
    locale,
    setLocale
  }
  i18n.on('languageChanged', (lng) =>{
    setLocale(i18n.language)
  } );
  return (
    <BrowserRouter>
     <LocalContext.Provider value={defaultValue}>
       <Suspense fallback={<Spinner/>}>    
         <ConfigProvider direction={locale === 'en' ? 'ltr' : 'rtl'}>
           <Routes>
             <Route path='/' element={<Landpage/>}/>
             <Route path='/shipments/track/:trackNum' element={<TrackShipment/>}/>
           </Routes> 
        </ConfigProvider>
      </Suspense>
     </LocalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
