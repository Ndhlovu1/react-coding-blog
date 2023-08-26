import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Intro1 from './components/Intro1'
import Intro2 from './components/Intro2'
import Intro3 from './components/Intro3'
import PropsHolder from './components/PropsHolder'
import Promo from './components/Promo'

function App() {
  return (
    <div>
      <Nav/>
      <Header lastname="Ndhlovu" firstname="Tinomudaishe"/>
      
      <Promo title="Learn React" subheading="From Basics to Mastery"/>

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

    </div>
  );
}

export default App;
