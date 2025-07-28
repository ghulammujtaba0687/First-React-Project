import React from 'react'
import './index.css'

const FooterTwo = () => {
  return (
    <>
    <footer className='footer'>
        <p>Copyright &copy; 2025 Footer Two</p>
        <p>You can contact us on <a href="mailto:info@example.com" target="_blank" rel="noopener noreferrer">info@example.com</a></p>
        <p>and <a href="tel:+919876543210">+91 9876543210</a></p>
        {/* rel="noopener"	Security: New tab ko current page ka access block karta hai
        rel="noreferrer"	Privacy: Referrer info (tumhara site ka URL) new tab ko send nahi karta */}
        <p>and <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Google</a></p> 

    </footer>
    </>
  )
}

export default FooterTwo