const fg = require('fast-glob')

async function liste(racine) {
  console.log('')
  console.log('"/",')
  const fichiers = await fg([racine + '/**/*'])
  for (let i = 0; i < fichiers.length; i++) {
    const fichier = fichiers[i].substring(racine.length, fichiers[i].length)
    console.log('"' + fichier + '",')
  }
  console.log('')
  console.log('fin !!!!!!!!!!')
}

liste('dist')

