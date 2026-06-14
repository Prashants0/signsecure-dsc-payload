import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const tokenRows: Array<{ label: string; prices: Record<10 | 25 | 50 | 100, number> }> = [
  { label: 'Hyp 2003', prices: { 10: 460, 25: 450, 50: 445, 100: 440 } },
  { label: 'Proxykey', prices: { 10: 440, 25: 430, 50: 425, 100: 420 } },
  { label: 'M Token', prices: { 10: 460, 25: 450, 50: 445, 100: 440 } },
]

const quantities: Array<10 | 25 | 50 | 100> = [10, 25, 50, 100]

export default function TokenPriceChart() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">Quantity-wise Token Price List</CardTitle>
        <p className="text-sm text-muted-foreground">
          Per-piece price (₹) excluding GST. Prices reduce with higher order quantity.
        </p>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-primary/5">
                <th className="text-left p-3 border-b font-semibold">Token Type</th>
                {quantities.map((qty) => (
                  <th key={qty} className="text-right p-3 border-b font-semibold">
                    {qty} Qty
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tokenRows.map((row) => (
                <tr key={row.label} className="hover:bg-gray-50">
                  <td className="p-3 border-b font-medium">{row.label}</td>
                  {quantities.map((qty) => (
                    <td key={qty} className="p-3 border-b text-right">
                      ₹{row.prices[qty].toLocaleString('en-IN')}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 rounded-lg bg-primary/5 border border-primary/10">
          <div>
            <p className="font-semibold text-base md:text-lg">Need more than 100 tokens?</p>
            <p className="text-sm text-muted-foreground">
              For bulk orders above 100 quantity, contact our sales team for the best wholesale
              pricing.
            </p>
          </div>
          <Link href="/#contact">
            <Button className="bg-primary hover:bg-primary/90">Contact Sales</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
