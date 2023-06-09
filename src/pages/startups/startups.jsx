import Head from 'next/head'
import Image from 'next/image'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/layouts/SimpleLayout'
import { useEffect, useState } from 'react'
import Link from 'next/link'

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  const [startups, setStartups] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://localhost:3001/api/startups/startups'
        )
        const startups = await response.json()
        setStartups(startups)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <Head>
        <title>BNZ - Start-ups</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Entreprises en financement"
        intro="Bienvenue sur notre page de financement pour les startups ! Ici, vous trouverez une liste complète d'entreprises innovantes qui cherchent à lever des fonds grâce à la technologie des NFT. En tant qu'investisseur, vous pourrez parcourir notre sélection de projets passionnants et choisir ceux qui correspondent le mieux à vos intérêts et à votre portefeuille.

        Chaque entreprise présentée sur cette page a été sélectionnée avec soin pour son potentiel de croissance et d'impact dans son domaine. De plus, en utilisant des NFT pour la collecte de fonds, ces startups offrent des avantages uniques à leurs investisseurs, tels que des droits de vote sur les décisions importantes, des avantages exclusifs pour les détenteurs de jetons, et plus encore.
        
        En explorant notre sélection, vous pourrez en apprendre davantage sur chaque entreprise, sa mission, son équipe, son modèle économique et ses projets futurs. Et si vous décidez d'investir dans l'une de ces startups, vous pourrez le faire en toute sécurité grâce à notre plateforme de financement sécurisée et facile à utiliser.
        
        Nous sommes fiers de soutenir les entrepreneurs visionnaires qui cherchent à changer le monde, et nous sommes convaincus que cette page de financement pour les startups via des NFT représente une nouvelle ère passionnante pour l'investissement participatif. Merci de votre intérêt et de votre soutien, et nous espérons que vous trouverez des projets inspirants à soutenir sur notre plateforme !"
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {startups.map((project) => (
            <Link href={`/startups/${project._id}`} key={project._id}>
              <Card as="li" key={project._id}>
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Image
                    src={project.logo}
                    alt=""
                    width={32}
                    height={32}
                    unoptimized
                  />
                </div>
                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <Card.Link href={project.website}>{project.name}</Card.Link>
                </h2>
                <Card.Description>{project.description}</Card.Description>
                <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                  <LinkIcon className="h-6 w-6 flex-none" />
                  <span className="ml-2">{project.website}</span>
                </p>
              </Card>
            </Link>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
