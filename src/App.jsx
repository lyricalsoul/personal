import Planetary from './components/Planetary.jsx'
import { NavBar } from './components/NavBar.jsx'
import { Content } from './components/Content.jsx'
import { Locale } from './i18n/client.jsx'

export default function App() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Planetary/>
      <NavBar/>
      <Content>
        <h1><Locale path={'general.hello'} /></h1>
        <p>
        </p>
      </Content>
    </div>
  )
}
