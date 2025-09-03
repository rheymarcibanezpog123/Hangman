import readline from "readline";



function promp(question) {

  const rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout,

  });



  return new Promise((resolve) => {

    rl.question(question + " ", (answer) => {

      rl.close();

      resolve(answer);

    });

  });

}



export default promp;
