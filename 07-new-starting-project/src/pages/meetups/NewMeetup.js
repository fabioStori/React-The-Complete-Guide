import { useHistory } from 'react-router-dom';

import NewMeetupForm from 'components/meetups/new-meetup-form/NewMeetupForm';

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-getting-started-c3318-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST', // default is GET
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json' // Firebase configuration
        }
      }
    )
      .then(() => {
        // fetch returns a promise
        console.log('entered then');
        // history.push();  (??)
        history.replace('/'); // navigate to the starting page - pa
      })
      .catch(() => {
        console.log('entered catch');
      });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
