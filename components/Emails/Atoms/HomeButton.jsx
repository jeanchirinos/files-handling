import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';

export default function HomeButton() {
  return (
    <Link href="/">
      <a className="button-link">
        <AiFillHome />
      </a>
    </Link>
  );
}
