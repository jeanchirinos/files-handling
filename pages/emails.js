import styled from 'styled-components';
import Link from 'next/link';
import usePlantillas from '@/hooks/usePlantillas';
import { useState, Fragment } from 'react';
import { GlobalPage } from '@/General/AppWrapper';

export default function Emails() {
  const { _emails, _priority } = usePlantillas();

  const [emailIndex, setEmailIndex] = useState(0);

  return (
    <StyledEmails>
      <h1>Emails</h1>
      <Link href="/">
        <a>
          <p>Go home</p>
        </a>
      </Link>

      <>
        {_priority === 'order' && (
          <div>
            <span style={{ color: 'var(--primary-color)' }}>Orden</span>
            <span>Cantidad</span>
          </div>
        )}

        {_priority === 'quantity' && (
          <div>
            <span>Orden</span>
            <span style={{ color: 'var(--primary-color)' }}>Cantidad</span>
          </div>
        )}
      </>

      {_emails.map((email, index) => (
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

      {_emails[emailIndex]?.map((plantilla, index) => (
        <span
          key={index}
          title={plantilla.size}
          style={{ backgroundColor: 'skyblue', border: '1px solid black' }}
        >
          {plantilla.name}
        </span>
      ))}

      <br />
      {_emails[emailIndex]?.map((plantilla, index) => (
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
    </StyledEmails>
  );
}

const StyledEmails = styled(GlobalPage)``;
