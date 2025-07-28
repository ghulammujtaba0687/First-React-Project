import React from 'react'
import { Link } from 'react-router'

const AppDevelopment = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#28a745', fontSize: '2.5rem' }}>📱 App Development Services</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>
          We build innovative mobile applications that engage users and drive business success.
        </p>
      </div>

      {/* Back to Services Link */}
      <div style={{ marginBottom: '30px' }}>
        <Link 
          to="/services" 
          style={{
            display: 'inline-block',
            padding: '8px 16px',
            backgroundColor: '#6c757d',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px'
          }}
        >
          ← Back to Services
        </Link>
      </div>

      {/* Services Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
        
        {/* iOS Development */}
        <div style={{ 
          border: '1px solid #ddd', 
          borderRadius: '10px', 
          padding: '25px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#28a745', marginBottom: '15px' }}>🍎 iOS App Development</h3>
          <p>We create native iOS applications that deliver exceptional user experiences on iPhone and iPad.</p>
          <h4>Technologies:</h4>
          <ul>
            <li>Swift & SwiftUI</li>
            <li>Objective-C</li>
            <li>Xcode & iOS SDK</li>
            <li>Core Data & Core Animation</li>
            <li>ARKit for Augmented Reality</li>
            <li>App Store Optimization</li>
          </ul>
          <h4>Features:</h4>
          <ul>
            <li>Native iOS UI/UX Design</li>
            <li>Push Notifications</li>
            <li>In-App Purchases</li>
            <li>Biometric Authentication</li>
            <li>Offline Functionality</li>
          </ul>
        </div>

        {/* Android Development */}
        <div style={{ 
          border: '1px solid #ddd', 
          borderRadius: '10px', 
          padding: '25px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#28a745', marginBottom: '15px' }}>🤖 Android App Development</h3>
          <p>We develop powerful Android applications that work seamlessly across all Android devices.</p>
          <h4>Technologies:</h4>
          <ul>
            <li>Kotlin & Java</li>
            <li>Android Studio</li>
            <li>Jetpack Compose</li>
            <li>Room Database</li>
            <li>Material Design</li>
            <li>Google Play Services</li>
          </ul>
          <h4>Features:</h4>
          <ul>
            <li>Material Design UI</li>
            <li>Background Services</li>
            <li>Widgets & Shortcuts</li>
            <li>Google Maps Integration</li>
            <li>Firebase Integration</li>
          </ul>
        </div>

        {/* Cross-Platform Development */}
        <div style={{ 
          border: '1px solid #ddd', 
          borderRadius: '10px', 
          padding: '25px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#28a745', marginBottom: '15px' }}>🔄 Cross-Platform Development</h3>
          <p>We build apps that work on both iOS and Android with a single codebase, reducing development time and cost.</p>
          <h4>Frameworks:</h4>
          <ul>
            <li>React Native</li>
            <li>Flutter (Dart)</li>
            <li>Xamarin (C#)</li>
            <li>Ionic (Angular/React)</li>
            <li>PhoneGap/Cordova</li>
          </ul>
          <h4>Benefits:</h4>
          <ul>
            <li>Single Codebase</li>
            <li>Faster Development</li>
            <li>Cost-Effective</li>
            <li>Consistent UI/UX</li>
            <li>Easy Maintenance</li>
          </ul>
        </div>

      </div>






    </div>
  )
}

export default AppDevelopment 