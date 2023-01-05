import { FaFacebook, FaInstagram } from 'react-icons/fa'

const social = [
  { title: 'Facebook', icon: FaFacebook, href: 'https://www.facebook.com/grizzlyfightclub' },
  { title: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/grizzlyfightclub/' }
]

const Footer = () => {
  return (
    <div className="bg-gbrown-500 text-gray-500 mt-auto">
      <div className="max-w-7xl mx-auto p-6 sm:p-6 flex justify-center">
        <div className='flex'>
          {social.map(el => 
            <a key={el.href} href={el.href} className='text-3xl text-gray-400 hover:text-gray-800 ease-in duration-200 mx-8'>
              <el.icon />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Footer;