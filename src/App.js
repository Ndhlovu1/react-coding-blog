import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Intro1 from './components/Intro1'
import Intro2 from './components/Intro2'
import Intro3 from './components/Intro3'
import PropsHolder from './components/PropsHolder'

function App() {
  return (
    <div>
      <Nav/>
      <Header lastname="Ndhlovu" firstname="Tinomudaishe"/>
      
      <PropsHolder children={  
        <Intro1 author="T Ndhlovu"/> 
       }/>

      <PropsHolder
        children = {    
          <Intro2 author="Sultan T"/>
      }/>
     
      {/* <Intro3 author="TheBackEndGuru"/> */}

      <PropsHolder
        children = {
          <Intro3 author="TheBackEndGuru"/>
        }/>

    </div>
  );
}

export default App;
