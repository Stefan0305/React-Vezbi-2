import logo from './logo.svg';
import './App.css';
import TempConverter from './components/TempConverter';
import Fetch from './components/Fetch';
import Tab from './components/Tab';
import Button from './components/Button';

function App() {



  return (
    <div className="App-header">
      {/* <TempConverter /> */}
      {/* <Fetch/> */}
      {/* <Tab /> */}

      <Button variant={"primary"} text={"Button1"} />
      <Button variant={"secondary"} text={"Button2"} />
      <Button variant={"secondary"} size={"md"} text={"Button3"} />
      <Button variant={"secondary"} size={"lg"} text={"Button4"} />
      <Button size={"lg"} />
      <Button variant={"secondary"} size={"lg"} text={"Button5"} rounded />
      <Button size={"sm"} rounded />
    </div>
  );
}

export default App;
