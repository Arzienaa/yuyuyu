/**
   * Create By Dika Ardnt.
   * Recode By 4k sanzz
   * Contact Me on wa.me/6281236167286
   * Follow https://github.com/4ksanzz
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['62822885723567']
global.ownernomer = "62822885723567"
global.premium = ['62822885723567']
global.packname = 'Y U I 🌊'
global.author = 'Kk Melly🙌'
global.sessionName = 'nazedev'  //jangan diganti bro nanti error
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Done',
    admin: 'Fitur khusus admin group kka ^~^',
    botAdmin: 'YUI nya harus dijadiin admin dulu kaa ._.!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa ya kaa 🌊',
    owner: 'Fitur ini khusus kak MELLY kakaaaa 😾',
    group: 'Fitur ini cuma bisa di dalam group kakaa:<',
    private: 'Fitur ini cuma bisa Private Chat ya kaa!><',
    bot: 'Fitur Khusus Pengguna Y U I Bot',
    wait: 'Bentar ya kak 🌊',
    endLimit: 'Limit Harian kaka Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 2
}
global.thumb = fs.readFileSync('./image/naze.jpg')
global.vaze = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
