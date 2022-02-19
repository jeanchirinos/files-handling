import Link from 'next/link';
import usePlantillas from '../src/hooks/usePlantillas';
import { useState, Fragment } from 'react';

export default function Emails() {
  const { emails, priority } = usePlantillas();

  const [emailIndex, setEmailIndex] = useState(0);

  return (
    <>
      <h1>Emails</h1>
      <Link href="/">
        <a>
          <p>Go home</p>
        </a>
      </Link>

      <>
        {priority === 'order' && (
          <div>
            <span style={{ color: 'var(--primary-color)' }}>Orden</span>
            <span>Cantidad</span>
          </div>
        )}

        {priority === 'quantity' && (
          <div>
            <span>Orden</span>
            <span style={{ color: 'var(--primary-color)' }}>Cantidad</span>
          </div>
        )}
      </>

      {emails.map((email, index) => (
        <div
          key={index}
          style={{ backgroundColor: 'red', border: '1px solid black' }}
          onClick={() => setEmailIndex(index)}
        >
          {email.map((plantilla, index) => (
            <span key={index} title={plantilla.size}>
              {plantilla.name}
            </span>
          ))}
        </div>
      ))}

      <br />

      {emails[emailIndex]?.map((plantilla, index) => (
        <span
          key={index}
          title={plantilla.size}
          style={{ backgroundColor: 'skyblue', border: '1px solid black' }}
        >
          {plantilla.name}
        </span>
      ))}

      <br />
      {emails[emailIndex]?.map((plantilla, index) => (
        <Fragment key={index}>
          {plantilla.NSTDNumber && (
            <span
              title={plantilla.size}
              style={{ backgroundColor: 'green', border: '1px solid black' }}
            >
              {plantilla.NSTDNumber}
            </span>
          )}
        </Fragment>
      ))}
    </>
  );
}
