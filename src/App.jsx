import React from 'react';
import Header from './components/Header.jsx'
import Entry from './components/Entry.jsx'
import data from './components/data.js'


function App() {

    const entryElements = data.map((entry) => {
        return (
            <Entry 
            img = {entry.img}
            title={entry.title}
            country={entry.country}
            googleMapsLink={entry.googleMapsLink}
            dates={entry.dates}
            text={entry.text}
            />
        )
    })
  return (
    <>
      <Header />
      <main>
        {entryElements}
      </main> 
    </>
  );
}

export default App;
