import { refetch, repos, setUsername, username } from "@/App";
import RepoCard from "@/components/RepoCard";
import { Show } from "solid-js";

function Home() {

    let searchRepos = null;

    const handleFetch = () => {
        refetch();
        searchRepos.value = '';
    };

    return (
        <div class="container">
            <div class="field is-grouped mt-2">
                <div class="control is-expanded">
                    <input
                        type="text"
                        class="input"
                        onChange={e => setUsername(e.target.value)}
                        onKeyUp={e => e.key === 'Enter' && handleFetch()}
                        required
                        ref={searchRepos}
                    />
                </div>
                <div class="control">
                    <button
                        class="button is-info"
                        onClick={handleFetch}
                    >Fetch</button>
                </div>
            </div>
            <h3 class="subtitle">GitHub for {username()}</h3>
            <Show when={repos.loading}>
                <progress class="progress is-small is-primary" max="100"></progress>
            </Show>
            <Show when={repos.error}>
                <div class="notification">
                    No repos for {username()}
                </div>
            </Show>
            <Show when={!repos.error && !repos.loading}>
                <For each={repos()}>
                    {repo => <RepoCard repo={repo} />}
                </For>
            </Show>
        </div>
    );
}

export default Home;