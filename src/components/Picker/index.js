import { useRef } from 'react';
import { useRouter } from 'next/router';
import Draggable from 'react-draggable';
import { theme } from '../../../pages/_app';
import styles from './Picker.module.css';
import configStyles from '../Config/Config.module.css';
import stylesJanela from '../Janela/Janela.module.css';

export default function Picker(propriedades) {

    const router = useRouter();
    const nodeRef = useRef('picker');

    const nomeRota = 'picker';

    const cores = [
        'ff8080',
        'ffff80',
        '80ff80',
        '00ff80',
        '80ffff',
        '0080ff',
        'ff80c0',
        'ff80ff',

        'ff0000',
        'ffff00',
        '80ff00',
        '00ff40',
        '00ffff',
        '0080c0',
        '8080c0',
        'ff00ff',

        '804040',
        'ff8040',
        '00ff00',
        '008080',
        '004080',
        '8080ff',
        '800040',
        'ff0080',

        '800000',
        'ff8000',
        '008000',
        '008040',
        '0000ff',
        '0000a0',
        '800080',
        '8000ff',

        '400000',
        '804000',
        '004000',
        '004040',
        '000080',
        '000040',
        '400040',
        '400080',

        '000000',
        '808000',
        '808040',
        '808080',
        '408080',
        'c0c0c0',
        '804080',
        'ffffff'
    ]

    const mudaCorBackground = (hex) => {
        theme.desktop.fundo = hex;
        document.documentElement.style.setProperty('--fundo', hex);
    }

    //todo: tem uma funcao igual na janela/index.js
    const fecharJanela = () => {
        let caminho = router.asPath.replace('/' + nomeRota, '');
        if (caminho === '')
            caminho = '/home';
        router.replace(`${caminho}`);
    }

    //todo: tem uma funcao igual na janela/index.js
    const ordenaJanela = () => {
        var caminho = router.asPath;
        caminho = caminho.replace('/' + nomeRota, '');
        caminho += '/' + nomeRota;
        router.push(`${caminho}`);
    }

    return (
    <Draggable
      handle=".head"
      positionOffset={{x: '-50%', y: '-50%'}}
      nodeRef={nodeRef}
      cancel=".fechar"
    >
      <div className={stylesJanela.janeladiv} id='picker' ref={nodeRef} >
          
        <div className={stylesJanela.titulodiv + ' head'}>
          <div className={stylesJanela.icone}>
            <img src='/img/config.png' alt="icone do picker de cores" />
          </div>
          <div className={stylesJanela.fechar + " fechar"}>
            <button onClick={fecharJanela}>
              &#10006;
            </button>
          </div>
          <div className={stylesJanela.titulo} onClick={ordenaJanela}>
            Cores
          </div>
        </div>

        <div className={configStyles.conteudodiv}>
          <div className={configStyles.campodiv} >
            <h5>Cores Padrão:</h5>

            <div id={styles.gridpicker}>
                {Object.values(cores).map((cor) => {
                    return (
                        <div key={'picker_' + cor} className={styles.cor} style={{backgroundColor: '#'+cor}} onClick={() => mudaCorBackground('#'+cor)}></div>
                    )
                })}
            </div>

          </div>
        </div>

      </div>
    </Draggable>
  )
}
