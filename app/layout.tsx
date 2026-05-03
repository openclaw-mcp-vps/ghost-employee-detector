import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ghost Employee Detector — Find Inactive Employees Still on Payroll',
  description: 'Connects to Slack, GitHub, and email to identify employees with zero activity for 30+ days who might have quit without notice.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4f6df3a7-bf2f-4aba-8cc4-52cacf98f9b1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
