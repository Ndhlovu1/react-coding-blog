import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Intro1 from './components/Intro1'
import Intro2 from './components/Intro2'
import Intro3 from './components/Intro3'
import PropsHolder from './components/PropsHolder'
import Promo from './components/Promo'
import Toogler from './components/ModeToggler'
import {Btn2, Btn} from './components/Btn'


function App() {
  return (
    <>
      <Nav/>
      <Header lastname="Ndhlovu" firstname="Tinomudaishe"/>

      <Toogler/>
      <Btn2/>
      <Btn/>      
      
      <Promo title="Learn React" subheading="From Basics to"/>

      <PropsHolder children={  
        <Intro1 author="T Ndhlovu"/> 
       }/>

      <PropsHolder
        children = {    
          <Intro2 author="Sultan T"/>
      }/>
     
      {/* 
      Alternative way of passing props without using direct childreb
      <Intro3 author="TheBackEndGuru"/> */}

      <PropsHolder
        children = {
          <Intro3 author="TheBackEndGuru"/>
        }/>

    </>
  );
}

export default App;
