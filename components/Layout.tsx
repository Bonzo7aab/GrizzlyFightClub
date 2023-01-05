/* eslint-disable @next/next/no-img-element */
import { Fragment, ReactNode, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  UserGroupIcon,
  CalendarIcon,
  MapIcon,
  LocationMarkerIcon,
  MenuIcon,
  InformationCircleIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import { Burger, Button } from '@mantine/core'

const menuItems = [
  {
    name: 'Aktualności',
    href: '/aktualnosci'
  },
  {
    name: 'Grafik',
    href: '/grafik'
  },
  {
    name: 'Obozy',
    href: '/obozy'
  },
  {
    name: 'Zapisy',
    href: '/zapisy'
  }
]
const aboutUs = [
  {
    name: 'O klubie',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '/oklubie',
    icon: InformationCircleIcon,
  },
  {
    name: 'Kadra trenerska',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/kadra',
    icon: UserGroupIcon,
  },
  {
    name: 'Gdzie jesteśmy',
    description: "Connect with third-party tools that you're already using.",
    href: '/gdziejestesmy',
    icon: MapIcon,
  },
  {
    name: 'Dokumenty do pobrania',
    description: "Connect with third-party tools that you're already using.",
    href: '/dokumenty',
    icon: MapIcon,
  }
]
const aboutUsResponsive = [
    {
      name: 'Aktualności',
      description: 'Get a better understanding of where your traffic is coming from.',
      href: 'aktualnosci',
      icon: InformationCircleIcon,
    },
    {
      name: 'Grafik',
      description: 'Speak directly to your customers in a more meaningful way.',
      href: 'grafik',
      icon: CalendarIcon,
    },
    {
      name: 'Obozy',
      description: "Connect with third-party tools that you're already using.",
      href: 'obozy',
      icon: LocationMarkerIcon,
    },
    {
      name: 'Dokumenty do pobrania',
      description: "Dokumenty,formularze do wypelnienia",
      href: '/dokumenty',
      icon: MapIcon,
    }
]
const social = [
  { title: 'Facebook', icon: BsFacebook, href: 'https://www.facebook.com/grizzlyfightclub' },
  { title: 'Instagram', icon: BsInstagram, href: 'https://www.instagram.com/grizzlyfightclub/' }
]
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Footer = () => {
  return (
    <footer className="fixed bottom-0 p-10 bg-gbrown-500 footer">
      <div className='flex items-center self-center gap-12'>
        <Image
          src="/logo.png"
          alt="logo_footer"
          width={120}
          height={120}
        />
        <div className='flex flex-col'>
          <div className="text-4xl font-extrabold text-gbrown-200">GRIZZLY<br/>
            <p className="text-base text-black">Fight Club</p>
          </div>
          <div className='flex flex-row gap-4'>
            {social.map(el => 
              <a key={el.href} href={el.href} className='my-2 text-3xl duration-200 ease-in text-gbrown-100 hover:text-gbrown-300'>
                <el.icon />
              </a>
            )}
          </div>
        </div>
      </div> 
      <div>
        <span className="footer-title">Popularne</span> 
          {menuItems.map(({ href, name }) => (
            <Link key={name} href={href}>
              <span className="font-semibold cursor-pointer text-gbrown-300 hover:text-gbrown-200">{name}</span>
            </Link>
          ))}
      </div>
      <div>
        <span className="footer-title">O nas</span> 
          {aboutUs.map(({ href, name }) => (
            <Link key={name} href={href}>
              <span className="font-semibold cursor-pointer text-gbrown-300 hover:text-gbrown-200">{name}</span>
            </Link>
          ))}
      </div>
    </footer>
  )
}

const Header = () => {
  const { data: session } = useSession()
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';

  return (
    <header className="flex items-center px-10 py-2 bg-gbrown-500 text-gbrown-200">
      <div className='flex justify-center flex-1 sm:justify-start'>
        <Link href='/'>
          <a className='hidden sm:block relative h-[50px] w-[120px] md:h-[100px] md:w-[230px]'>
            <Image
              src="/newLogo-t.png"
              alt="logo"
              layout='fill'
            />
          </a>
        </Link>
        <Link href='/'>
          <a className='block sm:hidden relative h-[50px] w-[150px]'>
            <Image
              src="/newLogo2-t.png"
              alt="logo"
              layout='fill'
            />
          </a>
        </Link>
      </div>
      <div className="flex-none hidden clear-both sm:block">
        <ul className="p-0 text-lg font-bold menu menu-horizontal">
          <li><a>Aktualności</a></li>
          <li tabIndex={0}>
            <a>
              O nas
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li><a>O klubie</a></li> 
              <li><a>Kadra trenerska</a></li>
              <li><a>Gdzie jesteśmy</a></li>
              <li><a>Dokumenty do pobrania</a></li>
            </ul>
          </li>
          <li><a>Grafik</a></li>
          <li><a>Obozy</a></li>
          <li><a>Zapisy</a></li>
          {session && <Button variant='outline' onClick={() => signOut()}>Wyolguj</Button>}
        </ul>
      </div>
      <div className='block sm:hidden'>
        <Burger
          color='#7e714e'
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          title={title}
        />
      </div>
    </header>

    // <Popover className="relative mb-8 text-xl font-medium text-gray-500 border-b-2 z-100 border-gbrown-100" onClick={(e: any) => e.detail == 4 && signIn()}>
    //   <div className="relative px-4 mx-auto max-w-7xl sm:px-6">
    //     <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
    //       <div className="flex justify-start lg:w-0 lg:flex-1">
    //         <Link href='/'>
    //           <a>
    //             <Image
    //               className="w-auto h-8 sm:h-10"
    //               src="/newLogo-t.png"
    //               width={180}
    //               height={80}
    //               alt=""
    //             />
    //           </a>
    //         </Link>
    //       </div>
    //       <div className="-my-2 -mr-2 md:hidden">
    //         <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100">
    //           <span className="sr-only">Open menu</span>
    //           <MenuIcon className="w-6 h-6" aria-hidden="true" />
    //         </Popover.Button>
    //       </div>
    //       <Popover.Group as="nav" className="hidden space-x-10 md:flex">
    //         {menuItems.map(({ href, name }) => (
    //           <Link key={name} href={href}>
    //             <span className="cursor-pointer text-gbrown-300 hover:text-gbrown-200">{name}</span>
    //           </Link>

    //         ))}
    //         <Popover className="relative">
    //           {({ open }) => (
    //             <>
    //               <Popover.Button
    //                 className={classNames(
    //                   open ? 'text-gbrown-200' : 'text-gbrown-300',
    //                   'group rounded-md inline-flex items-center text-xl font-medium hover:text-gbrown-200 focus:outline-none '
    //                 )}
    //               >
    //                 <span>O nas</span>
    //                 <ChevronDownIcon
    //                   className={classNames(
    //                     open ? 'text-gbrown-200' : 'text-gbrown-300',
    //                     'ml-2 h-5 w-5 group-hover:text-gbrown-200'
    //                   )}
    //                   aria-hidden="true"
    //                 />
    //               </Popover.Button>

    //               <Transition
    //                 as={Fragment}
    //                 enter="transition ease-out duration-200"
    //                 enterFrom="opacity-0 translate-y-1"
    //                 enterTo="opacity-100 translate-y-0"
    //                 leave="transition ease-in duration-150"
    //                 leaveFrom="opacity-100 translate-y-0"
    //                 leaveTo="opacity-0 translate-y-1"
    //               >
    //                 <Popover.Panel className="absolute z-10 w-screen max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
    //                   <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
    //                     <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
    //                       {aboutUs.map((item) => (
    //                         <Link
    //                           key={item.name}
    //                           href={item.href}
    //                         >
    //                           <div className='flex items-start p-3 -m-3 rounded-lg cursor-pointer hover:bg-gray-50'>
    //                             <item.icon className="flex-shrink-0 w-6 h-6 text-gteal-400" aria-hidden="true" />
    //                             <div className="ml-4">
    //                               <p className="text-base font-medium text-gray-900">{item.name}</p>
    //                               <p className="mt-1 text-sm text-gray-500">{item.description}</p>
    //                             </div>
    //                           </div>
    //                         </Link>
    //                       ))}
    //                     </div>
    //                   </div>
    //                 </Popover.Panel>
    //               </Transition>
    //             </>
    //           )}
    //         </Popover>

    //         <Link href="/contact">
    //           <span className="cursor-pointer text-gbrown-300 hover:text-gbrown-200">Kontakt</span>
    //         </Link>
    //         {session && <Button variant='outline' onClick={() => signOut()}>Wyolguj</Button>}
    //       </Popover.Group>
    //     </div>
    //   </div>

    //   <Transition
    //     as={Fragment}
    //     enter="duration-200 ease-out"
    //     enterFrom="opacity-0 scale-95"
    //     enterTo="opacity-100 scale-100"
    //     leave="duration-100 ease-in"
    //     leaveFrom="opacity-100 scale-100"
    //     leaveTo="opacity-0 scale-95"
    //   >
    //     <Popover.Panel focus className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
    //       <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
    //         <div className="px-5 pt-5 pb-6">
    //           <div className="flex items-center justify-between">
    //             <div>
    //               <img
    //                 className="w-auto h-8"
    //                 src="logo.png"
    //                 alt="Workflow"
    //               />
    //             </div>
    //             <div className="-mr-2">
    //               <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100">
    //                 <span className="sr-only">Close menu</span>
    //                 <XIcon className="w-6 h-6" aria-hidden="true" />
    //               </Popover.Button>
    //             </div>
    //           </div>
    //           <div className="mt-6">
    //             <nav className="grid gap-y-8">
    //               {aboutUsResponsive.map((item) => (
    //                 <Link
    //                   key={item.name}
    //                   href={item.href}
    //                 >
    //                   <div className='flex items-center p-3 -m-3 rounded-md cursor-pointer hover:bg-gray-50'>
    //                     <item.icon className="flex-shrink-0 w-6 h-6 text-gteal-400" aria-hidden="true" />
    //                     <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
    //                   </div>
    //                 </Link>
    //               ))}
    //             </nav>
    //           </div>
    //         </div>
    //         <div className="px-5 py-6 space-y-6">
    //           <div className="grid grid-cols-2 gap-y-4 gap-x-8">
    //             <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
    //                 O klubie
    //             </Link>
    //             <Link href="/kadra" className="text-base font-medium text-gray-500 hover:text-gray-900">
    //                 Kadra trenerska
    //             </Link>
    //             <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
    //                 Gdzie jesteśmy
    //             </Link>
    //             <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
    //                 Dokumenty do pobrania
    //             </Link>
    //             <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
    //                 Kontakt
    //             </Link>
    //           </div>
    //           <div>
    //             <Link
    //               href="#"
    //               className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-gteal-400 hover:bg-gteal-500"
    //             >
    //               <span>Zapisy</span>
    //             </Link>
    //             {/* <a
    //               href="#"
    //               className="flex items-center justify-center w-full px-4 py-2 text-base font-medium border border-transparent hover:text-indigo-700"
    //             >
    //               asdasd
    //             </a> */}
    //           </div>
    //         </div>
    //       </div>
    //     </Popover.Panel>
    //   </Transition>
    // </Popover>
  )
}

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
        <Header />
            <div className='flex justify-center'>{children}</div>
        <Footer />
    </>
  )
}

export default Layout