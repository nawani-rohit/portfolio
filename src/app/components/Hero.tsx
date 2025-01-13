'use client';

import { MotionDiv, MotionH1, MotionP } from '../lib/motion'
import { EmailBtn } from './EmailBtn'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link';
import { useRouter } from 'next/navigation'



export const Hero = () => {
  const router = useRouter()

  const downloadResume = () => {
    const resumeUrl = 'https://raw.githubusercontent.com/nawani-rohit/portfolio/main/resume/Rohit_Nawani%20-%20Resume.pdf'
    const pdfViewerUrl = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(resumeUrl)}`
    window.open(pdfViewerUrl, '_blank', 'noopener,noreferrer')
  }

  const scrollToContact = () => {
    router.push('/#contact')
  }

  return (
    <section id="home">
      <MotionDiv className="mx-auto max-w-5xl">
        <div className="flex h-screen flex-col items-center justify-center gap-3">
          <MotionH1
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.7,
              duration: 0.3
            }}
            className="text-center text-8xl font-bold md:text-7xl sm:text-5xl"
          >
            Rohit Nawani<span className="text-target"></span>
          </MotionH1>
          <MotionP
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 1,
              duration: 0.3
            }}
            className="text-center text-4xl sm:text-3xl"
          >
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                2000,
                'Frontend Developer',
                2000,
                'Backend Developer',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-target"
            />
          </MotionP>
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1.3, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 1.2,
              duration: 0.3
            }}
            className="mt-4 flex gap-4"
          >
            <button
              onClick={downloadResume}
              className="bg-target text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors"
            >
              Download Resume
            </button>
            <Link href="/#contact" passHref>
              <button
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
              >
                Contact Me
              </button>
            </Link>
          </MotionDiv>
        </div>
      </MotionDiv>
    </section>
  )
}
