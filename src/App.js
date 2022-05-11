import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='PerspectiveBar'></div>
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
