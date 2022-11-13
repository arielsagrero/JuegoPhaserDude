import Phaser from 'phaser';
import { useEffect, useState } from 'react';
import Escena from './components/Escena';

export default function Game() {

  
  //uso state de una variable listo, si no usamos esto los lienzos se acumularan en la vista
  const [listo, setListo] = useState(false);

  //usamos el hook para que renderice acciones que react no hace
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 100 },
          debug: false
        }
      },
      scene:[Escena]
    };

    // arranca el juego
    const game = new Phaser.Game(config);

    //Trigger cuando el juego esta completamente listo
    game.events.on("LISTO", setListo)

    // Si no pongo esto, se acumulan duplicados del lienzo
    return () => {
      setListo(false);
      game.destroy(true);
    }

  }, [listo]);
  

};