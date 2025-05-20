import { createRoot } from "react-dom/client";
import Container from "./Container";
import Artikel from "./Artikel";
import './custom.css';

createRoot(document.getElementById("root"))
    .render(
        <div>
            <Container>
                <Artikel/>
            </Container>
        </div>
    )