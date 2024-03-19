import React from 'react'

const layout = ({ children }) => {
  return (
    <html lang='pt-br'>
      <body className='bg-slate-500 h-screen w-screen'>
        {children}
      </body>
    </html>
  )
}

export default layout