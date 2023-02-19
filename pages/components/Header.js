import Link from 'next/link';
import { createPortal } from 'react-dom';
import Portal from './Portal';


export default function Header() {

  const handleIt = () => {

    console.log('clicked')
    const appRoot = document.getElementById('__next');
    const newOne = document.createElement('div');
    newOne.id = 'portal'
    appRoot.parentNode.insertBefore(newOne, appRoot.nextSibling);
    console.log(document.getElementById('portal'))
    return createPortal(<h1>Hello Portal</h1>, document.getElementById('portal'))
  }

  return (
    <>
      {/* <Portal >
        <h3>Portal</h3>
      </Portal> */}
      <ul>
        <li>
          <Link href="/">
            Homeddd
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <button onClick={handleIt}>
        click to try
      </button>
    </>
  );
}