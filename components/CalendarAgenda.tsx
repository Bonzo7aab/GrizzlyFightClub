import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

const CalendarAgenda = () => {
  return (
    <div className='mx-8 pt-2 shadow-inner border border-gray-100 max-w-3xl max-h-96 divide-y-2 divide-gbrown-300 overflow-y-auto scrollbar-thin scrollbar-thumb-gbrown-300 scrollbar-track-gray-100'>

        <div className='flex'>
            <div className='flex flex-col w-20 m-2 pr-4 pl-5 text-center'>
                <span className='font-medium text-2xl'>19</span>
                <span className='text-sm'>Lip</span>
            </div>
            <div className="w-full">
                <div className="w-full p-2">
                    <Disclosure as="div" className="mb-2">
                    {({ open }) => (
                        <div className={`${open && 'bg-gbrown-500'}`}>
                            <Disclosure.Button className="flex w-full justify-between items-center text-left rounded-sm px-4 py-2 font-medium hover:bg-gbrown-500 border-l-2 border-gteal-500">
                                <div>
                                    <div>What is your refund policy?</div>
                                    <div className='font-normal text-sm text-gray-500'>9:00 AM - 3:30 PM</div>
                                </div>
                                <ChevronUpIcon
                                    className={`${
                                        open ? 'rotate-180 transform' : ''
                                    } h-7 w-7 text-gbrown-300 transition ease-out duration-300`}
                                />
                            </Disclosure.Button>
                            <Transition
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95"
                                enterTo="transform scale-100 "
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100"
                                leaveTo="transform scale-95"
                            >
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    If  unhappy with your purchase for any reason, email us
                                    within 90 days and  refund you in full, no questions asked.
                                </Disclosure.Panel>
                            </Transition>
                        </div>
                    )}
                    </Disclosure>
                    <Disclosure as="div" className="mb-2">
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex w-full justify-between items-center text-left rounded-sm px-4 py-2 font-medium hover:bg-gbrown-500 border-l-2 border-gteal-500">
                            <div>
                                <div>What animal you are?</div>
                                <div className='font-normal text-sm text-gray-500'>11:00 AM - 2:30 PM</div>
                            </div>
                            <ChevronUpIcon
                            className={`${
                                open ? 'rotate-180 transform' : ''
                            } h-7 w-7 text-gbrown-300 transition ease-out duration-300`}
                            />
                        </Disclosure.Button>
                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95"
                            enterTo="transform scale-100 "
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100"
                            leaveTo="transform scale-95"
                        >
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                Another answer.
                            </Disclosure.Panel>
                        </Transition>
                        </>
                    )}
                    </Disclosure>
                </div>
            </div>
        </div>

        <div className='flex'>
            <div className='flex flex-col m-2 w-20 pr-4 pl-5 text-center'>
                <span className='font-medium text-2xl'>25</span>
                <span className='text-sm'>Sty</span>
            </div>
            <div className="w-full">
                <div className="w-full p-2">
                    <Disclosure as="div" className="mb-2">
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex w-full justify-between items-center text-left rounded-sm px-4 py-2 font-medium hover:bg-gbrown-500 border-l-2 border-gteal-500">
                            <div>
                                <div>What is your refund policy?</div>
                                <div className='font-normal text-sm text-gray-500'>9:00 AM - 3:30 PM</div>
                            </div>
                            <ChevronUpIcon
                                className={`${
                                    open ? 'rotate-180 transform' : ''
                                } h-7 w-7 text-gbrown-300 transition ease-out duration-300`}
                            />
                        </Disclosure.Button>
                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95"
                            enterTo="transform scale-100 "
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100"
                            leaveTo="transform scale-95"
                        >
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                If  unhappy with your purchase for any reason, email us
                                within 90 days and  refund you in full, no questions asked.
                            </Disclosure.Panel>
                        </Transition>
                        </>
                    )}
                    </Disclosure>
                </div>
            </div>
        </div>

        <div className='flex'>
            <div className='flex flex-col m-2 w-20 pr-4 pl-5 text-center'>
                <span className='font-medium text-2xl'>2</span>
                <span className='text-sm'>Sie</span>
            </div>
            <div className="w-full">
                <div className="w-full p-2">
                    <Disclosure as="div" className="mb-2">
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex w-full justify-between items-center text-left rounded-sm px-4 py-2 font-medium hover:bg-gbrown-500 border-l-2 border-gteal-500">
                            <div>
                                <div>What is your refund policy?</div>
                                <div className='font-normal text-sm text-gray-500'>9:00 AM - 3:30 PM</div>
                            </div>
                            <ChevronUpIcon
                                className={`${
                                    open ? 'rotate-180 transform' : ''
                                } h-7 w-7 text-gbrown-300 transition ease-out duration-300`}
                            />
                        </Disclosure.Button>
                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95"
                            enterTo="transform scale-100 "
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100"
                            leaveTo="transform scale-95"
                        >
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                If  unhappy with your purchase for any reason, email us
                                within 90 days and  refund you in full, no questions asked.
                            </Disclosure.Panel>
                        </Transition>
                        </>
                    )}
                    </Disclosure>
                    <Disclosure as="div" className="mb-2">
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex w-full justify-between items-center text-left rounded-sm px-4 py-2 font-medium hover:bg-gbrown-500 border-l-2 border-gteal-500">
                            <div>
                                <div>What animal you are?</div>
                                <div className='font-normal text-sm text-gray-500'>11:00 AM - 2:30 PM</div>
                            </div>
                            <ChevronUpIcon
                            className={`${
                                open ? 'rotate-180 transform' : ''
                            } h-7 w-7 text-gbrown-300 transition ease-out duration-300`}
                            />
                        </Disclosure.Button>
                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95"
                            enterTo="transform scale-100 "
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100"
                            leaveTo="transform scale-95"
                        >
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                Another answer.
                            </Disclosure.Panel>
                        </Transition>
                        </>
                    )}
                    </Disclosure>
                    <Disclosure as="div" className="mb-2">
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex w-full justify-between items-center text-left rounded-sm px-4 py-2 font-medium hover:bg-gbrown-500 border-l-2 border-gteal-500">
                            <div>
                                <div>What is your refund policy?</div>
                                <div className='font-normal text-sm text-gray-500'>9:00 AM - 3:30 PM</div>
                            </div>
                            <ChevronUpIcon
                                className={`${
                                    open ? 'rotate-180 transform' : ''
                                } h-7 w-7 text-gbrown-300 transition ease-out duration-300`}
                            />
                        </Disclosure.Button>
                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95"
                            enterTo="transform scale-100 "
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100"
                            leaveTo="transform scale-95"
                        >
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                If  unhappy with your purchase for any reason, email us
                                within 90 days and  refund you in full, no questions asked.
                            </Disclosure.Panel>
                        </Transition>
                        </>
                    )}
                    </Disclosure>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CalendarAgenda