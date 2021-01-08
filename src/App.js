import './App.css';
import Headline from './Headline/Headline';
import ContentSlider from './Content/ContentSlider';
import Content from './Content/Content';

function App() {
  return (
  <>
    <Headline></Headline>
    <ContentSlider isSlider={true}></ContentSlider>
    <Content isSlider={false}></Content>
  </>
  );
}

export default App;
