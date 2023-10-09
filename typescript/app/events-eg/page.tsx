'use client';

const EventsEx = () => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) : void => {
        console.log(`Writing ${e.target.value}`);        
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) : void => {
        e.preventDefault();
        console.log('Searched');                
    }

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) : void => { 
        e.preventDefault();
        console.log(`Deleted ID ${id}`);                
    }

    return (
        <div className="eventExample">
            <form>
                <input
                    type="text"
                    placeholder="Search for anything..."
                    onChange={handleChange}
                />
                <button type='submit' onClick={handleClick}>Search</button>
            </form>
            <form className="post">
                <h1>Lorem ipsum dolor sit amet consectetur 1</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam
                    voluptate quisquam voluptatibus magni voluptatum quasi eveniet totam
                    harum neque itaque, eum reprehenderit non repellendus? Assumenda
                    necessitatibus distinctio veniam eveniet.
                </p>
                <button onClick={(e) => handleDelete(e, 1)}>Delete</button>
            </form>
            <form className="post">
                <h1>Lorem ipsum dolor sit amet consectetur 2</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam
                    voluptate quisquam voluptatibus magni voluptatum quasi eveniet totam
                    harum neque itaque, eum reprehenderit non repellendus? Assumenda
                    necessitatibus distinctio veniam eveniet.
                </p>
                <button onClick={(e) => handleDelete(e, 2)}>Delete</button>
            </form>
        </div>
    )
}

export default EventsEx
