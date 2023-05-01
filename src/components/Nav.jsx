import { A } from "@solidjs/router";
import { savedRepos } from "@/pages/SavedRepos";
function Nav() {

    return (
        <nav class="nav">
            <div class="field is-grouped">
                <div class="control">
                    <A href="/" end class="button" activeClass="is-success">
                        Home
                    </A>
                </div>
                <div class="control">
                    <A href="/saved" class="button" activeClass="is-success">
                        Saved ~ {savedRepos().length}
                    </A>
                </div>
            </div>
        </nav>
    );
}
export default Nav;     