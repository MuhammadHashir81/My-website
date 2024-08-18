import React from 'react'

const App = () => {
  return (
    <div>
    <div className='main-div'>
      <div>
        <h2>Hi there,</h2>
        <h2>My name is <span className='name'>Muhammad Hashir</span></h2>
        <h4>I am MERN stack web developer</h4>
      </div>
      <div className='img-div'>
      <img src="/Picture.png" alt="Hashir" width={400} className='img' />
      </div>
    </div>
    <div className='projects-div'>
      <h2 className='projects-heading'>My Projects</h2>
      <div className='all-projects'>
      <div className='book-div'>
        <h3 className='book-heading'>Book Store</h3>
        <img src="/book.png" alt="book" style={{width:"350px", height:"300px",objectFit:"contain"}}/>
      </div>
      <div className='book-div'>
        <h3 className='book-heading'>Microsoft Clone</h3>
        <img src="/microsoft.jpg" alt="book" style={{width:"350px", height:"300px",objectFit:"contain"}}/>
      </div>
      <div className='book-div'>
        <h3 className='book-heading'>Restaurant Website</h3>
        <img src="/restaurant.jpg" alt="book" style={{height:"299px",width: "299px",objectFit:"cover"}}/>
      </div>
      </div>
      
    </div>
    
    </div>
  )
}

export default App