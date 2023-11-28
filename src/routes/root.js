import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            {/* <div id="title">
                <h1>MBTI</h1>
            </div>
            <button>START</button>
            
            <div id="detail"></div> */}
            <Outlet />
        </>
    );
}
