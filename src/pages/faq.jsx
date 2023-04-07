import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/sections/Section'
import { SimpleLayout } from '@/components/layouts/SimpleLayout'
import { useState } from 'react'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}
function ToolsSection({ children, title, ...props }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <Section {...props}>
      <div>
        <button className="text-sm font-bold text-white animate-bounce" onClick={toggleOpen}>
          {title}
        </button>
      </div>
      {isOpen && (
        <ul role="list" className="">
          {children}
        </ul>
      )}
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>BNZ - FAQ & Guides</title>
        <meta name="description" content="Faq and guides for BNZ." />
      </Head>
      <SimpleLayout
        title="FAQ & Guides de BNZ"
        intro="Retrouvez ici les réponses aux questions les plus fréquentes et les guides pour vous aider à utiliser BNZ."
      >
        <div>
          <SpeakingSection title="Guide du crowdfunding">
            <ToolsSection title="Cliquez">
              <Tool title="Qu'est-ce que c'est ?">
                Le crowdfunding, ou financement participatif, est un mécanisme
                de levée de fonds, qui repose sur le recours à une communauté
                d&apos;investisseurs (« la foule », &quot;the crowd&quot; en
                anglais) pour financer le développement d&apos;un projet. Il
                vise notamment à démocratiser l&apos;accès au financement de
                l&apos;économie pour les particuliers. Il représente ainsi
                l&apos;une des rares alternatives aux circuits de financement
                traditionnels.
              </Tool>
              <Tool title="Les différentes familles du crowdfunding">
                Le crowdfunding se destine à aider des porteurs de projets
                naissants et dans les premières années de leur développement.
                Pour chaque besoin de financement en amorçage, une solution de
                crowdfunding existe. Trois grandes familles de plateformes
                permettent d&apos;accompagner les porteurs de projets pour les
                différents besoins de financement qu&apos;ils peuvent exprimer.
                De quelques centaines ou milliers d&apos;euros en dons aux
                centaines de milliers d&apos;euros de capital, le crowdfunding a
                une solution pour accompagner entrepreneurs et créatifs. Les
                trois grands modèles du crowdfunding aujourd&apos;hui sont le
                don contre don, le prêt et l&apos;investissement en capital.
              </Tool>
            </ToolsSection>
          </SpeakingSection>
          <SpeakingSection title="Guide de l'investisseur">
            <ToolsSection title="Guide de l'investisseur">
              <Tool title="Qu'est-ce que l'investissement ?">
                Investir, c&apos;est financer l&apos;activité d&apos;une
                entreprise en contrepartie d&apos;une part de son capital,
                proportionnelle au soutien financier accordé.
                L&apos;investissement confère une part de propriété de
                l&apos;entreprise. Ainsi, l&apos;investissement est avant tout
                un partenariat entre un investisseur et un entrepreneur.
                L&apos;investisseur apporte des fonds, mais aussi une culture du
                challenge sur le plan stratégique, et une culture du reporting à
                l&apos;entrepreneur. L&apos;entrepreneur lui octroie en échange
                un droit de propriété sur l&apos;entreprise, qui s&apos;exprime
                sous la forme de la propriété d&apos;une partie de la valeur de
                l&apos;entreprise sous forme d&apos;actions, et d&apos;un droit
                de regard sur la stratégie de l&apos;entreprise sous la forme
                d&apos;un droit de vote en Assemblée Générale. On peut
                distinguer deux types d&apos;investissement : le capital
                investissement, qui s&apos;exerce dans des entreprises non
                cotées, et l&apos;investissement en Bourse, qui s&apos;exerce
                dans des entreprises ayant effectué une introduction sur le
                marché. Pour la petite histoire, l&apos;investissement en
                capital est né aux Etats-Unis, grâce à un Français, le général
                Doriot, qui a réalisé avec son fonds American Research and
                Development Corp., l&apos;un des plus beaux deals de
                l&apos;Histoire, en investissant dans Digital Equipment
                Corporation, dont la valeur a été multipliée par 6000 en 11 ans
                ! Aujourd&apos;hui, les Etats-Unis sont toujours le plus gros
                marché en termes d&apos;investissement, grâce à une culture
                positive du risque et de l&apos;échec et à une histoire marquée
                par l&apos;investissement, mais le Royaume-Uni, l&apos;Allemagne
                et la France restent néanmoins des acteurs importants de
                l&apos;investissement.
              </Tool>
            </ToolsSection>
          </SpeakingSection>
          <SpeakingSection title="F.A.Q.">
            <ToolsSection title="FAQ">
              <Tool title="Questions ?">
                Réponses Blabla
              </Tool>
            </ToolsSection>
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
