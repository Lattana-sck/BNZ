import React, { Fragment, useState } from 'react'
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid'
import MetamaskButton from '../ui/MetamaskButton'
import { Dialog, Transition } from '@headlessui/react'
import InputSelect from './Inputs/InputSelect'
import Input from './Inputs/Input'

const categories = [
  { id: 1, name: 'Choisir la catégorie' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudie Smitham' },
  { id: 10, name: 'Emil Schaefer' },
]

const timeline = [
  { id: 1, name: 'Choisir l`avancée du projet' },
  { id: 2, name: 'Au début' },
  { id: 3, name: 'Première levée effectuée' },
  { id: 4, name: 'Deuxième levée effectuée' },
  { id: 5, name: 'Troisième levée effectuée' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="mb-6 sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 px-4 shadow-sm sm:px-6 lg:px-8">
      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={setOpen}>
            <div className="fixed inset-0" />

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                      <div className="flex h-full flex-col overflow-y-scroll rounded-xl border-l bg-white py-6 dark:bg-zinc-800">
                        <div className="px-4 sm:px-6">
                          <div className="flex items-start justify-between">
                            <Dialog.Title className="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                              Filtrez votre recherche
                            </Dialog.Title>
                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                                onClick={() => setOpen(false)}
                              >
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="pt-10 relative mt-6 grid grid-cols-1 gap-6 px-4 dark:text-white sm:px-6">
                          <div className="grid grid-cols-3 gap-6">
                            <span className="col-span-1 leading-10">Prix min.</span>
                            <Input/>
                          </div>
                          <div className="grid grid-cols-3 gap-6">
                            <span className="col-span-1 leading-10">Prix max.</span>
                            <Input/>
                          </div>
                          <div className='grid grid-cols-3 gap-6'>
                            <span className='col-span-1 leading-10'>Catégorie</span>
                            <InputSelect data={categories} grid="2"/>
                          </div>
                          <div className='grid grid-cols-3 gap-6'>
                            <span className='col-span-1 leading-10'>Avancement</span>
                            <InputSelect data={timeline} grid="2"/>
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        <div className="item-center flex justify-center space-x-4 pt-3">
          <UserCircleIcon
            className="inset-y-0 left-0 h-full w-20 cursor-pointer pb-3 text-gray-500 hover:text-gray-600"
            aria-hidden="true"
          />
          <MagnifyingGlassIcon
            className="inset-y-0 left-0 h-full w-8 cursor-pointer pb-3 text-gray-500 hover:text-gray-600"
            aria-hidden="true"
            onClick={() => setOpen(true)}
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
