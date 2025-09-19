import Book from "./Book.jsx";
import books from "/data/books.json";

function App() {
    function renderBook(book) {
        return <Book {...book} />;
    }
    return (
        <div>
            <header className='header'>
                <h1>Book Catalog</h1>
            </header>
            <main className='content'>
                <div className='add'>
                    <h2>New</h2>
                </div>
                <div className='books'>{books.map(renderBook)}</div>
            </main>
            <footer className='footer'>
                <h4>&copy; Emily Misola, 2025</h4>
            </footer>
        </div>
    );
}

export default App;
