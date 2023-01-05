import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { ChevronUpIcon } from '@heroicons/react/solid'
import '../styles/globals.css'
import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify';
import { SessionProvider } from "next-auth/react"
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className='flex flex-col w-full h-screen'>
        <Layout>
          <Component {...pageProps}/>
          <div 
            onClick={e => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className='fixed z-20 w-10 h-10 p-3 overflow-hidden rounded-md cursor-pointer group bottom-6 right-6 bg-gbrown-400'
          >
            <div className='duration-200 ease-in-out group-hover:-translate-y-11'>
              <ChevronUpIcon className='duration-200 ease-in-out animate-pulse hover:-translate-y-2'/>
              <br/><span className='text-sm font-semibold animate-pulse'>UP</span>
            </div>
          </div>
        </Layout>
        <ToastContainer />
      </div>
    </SessionProvider>
  )}

export default MyApp
