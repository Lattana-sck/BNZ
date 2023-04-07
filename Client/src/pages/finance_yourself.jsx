import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/sections/Section'
import { SimpleLayout } from '@/components/layouts/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>BNZ- Se financer</title>
        <meta
          name="description"
          content="I’ve spoken at events all around the world and been interviewed for many podcasts."
        />
      </Head>
      <SimpleLayout
        title="L'agitilité de l'investissement participatif, le professionanlisme d'un venture capital et la flexibilité d'un fonds de capital risque."
        intro="L'investissement participatif, le venture capital et les fonds de capital-risque ont chacun leurs avantages et leurs inconvénients. Cependant, en combinant ces approches, les entrepreneurs peuvent bénéficier de la flexibilité de l'investissement participatif, du professionnalisme du venture capital et de la flexibilité du capital-risque. Cette combinaison peut également offrir aux investisseurs individuels l'opportunité d'investir dans des entreprises à un stade plus précoce de leur développement, tout en bénéficiant de l'expertise et de l'accompagnement des professionnels du venture capital. En somme, cette combinaison peut aider à créer un écosystème plus diversifié et plus solide pour l'innovation et l'entrepreneuriat."
      >
        <div className="space-y-20">
          <SpeakingSection title="Montage du dossier">
            <Appearance
              href="#"
              title="Créez votre compte"
              description="Pour commencer, vous devez créer un compte sur notre plateforme. Cela vous permettra de créer votre profil et de remplir votre dossier de demande de financement."
              event="Première étape"
              cta="Créer son compte"
            />
            <Appearance
              href="#"
              title="Remplir le dossier de demande de financement"
              description="De nombreuses informations vous seront demandés à cette étape. Nous vous conseillons de vous préparer en amont en rassemblant les documents suivants :
              Votre business plan
              - Votre plan financier
              - Votre plan de trésorerie
              - Votre plan de communication
              - Votre plan de développement commercial
              - Votre plan de développement produit
              - Votre plan de développement organisationnel
              - Votre plan de développement international
              - Votre plan de développement technologique
              - Votre plan de développement stratégique
              - Votre plan de développement de l'innovation"
              event="Deuxième étape"
              cta="Envoyer son dossier"
            />
            <Appearance
              href="#"
              title="BNZ vous accompagne dans la concrétisation de votre levée de fonds auprès d'une communauté d'investisseurs engagés."
              description="Après avoir étudier chaque détails de votre dossier BNZ vous contactera pour vous proposer un rendez-vous. Ce rendez-vous vous permettra de présenter votre projet et de répondre à toutes les questions de BNZ.
              Si votre dossier est retenu, BNZ vous accompagnera dans la concrétisation de votre levée de fonds auprès d'une communauté d'investisseurs engagés."
              event="Troisième étape"
              cta="Suivre l'avancement de votre dossier"
            />
          </SpeakingSection>
          <SpeakingSection title="Faites découvrir votre projet aux investisseurs">
            <Appearance
              href="#"
              title="Il est temps de créer votre collection d'NFTs."
              description="Créez votre collection d'NFTs et commencez à la promouvoir auprès de votre communauté. Vous pouvez également utiliser notre outil de création d'NFTs pour créer des NFTs uniques et les vendre directement aux investisseurs."
              event="Première étape"
              cta="Créer votre collection"
            />
            <Appearance
              href="#"
              title="Déployer votre collection d'NFTs"
              description="Déployez votre collection d'NFTs sur la blockchain Ethereum et commencez à la promouvoir auprès de votre communauté. Vous pouvez également utiliser notre outil de création d'NFTs pour créer des NFTs uniques et les vendre directement aux investisseurs."
              event="Deuxème étape"
              cta="Déployer votre collection"
            />
            <Appearance
              href="#"
              title="Informez les investisseurs de votre levée de fonds"
              description="Informer les investisseurs de votre levée de fonds en utilisant notre outil de création d'annonces. Vous pouvez également utiliser notre outil de création d'annonces pour créer des annonces uniques et les vendre directement aux investisseurs."
              event="Troisième étape"
              cta="Créer votre post"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
