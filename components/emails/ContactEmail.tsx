import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

const baseUrl = "https://www.astraque.com";

export default function ContactEmail({
  name,
  email,
  message,
}: Readonly<ContactEmailProps>) {
  return (
    <Html>
      <Head />
      <Preview>New message from {name} via astraque.com</Preview>
      <Body style={body}>
        <Container style={container}>
          {/* Header with logo */}
          <Section style={header}>
            <Img
              src={`${baseUrl}/assets/logo.png`}
              width='160'
              height='40'
              alt='Astraque Softwares'
              style={logo}
            />
          </Section>

          {/* Accent bar */}
          <Section style={accentBar} />

          {/* Content */}
          <Section style={content}>
            <Heading style={heading}>New Contact Message</Heading>
            <Text style={subheading}>
              You received a new inquiry through your website.
            </Text>

            {/* Sender details card */}
            <Section style={detailsCard}>
              <Row>
                <Column style={detailLabel}>From</Column>
                <Column style={detailValue}>{name}</Column>
              </Row>
              <Hr style={detailDivider} />
              <Row>
                <Column style={detailLabel}>Email</Column>
                <Column style={detailValue}>
                  <Link href={`mailto:${email}`} style={emailLink}>
                    {email}
                  </Link>
                </Column>
              </Row>
            </Section>

            {/* Message */}
            <Text style={messageLabel}>Message</Text>
            <Section style={messageCard}>
              <Text style={messageText}>{message}</Text>
            </Section>

            {/* Quick reply CTA */}
            <Section style={ctaSection}>
              <Link
                href={`mailto:${email}?subject=Re: Your inquiry to Astraque Softwares`}
                style={ctaButton}>
                Reply to {name}
              </Link>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Hr style={footerDivider} />
            <Text style={footerText}>
              This email was sent from the contact form at{" "}
              <Link href={baseUrl} style={footerLink}>
                astraque.com
              </Link>
            </Text>
            <Text style={footerMuted}>
              &copy; {new Date().getFullYear()} Astraque Softwares. All rights
              reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

/* ─── Styles ─── */

const body: React.CSSProperties = {
  backgroundColor: "#f4f4f7",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  margin: 0,
  padding: "40px 0",
};

const container: React.CSSProperties = {
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  maxWidth: "580px",
  margin: "0 auto",
  overflow: "hidden",
  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
};

const header: React.CSSProperties = {
  backgroundColor: "#0a0a0a",
  padding: "32px 40px",
  textAlign: "center",
};

const logo: React.CSSProperties = {
  margin: "0 auto",
};

const accentBar: React.CSSProperties = {
  background: "linear-gradient(90deg, #7c3aed, #6366f1, #7c3aed)",
  height: "3px",
};

const content: React.CSSProperties = {
  padding: "36px 40px 24px",
};

const heading: React.CSSProperties = {
  color: "#0a0a0a",
  fontSize: "22px",
  fontWeight: 700,
  margin: "0 0 6px",
  lineHeight: "30px",
};

const subheading: React.CSSProperties = {
  color: "#6b7280",
  fontSize: "14px",
  margin: "0 0 28px",
  lineHeight: "22px",
};

const detailsCard: React.CSSProperties = {
  backgroundColor: "#fafafa",
  borderRadius: "8px",
  border: "1px solid #e5e7eb",
  padding: "16px 20px",
  marginBottom: "24px",
};

const detailLabel: React.CSSProperties = {
  color: "#6b7280",
  fontSize: "13px",
  fontWeight: 500,
  width: "60px",
  verticalAlign: "middle",
  paddingTop: "4px",
  paddingBottom: "4px",
};

const detailValue: React.CSSProperties = {
  color: "#111827",
  fontSize: "14px",
  fontWeight: 600,
  verticalAlign: "middle",
  paddingTop: "4px",
  paddingBottom: "4px",
};

const detailDivider: React.CSSProperties = {
  borderTop: "1px solid #e5e7eb",
  margin: "8px 0",
};

const emailLink: React.CSSProperties = {
  color: "#7c3aed",
  textDecoration: "none",
  fontWeight: 600,
};

const messageLabel: React.CSSProperties = {
  color: "#374151",
  fontSize: "13px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  margin: "0 0 8px",
};

const messageCard: React.CSSProperties = {
  backgroundColor: "#fafafa",
  borderRadius: "8px",
  border: "1px solid #e5e7eb",
  borderLeft: "3px solid #7c3aed",
  padding: "20px",
  marginBottom: "28px",
};

const messageText: React.CSSProperties = {
  color: "#1f2937",
  fontSize: "14px",
  lineHeight: "24px",
  margin: 0,
  whiteSpace: "pre-wrap",
};

const ctaSection: React.CSSProperties = {
  textAlign: "center",
  marginBottom: "12px",
};

const ctaButton: React.CSSProperties = {
  backgroundColor: "#7c3aed",
  borderRadius: "8px",
  color: "#ffffff",
  display: "inline-block",
  fontSize: "14px",
  fontWeight: 600,
  padding: "12px 32px",
  textDecoration: "none",
};

const footer: React.CSSProperties = {
  padding: "0 40px 32px",
};

const footerDivider: React.CSSProperties = {
  borderTop: "1px solid #e5e7eb",
  margin: "0 0 20px",
};

const footerText: React.CSSProperties = {
  color: "#6b7280",
  fontSize: "12px",
  lineHeight: "20px",
  margin: "0 0 4px",
  textAlign: "center",
};

const footerLink: React.CSSProperties = {
  color: "#7c3aed",
  textDecoration: "none",
};

const footerMuted: React.CSSProperties = {
  color: "#9ca3af",
  fontSize: "11px",
  lineHeight: "18px",
  margin: 0,
  textAlign: "center",
};
