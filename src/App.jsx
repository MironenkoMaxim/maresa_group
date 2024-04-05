import './index.css'
import Header from "./components/Header/Header.jsx"
import CardList from './components/card-list/card-list.jsx';

function App() {
    return (
        <>
            <Header />

            <main>
                <div className="container-main">

                    <CardList />

                    <div className="block">
                        Привет
                    </div>
                </div>
            </main>

        </>
    )
}

export default App;