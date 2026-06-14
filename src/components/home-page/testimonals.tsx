/* eslint-disable react/no-unescaped-entities */
'use client'

import React, { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Star, MessageSquareQuote, Quote } from 'lucide-react'
import MaxWidthWrapper from '../MaxWidthWrapper'

interface Testimonial {
  name: string
  role: string
  quote: string
  avatarSrc: string
  rating?: number
  company?: string
}

export default function TestimonialSection({
  testimonials = defaultTestimonials,
}: {
  testimonials?: Testimonial[]
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    skipSnaps: false,
    loop: true,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 translate-x-1/3 translate-y-1/3"></div>

      <MaxWidthWrapper>
        <div className="relative z-10">
          {/* Section Header */}
          <div className="flex flex-col items-center mb-16">
            <span className="px-4 py-1.5 bg-blue-100 text-primary rounded-full text-sm font-medium mb-6">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 max-w-3xl mx-auto leading-tight text-slate-900">
              What Our Customers Are Saying
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-6"></div>
            <p className="text-slate-600 text-lg md:text-xl text-center max-w-2xl">
              Join thousands of satisfied customers who trust our digital signature solutions
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-6xl mx-auto px-4">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_100%] px-4 py-2">
                    <Card className="relative bg-white rounded-2xl shadow-xl border-0 overflow-hidden p-6 md:p-10">
                      <div className="flex flex-col md:flex-row gap-8 items-center">
                        {/* Avatar and Person Info */}
                        <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-1/3">
                          <div className="relative">
                            <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-white shadow-xl mb-6">
                              <AvatarImage
                                src={testimonial.avatarSrc}
                                alt={`${testimonial.name}'s avatar`}
                              />
                              <AvatarFallback className="bg-gradient-to-br from-blue-400 to-blue-600 text-white text-xl font-semibold">
                                {testimonial.name
                                  .split(' ')
                                  .map((n) => n[0])
                                  .join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-1.5 shadow-lg">
                              <MessageSquareQuote className="h-5 w-5" />
                            </div>
                          </div>

                          <h3 className="text-xl font-bold text-slate-900 mb-1">
                            {testimonial.name}
                          </h3>
                          <p className="text-slate-500 text-sm mb-4">
                            {testimonial.role}
                            {testimonial.company && (
                              <span>
                                <br />
                                {testimonial.company}
                              </span>
                            )}
                          </p>

                          <div className="flex space-x-1 mb-4">
                            {[...Array(testimonial.rating || 5)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                        </div>

                        {/* Quote Content */}
                        <div className="md:w-2/3 relative">
                          <Quote className="h-10 w-10 text-blue-100 absolute -top-2 -left-2" />
                          <blockquote className="text-slate-700 text-lg md:text-xl font-medium leading-relaxed z-10 relative pl-2">
                            "{testimonial.quote}"
                          </blockquote>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation */}
            <div className="flex flex-col items-center mt-8 gap-6">
              {/* Dot indicators */}
              <div className="flex justify-center space-x-2">
                {scrollSnaps.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2.5 rounded-full transition-all ${
                      index === selectedIndex
                        ? 'w-8 bg-primary'
                        : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                    onClick={() => scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Arrow buttons */}
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 rounded-full border-slate-200 hover:border-primary hover:bg-primary/10 hover:text-primary transition-colors"
                  onClick={scrollPrev}
                  aria-label="View previous testimonial"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 rounded-full border-slate-200 hover:border-primary hover:bg-primary/10 hover:text-primary transition-colors"
                  onClick={scrollNext}
                  aria-label="View next testimonial"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

const defaultTestimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    quote:
      "SignSecure's DSC solution has revolutionized how we handle contracts. Processing time reduced from days to minutes!",
    avatarSrc: '/placeholder.svg?height=100&width=100',
    rating: 5,
    company: 'TechCorp',
  },
  {
    name: 'Alex Chen',
    role: 'Software Engineer',
    quote:
      'The customer support is exceptional. They guided us through the entire implementation process with patience and expertise.',
    avatarSrc: '/placeholder.svg?height=100&width=100',
    rating: 5,
    company: 'DevSolutions',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Small Business Owner',
    quote:
      "As a small business, the cost-effectiveness and security of SignSecure's DSC has been invaluable for our growth.",
    avatarSrc: '/placeholder.svg?height=100&width=100',
    rating: 5,
    company: 'Crafty Creations',
  },
  {
    name: 'Michael Lee',
    role: 'Product Manager',
    quote:
      "The features and flexibility of SignSecure's DSC platform have exceeded our expectations. It's truly a comprehensive solution.",
    avatarSrc: '/placeholder.svg?height=100&width=100',
    rating: 4,
    company: 'InnovateTech',
  },
  {
    name: 'Olivia Taylor',
    role: 'Freelance Designer',
    quote:
      'As a freelancer, this digital signature certificate has streamlined my process and helped me manage client contracts professionally.',
    avatarSrc: '/placeholder.svg?height=100&width=100',
    rating: 5,
    company: 'Independent',
  },
]
