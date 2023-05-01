import Nav from "@/components/Nav";
import { Routes, Route } from "@solidjs/router";
import Home from "@/pages/Home";
import SavedRepos from "@/pages/SavedRepos";
import { createResource, createSignal } from "solid-js";

const [username, setUsername] = createSignal('ebenezerdon');

async function fetchUserRepos() {
    const res = await fetch(`https://api.github.com/users/${username()}/repos?sort=created`);
    const data = await res.json();
    return data;
}

const [repos, { refetch }] = createResource(fetchUserRepos);

function App() {

    return (
        <section class="section">
            <div class="container">
                <Nav />
                <Routes>
                    <Route path='/' end element={<Home />} />
                    <Route path='/saved' element={<SavedRepos />} />
                </Routes>
            </div>
        </section>
    );
}

export { repos, refetch, username, setUsername };

export default App;
