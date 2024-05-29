const PRIME_SUR_ENGAGEMENT = 2.5 / 100;
const MIN_ENGAGEMENT = 70 / 100;

// ca : int (représente le chiffre d'affaire d'une classe)
// exemple : 1200

// eleves : tableau d'objets (représente les élèves de la classe)
// exemple : [{name: "Jonh", id: 1, hasSold: true}, {name: "Jack", id: 2, hasSold: false}]

// Sortie attendue : objet avec deux propriétés
// - commission_taux : float (le taux de commission en %)
// - commission_amount : int (le montant de la commission en €)

export const getCommission = (ca, eleves) => {
  let commission = 0;
  let commissionAmount = 0;
  //élèves qui ont vendu
  const ElevesEngagés = eleves.filter((eleve) => {
    return eleve.hasSold === true
  });
  //nombre total d'élèves engagés
  const nbElevesEngagés = ElevesEngagés.length;
  const tauxEngagementClasse = nbElevesEngagés/eleves.length
  commission += (tauxEngagementClasse >= MIN_ENGAGEMENT) && 2.5

  if(ca < 1000){
    commission += 0.0
    commissionAmount = ca*(commission/100)
  } else if (ca < 2000){
    commission += 15.0
    commissionAmount = ca*(commission/100)
  }
  if(ca >= 2000){
    commission += 20.0
    commissionAmount = ca*(commission/100)
  }
  const result = {commission_taux: commission, commission_amount: commissionAmount}
  console.log(result)
  };

 const group1 = [
  {
    name: "Jonh",
    id: 1,
    hasSold: true,
  },
  {
    name: "Jack",
    id: 2,
    hasSold: false,
  },
  {
    name: "Gill",
    id: 3,
    hasSold: true,
  },
  {
    name: "Tom",
    id: 4,
    hasSold: true,
  },
];

const group2 = [
  {
    name: "Jonh",
    id: 1,
    hasSold: false,
  },
  {
    name: "Jack",
    id: 2,
    hasSold: false,
  },
  {
    name: "Gill",
    id: 3,
    hasSold: false,
  },
  {
    name: "Tom",
    id: 4,
    hasSold: false,
  },
];

getCommission(500, group2);