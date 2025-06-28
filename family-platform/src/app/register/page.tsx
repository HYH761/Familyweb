'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { createClient } from '@/lib/supabase'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const supabase = createClient()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setError(error.message)
    } else {
      setSuccess('Registration successful! Please check your email to verify your account.')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
    }
  }

  // Styles consistent with login page
  const pageStyle: React.CSSProperties = {
    minHeight: '100vh',
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  };

  const containerStyle: React.CSSProperties = {
    width: '800px',
    height: '450px',
    display: 'flex',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
    border: '1px solid #E5E7EB',
  };
  
  const imageContainerStyle: React.CSSProperties = {
    width: '520px',
    height: '450px',
    position: 'relative',
  };

  const formContainerStyle: React.CSSProperties = {
    width: '280px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 32px',
    boxSizing: 'border-box'
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    height: '44px',
    backgroundColor: '#F3F4F6',
    border: '1px solid #F3F4F6',
    borderRadius: '6px',
    padding: '0 16px',
    fontSize: '14px',
    color: '#1F2937',
    outline: 'none',
    transition: 'box-shadow 0.2s',
    boxSizing: 'border-box',
  };

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    height: '44px',
    background: 'linear-gradient(90deg, #111827 0%, #374151 100%)',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '24px',
    transition: 'background 0.2s',
  };

  return (
    <div style={pageStyle}>
      <style jsx global>{`
        .input-focus:focus {
          box-shadow: 0 0 0 2px rgba(100, 116, 139, 0.2);
        }
        .button-hover:hover {
          background-color: #000000 !important;
        }
      `}</style>
      <div style={containerStyle}>
        <div style={imageContainerStyle}>
          <Image
              src="/KFK_8067.JPG"
              alt="Family photo"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
        </div>
        <div style={formContainerStyle}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', textAlign: 'center', marginBottom: '24px' }}>
            Create Account
          </h2>
          <form onSubmit={handleRegister}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              className="input-focus"
              required
            />
            <div style={{ marginTop: '16px' }}>
              <input
                type='password'
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
                className="input-focus"
                required
              />
            </div>
            <div style={{ marginTop: '16px' }}>
              <input
                type='password'
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={inputStyle}
                className="input-focus"
                required
              />
            </div>
            {error && <p style={{ color: 'red', fontSize: '12px', marginTop: '8px', textAlign: 'center' }}>{error}</p>}
            {success && <p style={{ color: 'green', fontSize: '12px', marginTop: '8px', textAlign: 'center' }}>{success}</p>}
            <button
              type="submit"
              style={buttonStyle}
              className="button-hover"
            >
              Register
            </button>
          </form>
          <div style={{ marginTop: '16px', textAlign: 'center', fontSize: '14px' }}>
            <Link href="/login" style={{ color: '#111', textDecoration: 'none' }}>
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 