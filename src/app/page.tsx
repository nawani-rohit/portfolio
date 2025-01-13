import { About } from '@/app/components/About'
import { Contact } from '@/app/components/Contact'
import { Education } from '@/app/components/Education'
import { Experience } from '@/app/components/Experience'
import { Footer } from '@/app/components/Footer'
import { Header } from '@/app/components/Header'
import { Hero } from '@/app/components/Hero'
import { Projects } from '@/app/components/Projects'
import { Skills } from '@/app/components/Skills'
import { SocialLinks } from '@/app/components/SocialLinks'

export default function Home() {
  return (
    <div>
      <Header />
      <main className="px-10 sm:px-6">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
        <SocialLinks />
      </main>
      <Footer />
    </div>
  )
}
