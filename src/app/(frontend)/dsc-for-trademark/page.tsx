import type { Metadata } from 'next'
import { UseCaseLanding } from '@/components/use-case/UseCaseLanding'
import { useCases } from '@/components/use-case/content'

const data = useCases['dsc-for-trademark']

export const metadata: Metadata = data.metadata

export default function Page() {
  return <UseCaseLanding {...data} />
}
