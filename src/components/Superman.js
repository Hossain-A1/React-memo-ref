import React from 'react'








const Superman = ({superHero}) => {
  const superHeroRef = React.createRef();
  const changeColor = ()=>{
    superHeroRef.current.textContent  = superHero;
    superHeroRef.current.style.color = 'teal'
  }
  

  return (
    <div>
      <h1 ref={superHeroRef}>Suparman </h1>
      <button onClick={changeColor}>ColorChange</button>
    </div>
  )
}

export default Superman