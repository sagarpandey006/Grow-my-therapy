import './globals.css'
import Footer from './components/Footer'

export const metadata = {
  title: 'Dr. Serena Blake, PsyD - Clinical Psychologist in Los Angeles',
  description: 'Licensed clinical psychologist offering evidence-based therapy for anxiety, relationships, and trauma recovery. Virtual and in-person sessions available.',
  keywords: 'therapist, psychologist, anxiety, therapy, Los Angeles, trauma, relationship counseling',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Footer />
      </body>
    </html>
  )
}