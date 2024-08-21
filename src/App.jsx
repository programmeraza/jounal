import './App.scss'
import JournalButton from './components/JournalButton/JournalButton'
import JournalForm from './components/JournalForm/JournalForm'
import Body from './components/layouts/Body/body'
import LeftPanel from './components/layouts/LeftPanel/LeftPanel'
import Logo from './components/Logo/Logo'

function App() {

  return (
    <div className='app'>
      <LeftPanel>
        <Logo/>
        <JournalButton/>
      </LeftPanel>
      <Body>
        <JournalForm/>
      </Body>
    </div>
  )
}

export default App
