import { createRoot } from "react-dom/client";
import TailwindCSS from "./TailwindCSS";
import './tailwind.css';
import LoginForm from "./LoginForm";
import HitungGajiForm from "./HitungGajiForm";

createRoot(document.getElementById("root"))
    .render(
        <div>
            <TailwindCSS/>
            <LoginForm/>
            <HitungGajiForm/>
        </div>
    )