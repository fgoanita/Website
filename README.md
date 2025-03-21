<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Mon Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#accueil">Accueil</a></li>
                <li><a href="#projets">Projets</a></li>
                <li><a href="#a-propos">À propos</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section id="accueil">
        <h1>Bienvenue sur mon Portfolio</h1>
        <p>Je suis une développeuse web passionnée par la création de sites et d'applications.</p>
    </section>

    <section id="projets">
        <h2>Mes Projets</h2>
        <div class="projet">
            <h3>Projet 1</h3>
            <p>Description du projet 1.</p>
            <a href="projet_1.html">Voir le projet</a>
        </div>
        <div class="projet">
            <h3>Projet 2</h3>
            <p>Description du projet 2.</p>
            <a href="lien-vers-le-projet">Voir le projet</a>
        </div>
    </section>

    <section id="a-propos">
        <h2>À propos</h2>
        <p>Un peu sur moi : je suis développeuse web avec une spécialité dans...</p>
    </section>

    <section id="contact">
        <h2>Contact</h2>
        <form id="contact-form">
            <label for="name">Nom :</label>
            <input type="text" id="name" name="name" required>
            <label for="email">Email :</label>
            <input type="email" id="email" name="email" required>
            <label for="message">Message :</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Envoyer</button>
        </form>
    </section>

    <footer>
        <p>&copy; 2025 Mon Portfolio - Tous droits réservés</p>
    </footer>

    <script src="bullshit.js" defer></script>
</body>
</html>
