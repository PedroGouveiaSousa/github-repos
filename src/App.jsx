import Nav from "@/components/Nav";
import { Routes, Route } from "@solidjs/router";
import Home from "@/pages/Home";
import SavedRepos from "@/pages/SavedRepos";

function App() {

    return (
        <section class="section">
            <div class="container">
                <Nav />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/saved' element={<SavedRepos />} />
                </Routes>
            </div>
        </section>
    );
}

export default App;
