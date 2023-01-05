import Image from 'next/image';
import sanity from '../../client';
import { CampType } from '../../types/interfaces';
import { formatDate } from '../../utils';

const Obozy = ({ camp }: { camp: CampType[] }) => {
  return (
    <div className='flex flex-col gap-4'>
      {camp.map(({_id, name, place, date, images}: CampType) =>
        <div key={_id} className='text-center'>
          <div className='text-3xl font-bold'>{name}</div>
          <div className='font-semibold'>{place}</div>
          <div className='mb-4 text-xl font-bold'>{formatDate(date)}</div>
          <div className='flex flex-col gap-2 sm:flex-row'>
            {images.map(image =>
              <div key={image} className='relative duration-150 ease-in hover:z-10 w-80 h-96 hover:scale-150'>
                <Image src={image} layout='fill' alt='image' />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export const getStaticProps = async () => {
  const camp = await sanity.fetch('*[_type == "camp"] { _id, name, place, date, "images": image[].asset -> url  }');

  return {
    props: { camp }
  }
}

export default Obozy