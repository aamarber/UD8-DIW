import Calendar from '../components/calendar/Calendar'
import Navbar from '../components/navbar/Navbar'

function App() {
  const navLinks = [
    {
      displayText: 'Home',
      link: '#'
    },
    {
      displayText: 'Shop',
      link: '/shop'
    },
    {
      displayText: 'Music',
      link: '/music'
    }
  ];

  return (
    <div className="app">
      <Navbar navItems={navLinks}/>
      <h1>Super calendar</h1>
      <Calendar year={2023} month={1}/>
    </div>
  )
}

export default App

