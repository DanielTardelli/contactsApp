import logo from './logo.svg';
import './App.css';

import ContactsModule from './ContactsModule';
import LoadingScreen from './LoadingScreen'
import React from 'react';

function App() {
  const [loading, setLoading] = React.useState(true);
  const [contacts, setContacts] = React.useState([]);

  if (loading == true) {
    (async () => {
      fetch('https://jsonplaceholder.typicode.com/users', {
        method: "GET",
      })
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        setLoading(false);
        setContacts(res);
      })
    })();
  }

  return (
    <div className="App">
      {loading && <LoadingScreen />}
      {!loading && <ContactsModule contacts={contacts}/>}
    </div>
  );
}

export default App;
