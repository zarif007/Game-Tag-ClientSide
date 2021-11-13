import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useAuth from '../../customHooks/useAuth';


const navigation = [
  { name: 'Home', href: '/#', current: false },
  { name: 'Partners', href: '/#partners', current: false },
  { name: 'Medicines', href: '/#medicines', current: false },
  { name: 'Features', href: '/#features', current: false },
  { name: 'Pricing', href: '/#pricing', current: false },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const { user, logOut } = useAuth();
  console.log('user', user);

  let link = '';
  if(!user)
    link = '/login';
  else 
    link = `/orders/${user.uid}`;


  const userNavigation = [
    { name: 'Manage Your Orders', href: link },
    { name: 'All Orders', href: '/allorders' },
  ]

  return (
    <>
      <div className="min-h-full sticky top-0 z-50">
        <Disclosure as="nav" className="bg-gray-900">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://cdn-icons-png.flaticon.com/512/3062/3062652.png"
                        alt="Workflow"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <HashLink
                            key={item.name}
                            to={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </HashLink>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      
                      {
                        user.displayName ? 
                          <Menu as="div" className="ml-3 relative">
                          <div className="flex">
                            <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                              <span className="sr-only">Open user menu</span>
                              <img className="h-8 w-8 rounded-full" src={user.photoURL} alt="" />
                              <div className="ml-3">
                                <div className="text-base font-medium leading-none text-white">{user.displayName}</div>
                              </div>
                              
                            </Menu.Button>
                              <div className="p-2">
                                <button onClick={logOut} type="button" class="py-2 px-4  bg-gray-700 hover:bg-gray-800 focus:ring-gray-600 focus:ring-offset-gray-300 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Sign Out
                                </button>
                              </div>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {userNavigation.map((item) => (
                                <Menu.Item key={item.name}>
                                  {({ active }) => (
                                    <Link
                                      to={item.href}
                                      className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                      )}
                                    >
                                      {item.name}
                                    </Link>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                          

                        </Menu> : <div className="p-10">
                        <Link to="/login" type="button" class="py-2 px-4 flex justify-center items-center  bg-gray-700 hover:bg-gray-800 focus:ring-gray-600 focus:ring-offset-gray-300 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Sign in
                        </Link>
                      </div>
                      }

                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <HashLink
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </HashLink>
                  ))}
                </div>
                {
                  user.displayName ? 
                    <div>
                      <div className="pt-4 pb-3 border-t border-gray-700">
                        <div className="flex items-center px-5">
                          <div className="flex-shrink-0">
                            <img className="h-10 w-10 rounded-full" src={user.photoURL} alt="" />
                          </div>
                          <div className="ml-3">
                            <div className="text-base font-medium leading-none text-white">{user.displayName}</div>
                          </div>
                          
                        </div>
                        <div className="mt-3 px-2 space-y-1">
                          {userNavigation.map((item) => (
                            <HashLink
                              key={item.name}
                              to={item.href}
                              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                            >
                              {item.name}
                            </HashLink>
                          ))} <div className="p-2">
                          <button onClick={logOut} type="button" class="py-2 px-4  bg-gray-700 hover:bg-gray-800 focus:ring-gray-600 focus:ring-offset-gray-300 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                              Sign Out
                          </button>
                        </div>
                        </div>
                      </div>
                    </div> : <div className="p-10">
                        <Link to="/login" type="button" class="py-2 px-4 flex justify-center items-center  bg-gray-700 hover:bg-gray-800 focus:ring-gray-600 focus:ring-offset-gray-300 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Sign in
                        </Link>
                      </div>
                }
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  )
}