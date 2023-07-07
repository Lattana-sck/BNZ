import React, { useEffect, useState } from 'react'
import { Container } from '@/components/layouts/Container'
import { useRouter } from 'next/router'
import Head from 'next/head'
import ProgressBar from '@/components/ProgressBar'
import PieChart from '@/components/PieChart'

function Details() {
  const { query } = useRouter()
  const { id } = query
  const [dataDetails, setDataDetails] = useState(null)

  useEffect(() => {
    const fetchDetails = async () => {
      if (!id) return
      try {
        const respnse = await fetch(
          `http://localhost:3001/api/startups/startups/${id}`
        )
        const data = await respnse.json()
        setDataDetails(data)
        console.log('data', data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchDetails()
  }, [id])

  console.log('datadetails', dataDetails)
  if (!dataDetails) return <div>loading...</div>
  return (
    <>
      <Head>
        <title>BNZ - {dataDetails.name}</title>
        <meta
          name="description"
          content="I’m Spencer Sharp. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <img
                src={dataDetails.logo}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {dataDetails.name}
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>{dataDetails.description}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 pt-12 ">
          <div className="col-span-1 rounded-2xl px-4 py-5 shadow-md shadow-teal-500 sm:p-6">
            <dt className="text-base font-normal text-zinc-800 dark:text-zinc-100">
              Montant collecté
            </dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-teal-500">
                {dataDetails.amountRaised}
                <span className="ml-2 text-sm font-medium text-gray-500">
                  sur {dataDetails.fundraisingGoal}
                </span>
              </div>
            </dd>
          </div>

          <div className="col-span-1 rounded-2xl px-4 py-5 shadow-md shadow-teal-500 sm:p-6">
            <dt className="text-base font-normal text-zinc-800 dark:text-zinc-100">
              Nombre d'investisseurs
            </dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-teal-500">
                {dataDetails?.investors.length}
              </div>
            </dd>
          </div>

          <div className="col-span-1 rounded-2xl px-4 py-5 shadow-md shadow-teal-500 sm:p-6">
            <dt className="text-base font-normal text-zinc-800 dark:text-zinc-100">
              Site internet
            </dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline truncate text-lg font-semibold text-teal-500">
                <a href={dataDetails.website} target="_blank" rel="noreferrer">
                  {dataDetails.website}
                </a>
              </div>
            </dd>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Details
