import type { Route } from './+types/home'
import Hero from '~/sections/hero'
import About from '~/sections/about'
import Gallery from '~/sections/gallery'
import Contact from '~/sections/contact'
import Cookies from '~/components/Cookies'
import Footer from '~/components/Footer'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Ioana Illustrations' }, { name: 'description', content: '' }]
}

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <Cookies />
      <Footer />
    </main>
  )
}
