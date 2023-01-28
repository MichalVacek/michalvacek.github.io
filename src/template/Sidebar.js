import { useState } from "react";

const SideBar = (props) => {
    const [isOpen, toggle] = useState(false);

    return (
        <div>
            <div class="side-bar">
                <div class="menu-toggle"></div>
                {isOpen &&
                    <div>
                        <h2>Opened</h2>
                    </div>
                }
            </div>
            {props.children}
        </div>
    );
}

export default SideBar;