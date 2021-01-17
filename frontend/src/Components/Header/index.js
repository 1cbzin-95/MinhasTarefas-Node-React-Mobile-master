import React from 'react';
import * as S from './styles'; 
import logo from '../../assets/logo.png';
import sino from '../../assets/bell.png';

function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt = 'logo' />
      </S.LeftSide>
      <S.RightSide>
        <a href='www.google.com'>INICIO</a>
        <span className="divisor"/>
        <a href='www.google.com'>NOVA TAREFA</a>
        <span className="divisor"/>
        <a href='www.google.com'>SINCRONIZAR CELULAR</a>
        <span className="divisor"/>
        <a href='www.google.com' id = "notification">
          <img src={sino} alt ="notificação" />
          <span>5</span>
        </a>
      </S.RightSide>
    </S.Container>
  )
}
export default Header;