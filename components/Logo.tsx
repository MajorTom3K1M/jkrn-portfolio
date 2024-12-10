import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href='/'>
      <div className='font-mono font-black'>JKRN</div>
    </Link>
  );
};

export default Logo;