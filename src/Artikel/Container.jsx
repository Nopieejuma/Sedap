export default function Container({children}){
    return(
        <div className="card">
            <h1>Mental Health Disorders: Causes & How to Manage It</h1>
            <br/>
                {children}
            <br/>
            <footer>
                <p>2025 - Hervyola Verin Febriani</p>
            </footer>
        </div>
    )
}