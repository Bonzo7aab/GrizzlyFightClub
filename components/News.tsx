import Image from 'next/image'
import Link from 'next/link';
import { BsFillCalendar2DateFill} from 'react-icons/bs'
import { NewsType } from '../types/interfaces'
import { formatDate } from '../utils';

const News = ({news: { _id, title, _createdAt, short, image }}: { news: NewsType }) => {
    return (
        <Link href={`/aktualnosci/${_id}`}>
            <div className='self-center max-w-5xl p-4 m-2 duration-300 rounded-sm shadow-md cursor-pointer sm:w-full sm:flex sm:h-56 sm:m-0 sm:p-4 bg-gbrown-600 sm:hover:translate-x-2 sm:hover:shadow-gbrown-300 sm:hover:bg-gbrown-500'>
                <div className='relative font-bold w-96 h-72 sm:w-56 sm:h-48'>
                    <div className='rounded-lg '>
                        <Image src={image} layout='fill' alt='image' className='duration-300 ease-in-out opacity-25 hover:scale-105 sm:opacity-100' />
                    </div>
                    <div className='absolute left-0 inline text-center top-3 sm:hidden'>
                        <div className='mb-3 text-2xl'>{title}</div>
                        <div className='text-sm'>{short}</div>
                    </div>
                    <div className='absolute flex items-center sm:hidden bottom-1 right-2'>
                        <BsFillCalendar2DateFill />
                        <span className='ml-2'>{formatDate(_createdAt)}</span>
                    </div>
                </div>
                <div className='hidden sm:inline sm:p-4'>
                    <div className='hidden text-2xl font-semibold sm:flex'>{title}</div>
                    <div className='flex items-center mt-2 mb-4 text-gray-500'>
                        <BsFillCalendar2DateFill />
                        <span className='ml-2'>{formatDate(_createdAt)}</span>
                    </div>
                    <div className='max-w-md'>{short}</div>
                </div>
            </div>
        </Link>
    )
}

export default News;