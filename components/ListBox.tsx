import { Listbox, Transition } from '@headlessui/react'
import { Dispatch, Fragment, SetStateAction } from 'react'
import { FaCheck } from 'react-icons/fa'
import { SchoolType } from '../types/interfaces'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const ListBox = ({
    title, 
    schoolsCombined, 
    selectedSchool, 
    setSelectedSchool
}: {
    title: string, 
    schoolsCombined: Array<SchoolType>
    selectedSchool: SchoolType | null, 
    setSelectedSchool: Dispatch<SetStateAction<SchoolType | null>>
}) => {
    return (
        <Listbox value={selectedSchool} onChange={setSelectedSchool}>
            {({ open }) => (
            <>
                <Listbox.Label className="block text-sm font-medium text-gray-700">{title}</Listbox.Label>
                <div className="mt-1 relative">
                    <Listbox.Button className="relative w-full border border-gbrown-400 rounded-md shadow-sm pl-4 pr-11 py-2 sm:text-sm">
                        <span className="flex items-center">
                        <span className="ml-3 block truncate">{selectedSchool?.short}</span>
                        </span>
                    </Listbox.Button>

                    <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute z-10 mt-1 w-[400px] break-words bg-white shadow-lg max-h-56 rounded-md py-1 sm:text-sm overflow-y-scroll scrollbar-thin scrollbar-thumb-gbrown-200 hover:scrollbar-thumb-gbrown-100 scrollbar-track-gray-200">
                            {schoolsCombined.map((school: SchoolType) => (
                                <Listbox.Option
                                    key={school.id}
                                    className={({ active }) =>
                                        classNames(
                                        active ? 'text-white bg-gbrown-200' : 'text-gray-900',
                                        'select-none relative py-2 pl-3 pr-9'
                                        )
                                    }
                                    value={school}
                                >
                                {({ selected, active }) => (
                                    <>
                                    <div className="flex items-center mr-3">
                                        <span
                                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                        >
                                        {school.name}
                                        </span>
                                    </div>

                                    {selected ? (
                                        <span
                                            className={classNames(
                                                active ? 'text-white' : 'text-gteal-400',
                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                            )}
                                        >
                                        <FaCheck className="h-5 w-5" aria-hidden="true" />
                                        </span>
                                    ) : null}
                                    </>
                                )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </>
            )}
        </Listbox>
    )
}

export default ListBox