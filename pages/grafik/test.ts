import { Box, Center, Paper, SegmentedControl, Select, Table, Text } from '@mantine/core';
import { useEffect, useState } from 'react'
import schools from '../../data/przedszkola.json';
import schools2 from '../../data/szkolyPodstawowe.json';
import { ActivityType, SchoolType } from '../../types/interfaces';
import { GiBallerinaShoes, GiHighKick } from 'react-icons/gi'
import { MdSportsKabaddi } from 'react-icons/md'
import zajecia from '../../data/zajecia.json'

const allSchools = [{
  "id":0,
  "name":"Wszystkie szkoły",
  "short":"Wszystkie szkoły",
  "address":"",
  "position":{
     "lat":0,
     "lng":0
  },
  "type": ""
}]

const weekDays = ['Poniedziałek','Wtorek', 'Środa', 'Czwartek', 'Piątek']

const schoolsCombined: Array<SchoolType> = allSchools.concat(schools).concat(schools2)
const activities: Array<string> = ['all'];
zajecia.forEach(el => !activities.includes(el.type) && activities.push(el.type))

const ActivityBox = (activity: ActivityType) => {
  let activityTypeColor = activity.type === 'karate' ? 'bg-red-300' : activity.type === 'judo' ? 'bg-blue-300' : 'bg-pink-300'

  return (
    <Paper shadow="md" className={`${activityTypeColor} w-30 h-30 p-2 hover:scale-105 duration-75`}>
      <Text size='sm' weight='bold'>{activity.place}</Text>
      <Text size='sm'>{activity.hourStart} - {activity.hourEnd}</Text>
      <Text size='xs'>{activity.type}</Text>
    </Paper>
  )
}

const Schedule = () => {
  const [selectedSchool, setSelectedSchool] = useState<SchoolType>(schoolsCombined[0])
  const [selectedType, setSelectedType] = useState<string>(activities[0])
  const [activityData, setActivityData] = useState<Array<ActivityType>>(zajecia.sort((a, b) => a.hourStart - b.hourStart))
  const [tableActivityData, setTableActivityData] = useState<Array<ActivityType>>(activityData)
  
  const onTypeChange = (type: string) => {
    setSelectedType(type)
    if(type === 'all') return setActivityData(zajecia)
    setActivityData(zajecia.filter(el => el.type === type))
  }

  const onSchoolChange = (school: string) => {
    console.log(schoolsCombined.filter(el => el.name === school)[0])
    setSelectedSchool(schoolsCombined.filter(el => el.name === school)[0])
    if(school === 'Wszystkie szkoły') return setActivityData(zajecia)
    setActivityData(zajecia.filter(el => el.place === selectedSchool.short))
  }

  // const activityDataRow = [[5 days], [5 days], [5 days]];
  const activityDataRow: ActivityType[][] = [[], [], [], [], [], [], []];
  const activityDataRow2: ActivityType[][] = [[], [], [], [], []];
  const activityDataFn = () => {

    // for (const key in activityData) {
    //   switch (activityData[key].day) {
    //     case 'Poniedziałek':
    //       activityDataRow[0].push(activityData[key])
    //       break;
    //     case 'Wtorek':
    //         activityDataRow[1].push(activityData[key])
    //         break;
    //     case 'Środa':
    //       activityDataRow[2].push(activityData[key])
    //       break;
    //     case 'Czwartek':
    //       activityDataRow[3].push(activityData[key])
    //       break;
    //     case 'Piątek':
    //       activityDataRow[4].push(activityData[key])
    //       break;
    //     default:
    //       break;
    //   }
    // }
    let countMon = 0;
    let countTue = 0;
    let countWed = 0;
    let countThu = 0;
    let countFri = 0;
    activityData.slice(0, 3)
    for (const key in activityData) {
      console.log(activityData[key])

      // switch (activityData[key].day) {
      //   case 'Poniedziałek':
      //     activityDataRow[countMon].push(activityData[key])
      //     countMon++;
      //     break;
      //   case 'Wtorek':
      //     activityDataRow[countTue].push(activityData[key])
      //     countTue++;
      //     break;
      //   case 'Środa':
      //     activityDataRow[countWed].push(activityData[key])
      //     countWed++;
      //     break;
      //   case 'Czwartek':
      //     activityDataRow[countThu].push(activityData[key])
      //     countThu++;
      //     break;
      //   case 'Piątek':
      //     activityDataRow[countFri].push(activityData[key])
      //     countFri++;
      //     break;
      //   default:
      //     break;
      // }
    }

    // for (let i = 0; i < 7; i++) {
    //   let weekRow: ActivityType[] = [];

    //   for (let j = 0; j < 5; j++) {
    //     weekRow.push(activityDataRow[j])
    //   }
    //   activityDataRow2.push(weekRow)
      
    // }

  }
  activityDataFn()
  // console.log(activityDataRow)
  return (
    <div>
        {/* Drawer component for edit */}

        <Select
          label="Wybierz szkołę"
          placeholder="Szkoła.."
          data={schoolsCombined.map(({name}) => ({value: name, label: name}))}
          value={selectedSchool.name}
          onChange={onSchoolChange}
        />


        <SegmentedControl
          value={selectedType}
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
            },
            {
              value: 'karate',
              label: (
                <Center>
                  <GiHighKick size={16} />
                  <Box ml={10}>Karate</Box>
                </Center>
              ),
            },
            {
              value: 'judo',
              label: (
                <Center>
                  <MdSportsKabaddi size={16} />
                  <Box ml={10}>Judo</Box>
                </Center>
              ),
            },
            {
              value: 'all',
              label: (
                <Center>
                  <Box mx={10}>All</Box>
                </Center>
              ),
            }
          ]}
        />


        <Table>
          <thead>
            <tr>
              {weekDays.map(weekDay =>
                <th key={weekDay} className='text-center'>{weekDay}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {/* {activityData.sort((a, b) => a.hourStart - b.hourStart)
              .map((activity: ActivityType) => (
                <tr key={activity.id}>
                  <td>{activity.hourStart}</td>
                  <td>{activity.day}</td>
                  <td>{activity.place}</td>
                  <td>{activity.hourStart}</td>
                  <td>{activity.hourEnd}</td>
                </tr>
              ))} */}
            {/* {activityData.map((activity: ActivityType) => (
              <tr key={activity.id}>
                <td>{activity.day === 'Poniedziałek' && ActivityBox(activity)}</td>
                <td>{activity.day === 'Wtorek' && ActivityBox(activity)}</td>
                <td>{activity.day === 'Środa' && ActivityBox(activity)}</td>
                <td>{activity.day === 'Czwartek' && ActivityBox(activity)}</td>
                <td>{activity.day === 'Piątek' && ActivityBox(activity)}</td>
              </tr>
            ))} */}
            {activityDataRow2.map((activity: ActivityType[], i: number) => {
              console.log(activity)
              return activity.map((act: ActivityType) => (
                <tr key={act.id}>
                  <td></td>
                  {/* <td>{act[0].day}</td>
                  <td>{act[1].day}</td>
                  <td>{act[2].day}</td>
                  <td>{act[3].day}</td>
                  <td>{act[4].day}</td> */}
                </tr>
              ))
            }
            
            )}
          </tbody>
        </Table>

    </div>
  )
}

export default Schedule;