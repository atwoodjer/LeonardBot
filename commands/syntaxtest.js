module.exports = {
    name: 'syntaxtest',
    help: 'gives a syntax test sentence. Add "list" as an argument to get the full list.',
    process: function (client, message, args) {
      if(args == "list") {
       message.reply("<http://pastebin.com/raw/BpfjThwA>")
     } else {

      var sentence = randomArray([
        "**1**. The sun shines.",
        "**2**. The sun is shining.",
        "**3**. The sun shone.",
        "**4**. The sun will shine.",
        "**5**. The sun has been shining.",
        "**6**. The sun is shining again.",
        "**7**. The sun will shine tomorrow.",
        "**8.** The sun shines brightly.",
        "**9.** The bright sun shines.",
        "**10.** The sun is rising now.",
        "**11.** All the people shouted.",
        "**12.** Some of the people shouted.",
        "**13.** Many of the people shouted twice.",
        "**14.** Happy people often shout.",
        "**15.** The kitten jumped up.",
        "**16.** The kitten jumped onto the table.",
        "**17.** My little kitten walked away.",
        "**18.** It's raining.",
        "**19.** The rain came down.",
        "**20.** The kitten is playing in the rain.",
        "**21.** The rain has stopped.",
        "**22.** Soon the rain will stop.",
        "**23.** I hope the rain stops soon.",
        "**24.** Once wild animals lived here.",
        "**25.** Slowly she looked around.",
        "**26.** Go away!",
        "**27.** Let's go!",
        "**28.** You should go.",
        "**29.** I will be happy to go.",
        "**30.** He will arrive soon.",
        "**31.** The baby's ball has rolled away.",
        "**32.** The two boys are working together.",
        "**33.** This mist will probably clear away.",
        "**34.** Lovely flowers are growing everywhere.",
        "**35.** We should eat more slowly.",
        "**36.** You have come too soon.",
        "**37.** You must write more neatly.",
        "**38.** Directly opposite stands a wonderful palace.",
        "**39.** Henry's dog is lost.",
        "**40.** My cat is black.",
        "**41.** The little girl's doll is broken.",
        "**42.** I usually sleep soundly.",
        "**43.** The children ran after Jack.",
        "**44.** I can play after school.",
        "**45.** We went to the village for a visit.",
        "**46.** We arrived at the river.",
        "**47.** I have been waiting for you.",
        "**48.** The campers sat around the fire.",
        "**49.** A little girl with a kitten sat near me.",
        "**50.** The child waited at the door for her father.",
        "**51.** Yesterday the oldest girl in the village lost her kitten.",
        "**52.** Were you born in this village?",
        "**53.** Can your brother dance well?",
        "**54.** Did the man leave?",
        "**55.** Is your sister coming for you?",
        "**56.** Can you come tomorrow?",
        "**57.** Have the neighbors gone away for the winter?",
        "**58.** Does the robin sing in the rain?",
        "**59.** Are you going with us to the concert?",
        "**60.** Have you ever travelled in the jungle?",
        "**61.** We sailed down the river for several miles.",
        "**62.** Everybody knows about hunting.",
        "**63.** On a Sunny morning after the solstice we started for the mountains.",
        "**64.** Tom laughed at the monkey's tricks.",
        "**65.** An old man with a walking stick stood beside the fence.",
        "**66.** The squirrel's nest was hidden by drooping boughs.",
        "**67.** The little seeds waited patiently under the snow for the warm spring sun.",
        "**68.** Many little girls with wreaths of flowers on their heads danced around the bonfire.",
        "**69.** The cover of the basket fell to the floor.",
        "**70.** The first boy in the line stopped at the entrance.",
        "**71.** On the top of the hill in a little hut lived a wise old woman.",
        "**72.** During our residence in the country we often walked in the pastures.",
        "**73.** When will your guests from the city arrive?",
        "**74.** Near the mouth of the river, its course turns sharply towards the East.",
        "**75.** Between the two lofty mountains lay a fertile valley.",
        "**76.** Among the wheat grew tall red poppies.",
        "**77.** The strong roots of the oak trees were torn from the ground.",
        "**78.** The sun looked down through the branches upon the children at play.",
        "**79.** The west wind blew across my face like a friendly caress.",
        "**80.** The spool of thread rolled across the floor.",
        "**81.** A box of growing plants stood in the Window.",
        "**82.** I am very happy.",
        "**83.** These oranges are juicy.",
        "**84.** Sea water is salty.",
        "**85.** The streets are full of people.",
        "**86.** Sugar tastes sweet.",
        "**87.** The fire feels hot.",
        "**88.** The little girl seemed lonely.",
        "**89.** The little boy's father had once been a sailor.",
        "**90.** I have lost my blanket.",
        "**91.** A robin has built his nest in the apple tree.",
        "**92.** At noon we ate our lunch by the roadside.",
        "**93.** Mr. Jones made a knife for his little boy.",
        "**94.** Their voices sound very happy.",
        "**95.** Is today Monday?",
        "**96.** Have all the leaves fallen from the tree?",
        "**97.** Will you be ready on time?",
        "**98.** Will you send this message for me?",
        "**99.** Are you waiting for me?",
        "**100.** Is this the first kitten of the litter?",
        "**101.** Are these shoes too big for you?",
        "**102.** How wide is the River?",
        "**103.** Listen.",
        "**104.** Sit here by me.",
        "**105.** Keep this secret until tomorrow.",
        "**106.** Come with us.",
        "**107.** Bring your friends with you.",
        "**108.** Be careful.",
        "**109.** Have some tea.",
        "**110.** Pip and his dog were great friends.",
        "**111.** John and Elizabeth are brother and sister.",
        "**112.** You and I will go together.",
        "**113.** They opened all the doors and windows.",
        "**114.** He is small, but strong.",
        "**115.** Is this tree an oak or a maple?",
        "**116.** Does the sky look blue or gray?",
        "**117.** Come with your father or mother.",
        "**118.** I am tired, but very happy.",
        "**119.** He played a tune on his wonderful flute.",
        "**120.** Toward the end of August the days grow much shorter.",
        "**121.** A company of soldiers marched over the hill and across the meadow.",
        "**122.** The first part of the story is very interesting.",
        "**123.** The crow dropped some pebbles into the pitcher and raised the water to the brim.",
        "**124.** The baby clapped her hands and laughed in glee.",
        "**125.** Stop your game and be quiet.",
        "**126.** The sound of the drums grew louder and louder.",
        "**127.** Do you like summer or winter better?",
        "**128.** That boy will have a wonderful trip.",
        "**129.** They popped corn, and then sat around the fire and ate it.",
        "**130.** They won the first two games, but lost the last one.",
        "**131.** Take this note, carry it to your mother; and wait for an answer.",
        "**132.** I awoke early, dressed hastily, and went down to breakfast.",
        "**133.** Aha! I have caught you!",
        "**134.** This string is too short!",
        "**135.** Oh, dear! the wind has blown my hat away!",
        "**136.** Alas! that news is sad indeed!",
        "**137.** Whew! that cold wind freezes my nose!",
        "**138.** Are you warm enough now?",
        "**139.** They heard the warning too late.",
        "**140.** We are a brave people, and love our country.",
        "**141.** All the children came except Mary.",
        "**142.** Jack seized a handful of pebbles and threw them into the lake.",
        "**143.** This cottage stood on a low hill, at some distance from the village.",
        "**144.** On a fine summer evening, the two old people were sitting outside the door of their cottage.",
        "**145.** Our bird's name is Jacko.",
        "**146.** The river knows the way to the sea.",
        "**147.** The boat sails away, like a bird on the wing.",
        "**148.** They looked cautiously about, but saw nothing.",
        "**149.** The little house had three rooms, a sitting room, a bedroom, and a tiny kitchen.",
        "**150.** We visited my uncle's village, the largest village in the world.",
        "**151.** We learn something new each day.",
        "**152.** The market begins five minutes earlier this week.",
        "**153.** Did you find the distance too great?",
        "**154.** Hurry, children.",
        "**155.** Madam, I will obey your command.",
        "**156.** Here under this tree they gave their guests a splendid feast.",
        "**157.** In winter I get up at night, and dress by yellow candlelight.",
        "**158.** Tell the last part of that story again.",
        "**159.** Be quick or you will be too late.",
        "**160.** Will you go with us or wait here?",
        "**161.** She was always, shabby, often ragged, and on cold days very uncomfortable.",
        "**162.** Think first and then act.",
        "**163.** I stood, a little mite of a girl, upon a chair by the window, and watched the falling snowflakes.",
        "**164.** Show the guests these shells, my son, and tell them their strange history.",
        "**165.** Be satisfied with nothing but your best.",
        "**166.** We consider them our faithful friends.",
        "**167.** We will make this place our home.",
        "**168.** The squirrels make their nests warm and snug with soft moss and leaves.",
        "**169.** The little girl made the doll's dress herself.",
        "**170.** I hurt myself.",
        "**171.** She was talking to herself.",
        "**172.** He proved himself trustworthy.",
        "**173.** We could see ourselves in the water.",
        "**174.** Do it yourself.",
        "**175.** I feel ashamed of myself.",
        "**176.** Sit here by yourself.",
        "**177.** The dress of the little princess was embroidered with roses, the national flower of the Country.",
        "**178.** They wore red caps, the symbol of liberty.",
        "**179.** With him as our protector, we fear no danger.",
        "**180.** All her finery, lace, ribbons, and feathers, was packed away in a trunk.",
        "**181.** Light he thought her, like a feather.",
        "**182.** Every spring and fall our cousins pay us a long visit.",
        "**183.** In our climate the grass remains green all winter.",
        "**184.** The boy who brought the book has gone.",
        "**185.** These are the flowers that you ordered.",
        "**186.** I have lost the book that you gave me.",
        "**187.** The fisherman who owned the boat now demanded payment.",
        "**188.** Come when you are called.",
        "**189.** I shall stay at home if it rains.",
        "**190.** When he saw me, he stopped.",
        "**191.** Do not laugh at me because I seem so absent minded.",
        "**192.** I shall lend you the books that you need.",
        "**193.** Come early next Monday if you can.",
        "**194.** If you come early, wait in the hall.",
        "**195.** I had a younger brother whose name was Antonio.",
        "**196.** Gnomes are little men who live under the ground.",
        "**197.** He is loved by everybody, because he has a gentle disposition.",
        "**198.** Hold the horse while I run and get my cap.",
        "**199.** I have found the ring I lost.",
        "**200.** Play and I will sing.",
        "**201.** That is the funniest story I ever heard.",
        "**202.** She is taller than her brother.",
        "**203.** They are no wiser than we.",
        "**204.** Light travels faster than sound.",
        "**205.** We have more time than they.",
        "**206.** She has more friends than enemies.",
        "**207.** He was very poor, and with his wife and five children lived in a little low cabin of logs and stones.",
        "**208.** When the wind blew, the traveler wrapped his mantle more closely around him.",
        "**209.** I am sure that we can go.",
        "**210.** We went back to the place where we saw the roses.",
        "**211.** This tree is fifty feet high, said the gardener.",
        "**212.** I think that this train leaves five minutes earlier today.",
        "**213.** My opinion is that the governor will grant him a pardon.",
        "**214.** Why he has left the city is a mystery.",
        "**215.** The house stands where three roads meet.",
        "**216.** He has far more money than brains.",
        "**217.** Evidently that gate is never opened, for the long grass and the great hemlocks grow close against it.",
        "**218.** I met a little cottage girl; she was eight years old, she said."
      ]);

      message.channel.sendMessage(sentence);
    }

    }


};


function randomArray(arr) {
  var ret;
  if (arr.length > 0) {
    ret = arr[Math.floor(Math.random() * arr.length)];
  } else {
    ret = null;
  }
  return ret;
}
