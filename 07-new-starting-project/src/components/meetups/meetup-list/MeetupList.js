import MeetupItem from '../meetup-item/MeetupItem';
import styles from './MeetupList.module.css';

function MeetupList(props) {
  return (
    <ul className={styles.list}>
      {props.meetups.map(meetup => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        ></MeetupItem>
      ))}
    </ul>
  );
}

export default MeetupList;
