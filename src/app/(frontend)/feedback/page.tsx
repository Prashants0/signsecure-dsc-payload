"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Star } from "lucide-react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "@/hooks/use-toast";

type FormData = {
  name: string;
  email: string;
  comments: string;
  organization: string;
  linkedinUrl: string;
  allowLinkedinUse: boolean;
};

export default function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      allowLinkedinUse: true,
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: FormData) => {
      try {
        const res = await axios.post(
          process.env.NEXT_PUBLIC_BACKEND_URL + "/create-feedback",
          {
            email: data.email,
            name: data.name,
            comments: data.comments,
            organization: data.organization,
            linkedin: data.linkedinUrl,
            allow_linkedin_use: data.allowLinkedinUse,
            rating: rating,
            site: "dsc",
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (res.status === 200) {
          setIsSubmitted(true);
        }
      } catch (error) {
        console.log(error);
        toast({
          title: "Form submission failed",
          description: "Please try again later.",
          variant: "destructive",
        });
      }

      return;
    },
  });

  const onSubmit = (data: FormData) => {
    submitMutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Thank You!</CardTitle>
            <CardDescription>We appreciate your feedback.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Your input is valuable to us and helps us improve our services.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 font-IBM">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Please give your feedback
          </CardTitle>
          <CardDescription>
            We value your opinion and would love to hear from you!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="name">Name</Label>
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <Input
                id="name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                  maxLength: {
                    value: 50,
                    message: "Name must be less than 50 characters",
                  },
                })}
                aria-invalid={errors.name ? "true" : "false"}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="email">Email</Label>
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <Input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email address",
                  },
                })}
                aria-invalid={errors.email ? "true" : "false"}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="email">Organization</Label>
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <Input
                id="organization"
                type="text"
                {...register("organization", {
                  required: "Organization is required",
                })}
                aria-invalid={errors.email ? "true" : "false"}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="comments">Comments</Label>
                {errors.comments && (
                  <span className="text-red-500 text-sm">
                    {errors.comments.message}
                  </span>
                )}
              </div>
              <Textarea
                id="comments"
                {...register("comments", {
                  required: "Comments are required",
                  minLength: {
                    value: 10,
                    message: "Comments must be at least 10 characters",
                  },
                  maxLength: {
                    value: 500,
                    message: "Comments must be less than 500 characters",
                  },
                })}
                aria-invalid={errors.comments ? "true" : "false"}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="linkedinUrl">LinkedIn URL</Label>
                {errors.linkedinUrl && (
                  <span className="text-red-500 text-sm">
                    {errors.linkedinUrl.message}
                  </span>
                )}
              </div>
              <Input
                id="linkedinUrl"
                {...register("linkedinUrl", {
                  required: "LinkedIn URL is required",
                  pattern: {
                    value: /^https:\/\/[a-z]{2,3}\.linkedin\.com\/.*$/,
                    message: "Invalid LinkedIn URL",
                  },
                })}
                aria-invalid={errors.linkedinUrl ? "true" : "false"}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="allowLinkedinUse"
                {...register("allowLinkedinUse")}
              />
              <Label htmlFor="allowLinkedinUse">
                I allow the use of my LinkedIn profile photo
              </Label>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Rating</Label>
                {rating === 0 && (
                  <span className="text-red-500 text-sm">
                    Please provide a rating
                  </span>
                )}
              </div>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`cursor-pointer ${
                      star <= rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="w-full"
            onClick={handleSubmit(onSubmit)}
          >
            {submitMutation.isPending ? "Submitting..." : "Submit Feedback"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
