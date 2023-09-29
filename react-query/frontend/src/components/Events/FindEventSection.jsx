import { useQuery } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import { fetchEvents } from '../../utils/http';
import EventItem from './EventItem';
import ErrorBlock from '../UI/ErrorBlock';
import LoadingIndicator from '../UI/LoadingIndicator';

export default function FindEventSection() {
  const [searchElement, setSearchElement] = useState();
  const searchRef = useRef();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events', { search: searchElement }], 
    queryFn: ({ queryKey }) => fetchEvents({ ...queryKey[1] }),
    enabled: searchElement !== undefined
  });  

  function handleSubmit(event) {
    event.preventDefault();
    setSearchElement(searchRef.current.value);
  }

  let content = <p>Please enter a search term and to find events.</p>;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="An error occurred"
        message={error.info?.message || 'Failed to fetch events.'}
      />
    );
  } 

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }


  return (
     <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchRef}
          />
          <button>Search</button>
        </form>
      </header>
      {content}
    </section>
  );
}
