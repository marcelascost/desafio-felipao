class heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    ataque() {
      let ataques = "";
      switch(this.tipo){
        case "mago": ataques = "magia";break
        case "guerreiro": ataques = "espada";break
        case "monge": ataques = "artes marciais";break
        case "ninja": ataques = "shuriken";break
      };
      console.log(`O ${this.tipo} atacou usando ${ataques}`);
    }
  }

  const bonecos = [
    new heroi("Merlin", 92, "mago"),
    new heroi("Napoleão", 51, "guerreiro"),
    new heroi("Dalai", 87, "monge"),
    new heroi("Naruto", 17, "ninja"),
  ];

  function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];   
  
    }
  }
  
  embaralhar(bonecos);
  
  bonecos.forEach(heroi => {
    heroi.ataque();
  });