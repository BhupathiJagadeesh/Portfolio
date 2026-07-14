import { createFileRoute } from "@tanstack/react-router";
import { Resend } from "resend";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { name, email, project, message } = await request.json();
          const resend = new Resend(process.env.RESEND_API_KEY);

          const { data, error } = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "jagadeeshb232@gmail.com",
            subject: `New Portfolio Contact from ${name}`,
            html: `
              <h2>New Contact Request</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Project:</strong> ${project}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            `,
          });

          if (error) {
            console.error("Resend error:", error);
            return Response.json({ success: false }, { status: 500 });
          }

          console.log("Resend accepted email:", data);
          return Response.json({ success: true });
        } catch (error) {
          console.error(error);
          return Response.json({ success: false }, { status: 500 });
        }
      },
    },
  },
});