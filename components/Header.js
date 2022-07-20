/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link';
import Image from 'next/image';
import logo from '../images/logo.png';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <Link href="/">
        <a>
          <Image
            src={logo}
            width="150"
            height="150"
            className=" rounded-full block "
          />
        </a>
      </Link>
      <p className="text-3xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
