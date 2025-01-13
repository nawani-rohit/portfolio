import { SectionContainer } from './SectionContainer'
import { MotionDiv } from '../lib/motion'

const educationData = [
  {
    school: "Northeastern University",
    degree: "Master of Science in Computer Software Engineering",
    duration: "2022 - 2024",
    location: "Boston, MA",
    side: "left"
  },
  {
    school: "Mumbai University",
    degree: "Bachelor of Engineering in Computer Engineering",
    duration: "2016 - 2020",
    location: "Mumbai, India",
    side: "right"
  }
]

export const Education = () => {
  return (
    <SectionContainer id="education" title="Education">
      <div className="relative flex flex-col">
        {educationData.map((edu, index) => (
          <div key={index} className="relative">
            {/* Timeline dot and line */}
            <MotionDiv 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="absolute left-1/2 top-0 flex h-full -translate-x-1/2 flex-col items-center
                sm:left-[20px] sm:translate-x-0"
            >
              <div className="h-4 w-4 rounded-full bg-blue-500 ring-4 ring-blue-500/20"></div>
              <MotionDiv 
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.2 + 0.2
                }}
                className="h-full w-[2px] bg-blue-500 origin-top"
              ></MotionDiv>
            </MotionDiv>

            {/* Content */}
            <div className={`grid grid-cols-2 gap-8 py-16
              sm:grid-cols-[1fr] sm:gap-4 sm:pl-12`}
            >
              {/* Left side content */}
              {edu.side === 'left' && (
                <MotionDiv
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="text-right sm:text-left"
                >
                  <div className="flex flex-col items-end sm:items-start">
                    <h3 className="text-2xl font-bold text-blue-500">{edu.school}</h3>
                    <p className="text-xl font-semibold">{edu.degree}</p>
                    <p className="text-lg text-blue-500">{edu.duration}</p>
                    <p className="text-lg">{edu.location}</p>
                  </div>
                </MotionDiv>
              )}

              {/* Right side content */}
              {edu.side === 'right' && (
                <MotionDiv
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="col-start-2 sm:col-start-1"
                >
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold text-blue-500">{edu.school}</h3>
                    <p className="text-xl font-semibold">{edu.degree}</p>
                    <p className="text-lg text-blue-500">{edu.duration}</p>
                    <p className="text-lg">{edu.location}</p>
                  </div>
                </MotionDiv>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}