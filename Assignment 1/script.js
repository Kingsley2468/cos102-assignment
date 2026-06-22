
// 1. BOOK CLASS
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.available = true; // New books are available by default
    }
}


// 2. LIBRARY CLASS
class Library {
    constructor() {
        this.books = []; // Array to store all library books
    }

    // Method to add a new book to the library system
    addBook(book) {
        this.books.push(book);
        console.log(`[ADDED] "${book.title}" has been added to the library.`);
    }

    // Method to borrow a book (marks it unavailable)
    borrowBook(title) {
        // Find the book, ignoring case sensitivity
        const book = this.books.find(b => b.title.toLowerCase() === title.toLowerCase());

        if (!book) {
            console.log(`[ERROR] Sorry, "${title}" is not in our system.`);
            return;
        }

        if (!book.available) {
            console.log(`[UNAVAILABLE] Sorry, "${title}" is already checked out.`);
            return;
        }

        book.available = false; // Mark as borrowed
        console.log(`[SUCCESS] You have successfully borrowed "${book.title}".`);
    }

    // Method to return a borrowed book (marks it available)
    returnBook(title) {
        const book = this.books.find(b => b.title.toLowerCase() === title.toLowerCase());

        if (!book) {
            console.log(`[ERROR] "${title}" does not belong to this library.`);
            return;
        }

        if (book.available) {
            console.log(`[INFO] "${book.title}" was already returned.`);
            return;
        }

        book.available = true; // Mark as returned
        console.log(`[SUCCESS] Thank you for returning "${book.title}".`);
    }

    // Method to filter and list all books that are currently available
    listAvailableBooks() {
        const availableBooks = this.books.filter(b => b.available);

        console.log("\n--- CURRENTLY AVAILABLE BOOKS ---");
        if (availableBooks.length === 0) {
            console.log("No books are currently available in the library.");
            return;
        }

        availableBooks.forEach(book => {
            console.log(`• "${book.title}" by ${book.author} (${book.year})`);
        });
        console.log("---------------------------------\n");
    }
}

// 3. TESTING THE SYSTEM (AUTOMATIC RUN)


// Create a new instance of the library
const myLibrary = new Library();

// Create sample book instances
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

// Add the sample books to our library
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

// 1. Check initial inventory (Should show all 3 books)
myLibrary.listAvailableBooks();

// 2. Test borrowing a book (Should succeed)
myLibrary.borrowBook("1984");

// 3. Check inventory again (Should only show 2 books now)
myLibrary.listAvailableBooks();

// 4. Test trying to borrow the same book again (Should fail)
myLibrary.borrowBook("1984");

// 5. Test returning the book (Should succeed)
myLibrary.returnBook("1984");

// 6. Check final inventory (Should show all 3 books back in place)
myLibrary.listAvailableBooks();