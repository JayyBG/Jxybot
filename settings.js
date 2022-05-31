//═══════════════════════════════════════════════════════//
//
//          ꧁༺Jxybot by Jay ༻꧂
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['+31 6 37193432']
global.premium = ['+31 6 37193432']
global.ownernomer = '+31 6 37193432'
global.ownername = '🐦 Jxyy'
global.botname = 'Jxyy-bot'
global.footer = '©jxyytf'
global.ig = 'https://github.com/JayyBG'
global.region = 'Weesp, The Netherlands'
global.sc = 'https://github.com/JayyBG/Jxy'
global.myweb = 'https://withkoji.com/@jxy'
global.packname = 'Jxyysc'
global.author = 'on Snapchat'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'This feature is only available for admins!',
    botAdmin: 'Bot must be admin first!',
    owner: 'This feature is only available for owner!',
    group: 'This feature can only be used in groups!',
    private: 'This feature can only be used in private chats!',
    bot: 'This feature can only be used by the bot',
    wait: 'Wait A minute...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 1000,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
