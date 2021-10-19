import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // Send user to previous page
      // router.go(-1)
      // Send user to next page
      // router.go(1)
      // Send user to specific page
      router.push('/');
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the{' '}
        <Link href="/">
          <a>Homepage</a>
        </Link>{' '}
      </p>
    </div>
  );
};

export default NotFound;
