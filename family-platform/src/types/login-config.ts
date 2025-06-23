// 登录页面配置的完整类型定义
export interface LoginPageConfig {
  page: {
    title: string
    meta: {
      description: string
      keywords: string
    }
    layout: {
      type: 'centered' | 'fullscreen' | 'split'
      maxWidth: string
      minHeight: string
      padding: {
        mobile: string
        desktop: string
      }
    }
    background: {
      type: 'gradient' | 'solid' | 'image'
      colors: string[]
      direction: string
      fallback: string
    }
  }
  
  container: {
    style: {
      background: string
      backdropFilter: string
      borderRadius: string
      border: string
      boxShadow: string
      padding: string
    }
    animation: {
      entrance: {
        type: string
        duration: string
        delay: string
      }
    }
  }
  
  header: {
    logo: {
      type: 'icon' | 'image' | 'text'
      icon: string
      background: {
        type: 'gradient' | 'solid'
        colors: string[]
        direction: string
      }
      size: string
      borderRadius: string
      color: string
      shadow: string
    }
    title: {
      text: string
      fontSize: string
      fontWeight: string
      color: string
      marginTop: string
      textAlign: 'left' | 'center' | 'right'
    }
    subtitle: {
      text: string
      fontSize: string
      fontWeight: string
      color: string
      marginTop: string
      textAlign: 'left' | 'center' | 'right'
    }
  }
  
  form: {
    spacing: string
    marginTop: string
    fields: FormField[]
  }
  
  options: {
    rememberMe: {
      enabled: boolean
      label: string
      defaultChecked: boolean
      position: 'left' | 'right'
    }
    forgotPassword: {
      enabled: boolean
      text: string
      link: string
      position: 'left' | 'right'
      style: {
        color: string
        fontSize: string
        fontWeight: string
      }
    }
  }
  
  buttons: {
    primary: {
      text: string
      type: 'submit' | 'button'
      style: ButtonStyle
      loading: {
        enabled: boolean
        text: string
        spinner: boolean
      }
    }
  }
  
  divider: {
    enabled: boolean
    text: string
    style: {
      marginTop: string
      marginBottom: string
      color: string
      fontSize: string
    }
  }
  
  socialLogin: {
    enabled: boolean
    providers: SocialProvider[]
  }
  
  footer: {
    register: {
      enabled: boolean
      text: string
      linkText: string
      link: string
      style: {
        textAlign: 'left' | 'center' | 'right'
        marginTop: string
        fontSize: string
        color: string
      }
      linkStyle: {
        color: string
        fontWeight: string
        textDecoration: string
      }
    }
    terms: {
      enabled: boolean
      text: string
      links: Array<{
        text: string
        url: string
      }>
      style: {
        textAlign: 'left' | 'center' | 'right'
        marginTop: string
        fontSize: string
        color: string
      }
    }
  }
  
  navigation: {
    backToHome: {
      enabled: boolean
      text: string
      link: string
      icon: string
      position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
      style: {
        position: string
        top: string
        left: string
        color: string
        fontSize: string
        fontWeight: string
        display: string
        alignItems: string
        gap: string
        textDecoration: string
        hover: {
          color: string
        }
      }
    }
  }
  
  responsive: {
    breakpoints: {
      mobile: string
      tablet: string
      desktop: string
    }
    mobile: {
      container: {
        padding: string
        borderRadius: string
      }
      navigation: {
        backToHome: {
          text: string
          showIconOnly: boolean
        }
      }
    }
  }
  
  animations: {
    pageEnter: {
      type: string
      duration: string
    }
    formFieldFocus: {
      type: string
      scale: string
      duration: string
    }
    buttonHover: {
      type: string
      translateY: string
      duration: string
    }
  }
  
  accessibility: {
    focusVisible: boolean
    highContrast: boolean
    fontSize: {
      scalable: boolean
      min: string
      max: string
    }
    screenReader: {
      enabled: boolean
      labels: {
        form: string
        emailField: string
        passwordField: string
        submitButton: string
        togglePassword: string
      }
    }
  }
}

// 表单字段类型
export interface FormField {
  id: string
  type: 'email' | 'password' | 'text' | 'tel' | 'number'
  label: string
  placeholder: string
  required: boolean
  icon: string
  showToggle?: boolean
  validation: {
    type?: 'email' | 'phone' | 'custom'
    minLength?: number
    maxLength?: number
    pattern?: string
    message: string
  }
  style: {
    height: string
    borderRadius: string
    border: string
    background: string
    paddingLeft: string
    paddingRight: string
    fontSize: string
    color: string
    focusBorder: string
    focusRing: string
  }
}

// 按钮样式类型
export interface ButtonStyle {
  width: string
  height: string
  borderRadius: string
  background: string
  color: string
  fontSize: string
  fontWeight: string
  border: string
  boxShadow: string
  cursor: string
  transition: string
  hover: {
    background: string
    transform: string
    boxShadow: string
  }
}

// 社交登录提供商类型
export interface SocialProvider {
  id: string
  name: string
  icon: string
  style: {
    width: string
    height: string
    borderRadius: string
    border: string
    background: string
    color: string
    fontSize: string
    fontWeight: string
    display: string
    alignItems: string
    justifyContent: string
    gap: string
    hover: {
      background: string
    }
  }
}

// 主题预设类型
export interface ThemePreset {
  name: string
  colors: {
    primary: string[]
    background: string[]
    text: {
      primary: string
      secondary: string
      muted: string
    }
  }
  typography: {
    fontFamily: string
    fontSize: {
      small: string
      medium: string
      large: string
    }
  }
  spacing: {
    small: string
    medium: string
    large: string
  }
  borderRadius: {
    small: string
    medium: string
    large: string
  }
}

// 配置验证函数类型
export type ConfigValidator = (config: LoginPageConfig) => {
  isValid: boolean
  errors: string[]
}

// 配置转换函数类型
export type ConfigTransformer = (config: LoginPageConfig) => LoginPageConfig 