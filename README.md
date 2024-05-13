# Test technique - France Challenges

Exercices à réaliser lors de l'entretien technique pour le recrutement d'un développeur.

## Exercice 1

### Enoncé

Une classe est composée de plusieurs élèves qui vont effectuer des ventes. On appelle CA le chiffre d'affaire réalisé par une classe (le montant total es ventes de chaque élève de la classe)

En fonction du CA de la classe on verse une commission :

- Si le CA est inférieur à 1000€ on verse 0% de commission
- Si le CA est inférieur à 2000€ on verse 15% de commission
- Si le CA est supérieur ou égal à 2000€ on verse 20 de commission

Pour récompenser les classes dont la majorité des élèves ont vendu (au moins 70% des élèves de la classe), on ajoute 2.5% à la commission.

Exemple : une classe qui a réalisé un chiffre d'affaire de 2500€ et dont 80% des élèves ont réalisé une vente auront 22.5% de commission

On veut calculer la commission d'une classe

### Squelette du code

- Calcul du taux de commission en fonction du CA
- Calcul du taux d'engagement de la classe (nombre d'élèves vendeurs / nombre total d'élèves)
- SI taux d'engagement >= 0.7 ALORS on rajoute 0.025 au taux de commission
- On retourne le pourcentage (%) et le montant (€) de la commission de la classe.

## Exercice 2

Objectif : faire fonctionner le code existant
