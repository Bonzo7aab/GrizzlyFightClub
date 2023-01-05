import { RadioGroup } from '@headlessui/react';
import { Dispatch, SetStateAction } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { SchoolType } from '../types/interfaces';

const Radio = ({
    selectedSchool,
    setSelectedSchool,
    schoolsCombined
}: {
    selectedSchool: SchoolType | null
    setSelectedSchool: Dispatch<SetStateAction<SchoolType | null>>
    schoolsCombined: Array<SchoolType>
}) => {
  return (
    <div className='min-w-[300px] max-h-[600px] pr-3 scrollbar-thin scrollbar-thumb-gbrown-200 hover:scrollbar-thumb-gbrown-100 scrollbar-track-gray-200 invisible sm:visible'>
        <RadioGroup value={selectedSchool} onChange={setSelectedSchool} defaultChecked>
          <RadioGroup.Label className="sr-only">Lista szkół</RadioGroup.Label>
          <div className="space-y-2">
            {schoolsCombined.map((school: SchoolType) => (
              <RadioGroup.Option
                key={school.name}
                value={school}
                className={({ active, checked }) =>
                  `${
                    checked ? 'bg-gteal-600 text-white' : school.type === 'school' ? 'border-l-8 border-lime-500' : 'border-l-8 border-red-400'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-bold ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {school.name.slice(0, 25)}..
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={` ${
                              checked ? 'text-sky-100' : 'text-gray-600'
                            }`}
                          >
                            <span>{school.address.slice(0, 25)}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <BsFillCheckCircleFill size={25}/>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
    </div>
  )
}

export default Radio