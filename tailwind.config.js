module.exports = {
    theme: {
      extend: {
          animation: {
        'fade-in-down': 'fadeInDown 0.4s ease-out',
        'fade-out-up': 'fadeOutUp 0.4s ease-in',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-20%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeOutUp: {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(-20%)' },
        },
      },
        fontSize: {
          '2xs': '0.625rem',   // 10px (se não existir no padrão)
          'md':   '1rem'     // 16px (se não existir no padrão)
        },
      },
    },
    plugins: [],
  }
