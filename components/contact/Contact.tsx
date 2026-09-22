import { useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { contactSchema, type ContactFormData } from "@/lib/validations/contact";
import { z } from "zod";
import { IconMail, IconCheck, IconX } from "@tabler/icons-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import CodeEditorVisual from "@/components/shared/CodeEditorVisual";

type FormStatus = "idle" | "loading" | "success" | "error";

type FieldErrors = Partial<Record<keyof ContactFormData, string[]>>;

function ContactVisual() {
  return (
    <CodeEditorVisual fileName='contact.config.ts'>
      <div className='text-gray-500'>{`// Get in touch with Astraque`}</div>
      <div className='mt-2'>
        <span className='text-violet-400'>const</span>{" "}
        <span className='text-indigo-400'>contact</span>{" "}
        <span className='text-white'>=</span>{" "}
        <span className='text-violet-400'>{`{`}</span>
      </div>
      <div className='ml-4'>
        <span className='text-pink-400'>email:</span>{" "}
        <span className='text-emerald-400'>
          &quot;astraquesoftwares@gmail.com&quot;
        </span>
        <span className='text-white'>,</span>
      </div>
      <div className='ml-4'>
        <span className='text-pink-400'>phone:</span>{" "}
        <span className='text-emerald-400'>&quot;+254 792 554525&quot;</span>
        <span className='text-white'>,</span>
      </div>
      <div className='ml-4'>
        <span className='text-pink-400'>location:</span>{" "}
        <span className='text-emerald-400'>&quot;Nairobi, Kenya&quot;</span>
        <span className='text-white'>,</span>
      </div>
      <div className='ml-4'>
        <span className='text-pink-400'>availability:</span>{" "}
        <span className='text-emerald-400'>
          &quot;Mon — Fri, 8am — 6pm EAT&quot;
        </span>
      </div>
      <div>
        <span className='text-violet-400'>{`};`}</span>
      </div>

      <div className='mt-4 text-gray-500'>{`// How it works`}</div>
      <div className='mt-2'>
        <span className='text-violet-400'>const</span>{" "}
        <span className='text-indigo-400'>process</span>{" "}
        <span className='text-white'>=</span>{" "}
        <span className='text-violet-400'>[</span>
      </div>
      <div className='ml-4'>
        <span className='text-emerald-400'>
          &quot;Tell us about your project&quot;
        </span>
        <span className='text-white'>,</span>
      </div>
      <div className='ml-4'>
        <span className='text-emerald-400'>
          &quot;Get a free quotation&quot;
        </span>
        <span className='text-white'>,</span>
      </div>
      <div className='ml-4'>
        <span className='text-emerald-400'>
          &quot;We build &amp; deliver&quot;
        </span>
      </div>
      <div>
        <span className='text-violet-400'>];</span>
      </div>
    </CodeEditorVisual>
  );
}

function SubmitButtonContent({ status }: Readonly<{ status: FormStatus }>) {
  switch (status) {
    case "loading":
      return (
        <>
          <div className='w-4 h-4 border-2 border-white/20 border-t-white/90 rounded-full animate-spin' />
          <span className='text-white/90'>Sending...</span>
        </>
      );
    case "success":
      return (
        <>
          <IconCheck className='w-4 h-4 text-emerald-500' />
          <span className='text-emerald-500'>Sent!</span>
        </>
      );
    case "error":
      return (
        <>
          <IconX className='w-4 h-4 text-red-500' />
          <span className='text-red-500'>Failed</span>
        </>
      );
    default:
      return (
        <>
          <IconMail className='w-4 h-4 text-white/90' />
          <span className='text-white/90'>Send Message</span>
        </>
      );
  }
}

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const sendEmail = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setFieldErrors({});
    setMessage("");

    const formData = new FormData(form.current);
    const data = {
      name: formData.get("user_name") as string,
      email: formData.get("user_email") as string,
      message: formData.get("message") as string,
    };

    const validation = contactSchema.safeParse(data);
    if (!validation.success) {
      const { fieldErrors } = z.flattenError(validation.error);
      const errors: FieldErrors = {};
      for (const [key, messages] of Object.entries(fieldErrors)) {
        if (messages && messages.length > 0)
          errors[key as keyof ContactFormData] = messages;
      }
      setFieldErrors(errors);
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      setStatus("success");
      setMessage("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
      setMessage("Failed to send message. Please try again.");
    }

    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 3000);
  };

  return (
    <section
      id='contact'
      className={cn(
        "min-h-screen py-6 md:py-8 relative overflow-hidden flex items-center",
      )}
      style={{ contentVisibility: "auto" }}>
      <div className='w-full'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='flex flex-col items-center text-center mb-16'>
            <h2 className='text-4xl sm:text-5xl font-semibold text-white/95 mb-4 tracking-tight leading-[1.15]'>
              Contact Us
            </h2>
            <div className='flex items-center gap-2'>
              <div className='w-8 h-px bg-linear-to-r from-transparent to-violet-500/50' />
              <div className='w-20 h-1 bg-linear-to-r from-violet-500 to-indigo-500 rounded-full' />
              <div className='w-8 h-px bg-linear-to-l from-transparent to-indigo-500/50' />
            </div>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch'>
            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className='relative h-105'>
              <ContactVisual />
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className='relative'
              style={{ minHeight: "420px" }}>
              <form
                ref={form}
                onSubmit={sendEmail}
                className='space-y-6 relative'>
                <div>
                  <label
                    htmlFor='user_name'
                    className='block text-sm font-medium text-white/90 mb-2'>
                    Name
                  </label>
                  <input
                    type='text'
                    name='user_name'
                    id='user_name'
                    required
                    disabled={status === "loading"}
                    className={cn(
                      "w-full px-4 py-3 bg-white/5 border rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none text-white/90 placeholder-white/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      fieldErrors.name
                        ? "border-red-500/50"
                        : "border-white/10",
                    )}
                    placeholder='Your name'
                  />
                  {fieldErrors.name && (
                    <p className='mt-1.5 text-xs text-red-400'>
                      {fieldErrors.name[0]}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor='user_email'
                    className='block text-sm font-medium text-white/90 mb-2'>
                    Email
                  </label>
                  <input
                    type='email'
                    name='user_email'
                    id='user_email'
                    required
                    disabled={status === "loading"}
                    className={cn(
                      "w-full px-4 py-3 bg-white/5 border rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none text-white/90 placeholder-white/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      fieldErrors.email
                        ? "border-red-500/50"
                        : "border-white/10",
                    )}
                    placeholder='your.email@example.com'
                  />
                  {fieldErrors.email && (
                    <p className='mt-1.5 text-xs text-red-400'>
                      {fieldErrors.email[0]}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-white/90 mb-2'>
                    Message
                  </label>
                  <textarea
                    name='message'
                    id='message'
                    required
                    disabled={status === "loading"}
                    rows={4}
                    className={cn(
                      "w-full px-4 py-3 bg-white/5 border rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none text-white/90 placeholder-white/30 resize-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      fieldErrors.message
                        ? "border-red-500/50"
                        : "border-white/10",
                    )}
                    placeholder='Tell us about your project and include your phone number for faster communication...'
                  />
                  {fieldErrors.message && (
                    <p className='mt-1.5 text-xs text-red-400'>
                      {fieldErrors.message[0]}
                    </p>
                  )}
                </div>

                <HoverBorderGradient
                  containerClassName='rounded-2xl w-full bg-white/10'
                  className='w-full bg-[#050505] p-0'
                  as='div'
                  duration={1}
                  clockwise>
                  <button
                    type='submit'
                    disabled={status === "loading"}
                    className='w-full flex items-center justify-center space-x-2 py-3.5 px-4 text-sm font-medium relative transition-transform duration-200'>
                    <SubmitButtonContent status={status} />
                  </button>
                </HoverBorderGradient>

                {message && (
                  <div
                    className={cn(
                      "text-sm text-center font-medium",
                      status === "success"
                        ? "text-emerald-500"
                        : "text-red-500",
                    )}>
                    {message}
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
