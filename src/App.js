import logo from './logo.svg';
import './App.css';
import BasicComponentList from './pages/leftArea/BasicComponentList';
import MiddleComponentArea from './pages/centerArea/MiddleComponentArea';
import EditComponentArea from './pages/rightArea/EditComponentArea';
import CalendarApp from './pages/Calendar'

function App() {
  //三个基础组件使用flex布局
  return (
    <div className="App">
      {/* <div className="leftArea">
        <BasicComponentList />
      </div>
      <div className="centerArea">
        <MiddleComponentArea />
      </div>
      <div className="rightArea">
        <EditComponentArea />
      </div> */}
      <CalendarApp />
    </div>
  );
}

export default App;
