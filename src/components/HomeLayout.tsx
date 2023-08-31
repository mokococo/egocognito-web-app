import { css } from '@styled-system/css'
import React from 'react'

const HomeLayout = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <div className={css({
    fontSize: '150px',
    fontWeight: 'bold',
    backgroundColor: 'yellow.300',
    height: '50vh',
  })}
  >
    {children}
  </div>
)

export default HomeLayout
