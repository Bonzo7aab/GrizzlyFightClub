import Image from 'next/image'
import { CoachType } from '../../types/interfaces'
import sanity from '../../client'

const Coach = ({ data: { name, experience, description, image }}: { data: CoachType }) => 
    <div className='md:flex md:w-3/4 h-96 m-4 shadow-md shadow-gteal-300'>
        <div className='relative md:w-1/4 h-full shadow-md shadow-gteal-300' >
                <Image src={image} alt={name} layout='fill' objectFit='cover' />
        </div>
        <div className='md:w-3/4 p-4 text-center font-medium md:text-left'>
            <div className='text-2xl md:text-3xl text-gray-700'>{name}</div>
            <div className='text-sm md:text-base text-gray-600 my-2 italic'>&#8222;{description}&#8221;</div>
            <div className='text-base md:text-base text-gray-500 flex flex-col'>{experience?.map((el: string) => 
                <span key={el}>&bull; {el}</span>
            )}</div>
        </div>
    </div>

const index = ({ coaches }: { coaches: CoachType[] }) => {
  return (
    <div>
        {coaches.map(coach => <Coach key={coach.name} data={coach} />)}
    </div>
  )
}

export const getServerSideProps = async () => {
    const coaches = await sanity.fetch(`*[_type == "coach"] { name, position, experience, description, "image": image.asset -> url }`);

    return {
        props: {
            coaches
        }
    }
}

export default index