import { Layout } from './components/layout/Layout'
import { Introduction } from './components/sections/Introduction'
import { Experience } from './components/sections/Experience'
import { Skills } from './components/sections/Skills'
import { Portfolio } from './components/sections/Portfolio'
import { Contact } from './components/sections/Contact'

function App() {
    return (
        <Layout>
            <Introduction />
            <Experience />
            <Skills />
            <Portfolio />
            <Contact />
        </Layout>
    )
}

export default App;
