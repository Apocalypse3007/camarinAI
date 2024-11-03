"use client";
// Import necessary modules and types
import React, { ReactNode, useState, FormEvent } from "react";
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
            className={`relative inline-block px-6 py-3 bg-gradient-to-r from-neutral-700 to-zinc-900 rounded-full shadow-[inset_0_0_0_2px_transparent,0_0_10px_2px_rgba(255,255,255,0.5)] transition-shadow duration-300 ease-in-out hover:shadow-[inset_0_0_0_2px_transparent,0_0_10px_2px_rgba(255,255,255,1)] ${variantClass} ${className}`}
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
        <div className={`rounded-2xl border-[1px] border-[#57534e] ${className}`} {...props}>
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
    value,
    onChange,
    ...props
}: {
    options: { value: string; label: string }[];
    className?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    [key: string]: any;
}) {
    return (
        <select
            value={value}
            onChange={onChange}
            className={`w-full px-3 py-2 bg-[#161616] text-white rounded ${className}`}
            {...props}
        >
            <option value="" disabled>
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

// Main Contactus Component
export default function Contactus() {
    // State variables to hold form data
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [companyEmail, setCompanyEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    // Gradient Percentage (Adjust this value to change the gradient coverage)
    const gradientPercentage = 25; // Percentage of the gradient (e.g., 25%)

    // Handle form submission
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const emailTo = "contactus@camarin.ai"; // Recipient email address
        const subjectLine = `Contact Us: ${subject || "No Subject"}`;

        // Construct the email body with name and message
        const emailBody = `
Name: ${firstName} ${lastName}
Email: ${companyEmail}

Message:
${message}
        `;

        // Construct the Gmail compose URL
        const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
            emailTo
        )}&su=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(
            emailBody
        )}`;

        // Redirect to the Gmail compose URL
        window.open(gmailComposeUrl, "_blank");
    };

    return (
        <div className="min-h-screen bg-[#161616] text-white py-12">
            <div className="container px-4 mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    Contact
                </h1>

                <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {/* Contact Sales Form */}
                    <Card
                        className="p-6 border-0 relative overflow-hidden"
                        style={{
                            backgroundImage: `radial-gradient(circle at top left, #042f2e, transparent 50%)`,
                        }}
                    >
                        {/* Optional: Overlay to enhance text readability */}
                        <div className="absolute inset-0 bg-transparent"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-4">
                                <Mail className="w-5 h-5" />
                                <h2 className="text-2xl font-semibold">Contact Us</h2>
                            </div>
                            <p className="text-gray-400 mb-6">
                                Talk to our team about your enterprise needs.
                            </p>

                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm text-gray-400">First Name</label>
                                        <Input
                                            placeholder="John"
                                            className="mt-1"
                                            value={firstName}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                                setFirstName(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm text-gray-400">Last Name</label>
                                        <Input
                                            placeholder="Doe"
                                            className="mt-1"
                                            value={lastName}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                                setLastName(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm text-gray-400">Company Email</label>
                                    <Input
                                        type="email"
                                        placeholder="johndoe@gmail.com"
                                        className="mt-1"
                                        value={companyEmail}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            setCompanyEmail(e.target.value)
                                        }
                                    />
                                </div>

                                <div>
                                    <label className="text-sm text-gray-400">Subject</label>
                                    <Select
                                        className="mt-1 w-full"
                                        placeholder="Pick a subject..."
                                        options={[
                                            { value: "Sales Inquiry", label: "Sales Inquiry" },
                                            { value: "Support", label: "Support" },
                                            { value: "Billing", label: "Billing" },
                                            { value: "Other", label: "Other" },
                                        ]}
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className="text-sm text-gray-400">
                                        How can we help?
                                    </label>
                                    <Textarea
                                        placeholder="Tell us more about your enterprise needs."
                                        className="mt-1 min-h-[100px]"
                                        value={message}
                                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                                            setMessage(e.target.value)
                                        }
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full text-white"
                                >
                                    Contact Us
                                </Button>
                            </form>
                        </div>
                    </Card>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* Community Support */}
                        <Card
                            className="p-6 bg-[#161616] border-0"
                            style={{
                                backgroundImage: `radial-gradient(circle at top left, #042f2e, transparent 50%)`,
                            }}
                        >
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
                        <Card 
                            className="p-6 bg-[#161616] border-0"
                            style={{
                                backgroundImage: `radial-gradient(circle at top left, #042f2e, transparent 50%)`,
                            }}
                        >
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
