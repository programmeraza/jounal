import './App.scss'
import CardButton from './components/CardButton/CardButton'
import JournalButton from './components/JournalButton/JournalButton'
import JournalForm from './components/JournalForm/JournalForm'
import JournalItem from './components/JournalItem/JournalItem'
import JournalList from './components/JournalList/JournalList'
import Body from './components/layouts/Body/body'
import LeftPanel from './components/layouts/LeftPanel/LeftPanel'
import Logo from './components/Logo/Logo'

function App() {
  
  return (
    <div className='app'>
      <LeftPanel>
        <Logo/>
        <JournalButton/>
        <JournalList>

          <CardButton>

            <JournalItem />

          </CardButton>

        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm/>
      </Body>
    </div>
  )
}

export default App
