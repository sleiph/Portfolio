import styled from 'styled-components';

const AreadeTrabalho = styled.div`
  background: ${({ theme }) => theme.desktop.fundo};
  height: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

const BarradeTarefas = styled.div`
  background: ${({ theme }) => theme.desktop.janela};
  height: 38px;
  width: 100%;
  position: fixed;
  bottom: 0;
  border-top: 2px solid #efefef;
  padding: 3px;
  z-index: 1000;

  .relogio {
    @include border-color(2px solid #666, 2px solid white);
    float: right;
    padding: 5px 15px 5px 35px;
    font-size: 14px;
    background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Gnome-audio-volume-high.svg/120px-Gnome-audio-volume-high.svg.png');
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 5px center;
  }

  .start-btn {
    display: inline-block;
    text-decoration: none;
    color: black;
    line-height: 25px;
    font-weight: bold;
    padding-left: 31px;
    padding-right: 7px;
    height: 29px;
    background-image: url('http://vignette4.wikia.nocookie.net/logopedia/images/b/b3/Windows_logo_(Pre-XP)_alt._color.svg.png/revision/latest?cb=20160311145452');
    background-repeat: no-repeat;
    background-size: 22px;
    background-position: 5px center;
    background-color: ${({ theme }) => theme.desktop.janela};
    @include border-color(2px solid white, 2px solid #222);
    &:active {
      outline: none;
      @include border-color(2px solid #222, 2px solid white);
    }
  }
`

const StartMenu = styled.div`
  position: absolute;
  bottom: 38px;
  background: ${({ theme }) => theme.desktop.janela};
  @include border-color(2px solid white, 2px solid #222);
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  font-size: 14px;
  display: none;
  &.open {
    display: block;
  }
  .title-container {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 37px;
    height: 100%;
    background: linear-gradient( #000184 60%, #0f80cd);
    .title {
      position: absolute;
      transform: rotate(-90deg);
      color: white;
      top: 430px;
      left: -51px;
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
    margin: 0;
    padding: 0;
    li {
      padding: 18px 100px 18px 100px;
      list-style: none;
      background-repeat: no-repeat;
      background-position: 48px center;
      background-size: 33px;
      &.windows-update {
        background-image: url('https://68.media.tumblr.com/f33cc852028056f5c3f41daa4ba007c3/tumblr_odq9qssnET1vgs7gco1_75sq.png');
      }
      &.programs {
        background-image: url('https://66.media.tumblr.com/49ed6c0ebac47753e08e85c230d97d03/tumblr_odqaag4zd41vgs7gco2_75sq.png');
      }
      &.favorites {
        background-image: url('https://66.media.tumblr.com/2d4a1593f0a13df6d507304708e11a7f/tumblr_odqaag4zd41vgs7gco1_75sq.png');
      }
      &.documents {
        background-image: url('https://66.media.tumblr.com/6ee194172c15584561b951ff258d9d1d/tumblr_odqaag4zd41vgs7gco3_75sq.png');
      }
      &.settings {
        background-image: url('https://66.media.tumblr.com/83833fe1b6ac3b482a89ff02aad3ed15/tumblr_odqaag4zd41vgs7gco9_75sq.png');
      }
      &.find {
        background-image: url('https://68.media.tumblr.com/d4f271116e0f67b79c64f2a1aac6488e/tumblr_odqaag4zd41vgs7gco8_75sq.png');
      }
      &.help {
        background-image: url('https://67.media.tumblr.com/f269281536842a64ec1a35479ca8fdd3/tumblr_odqaag4zd41vgs7gco5_75sq.png');
      }
      &.run {
        background-image: url('https://66.media.tumblr.com/4ff9a932e9ba9b4736ddc63fae12b4fb/tumblr_odqay8HODs1vgs7gco1_75sq.png');
      }
      &.log-off {
        background-image: url('https://66.media.tumblr.com/1439f4d5c4bd20dcf6b98916a7cfb24e/tumblr_odqaag4zd41vgs7gco6_75sq.png');
      }
      &.shut-down {
        background-image: url('https://66.media.tumblr.com/1f29d811f6e2bb3f8fbe912057fc6e58/tumblr_odqaag4zd41vgs7gco10_75sq.png');
      }
      
      &:hover {
        background-color: ${({ theme }) => theme.desktop.azul_windows};
        color: white;
        cursor: pointer;
      }
    }
  }
`

const Icones = styled.div`
  margin: 20px;
  text-align: center;
  width: 100px;

  #meus-documentos {
    width: 100px;
    img {
      max-width: 100%;
      padding-left: 25px;
      padding-right: 25px;
    }
  }
`

const Icone = styled.div`
  display: block;
  margin-bottom: 20px;
  width: 48px;

  img {
    display: block;
    margin: 5px auto;
    width: 100%;
  }

  p {
    color: rgba(white, .8);
    font-size: 12px;
    margin: 0;
  }

`

export default function Desktop( {artigos} ) {
  return (
    <AreadeTrabalho>
      <Icones>
        {artigos.map((artigo) => {
          return (
            <Icone id={artigo.nome+'icone'}>
              <img src={artigo.icone} alt="" />
              <p>{artigo.nome}</p>
            </Icone>
          )
        })}
      </Icones>

      <BarradeTarefas>
        <a className="start-btn" href="#0">Start</a>
        <div className="relogio">
          4:20PM
        </div>
        <StartMenu>
          <div className="title-container">
            <div className="title">Windows<span>98</span></div>
          </div>
          <ul>
            <li className="windows-update">Windows Update</li>
            <hr />
            <li className="programs">Programs</li>
            <li className="favorites">Favorites</li>
            <li className="documents">Documents</li>
            <li className="settings">Settings</li>
            <li className="find">Find</li>
            <li className="help">Help</li>
            <li className="run">Run...</li>
            <hr />
            <li className="log-off ok">Log Off</li>
            <li className="shut-down ok">Shut Down...</li>
          </ul>
        </StartMenu>
      </BarradeTarefas>
    </AreadeTrabalho>
  )
}