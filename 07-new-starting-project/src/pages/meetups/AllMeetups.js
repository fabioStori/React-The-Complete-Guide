import MeetupList from 'components/meetups/meetup-list/MeetupList';
import { useEffect, useState } from 'react';

// const DUMMY_DATA = [
//   {
//     id: 'm1',
//     title: 'This is a first meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!'
//   },
//   {
//     id: 'm2',
//     title: 'This is a second meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!'
//   }
// ];

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true); // first value is the current snapshot of the state, second value is the function to update the state
  const [loadedMeetups, setLoadedMeetups] = useState([]); // first value is the current snapshot of the state, second value is the function to update the state

  function prepareData (jsonData) {
    const meetups = [];

    for (const key in jsonData) {
      const meetup = {
        id: key,
        ...jsonData[key]
      }

      meetups.push(meetup)
    }
    return meetups;
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-getting-started-c3318-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'GET', // default is GET
        headers: {
          'Content-Type': 'application/json' // Firebase configuration
        }
      }
    )
      .then(response => {
        return response.json(); // .json returns a promise too
      })
      .then(jsonData => {
        const meetups = prepareData(jsonData);
        setLoadedMeetups(meetups);
        setIsLoading(false);
      });
  }, []);   // useEffect will run everytime a property in this [dependency] array changes
            // rule of thumb is to add everything that is external to the useEffect and used inside useEffect
            // you can omit useState functions
            // if it's empty, it only runs once (similar to ngOnInit, but useful for when a component is inside a ngIf an causes an infinite loop)

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={loadedMeetups}></MeetupList>
    </div>
  );
}

export default AllMeetupsPage;
