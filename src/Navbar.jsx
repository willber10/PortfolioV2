import './Navbar.css';

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
        backgroundColor: 'black',
        color: 'white',
    },
    }

function Navbar() {
    return (
        <header style={styles.Navbar}>
            <h1>Will Schickler</h1>
        </header>
    )
}

export default Navbar