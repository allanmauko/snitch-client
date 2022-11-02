import {useState} from 'react';
import Page from './home/page';

export default function Home() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
      <div>

        <Page setCurrentUser={setCurrentUser} currentUser={currentUser}/>

      </div>
  );
}
