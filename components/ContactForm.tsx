'use client';

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Button from "./Button";

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;
        
        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            formRef.current,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
            .then(
                () => {
                    toast.success("Message sent successfully ✨");
                    formRef.current?.reset();
                },
                (error) => {
                    console.error(error);
                    toast.error("Something went wrong . Please try again later.");
                }
            );
        e.currentTarget.reset();
    };

    return (
        <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-4 max-w-sm md:max-w-xl mx-auto"
        >
            <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="pl-4 pb-3 text-white placeholder:text-gray-500 font-poppins-regular text-[20px] border-b-2 outline-none transition-all duration-300 border-gray-600 focus:border-b-2 focus:border-(--primary-color)"
            />
            <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="pl-4 pb-3 text-white placeholder:text-gray-500 font-poppins-regular text-[20px] border-b-2 outline-none transition-all duration-300 border-gray-600 focus:border-b-2 focus:border-(--primary-color)"

            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="pl-4 pb-3 text-white placeholder:text-gray-500 font-poppins-regular text-[20px] border-b-2 outline-none transition-all duration-300 border-gray-600 focus:border-b-2 focus:border-(--primary-color)"

            />

            <textarea
                name="message"
                placeholder="Message"
                required
                className="pl-4 pb-3 text-white placeholder:text-gray-500 font-poppins-regular text-[20px] border-b-2 outline-none transition-all duration-300 border-gray-600 focus:border-b-2 focus:border-(--primary-color)"

            />
            <Button className="bg-gray-800 text-white hover:bg-gray-900 transition-all duration-300 ease-in">Send Message</Button>
        </form>
    );
};

export default ContactForm;