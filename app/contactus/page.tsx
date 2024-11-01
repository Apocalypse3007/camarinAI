// Import necessary modules and types
import React, { ReactNode } from "react";
import { Mail, MessageSquare, User } from "lucide-react";

// Button Component
function Button({
  children,
  className = "",
  variant = "default",
  ...props
}: {
  children: ReactNode;
  className?: string;
  variant?: string;
  [key: string]: any;
}) {
  let variantClass = "";

  if (variant === "secondary") {
    variantClass = "bg-gray-500 hover:bg-gray-600 text-white";
  } else if (variant === "default") {
    variantClass = "bg-white text-black hover:bg-gray-100";
  }

  return (
    <button
      className={`px-4 py-2 rounded ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// Card Component
function Card({
  children,
  className = "",
  ...props
}: {
  children: ReactNode;
  className?: string;
  [key: string]: any;
}) {
  return (
    <div className={`rounded ${className}`} {...props}>
      {children}
    </div>
  );
}

// Input Component
function Input({
  className = "",
  ...props
}: {
  className?: string;
  [key: string]: any;
}) {
  return (
    <input
      className={`w-full px-3 py-2 bg-[#161616] text-white rounded ${className}`}
      {...props}
    />
  );
}

// Textarea Component
function Textarea({
  className = "",
  ...props
}: {
  className?: string;
  [key: string]: any;
}) {
  return (
    <textarea
      className={`w-full px-3 py-2 bg-[#161616] text-white rounded ${className}`}
      {...props}
    />
  );
}

// Select Component
function Select({
  options,
  className = "",
  placeholder,
  ...props
}: {
  options: { value: string; label: string }[];
  className?: string;
  placeholder?: string;
  [key: string]: any;
}) {
  return (
    <select
      className={`w-full px-3 py-2 bg-[#161616] text-white rounded ${className}`}
      {...props}
    >
      <option value="" disabled selected>
        {placeholder}
      </option>
      {options.map((option) => (
        <option
          value={option.value}
          key={option.value}
          className="text-white"
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}

// Main ContactUs Component
export default function ContactUs() {
  return (
    <div className="min-h-screen bg-[#161616] text-white py-12">
      <div className="container px-4 mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Contact
        </h1>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Contact Sales Form */}
          <Card className="p-6 bg-[#27272a] border-0">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-5 h-5" />
              <h2 className="text-2xl font-semibold">Contact Us</h2>
            </div>
            <p className="text-gray-400 mb-6">
              Talk to our team about your enterprise needs.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-400">First Name</label>
                  <Input
                    placeholder="John"
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400">Last Name</label>
                  <Input
                    placeholder="Doe"
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-400">Company Email</label>
                <Input
                  type="email"
                  placeholder="johndoe@gmail.com"
                  className="mt-1"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Subject</label>
                <Select
                  className="mt-1 w-full"
                  placeholder="Pick a subject..."
                  options={[
                    { value: "sales", label: "Sales Inquiry" },
                    { value: "support", label: "Support" },
                    { value: "billing", label: "Billing" },
                    { value: "other", label: "Other" },
                  ]}
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">
                  How can we help?
                </label>
                <Textarea
                  placeholder="Tell us more about your enterprise needs."
                  className="mt-1 min-h-[100px]"
                />
              </div>
              <Button className="w-full bg-white text-black hover:bg-gray-100">
                Contact Us
              </Button>
            </form>
          </Card>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Community Support */}
            <Card className="p-6 bg-[#27272a] border-0">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5" />
                <h2 className="text-2xl font-semibold">Have a Doubt?</h2>
              </div>
              <p className="text-gray-400 mb-6">
                Reach out to us for any doubts regarding our features.
              </p>
              <p className="py-12" />
              <Button variant="secondary" className="w-full">
                Talk to us
              </Button>
            </Card>

            {/* Account Support */}
            <Card className="p-6 bg-[#27272a] border-0">
              <div className="flex items-center gap-2 mb-4">
                <User className="w-5 h-10" />
                <h2 className="text-2xl font-semibold">Pricing Plans</h2>
              </div>
              <p className="text-gray-400 mb-6">
                Chat with us to find out more about our pricing.
              </p>
              <p className="py-12" />
              <Button variant="secondary" className="w-full">
                Start chat
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
