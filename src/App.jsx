
import './App.css'
import SideBar from './components/side'
import MainContent from './components/mainContent'
import Footer from './components/footer'

function App() {

  return (
    <>
    <div className="appContainer">
      <div className="sideBarDiv"><SideBar/></div>
      <div className="mainContentDiv"> <MainContent/></div>
    </div>
    </>
  )
}

export default App
