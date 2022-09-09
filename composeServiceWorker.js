const fg = require('fast-glob')
const fs = require('fs')

const myArgs = process.argv.slice(2)

let directory, numVersionCache
directory = myArgs[0]
numVersionCache = myArgs[1]

if (directory === undefined || numVersionCache === undefined) {
  console.log('Commande: node prog repertoire_de_build version_de_cache')
  console.log('Erreur, manque le répertoire de destination ou le numéro de version ! ')
  process.exit(1)
}

async function liste(racine) {
  let assets = `const CACHE_NAME = 'auxSonsDuJardin-v${numVersionCache}'\n`
  assets += 'const urlsToCache = [\n'
  const fichiers = await fg([racine + '/**/*'])
  for (let i = 0; i < fichiers.length; i++) {
    const fichier = fichiers[i].substring(racine.length, fichiers[i].length)
    if (i < (fichiers.length - 1)) {
      assets += '  "' + fichier + '",\n'
    } else {
      assets += '  "' + fichier + '"\n'
    }
  }
  assets += ']\n'
  return assets
}


async function chargerServiceWorkerListLess() {
  try {
    const rawdata = fs.readFileSync('./serviceWorkerListLess.js', 'utf8').toString()
    const assets = await liste(directory)
    fs.writeFileSync('./' + directory + '/serviceWorker.js', assets + rawdata, 'utf8')
  } catch (error) {
    console.log('Sauvegarde du service worker,', error)
  }
}

chargerServiceWorkerListLess()

