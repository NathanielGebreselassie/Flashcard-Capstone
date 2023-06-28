import React from 'react';

//header component
function Header() {
  return (
    <header className='jumbotron bg-dark text-center'>
      <div className='container text-white'>
        <h1 className='display-4'>Flashcard-o-matic</h1>
        <p className='lead'>Discover The Flashcard Difference.</p>
      </div>
    </header>
  );
}

export default Header;