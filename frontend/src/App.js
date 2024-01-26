
import './App.css';
import{Route,Routes} from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';
import GenerateCaption from './Pages/Generate Caption/GenerateCaption';
import VoiceToText from './Pages/Voice To Text/VoiceToText';
import Translator from './Pages/Translator/Translator';
import Register from './Components/Registration/Register';
import Login from './Components/Login/Login';
import Diaryhome from './Pages/Personal Diary/Diaryhome';
import Create from './Pages/Personal Diary/Create/Create';
import Forgot from './Components/Forgot';
import Update from './Pages/Personal Diary/Create/Update';
import Reset from './Components/Reset';
function App() {
  return (
    <>
     <Layout/>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route path='/caption' element={<GenerateCaption/>}></Route>
      <Route path='/voicetotext' element={<VoiceToText/>}></Route>
      <Route  path='/translator' element={<Translator/>}></Route>
      <Route  path='/register' element={<Register/>}></Route>
      <Route path='/forgot' element={<Forgot/>}></Route>
      <Route path="/reset/:resetToken" element={<Reset/>}></Route>
      <Route  path='/login' element={<Login/>}></Route>
      <Route  path='/diaryhome' element={<Diaryhome/>}></Route>
      <Route  path='/create' element={<Create/>}></Route>
      <Route path={`/update/:id`} element={<Update/>}></Route>
    </Routes>
     
    </>
  );
}

export default App;
