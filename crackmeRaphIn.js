/* Déchiffrage d'un code ADN

Particularité de l'ADN :
Une séquence ADN comprend quatre bases différentes A, C, T, G
Une séquence ADN devient une séquence ARN par le biais de la transcription, les bases se transforment de la façon suivante :
A => U
T => A
C => G
G => C

Ensuite la machinerie cellulaire traduit la séquence ARN par ensemble de 3 bases. 
Cette dernière prendre par exemple UAG ou bien AUC puis les traduit en un acide aminé.
Dans notre cas ces ensembles de 3 bases traduisent des lettres, chiffres ou symboles.
*/


//Table des caractères ASCII compris dans le chiffrement ADN
let codeTable = []
let codeTableDemo = []
for (i = 32; i < 123; i++) {
  if ((i > 32 && i < 48) || (i > 57 && i < 63) || (i === 64) || (i > 90 && i < 97)) {
  } else {
    codeTable.push(i)
    codeTableDemo.push(String.fromCharCode(i))
  }
}
//Affichage des caractères de la table ci-dessus
//console.log(codeTableDemo)


//Définition de la table de 64 combinaisons de paires de base ADN
let adnTable = '\
UUU UUA UUC UUG UAU UAA UAC UAG UCU UCA UCC UCG UGU UGA UGC UGG \
AUU AUA AUC AUG AAU AAA AAC AAG ACU ACA ACC ACG AGU AGA AGC AGG \
CUU CUA CUC CUG CAU CAA CAC CAG CCU CCA CCC CCG CGU CGA CGC CGG \
GUU GUA GUC GUG GAU GAA GAC GAG GCU GCA GCC GCG GGU GGA GGC GGG'.split(' ')
//Affichage des ensembles possibles de bases
//console.log(adnTable)


//-------------------------------------------------------------------------------------------------

//Avec ces éléments vous pouvez déchiffrer la séquence et trouver le mot de passe à l'intérieur:

let sequence = 'TTACGAAAAGCGCGTAAACGTGCTGGGAAAGTCGCGGCAGCAGGGCGAC\
GTAAACTTGTGCGACGACCACTACTCGGTAAACCGCTACGGAAAGGGCGCGGGCTCAAACGAGGG\
GGGAGCAAATGGCTCAAACAGGTGCCGGTCGGGAAACCGGGGCGAAAACGAGTGCCGAAACGAGT\
GCCAAGCAAATACCGGCAGAAACCAGCTCTAAAACAACACCTACCAAGCAAAACACACCCGCCAG\
TGCCGAAACGTGCTGGGAAACTTGTGCGACGACCACTACTCGGTAAAGCGCGAAAATACACAGAT\
TAAAAAACAAAATAGTGGTGGACCAAAACCACAGTA'


let password = ''


const crackmeRaph = (password) => {
  let passwordARN = ''

  for (i = 0; i < password.length; i++) {
    let nbASCII = password[i].charCodeAt()
    let nbCodeTable = codeTable.indexOf(nbASCII)
    nbAdnTable = adnTable[nbCodeTable]

    passwordARN += nbAdnTable
  }

  let passwordADN = ''

  for (i = 0; i < passwordARN.length; i++) {
    switch (passwordARN[i]) {
      case 'A':
        passwordADN += 'T'
        break
      case 'U':
        passwordADN += 'A'
        break
      case 'C':
        passwordADN += 'G'
        break
      case 'G':
        passwordADN += 'C'
        break
      default:
        passwordADN += 'O'
        break
    }
  }

  if (passwordADN === 'TACACAGATTAAAAAACAAAATAGTGGTGGACCAAAACCACAGTA') {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackmeRaph(password)