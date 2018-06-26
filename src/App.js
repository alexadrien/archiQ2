import React, {Component} from 'react';
import fr from 'react-intl/locale-data/fr';
import en from 'react-intl/locale-data/en';
import frMessages from './translations/fr.json';
import enMessages from './translations/en.json';
import Main from './Main';
import {flattenMessages} from './services/i18n/intl';
import {addLocaleData, IntlProvider} from 'react-intl';
import './App.css';

const locales = {
  fr: flattenMessages(frMessages),
  en: flattenMessages(enMessages),
};

addLocaleData([...fr, ...en]);

class App extends Component {
  render() {
    return (
      <IntlProvider locale="fr" messages={locales.fr}>
        <Main/>
      </IntlProvider>
    );
  }
}

export default App;
