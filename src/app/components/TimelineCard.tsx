import { MotionDiv } from '../lib/motion'
import { ReactNode } from 'react'

type TimelineCardProps = {
  isLeft: boolean
  children: ReactNode
}

export const TimelineCard = ({ isLeft, children }: TimelineCardProps) => {
  return (
    <div className="relative grid grid-cols-[1fr_auto_1fr] gap-8 md:grid-cols-[1fr_auto] md:gap-6">
      {/* Left Side Content */}
      <div className={`${!isLeft && 'md:hidden'} ${isLeft ? 'text-right' : 'col-start-3'}`}>
        {isLeft && (
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="rounded-lg bg-secondary p-6 transition-transform hover:translate-y-[-4px]"
          >
            {children}
          </MotionDiv>
        )}
      </div>

      {/* Timeline Line & Dot */}
      <div className="relative flex justify-center">
        <div className="absolute top-0 bottom-[-100px] w-[2px] bg-blue-500"></div>
        <div className="relative mt-6 h-4 w-4 rounded-full bg-blue-500 ring-4 ring-blue-500/20"></div>
      </div>

      {/* Right Side Content */}
      <div className={`${isLeft && 'md:hidden'} ${!isLeft ? 'text-left' : 'col-start-3'}`}>
        {!isLeft && (
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="rounded-lg bg-secondary p-6 transition-transform hover:translate-y-[-4px]"
          >
            {children}
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
            {children}
          </MotionDiv>
        )}
      </div>
    </div>
  )
}