'use client'
import { Header } from '@/payload-types'
import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

export const RowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<NonNullable<Header['navItems']>[number]>()
  let labelText = ''
  if (data?.data?.navItem?.type === 'single') {
    labelText = data?.data?.navItem?.singleLink?.label ?? ''
  } else {
    labelText = data?.data?.navItem?.label ?? ''
  }
  const label = labelText
    ? `Nav item ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}: ${labelText}`
    : 'Row'

  return <div>{label}</div>
}
