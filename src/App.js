import categories from './components/api';
import Row from './components/Row';
import './App.css'
import Destaque from './components/Destaque';
import styled from 'styled-components';
import Nav from './components/Nav';
import Footer from './components/Footer';

const Div = styled.div`
  padding-top: 39vw;
  @media (max-width: 1200px) {
    padding-top: 44vw;
  }
  @media (max-width: 1100px) {
    padding-top: 50vw;
  }
  @media (max-width: 1000px) {
    padding-top: 56vw;
  }
  @media (max-width: 940px) {
    padding-top: 60vw;
  }
  @media (max-width: 780px) {
    padding-top: 66vw;
  }
    @media (max-width: 700px) {
    padding-top: 74vw;
  }
  @media (max-width: 640px) {
    padding-top: 79vw;
  }
  @media (max-width: 620px) {
    padding-top: 82vw;
  }
  @media (max-width: 580px) {
    padding-top: 90vw;
  }
  @media (max-width: 550px) {
    padding-top: 98vw;
  }  
  @media (max-width: 520px) {
    padding-top: 106vw;
  }
  @media (max-width: 485px) {
    padding-top: 112vw;
  }
`

export default function App() {
  return (
    <div className="App">
      <Nav/>
      <Destaque />
      <Div>
      {categories.map((category) => {
        return (
          
          <Row
            key={category.name}
            title={category.title}
            path={category.path}
            isLarge={category.isLarge}
          />
         
        );
      })} </Div>
      <Footer/>
    </div>
  );
}
