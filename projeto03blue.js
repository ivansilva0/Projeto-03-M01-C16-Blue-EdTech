console.clear();
let prompt = require("prompt-sync")();

// ARROW FUNCTION PARA PAUSAR TEMPO DE EXECUÇÃO

const tempo = (ms) => {
  let contar = new Date().getTime();
  for (let i = 0; i < 1e7; i++) {
    if (new Date().getTime() - contar > ms) {
      break;
    }
  }
};

let jogar = true;
while (jogar == true) {
  //WHILE PARA SABER SE USUÁRIO QUER JOGAR DE NOVO OU NÃO.

  console.log(
    `Bem-vindo. Você está em um jogo de Ficção Interativa.\nNesse jogo você é um estudante de programação e tem que fazer escolhas de rotina que acarretarão em consequencias para sua vida profissional e pessoal.\n`
  );

  console.log("PRESSIONE ENTER PARA COMEÇAR");

  // VALIDAÇÃO PARA NÃO ESCREVER NADA E SÓ PRESSIONAR ENTER.

  while (prompt() != "") {
    console.log("APENAS PRESSIONE ENTER.");
  }

  console.clear();

  let nomePersonagem;

  nomePersonagem = prompt("Digite o nome do seu personagem: ");

  // VALIDAÇÃO PARA NOME DO PERSONAGEM NÃO CONTER NÚMEROS.

  while (!isNaN(nomePersonagem)) {
    console.clear();
    console.log(`!!!ATENÇÃO!!!`);
    nomePersonagem = prompt(`Digite um nome válido para seu personagem: `);
    console.clear();
  }

  console.clear();
  console.log(`Seja bem vindo ao jogo, ${nomePersonagem}.\n`);

  const status = {
    //STATUS DO USUÁRIO.
    energia: 100,
    dinheiro: 40,
    fome: 0,
    programacao: 0,
    hora: 6,
    dia: 1,

    dormir: function () {
      //FUNÇÃO PARA QUANDO O USUÁRIO ESCOLHER DORMIR.
      this.energia = 100;
      this.hora += 18;
      this.dinheiro += 20;
      this.fome += 20;
      prompt("Pressione ENTER para continuar.");
      console.clear();
    },

    trabalhar: function () {
      //FUNÇÃO PARA QUANDO O USUÁRIO ESCOLHER TRABALHAR.
      this.energia -= 20;
      this.dinheiro += 60;
      this.fome += 20;
      this.hora += 4;
      this.programacao += 1;
      let numeros = [1, 2, 3, 4, 5, 6, 7];
      let numAleatorio = numeros[Math.floor(Math.random() * 7)];
      console.log(
        "Parabéns, você trabalhou, ganhou 60,00 reais e aumentou seu nível de programação em +1. O trabalho demorou 4 horas, custou -20 de energia e +20 de fome.."
      );
      console.log();
      prompt("Pressione ENTER para continuar.");
      console.clear();

      if (numAleatorio == 3) {
        console.log(
          "QUE PENA!! Parece que no meio do trabalho você entrou em algum site duvidoso e acabou sendo hackeado. O hacker entrou em seu computador e zerou sua conta!!!"
        );
        this.dinheiro = 0;
        console.log();
        prompt("Pressione ENTER para continuar.");
        console.clear();
      }
    },

    materiaEstudar: function () {
      let materias = ["JavaScript", "HTML", "CSS", "Python", "ReactJs", "SQL"];
      for (let i = 0; i < materias.length; i++) {
        console.log(`${materias[i]} [${i + 1}]`);
      }

      console.log();
      let respostaUsuario = prompt("Qual matéria você quer estudar? ");

      while (respostaUsuario < 1 || respostaUsuario > 6) {
        console.log("RESPOSTA INVÁLIDA!!!");
        respostaMateria = prompt(
          "Qual matéria você quer estudar? "
        );
      }
      console.clear();

      if (respostaUsuario == "1") {
        this.respostaMateria = materias[0];
      } else if (respostaUsuario == "2") {
        this.respostaMateria = materias[1];
      } else if (respostaUsuario == "3") {
        this.respostaMateria = materias[2];
      } else if (respostaUsuario == "4") {
        this.respostaMateria = materias[3];
      } else if (respostaUsuario == "5") {
        this.respostaMateria = materias[4];
      } else if (respostaUsuario == "6") {
        this.respostaMateria = materias[5];
      }
      console.clear();
    },

    respostaMateria: "",

    estudar: function () {
      //FUNÇÃO PARA QUANDO O USUÁRIO ESCOLHER ESTUDAR.
      this.energia -= 20;
      this.fome += 20;
      this.programacao += 3;
      this.hora += 6;
      console.log(
        `Você estudou ${this.respostaMateria} por um período de 6 horas... Isso lhe custou -20 de energia e +20 de fome. Mas em compensação aumentou seu nível de programação em +3.`
      );
      console.log();
      prompt("Pressione ENTER para continuar.");
      console.clear();
    },

    comer: function () {
      //FUNÇÃO PARA QUANDO O USUÁRIO ESCOLHER COMER.
      this.fome = 0;
      this.hora += 2;
      this.dinheiro -= 20;
      this.energia -= 10;
      console.log(
        "Você preparou uma comida deliciosa.. Isso lhe custou 2 horas, -10 de energia e um valor total de 20,00 reais... Mas pelo menos você não tem mais fome."
      );
      console.log();
      prompt("Pressione ENTER para continuar.");
      console.clear();
    },

    descansar: function () {
      //FUNÇÃO PARA QUANDO O USUÁRIO ESCOLHER DESCANSAR.
      this.fome += 10;
      this.hora += 2;
      this.energia += 10;
      this.programacao -= 1;
      console.log(
        "Você passou 2 horas descansando sem fazer nada. Por isso você aumentou sua fome e energia em +10 e perdeu 1 nivel em programação."
      );
      console.log();
      prompt("Pressione ENTER para continuar.");
      console.clear();
    },

    mexerCelular: function () {
      //FUNÇÃO PARA QUANDO O USUÁRIO ESCOLHER MEXER NO CELULAR.
      this.energia += -10;
      this.fome += 10;
      this.hora += 2;
      this.dinheiro -= 20;
      this.programacao -= 1;
      console.log(
        "Você passou 2 horas mexendo em suas redes sociais. Por isso você aumentou sua fome em +10, diminuiu sua energia em -10 e diminuiu seu nível de programação em -1. AH... E também teve uma perda de 20,00 reais, pois precisou aumentar o limite de internet para mexer nas redes sociais."
      );
      console.log();
      prompt("Pressione ENTER para continuar.");
      console.clear();
    },
  };

  function condicoesFinais() {
    if (status.programacao > 17) {
      console.log(
        `Parabéns!!! Seu nível em programação foi: ${status.programacao}. Você se dedicou bastante e acabou se tornando um Programador Senior e conseguiu um ótimo emprego em uma grande empresa na area da Tecnologia com um salário de R$15.000,00.\n`
      );
    } else if (status.programacao > 13) {
      console.log(
        `Você se esforçou mas não tanto. Seu nível em programação foi: ${status.programacao}. Você se tornou um programador Junior e após várias entrevistas você conseguiu um emprego em uma pequena empresa da sua cidade ganhando um salário de 3.000,00 reais.\n`
      );
    } else if (status.programacao >= 6) {
      console.log(
        `Voce não se dedicou e acabou falhando. Seu nível em programação foi: ${status.programacao}. Não conseguiu se formar como Programador e agora vai ter que fazer o curso todo novamente.\n`
      );
    } else {
      console.log(
        `Seu nível de programação foi: ${status.programacao}. Você fracassou em tudo e acabou desistindo da vida de Programador.`
      );
    }
  }

  function jogarNovamente() {
    console.log('Deseja jogar novamente? Digite "s" para SIM e "n" para NÃO!');
    console.log();
    let jogarNovamente = prompt("Resposta: ").toLowerCase();
    while (jogarNovamente != "n" && jogarNovamente != "s") {
      console.log("Resposta inválida!\n");
      jogarNovamente = prompt("Digite novamente: ").toLowerCase();
    }

    if (jogarNovamente == "s") {
      true;
      console.clear();
    } else if (jogarNovamente == "n") {
      console.log("\nObrigado por jogar!");
      jogar = false;
    }
  }

  function opcao1() {
    tempo(500);
    console.log(`DORMINDO...`);
    tempo(500);
    console.log(`Z`);
    tempo(500);
    console.log(`z`);
    tempo(500);
    console.log(`Z`);
    tempo(500);
    console.log(`z`);
    tempo(500);
    console.log(`Z`);
    tempo(500);
    console.log(`z`);
    tempo(500);
    console.log(`Z`);
    console.clear();
    status.dormir();
  }

  function opcao2() {
    tempo(800);
    console.log(`TRABALHANDO...`);
    tempo(800);
    console.log(`.`);
    tempo(800);
    console.log(`.`);
    tempo(800);
    console.log(`.`);
    console.clear();
    status.trabalhar();
  }

  function opcao3() {
    console.clear();
    status.materiaEstudar();
    tempo(800);
    console.log(`ESTUDANDO ${status.respostaMateria}...`);
    tempo(800);
    console.log(`.`);
    tempo(800);
    console.log(`.`);
    tempo(800);
    console.log(`.`);
    console.clear();
    status.estudar();
  }

  function opcao4() {
    tempo(800);
    console.log(`COMENDO...`);
    tempo(800);
    console.log(`.`);
    tempo(800);
    console.log(`.`);
    tempo(800);
    console.log(`.`);
    console.clear();
    status.comer();
  }

  function opcao5() {
    tempo(800);
    console.log(`DESCANSANDO...`);
    tempo(800);
    console.log(`.`);
    tempo(800);
    console.log(`.`);
    tempo(800);
    console.log(`.`);
    console.clear();
    status.descansar();
  }

  function opcao6() {
    tempo(800);
    console.log(`MEXENDO NAS REDES SOCIAIS...`);
    tempo(800);
    console.log(`.`);
    tempo(800);
    console.log(`.`);
    tempo(800);
    console.log(`.`);
    console.clear();
    status.mexerCelular();
  }

  let dias = +prompt(
    "Digite quantos dias (1 a 5) você quer jogar. Mas pense bem, quanto mais dias, mais chances você terá para ser um grande programador:  "
  );

  // VALIDAÇÃO PARA QUANDO USUÁRIO ESCOLHER "DIAS" MENOR QUE 1 OU MAIOR QUE 10.

  while (dias < 1 || dias > 5) {
    console.log("Quantidade de dias inválida!!!");
    dias = +prompt("\nDigite quantos dias (1 a 5) você quer jogar: ");
  }

  console.clear();

  for (let i = 0; i < dias; i++) {
    // FOR PARA RODAR O PROGRAMA DE ACORDO COM OS DIAS ESCOLHIDOS PELO USUÁRIO.
    console.log(
      `Bom dia!!\nSeu ${
        i + 1
      }º dia começou.\nFaça suas escolhas, mas tome muito cuidado pois todas elas tem consequências.`
    );
    tempo(1200);
    console.log(`.`);
    tempo(1100);
    console.log(`.`);
    tempo(1200);
    console.log(`.`);
    tempo(1100);
    console.log(`.`);
    console.clear();

    while (status.hora < 24) {
      //WHILE PARA CONTAR OS DIAS SOMENTE QUANDO A HORA DO DIA CHEGAR A 24:00.
      console.log(
        `Seus status são:\nENERGIA: ${status.energia}.\nDINHEIRO: ${status.dinheiro}.\nFOME: ${status.fome}.\nNÍVEL PROGRAMAÇÃO: ${status.programacao}.\nHORARIO: ${status.hora}:00.\nDIA: ${status.dia}.`
      );
      console.log("---------------------------");
      console.log(
        `\nDORMIR [1]\nTRABALHAR [2]\nESTUDAR [3]\nCOMER [4]\nDESCANSAR [5]\nMEXER NAS REDES SOCIAIS [6]\n`
      );

      let opcao = prompt("Digite alguma dessas opçoes: ");

      // VALIDAÇÃO PARA QUANDO O USUÁRIO NÃO ESCOLHER OPÇÕES DADAS PELO PROGRAMA.

      while (
        opcao != "1" &&
        opcao != "2" &&
        opcao != "3" &&
        opcao != "4" &&
        opcao != "5" &&
        opcao != "6"
      ) {
        opcao = prompt(`RESPOSTA INVÁLIDA!!! DIGITE NOVAMENTE: `);
      }

      // VALIDAÇÃO PARA QUANDO USUÁRIO ESCOLHER TRABALHAR, ESTUDAR, COMER, DESCANSAR OU MEXER NO CELULAR FORA DO HORÁRIO.

      while (
        (opcao == "2" && status.hora > 19) ||
        (opcao == "3" && status.hora > 18) ||
        ((opcao == "4" || opcao == "5" || opcao == "6") && status.hora > 22)
      ) {
        console.log("Você não tem mais tempo para essa ação.\n");
        opcao = prompt("Escolha outra: ");
      }

      while (opcao == "1" && status.hora < 17) {
        console.log("Você não pode dormir antes das 18:00\n");
        opcao = prompt("Digite outra opção: ");
      }

      // VALIDAÇÃO PARA QUANDO A FOME ESTIVER EM 100.

      while (
        (opcao == "1" ||
          opcao == "2" ||
          opcao == "3" ||
          opcao == "5" ||
          opcao == "6") &&
        status.fome >= 100
      ) {
        console.log(
          "Você não pode escolher nenhuma opção a não ser COMER pois sua fome já está em 100 ou mais.\n"
        );
        opcao = prompt("Digite outra opção: ");
      }

      // VALIDAÇÃO PARA QUANDO ENERGIA ESTIVER EM 0.

      while (
        (opcao == "2" ||
          opcao == "3" ||
          opcao == "4" ||
          opcao == "5" ||
          opcao == "6") &&
        status.energia <= 0
      ) {
        console.log("\nVocê já esgotou sua energia.\n");
        opcao = prompt("Escolha dormir para renovar suas energias.");
      }

      // VALIDAÇÃO PARA QUANDO DINHEIRO ESTIVER EM 0.

      while ((opcao == "4" || opcao == "6") && status.dinheiro == 0) {
        console.log(
          "Você não pode escolher nenhuma dessas opções pois seu dinheiro se esgotou.\n"
        );
        opcao = prompt(
          "Escolha DORMIR ou TRABALHAR para conseguir dinheiro. Ou escolha outra opção que não tenha gastos. "
        );
      }

      if (opcao == "1") {
        opcao1();
      }

      if (opcao == "2") {
        opcao2();
      }

      if (opcao == "3") {
        opcao3();
      }

      if (opcao == "4") {
        opcao4();
      }

      if (opcao == "5") {
        opcao5();
      }

      if (opcao == "6") {
        opcao6();
      }
    }

    console.clear();
    console.log("Seu dia acabou. Hora de dormir...");
    tempo(800);
    console.log(`.`);
    tempo(800);
    console.log(`.`);
    tempo(800);
    console.log(`.`);
    console.clear();

    status.hora = 6;
    status.fome += 20;
    status.dia++;
    status.energia = 100;
  }

  condicoesFinais();

  jogarNovamente();
}