import RepoCard from "@/components/RepoCard";
import { createSignal } from "solid-js";


const [savedRepos, setSavedRepos] = createSignal(JSON.parse(localStorage.getItem('repos')) || []);

function SavedRepos() {
    console.log(savedRepos())
    return (
        <>
            <For each={savedRepos()}>
                {repo => <RepoCard repo={repo} />}
            </For>
        </>
    );
}

export { savedRepos, setSavedRepos }

export default SavedRepos;