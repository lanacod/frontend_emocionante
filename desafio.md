Desafio: Modo Caos vs. Modo Zen

  O projeto atual é puro caos visual — cores piscando a 100fps, imagem girando sem parar. Seu desafio
  é criar dois modos opostos que o usuário pode alternar com um único botão.

  ---
  Os dois modos

  Modo Caos (estado atual):
  - Fundo pisca aleatoriamente em alta velocidade
  - Imagem gira rápido

  Modo Zen:
  - Fundo faz uma transição suave entre cores, sem piscadas bruscas
  - Imagem gira devagar, quase meditativa
  - A troca entre as cores deve ser gradual, não instantânea

  ---
  Requisitos

  - Um botão visível na tela alterna entre os dois modos
  - O texto do botão reflete o modo atual (Entrar em Zen / Entrar em Caos)
  - No Modo Zen, a cor não pode mais pular — ela deve transicionar suavemente
  - A velocidade de rotação deve ser visivelmente diferente entre os modos
  - Não pode recarregar a página para trocar de modo

  ---
  Restrição importante

  Você não pode simplesmente esconder ou pausar tudo. Ambos os modos devem estar animados e visíveis —
   a diferença é a qualidade do movimento, não a ausência dele.

  ---
  Dica conceitual (sem código)

  O maior obstáculo não é o botão — é fazer as cores transitarem em vez de pularem. Pense em como você
   chegaria a uma cor intermediária entre a cor atual e a próxima.