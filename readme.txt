-- Fonte: https://developer.wordpress.org/block-editor/getting-started/tutorial/ --

1 Step: impostare il plugin, nella cartella plugins ho creato la cartella author-card e ho eseguito il commando: 
    - npx @wordpress/create-block@latest -
    - modificato author-card.php con i dati come titolo, descrizione, versione... del plugin

2 Step: aggiornato block.json in /src per aggiungere:
    - spacing: margin e padding
    - colore: background e testo
    - shadows
    - attributi : - hideBiografy (true/false)
                  - blockId (da utilizzare per applicare stili)
                  - radiusLeft e radiusRight (per personalizzare il border-radius in pixel)

3 Step: modificato l'edit:
    - assegnato al blockId il clientId
    - creata funziona toogleBiorgrafy per alternare hideBiografy 
    e usare il valore per assegnare la classe bio-hidden che nasconde il tag p della biografia 
    - inpectorControls (settings) con il toogle per nascondere o meno la biografia
    - inpectorControls (styles) con due rangeControls per impostare i valori del border-radius (solo destra e sinistra)
    - blockControls per il toogle della biografica ma dalla barra del blocco
    - creato un div che rappresenta la card author con elementi statici e con attributi dinamici 
    per vedere i cambiamenti in tempo reale e applicato lo style del border-radius

4 Step: modificato il render.php:
    - salvato i dati autore del post in variabili da utilizzare dinamicamente usando la funzione
    get_the_author_meta.
    - salvato l'url dell'avatar
    - impostato un controllo, nel caso un cui il nome e il cognome dell'autore non fosse impostato
    di utilizzare il nickname come dato.
    - creato il blocco da renderizzare e salvato in una variabile content utilizzabile dalla funzione 
    wp_kses_post.
    - aggiunto lo style dinamico del border-radius chiamando gli attributi con l'array $attributes
    - impostato controllo se il blocco è presente dentro un articolo in modo da evitare il rendere in pagine
    diverse da articoli

5 Step: creato gli stili statici/default nei file editor e style .scss per ottenere la base che poi verra modificata
    parzialmente dagli attributi dinamcici.

il file save.js non è finito, l'ho lasciato come "todo", non è necessario in quanto il render.php fa il render dinamico
ho lasciato le parti che intendevo fare come fallback alla save in casi di errore di rendering commentate.

Ho riscontrato diversi problemi durante la realizzazione, come dati non assegnati correttamente oppure
agganci fatti male che ho risolto con il debug inserendo echo/console.log per vedere gli output e 
correggere gli errori.