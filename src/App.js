import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <CharacterEditor />
      <div className='PerspectiveBar'></div>
      <Footer />
    </>
  );
}

export default App;
