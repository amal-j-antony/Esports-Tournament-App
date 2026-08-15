import React from 'react'

function Button({children}) {
  return (
    <Button className=' py-2 px-5 bg-accent rounded-xl hover:bg-accent-foreground duration-500 cursor-pointer'>
      {children}
    </Button>
  )
}

export default Button