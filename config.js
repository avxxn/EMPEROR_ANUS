const fs = require("fs")
const chalk = require("chalk")

global.available = true
global.autoReadGc = true
global.autoReadAll = false
global.antitags = true


global.Owner = ['393515439909']
global.OwnerNumber = ['393515439909']
global.ownertag = ['393515439909']
global.BotName = "โค๐จ๐ ๐ฉ๐ ๐ซ๐ ๐ถ๐ โกโค๏ธ"
global.packname = "๐จ๐ ๐ฉ๐ ๐ซ๐ ๐ถ๐ โก๏ธ"
global.author = "โฃ ุนุจุฏู ุจูุญุจู ๐๐ โฃ"
global.OwnerName = "โค๏ธ๐จ๐ ๐ฉ๐ ๐ซ๐ ๐ถ๐ โกโค๏ธ๏ธ"
global.BotSourceCode = "https://instagram.com/toxic._.abdo?igshid=YmMyMTA2M2Y="
global.SupportGroupLink = "https://instagram.com/toxic._.abdo?igshid=YmMyMTA2M2Y="
global.sessionName = "session"

// Prefix //
// ๐don't change the prefix if you can change the prefix may be bot doesn't work properly//
global.prefa = ['.'] 


global.location = "bihar, India"
global.reactmoji = "โค๏ธ"
global.themeemoji = "๐ค"
global.vidmenu = { url: 'https://c.tenor.com/YGuLegQWubwAAAPo/miku-nakano-gotoubun-no-hanayome.mp4' }
global.websitex = "https://instagram.com/toxic._.abdo?igshid=YmMyMTA2M2Y="
global.lolhuman = "KaysaS"


global.BotLogo = fs.readFileSync("./Assets/pic1.jpg")
global.Thumb = fs.readFileSync("./Assets/pic9.jpg")
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg")
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: 'ุชู...',
    useradmin: 'ใ ุงูุงูุฑ ุฏุง ูุงุฏูู ุจุณ! ใ',
    botadmin: 'ใ ุงุฑูุน ุงูุจูุช ุงุฏูู ุงูุงูู ใ',
    botowner: 'ุงูููุฒู ุฏู ูููุงูู ุจุณ!',
    grouponly: 'ใ ุงูููุฒู ุฏู ููุฌุฑูุจุงุช ุจุณ! ใ',
    privateonly: 'ใ ุงูููุฒู ุฏู ูู ุงูุฎุงุต ุจุณ! ใ',
    botonly: 'ใ ุงูููุฒู ุฏู ููุจูุช ุจุณ! ใ',
    waiting: 'ใ ุงุณุชูู ุดููู... ใ',
    nolink: 'ใ ููู ุงูุฑุงุจุท? ใ',
    error: 'ใ ุงูุฑูุฑ! ใ',
    banned: 'ใ ุงูุช ูุญุธูุฑ ูู ุงุณุชุฎุฏุงู ุงูุจูุช ุงุชูุงุตู ูุน ุงููุทูุฑ ูุงูุบุงุก ุญุธุฑู! ใ',
    bangc: 'ใ ุชู ุญุธุฑ ุงูุฌุฑูุจ ุฏุง ูู ุงุณุชุฎุฏุงู ุงูุจูุช! ใ',
    nonsfw: 'ใ ุงูุชุจ ุงููุฌูููู ูุงุฎุชุงุฑ ูุชุญ ุซู ุงูุชุจ .ุงููุงุฆูู-ุงููุฌูููู! ใ'
    
}


global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '5d1197db351b',
}


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
