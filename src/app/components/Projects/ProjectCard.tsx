import Image from 'next/image'
import { MotionDiv, MotionNav } from '../../lib/motion'
import { projectType } from '../../utils/data'
import { Code2, ExternalLink } from 'lucide-react'

type Props = {
  projectData: projectType
}

const item = {
  initial: {
    opacity: 0,
    y: 24
  },
  animate: {
    opacity: 1,
    y: 0
  }
}

export const ProjectCard = ({ projectData }: Props) => {
  return (
    <MotionDiv className="relative flex flex-col gap-6 lg:gap-4 md:gap-3 sm:w-full">
      <div className="relative flex-col gap-4">
        {/* Fixed aspect ratio container */}
        <div className="relative h-[280px] w-full lg:h-[240px] md:h-[220px] sm:h-[200px]">
          <Image
            src={projectData.image}
            alt={`${projectData.name} image`}
            fill
            className="rounded-lg object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority
          />
          
          <MotionDiv
            initial="initial"
            animate="initial"
            whileHover="animate"
            className="absolute left-0 top-0 z-10 flex h-full w-full items-end bg-black/80 p-4 opacity-0 
              transition-opacity duration-300 hover:opacity-100 md:p-3 sm:p-2"
          >
            <MotionNav
              variants={item}
              transition={{
                duration: 0.2
              }}
              className="flex items-center gap-4 md:gap-3 sm:gap-2"
            >
              <a
                target="_blank"
                href={projectData.repo}
                className="rounded-lg bg-textLight p-3 text-black transition hover:text-target md:p-2.5 sm:p-2"
                rel="noreferrer"
              >
                <Code2 className="h-6 w-6 md:h-5 md:w-5 sm:h-4 sm:w-4" />
              </a>
            </MotionNav>
          </MotionDiv>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:gap-3 sm:gap-2">
        <h3 className="text-2xl font-bold lg:text-xl md:text-lg">{projectData.name}</h3>
        <p className="text-lg lg:text-base md:text-sm">{projectData.description}</p>
        <div className="flex flex-wrap gap-3 md:gap-2">
          {projectData.Skills.map((tag, index) => (
            <span
              className="rounded-3xl bg-target/20 px-3 py-1 text-sm font-bold text-target 
                lg:px-2.5 md:px-2 md:text-xs"
              key={index}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </MotionDiv>
  )
}