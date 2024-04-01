import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header className='Navbar'>
            <h1>Will Schickler</h1>
            <section>
                <Link to="/">About Me</Link>
            </section>
            <section>
                <Link to="/portfolio">Portfolio</Link>
            </section>
            <section>
                <h2>
                    <a href="https://docs.google.com/document/d/16J6WLIYTyB7LOkfdpQ_9EBzakdRpgNv02wsBRo13spc/edit?usp=sharing" target="_blank" download>Resume</a>
                </h2>
            </section>
            <section>
                <h2>Contact Me</h2>
            </section>
        </header>
    )
}

export default Navbar;