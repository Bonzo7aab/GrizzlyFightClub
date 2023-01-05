import { useState } from 'react';
import { ListBox, Map, Radio } from '../../components';
import schools from '../../data/przedszkola.json';
import schools2 from '../../data/szkolyPodstawowe.json';
import { SchoolType } from '../../types/interfaces';

const schoolsCombined = schools.concat(schools2)

const Place = () => {
  const [selectedSchool, setSelectedSchool] = useState<SchoolType | null>(schools[1])

  return (
    <div className='block md:flex'>
      <div className='visible md:hidden mb-1'>
        <ListBox title='Wybierz szkołę' schoolsCombined={schoolsCombined} selectedSchool={selectedSchool} setSelectedSchool={setSelectedSchool} />
      </div>
      <div className='hidden md:block'>
        <Radio schoolsCombined={schoolsCombined} selectedSchool={selectedSchool} setSelectedSchool={setSelectedSchool} />
      </div>
      <div className='w-[400px] h-[400px] md:w-[600px] md:h-[600px]'>
        <Map schoolsCombined={schoolsCombined} selectedSchool={selectedSchool} setSelectedSchool={setSelectedSchool} />
      </div>
    </div>
  )
}

export default Place