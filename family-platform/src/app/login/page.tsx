'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'

export default function Page() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    // 这里假设 username 就是 email
    const { error } = await supabase.auth.signInWithPassword({
      email: username,
      password,
    })
    if (error) {
      setError(error.message)
    } else {
      router.push('/')
    }
  }

  // Styles for pixel-perfect control
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

  const windowControlsStyle: React.CSSProperties = {
    position: 'absolute',
    top: '12px',
    right: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'monospace',
    color: '#9CA3AF',
  };

  return (
    <div style={pageStyle}>
      <style jsx global>{`
        .input-focus:focus {
          box-shadow: 0 0 0 2px rgba(100, 116, 139, 0.2);
        }
        .button-hover:hover {
          background: linear-gradient(90deg, #000000 0%, #374151 100%) !important;
        }
      `}</style>
      <div style={containerStyle}>
        {/* Window controls */}
        <div style={windowControlsStyle}>
          <span className="hover:text-gray-800 cursor-pointer">—</span>
          <span className="hover:text-gray-800 cursor-pointer">□</span>
          <span className="hover:text-gray-800 cursor-pointer">×</span>
        </div>
        {/* Left - Family photo */}
        <div style={imageContainerStyle}>
          <Image
              src="/KFK_8067.JPG"
              alt="Family photo"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'white', fontSize: '16px', textShadow: '0 1px 5px rgba(0,0,0,0.5)' }}>
            "Time Dock"
          </div>
        </div>
        {/* Right - Login form */}
        <div style={formContainerStyle}>
          <div style={{ marginBottom: '32px', textAlign: 'center' }}>
            <Image
              src="/V0.1.1.webp"
              alt="Family Web Logo"
              width={216}
              height={27}
              priority
            />
          </div>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={inputStyle}
              className="input-focus"
            />
            <div style={{ position: 'relative', marginTop: '16px' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ ...inputStyle, paddingRight: '45px' }}
                className="input-focus"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF' }}
                className="hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {error && <p style={{ color: 'red', fontSize: '12px', marginTop: '8px', textAlign: 'center' }}>{error}</p>}
            <button
              type="submit"
              style={buttonStyle}
              className="button-hover"
            >
              LOGIN
            </button>
          </form>
          <div style={{ marginTop: '16px', textAlign: 'center', fontSize: '14px' }}>
            <Link href="/register" style={{ color: '#111', textDecoration: 'none' }}>
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 