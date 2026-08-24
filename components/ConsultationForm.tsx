"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const consultationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  serviceType: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

export default function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      serviceType: "AI Solutions",
    },
  });

  const onSubmit = async (data: ConsultationFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      setSubmitSuccess(true);
      reset();
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitSuccess && (
        <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center">
          Thank you! Your consultation request has been submitted successfully.
        </div>
      )}
      {submitError && (
        <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-center">
          {submitError}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
          <input
            {...register("firstName")}
            type="text"
            className={`w-full px-4 py-3 bg-navy-700/50 border rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white ${
              errors.firstName ? "border-red-500" : "border-white/10"
            }`}
            placeholder="John"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-400">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
          <input
            {...register("lastName")}
            type="text"
            className={`w-full px-4 py-3 bg-navy-700/50 border rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white ${
              errors.lastName ? "border-red-500" : "border-white/10"
            }`}
            placeholder="Doe"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-400">{errors.lastName.message}</p>
          )}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Work Email</label>
        <input
          {...register("email")}
          type="email"
          className={`w-full px-4 py-3 bg-navy-700/50 border rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white ${
            errors.email ? "border-red-500" : "border-white/10"
          }`}
          placeholder="john@company.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
        <input
          {...register("company")}
          type="text"
          className="w-full px-4 py-3 bg-navy-700/50 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white"
          placeholder="Your Company"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Service Interest</label>
        <select
          {...register("serviceType")}
          className={`w-full px-4 py-3 bg-navy-700/50 border rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white ${
            errors.serviceType ? "border-red-500" : "border-white/10"
          }`}
        >
          <option>AI Solutions</option>
          <option>IT Infrastructure</option>
          <option>Cybersecurity</option>
          <option>Application Development</option>
          <option>Computer System Validation (CSV)</option>
        </select>
        {errors.serviceType && (
          <p className="mt-1 text-sm text-red-400">{errors.serviceType.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
        <textarea
          {...register("message")}
          rows={4}
          className="w-full px-4 py-3 bg-navy-700/50 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white resize-none"
          placeholder="Tell us about your project..."
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </button>
    </form>
  );
}