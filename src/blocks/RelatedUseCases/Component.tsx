import React from 'react'

import { Card } from '@/components/Card'
import { cn } from '@/utilities/ui'
import { UseCase } from '@/payload-types'

export type Props = {
  docs: UseCase[]
}

export const RelatedUseCases: React.FC<Props> = (props) => {
  const { docs } = props

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Related Use Cases</h2>
      </div>
      <div
        className={cn(
          'grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8',
        )}
      >
        {docs?.slice(0, 3).map((doc, index) => {
          if (typeof doc === 'object' && doc !== null) {
            return (
              <div className="col-span-4" key={index}>
                <Card className="h-full" doc={doc} relationTo="use-cases" />
              </div>
            )
          }

          return null
        })}
      </div>
    </div>
  )
}
