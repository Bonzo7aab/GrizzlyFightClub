import sanity from '../../client';
import { CalendarAgenda, News } from '../../components';
import SanityEdit from '../../components/SanityEdit';
import { NewsType } from '../../types/interfaces';

const index = ({ news }: { news: NewsType[] }) => {
  return (
    <div className='flex flex-col w-full gap-4 mx-4 text-center'>
      <SanityEdit />
      {news.map((el: NewsType) => 
        <News key={el.title} news={el}/>
      )}
        <CalendarAgenda />
    </div>
  )
}

export const getStaticProps = async () => {
  const news = await sanity.fetch('*[_type == "news"] { title, short, "image": image.asset -> url, _createdAt, _id  }');

  return {
    props: { news }
  }
}

export default index
