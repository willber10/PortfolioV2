import { Link } from 'react-router-dom';

function Navbar() {
    const navbarStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        top: '0',
        width: '100%',
        height: '100px',
        margin: '0 auto',
        left: '0',
        right: '0',
        backgroundColor: 'Grey',
    };

    const linkStyle = {
        color: 'black',
        textDecoration: 'none',
        fontSize: '1.5rem',
        margin: '0 10px',
    };


    return (
        <>
            <header style={navbarStyle}>
                <h1>Will Schickler</h1>
                <Link style={linkStyle} to="/">About Me</Link>
                <Link style={linkStyle} to="/portfolio">Portfolio</Link>
                <Link style={linkStyle} to="/contact">Contact</Link>
                <a style={linkStyle} href="https://docs.google.com/document/d/16J6WLIYTyB7LOkfdpQ_9EBzakdRpgNv02wsBRo13spc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
            </header>
            <div style={{ marginTop: '100px' }}>
                {/* Content below the navbar */}
            </div>
        </>
    )
}

export default Navbar;