import { Routes, Route } from 'react-router';

import Layout from './components/Layout';
import EmojisPage from './pages/emojis/EmojisPage'
import Contacts from './pages/contacts'
import About from './pages/about'
import NotFoundPage from './pages/404';
import CounterRedux from './pages/counter-redux'
import ToDo from "./pages/to-do";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<EmojisPage />} />
                <Route path='contacts' element={<Contacts />} />
                <Route path='about' element={<About />} />
                <Route path='counter-redux' element={<CounterRedux />} />
                <Route path='to-do' element={<ToDo />} />
                <Route path='*' element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}

export default App;