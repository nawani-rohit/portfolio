import { MotionDiv } from '../lib/motion'
import { SectionContainer } from './SectionContainer'

export const About = () => {
  return (
    <SectionContainer id="about" title="About Me">
      <div className="flex items-center justify-between md:justify-center">
        <MotionDiv
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="flex max-w-2xl flex-col gap-6 text-xl md:text-center sm:text-lg"
        >
          <p>
            Hello, I&apos;m a recent Master&apos;s graduate in Computer Software
            Engineering from Northeastern University with a strong foundation in
            full stack development. I specialize in building responsive web
            applications using React, Java, and cloud technologies.
          </p>
          <p>
            During my professional journey, I&apos;ve worked across analytics at
            Tripund Solutions, enterprise systems at Capgemini, and enterprise
            assesment at Ipserlab. I&apos;ve built real-time dashboards for
            warehouse operations, optimized database performance, created
            reusable component libraries, and configured monitoring systems that
            significantly improved application responsiveness and development
            efficiency.
          </p>
          <p>
            My technical toolkit includes React, Redux, Angular, Spring Boot,
            Node.js, PostgreSQL, and MongoDB. I focus on performance
            optimization, maintainable architecture, and effective testing. I
            balance technical excellence with business impact, prioritizing
            end-user experience while thriving in collaborative environments
            where I can contribute to meaningful solutions.
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="flex flex-1 justify-end pl-8 md:hidden"
        >
          <div className="w-80 pb-10">
            <div className="flex flex-wrap justify-center gap-4 opacity-70">
              <span className="h-3 w-48 rounded-full bg-target"></span>
              <span className="h-3 w-32 rounded-full bg-secondaryHover"></span>
              <span className="h-3 w-20 rounded-full bg-target"></span>
              <span className="h-3 w-28 rounded-full bg-target"></span>
              <span className="h-3 w-14 rounded-full bg-secondaryHover"></span>
              <span className="h-3 w-20 rounded-full bg-target"></span>
              <span className="h-3 w-32 rounded-full bg-target"></span>
              <span className="h-3 w-32 rounded-full bg-secondaryHover"></span>
              <span className="h-3 w-32 rounded-full bg-secondaryHover"></span>
              <span className="h-3 w-20 rounded-full bg-target"></span>
              <span className="h-3 w-28 rounded-full bg-target"></span>
              <span className="h-3 w-14 rounded-full bg-secondaryHover"></span>
            </div>
          </div>
        </MotionDiv>
      </div>
    </SectionContainer>
  )
}
