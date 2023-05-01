import { savedRepos, setSavedRepos } from "@/pages/SavedRepos";


const RepoCard = ({ repo }) => {

    const saveRepo = () => {
        setSavedRepos(repos => [repo, ...repos])
    }

    const unsaveRepo = () => setSavedRepos(savedRepos().filter(savedRepo => savedRepo !== repo))

    const repoIsSaved = () => savedRepos().some(savedRepos => savedRepos === repo)

    return (
        <div class="card mb-2">
            <div class="card-header">
                <div class="card-header-title">{repo.name}</div>
                <div class="card-header-icon">&#11088;{repo.stargazers_count}</div>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img class="is-rounded" src={repo.owner.avatar_url} />
                        </figure>
                    </div>
                    <div class="media-content">
                        {repo.description}
                    </div>
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">
                    <Show when={!repoIsSaved()}>
                        <button
                            class="button is-fullwidth is-success"
                            onClick={() => saveRepo() && localStorage.setItem('repos', JSON.stringify(savedRepos()))}
                        >Save</button>
                    </Show>
                    <Show when={repoIsSaved()}>
                        <button
                            class="button is-fullwidth is-danger"
                            onClick={() => unsaveRepo() && localStorage.setItem('repos', JSON.stringify(savedRepos()))}
                        >Unsave</button>
                    </Show>
                </a>
                <a href={repo} class="card-footer-item">View Repo</a>
            </footer>
        </div>
    );
}

export default RepoCard;