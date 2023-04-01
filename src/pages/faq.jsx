import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/sections/Section'
import { SimpleLayout } from '@/components/layouts/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
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
        <div className="space-y-20">
          <ToolsSection title="Guide du crowdfunding">
            <Tool title="Qu'est-ce que c'est ?">
              Le crowdfunding, ou financement participatif, est un mécanisme de
              levée de fonds, qui repose sur le recours à une communauté
              d&apos;investisseurs (« la foule », &quot;the crowd&quot; en
              anglais) pour financer le développement d&apos;un projet. Il vise
              notamment à démocratiser l&apos;accès au financement de
              l&apos;économie pour les particuliers. Il représente ainsi
              l&apos;une des rares alternatives aux circuits de financement
              traditionnels.
            </Tool>
            <Tool title="Les différentes familles du crowdfunding">
              Le crowdfunding se destine à aider des porteurs de projets
              naissants et dans les premières années de leur développement. Pour
              chaque besoin de financement en amorçage, une solution de
              crowdfunding existe. Trois grandes familles de plateformes
              permettent d&apos;accompagner les porteurs de projets pour les
              différents besoins de financement qu&apos;ils peuvent exprimer. De
              quelques centaines ou milliers d&apos;euros en dons aux centaines
              de milliers d&apos;euros de capital, le crowdfunding a une
              solution pour accompagner entrepreneurs et créatifs. Les trois
              grands modèles du crowdfunding aujourd&apos;hui sont le don contre
              don, le prêt et l&apos;investissement en capital.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Guide de l'investisseur">
            <Tool title="Qu'est ce que l'investissement ?">
              Tout savoir sur le financement d&apos;entreprise et la solution
              d&apos;investissement proposée par l&apos;investissement
              participatif ou crowdfunding equity.
            </Tool>
            <Tool title="Les bonnes raisons d'investir chez BNZ">
              On ne le dit que trop peu, mais l&apos;investissement dans les
              entreprises est le nerf de l&apos;économie, car il est au cœur du
              développement de l&apos;écosystème entrepreneurial, de
              l&apos;économie réelle et donc de l&apos;emploi et de la valeur
              dans un pays et territoire. Que vous soyez un particulier, un
              investisseur expérimenté, un épargnant soucieux de donner un sens
              à son argent, que vous soyez familier ou non avec le monde de la
              finance, vous avez toujours une bonne raison d&apos;investir via
              BNZ !
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
