import { Button } from '@mantine/core';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const SanityEdit = () => {
  const { data: session } = useSession()

  return (
    <div>
        {session && <Link href='https://sanitygrizzly.sanity.studio/desk'>
            <a target='_blank' className='text-center sm:text-left'><Button className='bg-gteal-600'>Edytuj dane w Sanity</Button></a>
        </Link>}
    </div>
  )
}

export default SanityEdit