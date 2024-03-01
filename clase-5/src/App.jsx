import './App.css';
import AvatarComp from './components/AvatarComp';
import CardComp from './components/CardComp';
import RefBasic from './components/RefBasic';
import SearchComp from './components/SearchComp';

function App() {
  return (
    <>
      <CardComp title="User">
        <AvatarComp />
      </CardComp>
      <RefBasic />
      <SearchComp />
    </>
  );
}

export default App;