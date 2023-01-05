import { Box, Center, SegmentedControl, Select } from '@mantine/core';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { GiBallerinaShoes, GiHighKick } from 'react-icons/gi';
import { MdSportsKabaddi } from 'react-icons/md';
import sanity from '../../client';
import SanityEdit from '../../components/SanityEdit';
import { weekDays } from '../../constants';
import { ActivityType } from '../../types/interfaces';

const Schedule = ({ activities }: { activities: ActivityType[] }) => {
  const schoolsList: Array<string> = ['Wszystkie szkoły'].concat(activities.map(act => act.school.name).filter((val, index, self) => self.indexOf(val) === index))
  const typeList: Array<string> = ['all'].concat(activities.map(i => i.type).filter((val, index, self) => self.indexOf(val) === index))

  const [selectedSchool, setSelectedSchool] = useState<string>(schoolsList[0])
  const [selectedType, setSelectedType] = useState<string>(typeList[0])
  const [activityData, setActivityData] = useState<Array<ActivityType>>(activities.sort((a, b) => a.start.localeCompare(b.start, undefined, {numeric: true})))

  const onSchoolChange = (school: string) => {
    setSelectedSchool(school)
    if(school === 'Wszystkie szkoły') {
      setSelectedType(typeList[1])
      setActivityData(activities.filter(el => el.type === typeList[1]))
      return;
    }
    setActivityData(activities.filter(el => el.school.name === school))
  }

  const onTypeChange = (type: string) => {
    setSelectedType(type)
    if(type === 'all') return setActivityData(activities)
    setActivityData(activities.filter(el => el.type === type))
  }

  const list = { hidden: { opacity: 0 } }
  const item = { hidden: { x: -10, opacity: 0 } }

  return (
    <div className='grid w-full max-w-5xl gap-4 mb-8'>

      <SanityEdit />

      <Select
        placeholder="Szkoła.."
        data={schoolsList.map(school => ({value: school, label: school}))}
        value={selectedSchool}
        onChange={onSchoolChange}
      />
      <SegmentedControl
        value={selectedSchool == 'Wszystkie szkoły' ? selectedType : 'all'}
        onChange={type => onTypeChange(type)}
        size='md'
        data={[
          {
            value: 'balet',
            label: (
              <Center>
                <GiBallerinaShoes size={16} />
                <Box ml={10}>Balet</Box>
              </Center>
            ),
            disabled: selectedSchool != 'Wszystkie szkoły'
          },
          {
            value: 'karate',
            label: (
              <Center>
                <GiHighKick size={16} />
                <Box ml={10}>Karate</Box>
              </Center>
            ),
            disabled: selectedSchool != 'Wszystkie szkoły'
          },
          {
            value: 'judo',
            label: (
              <Center>
                <MdSportsKabaddi size={16} />
                <Box ml={10}>Judo</Box>
              </Center>
            ),
            disabled: selectedSchool != 'Wszystkie szkoły'
          },
          {
            value: 'all',
            label: (
              <Center>
                <Box mx={10}>All</Box>
              </Center>
            ),
            disabled: selectedSchool == 'Wszystkie szkoły'
          }
        ]}
      />

      <div className='border border-gray-300'>
        {weekDays.map((weekDay: string) =>
          <div key={weekDay}>
            <div className='p-3 font-semibold text-center bg-gbrown-400'>{weekDay}</div>
            {activityData.filter((activity: ActivityType) => activity.day === weekDay).map((activity, i) =>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className='flex p-3 text-sm odd:bg-gbrown-600 hover:bg-gbrown-500 sm:text-base'
                key={activity._id}
              >
                <span className='basis-1/4'>{activity.start} - {activity.end}</span>
                <span className='basis-2/4'>{activity.school.short}</span>
                <span className='basis-1/4'>{activity.type}</span>
              </motion.div>
            )}
          </div>
        )}
      </div>

    </div>
  )
}

export const getServerSideProps = async () => {
  const activities = await sanity.fetch('*[_type == "activity"] { ..., school-> }');

  return {
      props: {
          activities
      }
  }
}

export default Schedule;