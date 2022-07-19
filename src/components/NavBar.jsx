import styled from '@emotion/styled'
import Typewriter from 'typewriter-effect'
import { Squash as Hamburger } from 'hamburger-react'
import { useEffect, useState } from 'react'
import { Flag } from './Flag.jsx'
import { useTranslation } from 'react-i18next'

const Bar = styled.div`
  position: absolute;
  left: 1%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  width: 98%;
  top: 10px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  align-items: center;
`

const NavHeader = styled.div`
  font-size: 1.5em; 
  font-family: 'Inconsolata', monospace;
`

const Spacer = styled.div`
  width: 20px;
`

const NavEnd = styled.div`
  margin-left: auto;
  margin-right: 10px;
`

const NavMenu = styled.div`
  position: absolute;
  background-color: rgba(1, 1, 1, 0.4);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 1px #fff;
  border-radius: 20px;
  top: 65px;
  right: 5%;
  padding: 15px 15px;
`

const Divisor = styled.div`
  box-shadow: 0 0 1px #fff;
  height: 1px;
  width: 100%;
`

const FlagSelector = styled.div`
  display: grid;
  grid-auto-flow: column;
  row-span: 1;
  gap: 20px;
  padding-top: 15px;
  img {
    height: 16px;
  }
`

export function NavBar() {
  const [isOpen, setOpen] = useState(false)
  const [language, setLanguage] = useState('')
  const { i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(language).then(r => r)
  }, [language])

  return <Bar>
    <Spacer />
    <NavHeader>
      <Typewriter
        onInit={(ts) => {
          ts.typeString('@lyricalsoul?')
            .pauseFor(1000).deleteAll()
            .typeString('@mcthaa?')
            .pauseFor(1000).deleteAll()
            .typeString('@kuntmermaid?')
            .pauseFor(1000).deleteAll()
            .typeString('blueslimee.')
            .pauseFor(5)
            .callFunction((state) => {
              state.elements.cursor.style.display = 'none'
            })
            .start()
        }}
      />
    </NavHeader>
    <NavEnd>
      <Hamburger toggled={isOpen} toggle={setOpen} size={25}/>
    </NavEnd>
    {isOpen ? (
      <NavMenu>
        <p>cu e bceta</p>
        <Divisor />
        <FlagSelector>
          <Flag country={'us'} set={setLanguage} language={i18n.language} code={'en-US'} />
          <Flag country={'br'} set={setLanguage} language={i18n.language} code={'pt-BR'} />
          <Flag country={'ru'} set={setLanguage} language={i18n.language} code={'ru'} />
        </FlagSelector>
      </NavMenu>
    ) : ''}
  </Bar>
}
