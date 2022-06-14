const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let score = 0;

const play = () => {
    var resultBot = Math.floor(Math.random() * 6) + 1;
    rl.question('Pick number from 1 to 6: ', (answer) => {
        if(answer < 1 || answer > 6){
            console.log('Please pick 1 to 6 \nEnter to continue...')
            rl.resume()
        } else {
            if(answer == resultBot){
                score += 2;
            } else if(answer == resultBot-1 || answer == resultBot+1){
                score += 1;
            } else {
                score += 0;
            }
            console.log(`Your score: ${score}`+'\nEnter to continue')
        }
    })
}

rl.setPrompt('Press (1) to play or ctrl+C to exit: ')
rl.prompt();
rl.on('line', choice => {
    if(choice == 1){
        play();
    }
    rl.prompt();
}).on('close', () => {
    console.log('\nHave a great day!');
    process.exit(0);
});
