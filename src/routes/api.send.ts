import { createFileRoute } from "@tanstack/react-router";
import { Resend } from "resend";
import { z } from "zod";
import { contactSchema } from "@/lib/validations/contact";
import ContactEmail from "@/components/emails/ContactEmail";

export const Route = createFileRoute("/api/send")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const result = contactSchema.safeParse(body);

          if (!result.success) {
            const { fieldErrors } = z.flattenError(result.error);
            return Response.json(
              { error: "Validation failed", details: fieldErrors },
              { status: 400 },
            );
          }

          const { name, email, message } = result.data;

          const resend = new Resend(process.env.RESEND_API_KEY);
          const { error } = await resend.emails.send({
            from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
            to: process.env.TO_EMAIL!,
            replyTo: email,
            subject: `New inquiry from ${name}`,
            react: ContactEmail({ name, email, message }),
          });

          if (error) {
            console.error("Resend error:", error);
            return Response.json(
              { error: "Failed to send email" },
              { status: 500 },
            );
          }

          return Response.json({ success: true });
        } catch (err) {
          console.error("Contact API error:", err);
          return Response.json(
            { error: "Internal server error" },
            { status: 500 },
          );
        }
      },
    },
  },
});
