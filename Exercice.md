# Les middlewares

## Création de route

- Une route GET sur /accueil qui enverra comme réponse Bienvenue !
- Une route GET sur /fin qui enverra comme réponse Au revoir !

## 1er middleware

- Un middleware qui enregistrera, pour chaque requête, la date, l'heure, la méthode utilisée et le chemin (path).

## 2eme middleware

- Un deuxième middleware qui calculera et enregistrera le nombre de requêtes effectuées sur /fin.

## Route + middleware

- Créer un middleware ou + sur une route GET dynamique, qui enverra comme réponse "Bonjour" + l'id passé en paramètre. Si le paramètre passé est le 1, on aura comme réponse "Bonjour 1". Sinon une erreur 404 utilisateur incorrect avec le numéro de l'id passé en paramètre. suivi d'une fonction qui affiche dans la console "erreur" si le status et 404, sinon ok.
