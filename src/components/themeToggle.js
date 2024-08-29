import React from "react"
// import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { Sun } from '@styled-icons/boxicons-regular'
import { Moon } from '@styled-icons/boxicons-solid'
import { styled } from 'twin.macro'

const ModeToggle = styled('input')`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const LabelIcon = styled.label`
    cursor: pointer;
  user-select: none;
`

export default function ThemeToggle() {
    return (
      <>
      {/* {({ theme, toggleTheme }) => (
        <LabelIcon>
            <ModeToggle type="checkbox" className=""
              onChange={e => 
                toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
              />{' '}  
          
          {theme === 'dark' ? (
            <Sun size="24" className="transition-colors hover:text-yellow-500"/>
            ) : (
              <Moon size="24" className="transition-colors hover:text-violet-600" />
            )}         
        </LabelIcon>    
        
        )} */}
      </>
    )
}

// @styled-icons/boxicons-regular/Sun
// @styled-icons/boxicons-solid/Moon
// @styled-icons/entypo/Moon