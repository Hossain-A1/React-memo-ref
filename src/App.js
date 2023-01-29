
import React from 'react'
import Player from './components/Player';
// import Protal from './components/Protal';
// import Superman from './components/Superman';
// import Badman from './components/Badman';
// import ParentComp from './components/ParentComp';

const App = () => {
  return (
    <div>
      {/* <ParentComp/> */}
      {/* <Badman/> */}
      {/* <Superman superHero={'badman'}/> */}
      {/* <Protal/> */}
      <Player playerName={'Messi'}/>
      <Player playerName={'Rolando'}/>
    </div>
  )
}

export default App;