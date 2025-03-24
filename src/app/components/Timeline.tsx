import { MotionDiv } from '../lib/motion'
import { SectionContainer } from './SectionContainer'

type TimelineEntry = {
  type: 'education' | 'experience'
  title: string
  subtitle: string
  duration: string
  location: string
  description?: string
  responsibilities?: string[]
}

const timelineData: TimelineEntry[] = [
  {
    type: 'experience',
    title: 'IpserLab, LLC',
    subtitle: 'Software Engineer',
    duration: 'May 2023 - Dec 2023',
    location: 'Boston, MA',
    responsibilities: [
      'Developed and maintained scalable web applications using React.js and Node.js',
      'Implemented real-time event processing system reducing latency by 40%',
      'Built RESTful APIs and integrated with third-party services',
      'Collaborated with cross-functional teams to deliver high-quality software solutions'
    ]
  },
  {
    type: 'education',
    title: 'Northeastern University',
    subtitle: 'Master of Science in Computer Software Engineering',
    duration: '2022 - 2024',
    location: 'Boston, MA',
    description:
      'Relevant Coursework: Web Development, Cloud Computing, Database Management, Software Engineering, Machine Learning'
  },
  {
    type: 'experience',
    title: 'Capgemini',
    subtitle: 'Software Engineer',
    duration: 'July 2020 - July 2022',
    location: 'Mumbai, India',
    responsibilities: [
      'Led development of enterprise-scale applications using Java and Spring Boot',
      'Optimized database queries resulting in 30% performance improvement',
      'Implemented microservices architecture for improved scalability',
      'Mentored junior developers and conducted code reviews'
    ]
  },
  {
    type: 'education',
    title: 'AKTU University',
    subtitle: 'Bachelor of Technology in Computer Science',
    duration: '2016 - 2020',
    location: 'Lucknow, India',
    description:
      'Relevant Coursework: Data Structures, Algorithms, Operating Systems, Computer Networks'
  }
]

const TimelineCard = ({
  entry,
  index
}: {
  entry: TimelineEntry
  index: number
}) => {
  const isLeft = index % 2 === 0

  return (
    <div className="relative grid grid-cols-[1fr_auto_1fr] gap-4 md:grid-cols-[1fr_auto] md:gap-6">
      {/* Content - Left Side */}
      <div
        className={`${!isLeft && 'md:hidden'} ${
          isLeft ? 'text-right' : 'col-start-3'
        }`}
      >
        {isLeft && (
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="rounded-lg bg-secondary p-6 transition-transform hover:translate-y-[-4px]"
          >
            <TimelineContent entry={entry} align={isLeft ? 'right' : 'left'} />
          </MotionDiv>
        )}
      </div>

      {/* Timeline Line & Dot */}
      <div className="relative flex justify-center">
        <div className="absolute h-full w-[2px] bg-target"></div>
        <div className="relative h-4 w-4 rounded-full bg-target ring-4 ring-primary"></div>
      </div>

      {/* Content - Right Side */}
      <div
        className={`${isLeft && 'md:hidden'} ${
          !isLeft ? 'text-left' : 'col-start-3'
        }`}
      >
        {!isLeft && (
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="rounded-lg bg-secondary p-6 transition-transform hover:translate-y-[-4px]"
          >
            <TimelineContent entry={entry} align={isLeft ? 'right' : 'left'} />
          </MotionDiv>
        )}
      </div>

      {/* Mobile View */}
      <div className="hidden md:col-start-1 md:block">
        {!isLeft && (
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="rounded-lg bg-secondary p-6 transition-transform hover:translate-y-[-4px]"
          >
            <TimelineContent entry={entry} align="left" />
          </MotionDiv>
        )}
      </div>
    </div>
  )
}

const TimelineContent = ({
  entry,
  align
}: {
  entry: TimelineEntry
  align: 'left' | 'right'
}) => {
  return (
    <div
      className={`flex flex-col ${
        align === 'right' ? 'items-end' : 'items-start'
      }`}
    >
      <span className="inline-block rounded bg-target/10 px-2 py-1 text-sm text-target">
        {entry.type.toUpperCase()}
      </span>
      <h3 className="mt-2 text-2xl font-bold text-target">{entry.title}</h3>
      <p className="text-xl font-semibold">{entry.subtitle}</p>
      <div
        className={`mt-1 flex flex-col ${
          align === 'right' ? 'items-end' : 'items-start'
        }`}
      >
        <p className="text-lg text-target">{entry.duration}</p>
        <p className="text-lg">{entry.location}</p>
      </div>
      {entry.description && (
        <p
          className={`mt-4 text-lg ${
            align === 'right' ? 'text-right' : 'text-left'
          }`}
        >
          {entry.description}
        </p>
      )}
      {entry.responsibilities && (
        <ul
          className={`mt-4 list-disc ${
            align === 'right' ? 'mr-4 text-right' : 'ml-4 text-left'
          }`}
        >
          {entry.responsibilities.map((responsibility, idx) => (
            <li key={idx} className="mt-2 text-lg">
              {responsibility}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export const Timeline = () => {
  return (
    <SectionContainer id="timeline" title="Timeline">
      <div className="flex flex-col gap-8">
        {timelineData.map((entry, index) => (
          <TimelineCard key={index} entry={entry} index={index} />
        ))}
      </div>
    </SectionContainer>
  )
}
