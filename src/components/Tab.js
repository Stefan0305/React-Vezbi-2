import React, { useRef, useState } from "react";

function Tab() {

    // let Tab1 = useRef();
    // let Tab2 = useRef();
    // let Tab3 = useRef();

    const [activeTab, setActiveTab] = useState(1);
    console.log(activeTab);

    return <div>
        <ul>
            <li onClick={() => setActiveTab(1)}>Tab 1</li>
            <li onClick={() => setActiveTab(2)}>Tab 2</li>
            <li onClick={() => setActiveTab(3)}>Tab 3</li>
        </ul>

        <div id="tabs-content">
            {activeTab === 1 && <div className="tab-pane">Contents for tab 1</div>}
            {activeTab === 2 && <div className="tab-pane">Contents for tab 2</div>}
            {activeTab === 3 && <div className="tab-pane">Contents for tab 3</div>}
            
        </div>
    </div>
}

export default Tab;