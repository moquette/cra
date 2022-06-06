import '../styles/app.scss'

import GithubCorner from 'react-github-corner'
import {Layout} from './Layout'
import logo from '../images/logo.svg'

function App() {
  return (
    <Layout>
      <div className="App">
        <GithubCorner
          href="https://github.com/moquette/cra"
          octoColor="#282c34"
          bannerColor="#61DAFB"
        />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default App
