// Description:
//
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//

var die = [1,2,3,4,5,6]
var eightBall = ['It is certain',
                  'It is decidedly so',
                  'Without a doubt',
                  'Yes definitely',
                  'You may rely on it',
                  'As I see it, yes',
                  'Most likely',
                  'Outlook good',
                  'Yes',
                  'Signs point to yes',
                  'Reply hazy try again',
                  'Ask again later',
                  'Better not tell you now',
                  'Cannot predict now',
                  'Concentrate and ask again',
                  "Don't count on it",
                  'My reply is no',
                  'My sources say no',
                  'Outlook not so good',
                  'Very doubtful']

module.exports = function(robot) {
  //  YOUR CODE HERE
  //  Example
   robot.hear(/roll dice/i, function(msg) {
     return msg.send('you rolled: ' + msg.random(die) + ' & ' +msg.random(die));
   });
   robot.respond(/magic 8ball/i, function(msg) {
     return msg.send(msg.random(eightBall))
   });
}







/************************************

EXAMPLES OF THE KEY HUBOT FUNCTIONS

************************************/

/* Variables for random example */

// const squirrels = ["http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg", "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png", "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png", "http://shipitsquirrel.github.com/images/squirrel.png"];

// module.exports = function(robot) {
//   /* Basic example of respond / send. If the user enters hi or hello the bot responds "Howdy!" */
//   return robot.respond(/hi|hello/i, function(msg) {
//     return msg.send("Howdy!");
//   });

//   /* Random Example
//   If a user enters 'ship it' we return a random squirrel, which is popular for symbolizing shipping something with engineers */
//   return robot.hear(/ship it/i, function(msg) {
//     return msg.send(msg.random(squirrels));
//   });
// };
