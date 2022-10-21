import Image from 'next/image';
import Link from "next/link";
import {faFacebook,} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Navbar() {
  const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
  }
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
      <FontAwesomeIcon icon={faFacebook} />
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i> 
        <h1>Snitch</h1>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link href="/write">WRITE</Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
      {user ? (
         <Link href="/settings">
        <Image
          loader={myLoader}
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="Picture of the author"
          width={100}
          height={100}
        />
        </Link>
         ) : (

        <ul className="topList">
          <li className="topListItem">
            <Link href="/login">LOGIN</Link>
          </li>
          <li className="topListItem">
            <Link href="/register">REGISTER</Link>
          </li>
        </ul>

         )}
      </div>
    </div>
  );
}

export default Navbar;
