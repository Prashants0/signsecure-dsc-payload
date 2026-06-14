'use client'

import { Minus, Plus, Info } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export interface DataTypes {
  id: string
  title: string
  price: number
  description: string
}

export default function ProductBuyCard({
  data,
  basePrice,
  downloadLink,
}: {
  data: DataTypes[]
  basePrice: number
  downloadLink: string
}) {
  const [quantity, setQuantity] = useState(1)
  const searchParams = useSearchParams()
  const initialOptions = searchParams.get('options')?.split(',') || []
  const [selectedOptions, setSelectedOptions] = useState(initialOptions)

  const totalPrice = data.reduce((total, item) => {
    if (selectedOptions.includes(item.id)) {
      return total + item.price
    }
    return total
  }, basePrice)

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  const handleOptionChange = (optionId: string) => {
    setSelectedOptions((prev) =>
      prev.includes(optionId) ? prev.filter((id) => id !== optionId) : [...prev, optionId],
    )
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>PDF Signer Application</CardTitle>
        <CardDescription>Sign multiple PDFs with a single click</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold">
          ₹{totalPrice}
          <span className="text-lg text-muted-foreground ml-1">/year</span>
        </div>
        <p className="text-sm text-muted-foreground mt-2">*excludes all applicable taxes</p>
        <div className="flex items-center gap-4 mt-4">
          <span className="font-semibold">Quantity:</span>
          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={decrementQuantity}
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="mx-2 w-8 text-center">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={incrementQuantity}
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Add-on Options:</h3>
          {data.map((option) => (
            <div key={option.id} className="flex items-center space-x-2 mb-4">
              <Checkbox
                id={option.id}
                checked={selectedOptions.includes(option.id)}
                onCheckedChange={() => handleOptionChange(option.id)}
              />
              <div className="grid gap-1.5 leading-none">
                <div className="flex items-center space-x-2">
                  <label
                    htmlFor={option.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {option.title} {option.price > 0 && `(+₹${option.price})`}
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <Info className="h-4 w-4" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <p className="text-sm">{option.description}</p>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className="grid grid-cols-2 gap-2 w-full">
          <Link
            prefetch
            href={{
              pathname: '/payment-info',
              query: {
                quantity: quantity,
                options: selectedOptions.join(','),
              },
            }}
            className="w-full"
          >
            <Button className="w-full" size="lg">
              Buy Now
            </Button>
          </Link>
          <Link href={downloadLink}>
            <Button
              variant="outline"
              className="text-base font-bold w-full border-primary text-primary hover:bg-primary/10"
            >
              Try Demo
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
