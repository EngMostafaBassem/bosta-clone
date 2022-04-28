import React, { Suspense, useEffect, useState } from 'react';
import './App.css';
import Header from './components/UI/Organisms/Header';
import i18n from  './i18n';
import LocalContext from './context/LocalContext';
import { ConfigProvider } from 'antd';

function App() {

  const [locale, setLocale] = useState(i18n.language);
  
  const defaultValue = {
    locale,
    setLocale
  }
  i18n.on('languageChanged', (lng) =>{
    console.log('languae to change',lng)
    setLocale(i18n.language)
  } );
  return (
    <LocalContext.Provider value={defaultValue}>
    <Suspense fallback={<p>Loading...</p>}>
    <ConfigProvider direction={locale === 'en' ? 'ltr' : 'rtl'}>
     <div>
       <Header/>
    </div>
    </ConfigProvider>
    </Suspense>
    </LocalContext.Provider>
  );
}

export default App;
