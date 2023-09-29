import { Link, useNavigate, useParams } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchEvent, queryClient, updateEvent } from '../../utils/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();

  const {data, isLoading, isError, error} = useQuery({
    queryKey: ['event', params.id ],
    queryFn: ({signal}) => fetchEvent({ signal, id: params.id })
  })

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: async (mutateFnData) => {
      const newEvent =  mutateFnData.event
      await queryClient.cancelQueries({ queryKey: ['events',  params.id ] })
      const storedData = queryClient.getQueryData(['events',  params.id ])
      queryClient.setQueryData(['events', params.id ], newEvent);

      return { storedData };
    },
    onError: (error, data , context) => {
      queryClient.setQueryData(['events', params.id], context.storedData);
    },
    // onSettled: () => {
    //   queryClient.invalidateQueries({queryKey: ['events', params.id ]})
    // }
  })

  function handleSubmit(formData) {
    mutate({id: params.id, event: formData });
    navigate('../');
  }

  function handleClose() {
    navigate('../');
  }


  let content;

  if (isLoading) {
    content = (
      <div className="center">
        <LoadingIndicator />
      </div>
    );
  }

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="Failed to load event"
          message={
            error.info?.message ||
            'Failed to load event. Please check your inputs and try again later.'
          }
        />
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    );
  }

  return ( 
    <div>{content}</div>
  );
}