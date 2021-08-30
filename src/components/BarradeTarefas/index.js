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
    background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Gnome-audio-volume-high.svg/120px-Gnome-audio-volume-high.svg.png');
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
    background-image: url('https://vignette4.wikia.nocookie.net/logopedia/images/b/b3/Windows_logo_(Pre-XP)_alt._color.svg.png/revision/latest?cb=20160311145452');
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
        background-image: url('https://68.media.tumblr.com/f33cc852028056f5c3f41daa4ba007c3/tumblr_odq9qssnET1vgs7gco1_75sq.png');
      }
      &.config {
        background-image: url('https://66.media.tumblr.com/83833fe1b6ac3b482a89ff02aad3ed15/tumblr_odqaag4zd41vgs7gco9_75sq.png');
      }
      &.shut-down {
        background-image: url('https://66.media.tumblr.com/1f29d811f6e2bb3f8fbe912057fc6e58/tumblr_odqaag4zd41vgs7gco10_75sq.png');
      }
      
      &:hover {
        background-color: ${({ theme }) => theme.desktop.titulo_janela};
        color: white;
        cursor: pointer;
      }
    }
  }
`
