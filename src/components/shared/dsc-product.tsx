'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { DSCFormState } from '@/types/product'

interface DSCProductProps {
  productId: string
  priceMap: Record<string, number>
  defaultFormState: DSCFormState
  showDscType?: boolean
  showCertificateType?: boolean
  showValidity?: boolean
  showIndianCitizen?: boolean
  showUsbToken?: boolean
  showAssistance?: boolean
  showQuantity?: boolean
  showTokenType?: boolean
  tokenTypes?: { value: string; label: string }[]
  quantityOptions?: { value: number; label: string }[]
  usbPrice?: number
  assistancePrice?: {
    individual: number
    organization: number
  }
  courierCharge?: number
  hasCourierCharge?: (formState: DSCFormState) => boolean
  calculateDiscount?: (formState: DSCFormState) => number
}

export function DSCProduct({
  productId,
  priceMap,
  defaultFormState,
  showDscType = true,
  showCertificateType = true,
  showValidity = true,
  showIndianCitizen = true,
  showUsbToken = true,
  showAssistance = true,
  showQuantity = true,
  showTokenType = false,
  tokenTypes = [],
  quantityOptions = [],
  usbPrice = 490,
  assistancePrice = {
    individual: 600,
    organization: 900,
  },
  courierCharge = 0,
  hasCourierCharge = () => false,
  calculateDiscount = () => 0,
}: DSCProductProps) {
  const searchParams = useSearchParams()

  const [formState, setFormState] = useState<DSCFormState>(defaultFormState)

  useEffect(() => {
    const stateFromUrl: Partial<DSCFormState> = {}
    let hasParams = false

    const dscType = searchParams.get('dscType')
    if (dscType === 'individual' || dscType === 'organization') {
      stateFromUrl.dscType = dscType
      hasParams = true
    }

    const certType = searchParams.get('certificateType')
    if (certType === 'signature' || certType === 'encryption' || certType === 'combo') {
      stateFromUrl.certificateType = certType
      hasParams = true
    }

    const validity = searchParams.get('validity')
    if (validity === '1' || validity === '2' || validity === '3') {
      stateFromUrl.validity = validity
      hasParams = true
    }

    const isIndian = searchParams.get('isIndianCitizen')
    if (isIndian === 'true' || isIndian === 'false') {
      stateFromUrl.isIndianCitizen = isIndian === 'true'
      hasParams = true
    }

    const tokenType = searchParams.get('tokenType')
    if (tokenType && tokenTypes.some((t) => t.value === tokenType)) {
      stateFromUrl.tokenType = tokenType
      hasParams = true
    }

    const needUSB = searchParams.get('needUSB')
    if (needUSB === 'true' || needUSB === 'false') {
      stateFromUrl.needUSB = needUSB === 'true'
      hasParams = true
    }

    const assistance = searchParams.get('assistance')
    if (assistance === 'true' || assistance === 'false') {
      stateFromUrl.assistance = assistance === 'true'
      hasParams = true
    }

    const quantity = searchParams.get('quantity')
    if (quantity && !isNaN(Number(quantity)) && Number(quantity) > 0) {
      stateFromUrl.quantity = Number(quantity)
      hasParams = true
    }

    if (hasParams) {
      setFormState((prev) => ({ ...prev, ...stateFromUrl }))
    }
  }, [searchParams, defaultFormState, tokenTypes])

  const calculateBasePrice = () => {
    if (showTokenType) {
      return priceMap[formState.tokenType || ''] || 0
    }
    return (
      priceMap[
        `${productId}-${formState.dscType}-${formState.certificateType}-${formState.validity}-${formState.isIndianCitizen}` as keyof typeof priceMap
      ] || 0
    )
  }

  const calculateAssistancePrice = () => {
    if (!formState.assistance) return 0
    return formState.dscType === 'individual'
      ? assistancePrice.individual
      : assistancePrice.organization
  }

  const basePrice = calculateBasePrice()
  const assistancePriceValue = calculateAssistancePrice()
  const usbTokenPrice = formState.needUSB ? usbPrice : 0
  const shouldApplyCourierCharge = courierCharge > 0 && hasCourierCharge(formState)
  const courierChargeAmount = shouldApplyCourierCharge ? courierCharge : 0
  const discount = calculateDiscount(formState)
  const total =
    (basePrice - discount + usbTokenPrice + assistancePriceValue) * formState.quantity +
    courierChargeAmount

  const handleFormStateChange = (updates: Partial<DSCFormState>) => {
    const newState = { ...formState, ...updates }
    setFormState(newState)

    // Update URL with new parameters
    const params = new URLSearchParams(searchParams.toString())

    // Only add parameters for options that are being shown
    if (showDscType && newState.dscType) {
      params.set('dscType', newState.dscType)
    }

    if (showCertificateType && newState.certificateType) {
      params.set('certificateType', newState.certificateType)
    }

    if (showValidity && newState.validity) {
      params.set('validity', newState.validity)
    }

    if (showIndianCitizen) {
      params.set('isIndianCitizen', newState.isIndianCitizen.toString())
    }

    if (showTokenType && newState.tokenType) {
      params.set('tokenType', newState.tokenType)
    }

    if (showUsbToken) {
      params.set('needUSB', newState.needUSB.toString())
    }

    if (showAssistance) {
      params.set('assistance', newState.assistance.toString())
    }

    if (showQuantity) {
      params.set('quantity', newState.quantity.toString())
    }

    // Update the URL without adding to browser history (replaceState instead of pushState)
    const newUrl = `${window.location.pathname}?${params.toString()}`
    window.history.replaceState(null, '', newUrl)
  }

  return (
    <div className="mx-auto ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Main options column (wider) */}
        <div className="lg:col-span-2 space-y-5">
          <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="bg-primary/5 rounded-t-lg py-3">
              <CardTitle className="text-base md:text-lg">Certificate Options</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                {showDscType && (
                  <div className="space-y-1">
                    <Label className="text-xs md:text-sm font-medium">DSC Type</Label>
                    <Tabs
                      value={formState.dscType}
                      onValueChange={(value) =>
                        handleFormStateChange({ dscType: value as 'individual' | 'organization' })
                      }
                      className="w-full"
                    >
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="individual" className="text-xs md:text-sm py-1">
                          Individual
                        </TabsTrigger>
                        <TabsTrigger value="organization" className="text-xs md:text-sm py-1">
                          Organization
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                )}

                {showCertificateType && (
                  <div className="space-y-1">
                    <Label className="text-xs md:text-sm font-medium">Certificate Type</Label>
                    <Tabs
                      value={formState.certificateType}
                      onValueChange={(value) =>
                        handleFormStateChange({
                          certificateType: value as 'signature' | 'encryption' | 'combo',
                        })
                      }
                      className="w-full"
                    >
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="signature" className="text-xs md:text-sm py-1">
                          Signature
                        </TabsTrigger>
                        <TabsTrigger value="encryption" className="text-xs md:text-sm py-1">
                          Encryption
                        </TabsTrigger>
                        <TabsTrigger value="combo" className="text-xs md:text-sm py-1">
                          Combo
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                )}

                {showValidity && (
                  <div className="space-y-1">
                    <Label className="text-xs md:text-sm font-medium">Validity</Label>
                    <Tabs
                      value={formState.validity}
                      onValueChange={(value) =>
                        handleFormStateChange({ validity: value as '1' | '2' | '3' })
                      }
                      className="w-full"
                    >
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="1" className="text-xs md:text-sm py-1">
                          1 Year
                        </TabsTrigger>
                        <TabsTrigger value="2" className="text-xs md:text-sm py-1">
                          2 Year
                        </TabsTrigger>
                        <TabsTrigger value="3" className="text-xs md:text-sm py-1">
                          3 Year
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                )}

                {showIndianCitizen && (
                  <div className="space-y-1">
                    <Label className="text-xs md:text-sm font-medium">Indian Citizen</Label>
                    <Tabs
                      value={formState.isIndianCitizen ? 'yes' : 'no'}
                      onValueChange={(value) =>
                        handleFormStateChange({ isIndianCitizen: value === 'yes' })
                      }
                      className="w-full"
                    >
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="yes" className="text-xs md:text-sm py-1">
                          Yes
                        </TabsTrigger>
                        <TabsTrigger value="no" className="text-xs md:text-sm py-1">
                          No
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                )}

                {showTokenType && tokenTypes.length > 0 && (
                  <div className="space-y-1">
                    <Label className="text-xs md:text-sm font-medium">Token Type</Label>
                    <Tabs
                      value={formState.tokenType}
                      onValueChange={(value) => handleFormStateChange({ tokenType: value })}
                      className="w-full"
                    >
                      <TabsList
                        className="grid w-full"
                        style={{
                          gridTemplateColumns: `repeat(${tokenTypes.length}, minmax(0, 1fr))`,
                        }}
                      >
                        {tokenTypes.map((type) => (
                          <TabsTrigger
                            key={type.value}
                            value={type.value}
                            className="text-xs md:text-sm py-1"
                          >
                            {type.label}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                    </Tabs>
                  </div>
                )}

                {/* Add Quantity outside the USB/Assistance section so it's always shown when showQuantity is true */}
                {showQuantity && (
                  <div className="space-y-1 md:col-span-2">
                    <Label className="text-xs md:text-sm font-medium">Quantity</Label>
                    {quantityOptions.length > 0 ? (
                      <Tabs
                        value={formState.quantity.toString()}
                        onValueChange={(value) =>
                          handleFormStateChange({ quantity: parseInt(value) })
                        }
                        className="w-full"
                      >
                        <TabsList className="grid w-full grid-cols-4">
                          {quantityOptions.map((option) => (
                            <TabsTrigger
                              key={option.value}
                              value={option.value.toString()}
                              className="text-xs md:text-sm py-1"
                            >
                              {option.label}
                            </TabsTrigger>
                          ))}
                        </TabsList>
                      </Tabs>
                    ) : (
                      <div className="flex items-center space-x-3 mt-1">
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() =>
                            handleFormStateChange({
                              quantity: Math.max(1, formState.quantity - 1),
                            })
                          }
                          aria-label="Decrease quantity"
                          className="h-8 w-8 text-xs md:h-9 md:w-9"
                        >
                          -
                        </Button>
                        <Input
                          type="number"
                          min="1"
                          value={formState.quantity}
                          onChange={(e) =>
                            handleFormStateChange({
                              quantity: Math.max(1, parseInt(e.target.value) || 1),
                            })
                          }
                          className="w-12 md:w-16 text-center text-sm h-8 md:h-9"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() =>
                            handleFormStateChange({
                              quantity: formState.quantity + 1,
                            })
                          }
                          aria-label="Increase quantity"
                          className="h-8 w-8 text-xs md:h-9 md:w-9"
                        >
                          +
                        </Button>
                      </div>
                    )}
                  </div>
                )}

                {/* USB and Assistance options */}
                {(showUsbToken || showAssistance) && (
                  <div className="md:col-span-2 pt-2">
                    <Separator className="mb-4" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {showUsbToken && (
                        <div className="space-y-1">
                          <Label className="text-xs md:text-sm font-medium">USB Token</Label>
                          <Tabs
                            value={formState.needUSB ? 'yes' : 'no'}
                            onValueChange={(value) =>
                              handleFormStateChange({ needUSB: value === 'yes' })
                            }
                            className="w-full"
                          >
                            <TabsList className="grid w-full grid-cols-2">
                              <TabsTrigger value="yes" className="text-xs md:text-sm py-1">
                                Yes
                              </TabsTrigger>
                              <TabsTrigger value="no" className="text-xs md:text-sm py-1">
                                No
                              </TabsTrigger>
                            </TabsList>
                          </Tabs>
                        </div>
                      )}

                      {showAssistance && (
                        <div className="space-y-1">
                          <Label className="text-xs md:text-sm font-medium">
                            Personal Assistance
                          </Label>
                          <Tabs
                            value={formState.assistance ? 'yes' : 'no'}
                            onValueChange={(value) =>
                              handleFormStateChange({ assistance: value === 'yes' })
                            }
                            className="w-full"
                          >
                            <TabsList className="grid w-full grid-cols-2">
                              <TabsTrigger value="yes" className="text-xs md:text-sm py-1">
                                Yes
                              </TabsTrigger>
                              <TabsTrigger value="no" className="text-xs md:text-sm py-1">
                                No
                              </TabsTrigger>
                            </TabsList>
                          </Tabs>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order summary column */}
        <div className="lg:col-span-1">
          <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow sticky top-4">
            <CardHeader className="bg-primary/5 rounded-t-lg py-3">
              <CardTitle className="text-base md:text-lg">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs md:text-sm">
                  <span>Product Total</span>
                  <span className="font-medium">
                    ₹{(basePrice * formState.quantity).toLocaleString('en-IN')}
                  </span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between items-center text-xs md:text-sm text-green-600">
                    <span>Quantity Discount</span>
                    <span className="font-medium">
                      -₹{(discount * formState.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                )}

                {showUsbToken && formState.needUSB && (
                  <div className="flex justify-between items-center text-xs md:text-sm">
                    <span>USB Token</span>
                    <span className="font-medium">
                      ₹{(usbTokenPrice * formState.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                )}

                {showAssistance && formState.assistance && (
                  <div className="flex justify-between items-center text-xs md:text-sm">
                    <span>Assistance</span>
                    <span className="font-medium">
                      ₹{(assistancePriceValue * formState.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                )}

                {shouldApplyCourierCharge && (
                  <div className="flex justify-between items-center text-xs md:text-sm">
                    <span>Courier Charge</span>
                    <span className="font-medium">
                      ₹{courierChargeAmount.toLocaleString('en-IN')}
                    </span>
                  </div>
                )}

                <Separator className="my-2" />

                <div className="flex justify-between items-center text-sm md:text-base font-bold">
                  <span>Total</span>
                  <span className="text-primary">₹{total.toLocaleString('en-IN')}</span>
                </div>

                <div className="pt-3">
                  <Link
                    href={{
                      pathname: `${formState.redirectUrl}/checkout`,
                      query: {
                        amount: total,
                        orderData: JSON.stringify(formState),
                      },
                    }}
                  >
                    <Button className="w-full bg-primary hover:bg-primary/90 text-sm py-2">
                      Enquire Now
                    </Button>
                  </Link>
                </div>

                <div className="mt-3 text-xs text-gray-500">
                  <p>
                    * Personal assistance includes support with documentation and the DSC
                    application process.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
