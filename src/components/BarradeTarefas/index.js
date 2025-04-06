import styled from 'styled-components';

export const BarradeTarefas = styled.div`
  background: ${({ theme }) => theme.desktop.janela};
  height: 38px;
  width: 100%;
  position: fixed;
  bottom: 0;
  border-top: 2px solid #efefef;
  padding: 3px;
  z-index: 1000;

  .relogio {
    float: right;
    padding: 4px 15px 3px 35px;
    font-size: 14px;
    background: url('/img/som.png');
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 5px center;
    border-style: solid;
    border-width: 2px;
    border-top-color: #666;
    border-left-color: #666;
    border-right-color: white;
    border-bottom-color: white;
  }

  .start-btn {
    display: inline-block;
    height: 29px;
    padding-left: 31px;
    padding-right: 7px;
    text-decoration: none;
    color: black;
    line-height: 25px;
    font-weight: bold;
    cursor: pointer;
    background-image: url(/img/win98-logo.png);
    background-repeat: no-repeat;
    background-size: 22px;
    background-position: 5px center;
    background-color: ${({ theme }) => theme.desktop.janela};
    border-style: solid;
    border-width: 2px;
    border-top-color: white;
    border-left-color: white;
    border-right-color: #222;
    border-bottom-color: #222;
    &:active {
      outline: none;
      border-top-color: #222;
      border-left-color: #222;
      border-right-color: white;
      border-bottom-color: white;
    }
  }
`

export const StartMenu = styled.div`
  position: absolute;
  bottom: 38px;
  background: ${({ theme }) => theme.desktop.janela};
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  font-size: 14px;
  border-style: solid;
  border-width: 2px;
  border-top-color: white;
  border-left-color: white;
  border-right-color: #222;
  border-bottom-color: #222;

  .title-container {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 37px;
    height: 100%;
    background: ${({ theme }) => theme.desktop.titulo_janela};

    .title {
      position: absolute;
      transform: rotate(-90deg);
      color: white;
      left: -49px;
      font-size: 25px;
      font-weight: bold;

      span {
        font-weight: 100;
      }
    }
  }

  hr {
    margin: 0 4px 0 40px;
  }
  
  ul {
    a {
      text-decoration: none;
      color:inherit;
    }


    li {
      padding: 18px 100px 18px 100px;
      list-style: none;
      background-repeat: no-repeat;
      background-position: 48px center;
      background-size: 33px;
      &.windows-update {
        background-image: url('/img/winmundo.png');
      }
      &.config {
        background-image: url('/img/config.png');
      }
      &.shut-down {
        background-image: url('/img/monitor.png');
      }
      
      &:hover {
        background-color: ${({ theme }) => theme.desktop.titulo_janela};
        color: white;
        cursor: pointer;
      }
    }
  }
`
