client.on('message' , msg => {
  if (msg.content === '?help'){
   msg.reply('go help your self fucker');
   console.log('success')
  }
});