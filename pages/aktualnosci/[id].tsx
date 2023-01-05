import { PortableText, PortableTextComponents } from "@portabletext/react";
import { GetStaticPropsContext } from "next";
import Image from "next/image";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import sanity from '../../client';
import { NewsType } from "../../types/interfaces";
import { formatDate } from "../../utils";

export const getStaticPaths = async () => {
    const news = await sanity.fetch('*[_type == "news"] { title, description, "image": image.asset -> url, _createdAt, _id  }');

    const paths = news.map((news: NewsType) => ({
        params: { id: news._id }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context: GetStaticPropsContext ) => {
    const news = await sanity.fetch(`*[_type == "news" && _id == '${context.params!.id}'] { title, description, "image": image.asset -> url, _createdAt, _id  }`);

    return {
        props: { news }
    }
}

const components: PortableTextComponents = {
  block: {
    h1: ({children}) => <h1 className="text-6xl">{children}</h1>,
    h2: ({children}) => <h2 className="text-5xl">{children}</h2>,
    h3: ({children}) => <h3 className="text-4xl">{children}</h3>,
    h4: ({children}) => <h4 className="text-3xl">{children}</h4>,
    h5: ({children}) => <h5 className="text-2xl">{children}</h5>,
    h6: ({children}) => <h6 className="text-xl">{children}</h6>,
    blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>
  },
  list: {
    bullet: ({children}) => <ul className="mt-xl">{children}</ul>,
    number: ({children}) => <ol className="mt-lg">{children}</ol>,
  },
  listItem: {
    bullet: ({children}) => <li className="ml-5 list-disc">{children}</li>,
    number: ({children}) => <li className="ml-4 list-decimal">{children}</li>,
  },
  unknownType: ({children}) => <span className="text-sm">{children}</span>
}
2
const NewsDetails = ({ news }: { news: NewsType[] }) => {
  const { title, description, _createdAt, short, image } = news[0];

  return (
    <div className="flex w-full max-w-5xl p-4 bg-gbrown-600"> 
      <div className='relative w-96 h-72 sm:w-1/3 sm:max-h-80 sm:h-full'>
        <div className='rounded-lg '>
            <Image src={image} layout='fill' alt='image' />
        </div>
      </div>
      <div className="flex flex-col w-2/3 gap-2 sm:px-4">
        <div className='text-4xl font-semibold '>{title}</div>
        <div className='flex items-center text-gray-500'>
            <BsFillCalendar2DateFill />
            <span className='ml-2'>{formatDate(_createdAt)}</span>
        </div>
        <div className='max-w-md'>{short}</div>
        <PortableText
          value={description}
          components={components}
        />
      </div>
    </div>
  )
}

export default NewsDetails