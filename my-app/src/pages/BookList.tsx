import { Table } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { Bookshelves } from '../images/Bookshelves';

function BookList() {

    const navigate = useNavigate();
    const handleRowClick = (id:number) => {
        navigate(`/book/${id}`);
      } 

    const users = [
        { name: 'In Search of Lost Time', author: 'Marcel Proust', year: '1913.' },
        { name: 'Ulysses', author: 'James Joyce', year: '1904.' },
        { name: 'Don Quixote', author: 'Miguel de Cervantes', year: '1605.' },
        { name: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', year: '1967.' },
        { name: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: '1925.' },
        { name: 'Moby Dick', author: 'Herman Melville', year: '1851.' },
        { name: 'War and Peace', author: 'Leo Tolstoy', year: '1869.' },
        { name: 'Hamlet', author: 'William Shakespeare', year: '1599.' },
      ]
    return (
        <div className='App font-link'>
            <div className="container p-5 my-5 bg-white border rounded">
                <h1 className='header'>List of Books</h1>
                <div>
                    <div>
                        <Bookshelves />
                    </div>
                    <div>
                        <p>
                            A book is a medium for recording information in the form of writing or images, 
                        typically composed of many pages (made of papyrus, parchment, vellum, or paper) 
                        bound together and protected by a cover. The technical term for this physical 
                        arrangement is codex (plural, codices). In the history of hand-held physical supports 
                        for extended written compositions or records, the codex replaces its predecessor, the scroll.
                        A single sheet in a codex is a leaf and each side of a leaf is a page.
                        </p>
                    </div>
                   
                </div>
               
                <Table striped bordered hover >
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        { users.map((item,i)=>
                            <tr key={i} onClick={() => handleRowClick(i)}>
                                <td>{i}</td>
                                <td>{item.name}</td>
                                <td>{item.author}</td>
                                <td>{item.year}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </div>
        
    );
};

export default BookList;