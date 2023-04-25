import { NavLink } from "@solidjs/router";

function Nav() {

    return (
        <nav class="nav">
            <div class="field is-grouped">
                <div class="control">
                    <NavLink href="/" end class="button" activeClass="is-success">
                        Home
                    </NavLink>
                </div>
                <div class="control">
                    <NavLink href="/saved" class="button" activeClass="is-success">
                        Saved
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}
export default Nav;     