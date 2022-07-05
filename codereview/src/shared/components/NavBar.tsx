import { PropsWithChildren } from "react";
import './NavBar.css';

function NavBar(props: PropsWithChildren) {
    return (
        <div className="app-nav">
            <h1 style={{ margin: 0, float: 'left', marginRight: '20px' }}>Patient triage app</h1>
            {props.children}
        </div>
    )
}

export default NavBar;
