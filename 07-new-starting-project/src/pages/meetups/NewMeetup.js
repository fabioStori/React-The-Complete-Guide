import NewMeetupForm from 'components/meetups/new-meetup-form/NewMeetupForm';

function NewMeetupPage() {
  function addMeetupHandler(meetupData) {}

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
