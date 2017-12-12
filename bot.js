const TeleBot = require('telebot');

const bot = new TeleBot({
    token: '509335339:AAE2N-6q7wKitgjVX6RhBkF1sBzQUHpkOw0'
});




console.log("Bot is running...");


bot.on('/start',(msg) => {
  let antwoord = {replyToMessage: msg.message_id};
  console.log("/start is aangevraagt ")
  return bot.sendMessage(msg.from.id, "Hallo welkom bij postcode checker type een postcode en de bot checkt of hij geldig is.",antwoord);
});


bot.on('/versie',(msg) => {
  let antwoord = {replyToMessage: msg.message_id};
  console.log("/versie word aangevraagt ");
  return bot.sendMessage(msg.from.id, "Dit is versie 1.5",antwoord);

});


bot.on('/maker',(msg) => {
  let antwoord = {replyToMessage: msg.message_id};
  console.log("/maker word aangevraagt ");
  return bot.sendMessage(msg.from.id, "De maker is de enige echte bilal el ayachi",antwoord);
})


bot.on(/^\/postcode (.+)/, (msg, props) => {
    let antwoord = {replyToMessage: msg.message_id};
    console.log("Postcode word aangevraagt .... ");


    const postcode = props.match[1];


    let txt = "Deze postcode is correct " + msg.from.first_name;
    let txt_n = "Deze postcode is niet correct " + msg.from.first_name;


    var karakters = {
      k1: postcode[0],
      k2: postcode[1],
      k3: postcode[2],
      k4: postcode[3],
      k5: postcode[4],
      k6: postcode[5]
    };


    var karakters_check = {
      k1: isNaN(karakters.k1),
      k2: isNaN(karakters.k2),
      k3: isNaN(karakters.k3),
      k4: isNaN(karakters.k4),
      k5: isNaN(karakters.k5),
      k6: isNaN(karakters.k6)
    }

if (postcode.length == 6) {
  if (karakters_check.k1 == false && karakters_check.k2 == false && karakters_check.k3 == false && karakters_check.k4 == false && karakters_check.k5 == true && karakters_check.k6 == true)
  {
    console.log("Deze postcode is correct " + msg.from.last_name)
    return bot.sendMessage(msg.from.id,txt,antwoord);
  }

} else if (postcode.length != 6) {
  return bot.sendMessage(msg.from.id,txt_n,antwoord);
}

console.log("Postcode is gecheckt ");
});



bot.start();
