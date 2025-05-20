import { createRoot } from "react-dom/client";
import ListProduct from "./ListProduct";
import './custom.css';

createRoot(document.getElementById("root"))
    .render(
        <div>
            <ListProduct/>
            
        </div>
    )