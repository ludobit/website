import { NextRequest, NextResponse } from "next/server";

// Dati di esempio per i post
const allPosts = [
  {
    id: 1,
    titolo: `LLM  - Parte 1`,
    data: new Date(2025, 2, 15).toLocaleDateString("it-IT", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    breve: ` Sull'evoluzione delle tecnologie digitali, LLM e AGENTS, quale è il confine tra l'arricchimento personale ed il Brain Rot?`,
    contenuto: `
    <div class="post-content">
      <h2 class="font-bold">L'evoluzione delle tecnologie digitali si sta muovendo a un ritmo inverosimile, fatichiamo ancora a renderci conto delle implicazioni profonde che questa rivoluzione avrà sulle nostre vite.</h2>

      <p>L'evoluzione delle tecnologie digitali si sta muovendo a un ritmo inverosimile, fatichiamo ancora a renderci conto delle implicazioni profonde che questa rivoluzione avrà sulle nostre vite.</p>
      <br/>
      <p>La democratizzazione degli strumenti AI powered ci consentirà di lavorare in maniera più economica ed efficiente. Noto però con un certo disagio che spesso, accompagnati da una buona dose di candido entusiasmo, questi strumenti vengono usati con molta superficialità.</p>
      <br/>
      <p>La maggior parte delle persone, anche nel settore informatico, non si fa troppe domande a riguardo, dando per scontato che sia normale dialogare in maniera intelligente con una macchina. Come se l'emergenza di un pattern intelligente in grado di comprendere le nostre richieste fosse del tutto naturale.</p>
      <br/>
      <p>Cosa voglio portare alla vostra attenzione? Due temi.</p>
      <br/>
      <p>Il primo è che stiamo subendo in maniera passiva e poco consapevole questa innovazione. Non tanto perché non sia possibile capire come funziona un LLM o il Machine Learning, ma perché la filosofia odierna della scienza, Riduzionista e Materialista, fatica a darci un framework di pensiero in grado di ragionare organicamente e profondamente sull'argomento. Questo però implica anche che probabilmente non stiamo capendo a fondo il vero valore aggiunto di strumenti del genere.</p>
      <br/>
      <p>Infatti il secondo tema è come abbiamo deciso di utilizzare l'AI generativa. Un approccio puramente utilitaristico a mio parere rischia di essere molto limitante. Che sia per scrivere un'email o del codice, un rapporto basato esclusivamente sulla sostituzione del lavoro umano, privo di dialogo, che non mira ad arricchire l'utilizzatore ma piuttosto a rimpiazzarlo è fallimentare. Penso che ci instupidirà a tal punto che non saremo più in grado di fare quello che prima facevamo senza questi strumenti. Allo stesso tempo i risultati del nostro lavoro saranno mediocri, approssimativi e ripetibili.</p>
      <br/>
      <p>Se addestrati a dovere gli LLM possono essere strumenti facilmente spendibili, raggiungibili e democratici. Con cui studiare e fare brain storming, a cui chiedere consiglio piuttosto che eseguire task al nostro posto.</p>
      <br/>
      <p>Così come sui social media, dove il confine tra l'arricchimento personale ed il Brain Rot dipende dal taglio che si dà alla piattaforma, allo stesso modo forse gli AI Agents distruggeranno tutto ciò che c'è di buono nella fruizione di modelli LLM già oggi di per sé fantastici, sempre e solo nel nome della produttività.</p>
      <br/>
      <p class="signature">Keep studying, cheers</p>
      <br/>
      <p class="credits">Fotografia di Henri Cartier Bresson</p>
    </div>`,
    categoria: ["AI", "LLM"],
    immagine:
      "https://media.licdn.com/dms/image/v2/D4D22AQFfcrZJN0GyNg/feedshare-shrink_2048_1536/B4DZWSViH7G4Ao-/0/1741916874647?e=1747872000&v=beta&t=9861Ix7-51c2XMcBJAdKULMQvQO9tz_PXD61f1GJzL0",
  },
  {
    id: 2,
    titolo: `Sviluppo Software - Parte 1`,
    data: new Date(2025, 2, 22).toLocaleDateString("it-IT", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    breve: `Sviluppare un software è un processo iterativo, richiede un approccio pragmatico e un atteggiamento costruttivo.`,
    contenuto: `
    <div class="post-content">
      <p>Molti colleghi, tra cui il sottoscritto, aspirano a scrivere del codice perfetto. Pulito, aggiornato, efficiente e scalabile. È un obiettivo che stimola la crescita personale e le competenze tecniche.</p>
      <br/>
      <p>Se questa ricerca si trasforma in ossessione però può diventare problematica. Quando la cura eccessiva del dettaglio prende il sopravvento, al di là del contesto, rischiamo di perdere agilità, sprecare risorse preziose e frustrarci inutilmente.</p>
      <br/>
      <p>Lo sviluppo software è intrinsecamente iterativo. La perfezione è un'illusione. Ovvero basta che una nuova feature implichi dei cambiamenti del core business applicativo, o anche solo di una sua parte, per renderci conto che spesso dobbiamo riscrivere buona parte del nostro codice (e dei test). Chiaramente ci sono molte strategie che si possono adottare per risolvere questo problema. Le scelte prese in ambito architetturale e di design delle strutture dati sono fondamentali. Un altro passaggio fondamentale è però comprendere che il codice migliora progressivamente attraverso cicli continui di revisione, feedback e ottimizzazione. Va di pari passo con lo stato di salute del progetto a cui è legato e alle necessità che emergono. Un software ottimale esiste solo e se il progetto è maturo in tutti i suoi termini.</p>
      <br/>
      <p>Un approccio pragmatico e iterativo ci permette di rilasciare applicativi componibili, facilmente mantenibili e al contempo preservare il tempo come vero valore del team di sviluppo.</p>
      <br/>
      <p>Viceversa pensare di poter scrivere la migliore versione del codice from scratch, spesso sull'onda dell'entusiasmo o a causa della poca esperienza, ci porta a bruciare tutto il budget nella prima iterazione, facendo di fatto diventare il processo di sviluppo rigido e problematico.</p>
      <br/>
      <p>Per una buona riuscita del software è essenziale che questi temi vengano compresi sia da chi sviluppa sia da chi pianifica e commissiona le attività.</p>
      <br/>
      <p class="signature">Keep studying, cheers</p>
      <br/>
      <p class="credits">Fotografia di Davide Camisasca</p>
    </div>`,
    categoria: ["AGILE", "SOFTWARE"],
    immagine:
      "https://media.licdn.com/dms/image/v2/D4D22AQGfE0HPt8Ljgg/feedshare-shrink_1280/B4DZWdDt9LG8Ao-/0/1742096754209?e=1747872000&v=beta&t=JSs2FYziEBuPYO55h4LC4KO_lwSbpX_vzFhwvhFxiVU",
  },
  {
    id: 3,
    titolo: `Sviluppo Software - Parte 2`,
    data: new Date(2025, 3, 1).toLocaleDateString("it-IT", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    breve: `Entropia e design dei database: perché pensare ai dati come informazione`,
    contenuto: `
    <div class="post-content">
      <h2 class="font-bold">Entropia e design dei database: perché pensare ai dati come informazione.</h2>

      <p>L'entropia è un concetto che nasce nella fisica dell'Ottocento per descrivere l'irreversibilità dei processi termici e la tendenza naturale dei sistemi a evolvere verso stati di maggiore disordine. Con Claude Shannon, nel 1948, il termine viene ripreso per fondare la teoria dell'informazione ed assume un nuovo significato: non più disordine fisico, ma quantità di incertezza. Ovvero: quanta informazione contiene, in media, un messaggio?</p>
      <br/>
      <p>Più un messaggio è prevedibile, meno informazione trasmette. Più è imprevedibile, maggiore è il suo contenuto informativo. Questa definizione matematica dell'informazione ha avuto implicazioni enormi per la compressione dei dati, le telecomunicazioni e la crittografia. Ma può offrire spunti utili anche in un contesto apparentemente distante come quello della progettazione di un database.</p>
      <br/>
      <p>Quando progettiamo un database, stiamo costruendo una struttura dati per rappresentare una porzione di realtà. Questo processo è, a tutti gli effetti, una forma di codifica: trasformiamo eventi o entità del mondo in strutture dati.</p>
      <br/>
      <p>Come ogni forma di codifica, anche questa può essere più o meno efficiente. Un buon design cerca di massimizzare l'informazione utile e minimizzare la ridondanza. Esattamente come in un buon codice di compressione, dove ogni simbolo rappresenta il massimo di informazione possibile per bit utilizzato.</p>
      <br/>
      <p>In un database relazionale, un segnale di bassa entropia è dato dalla presenza di dati duplicati, inconsistenze, o campi che ripetono informazioni già espresse altrove. Tutto questo introduce rumore: occupa spazio, rende più complesso il mantenimento e aumenta il rischio di errori.</p>
      <br/>
      <p>Le tecniche di normalizzazione hanno come obiettivo proprio questo: separare l'informazione essenziale dalla ridondanza, scomponendo le relazioni in tabelle che contengono solo dati atomici, non ambigui, non ripetitivi. In altri termini: aumentare l'entropia informativa del singolo record, facendo in modo che ogni attributo aggiunga informazione nuova.</p>
      <br/>
      <p>Ragionare in termini di entropia è un cambio di prospettiva utile, soprattutto in sistemi distribuiti, ad alta scalabilità o ad alta densità, dove il volume di dati è elevato, l'efficienza con cui rappresentiamo l'informazione diventa centrale. In termini di spazio, di throughput, facilità di accesso, ma anche di chiarezza e manutenibilità del codice e dei dati stessi.</p>
      <br/>
      <p>Applicare la teoria dell'informazione alla progettazione di un database significa porsi due domande fondamentali: sto memorizzando informazione o sto salvando dati derivabili e ridondanti? E accedere a quei dati attraverso grafi differenti quanta entropia genera?</p>
      <br/>
      <p class="signature">Cheers, keep studying</p>
      <br/>
      <p class="credits">Fotografia di Claude Shannon</p>
    </div>`,
    categoria: ["DATABASE", "INFORMAZIONE"],
    immagine:
      "https://media.licdn.com/dms/image/v2/D4D22AQFqZQ6mXowY-A/feedshare-shrink_800/B4DZW9Li1QGkAg-/0/1742635676240?e=1747872000&v=beta&t=JZzthnhZ3Y4dlCfUK861-_TKcxMpl7eokox2afC9_VE",
  },
  {
    id: 4,
    titolo: `LLM - Parte 2`,
    data: new Date(2025, 3, 8).toLocaleDateString("it-IT", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    breve: `On the Biology of a Large Language Model, ovvero se questo è un pappagallo stocastico, allora lo siete anche voi`,
    contenuto: `
    <div class="post-content">
      <h2 class="font-bold">On the Biology of a Large Language Model</h2>
      
      <p>Anthropic ha rilasciato un paper che dimostra come gli LLM di ultima generazione - Claude 3.5 Haiku nello specifico - ragionino in maniera molto più simile a un essere umano che a un pappagallo stocastisto.</p>
      <br/>
      <p>In generale, ne ho già parlato in un altro post su questo tema, troppo frequentemente si pensa agli LLM come modelli di inferenza probabilistica, quindi non davvero intelligenti, quanto piuttosto bravi a simulare l'intelligenza seguendo dei pattern statistici. Eppure un anno fa Sam Altman parlava di emergenza di pattern intelligenti in LLM come GPT 3.5.</p>
      <br/>
      <p>Questo paper, ma ne stanno uscendo altri molto interessanti anche di Google in merito, mette un punto al dibattito su quanto siano davvero intelligenti gli LLM, aprendo piuttosto ad alcune riflessioni molto profonde sulla vita e sulla coscienza.</p>
      <br/>
      <blockquote>"Se questo è un pappagallo stocastico, allora lo siete anche voi"</blockquote>
      <br/>
      <p>Ripeto di nuovo che se usiamo solo un approccio scientifico Riduzionista e Materialista non riusciamo davvero a cogliere la profondità di questi strumenti. Il pattern con cui gli LLM astraggono il significato e pensano è così simile al nostro che i ricercatori di Google hanno dimostrato che si allinea perfettamente con i pattern neurologici nel cervello umano nelle regioni associate alla comprensione e alla produzione del linguaggio.</p>
      <br/>
      <p>La coscienza è un fattore emergente in questo universo? Le filosofie orientali lo affermano da millenni, ma sempre più scienziati nella ricerca in campo biologico, neurologico e informatico sembrano assumere un punto di vista simile. I pattern sono la chiave per farla emergere.</p>
      <br/>
      <div class="references">
        <p><strong>Paper Anthropic</strong><br>
        <a class="underline" href="https://lnkd.in/d5K2rXPC" target="_blank">https://lnkd.in/d5K2rXPC</a></p>
        <br/>
        <p><strong>Paper Google</strong><br>
        <a class="underline" href="https://lnkd.in/dJHumbg9" target="_blank">https://lnkd.in/dJHumbg9</a></p>
      </div>
    </div>`,
    categoria: ["AI", "LLM"],
    immagine:
      "https://media.licdn.com/dms/image/v2/D4D22AQH8MrLwOVom6A/feedshare-shrink_2048_1536/B4DZYed4GKHAAw-/0/1744267874019?e=1747872000&v=beta&t=OuOqU0JT-K4hGu8_XpvqaYAKYQ7wgHBycfbxE-Uy8c8",
  },
  {
    id: 5,
    titolo: `Sviluppo Software - Parte 3`,
    data: new Date(2025, 3, 15).toLocaleDateString("it-IT", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    breve: `Architetture software nel mondo enterprise 🔞. Disaccoppiare è la parola chiave per abbattere i costi di sviluppo e di manutenzione del software.`,
    contenuto: `
    <div class="post-content">
      <h2 class="font-bold">Architetture software nel mondo enterprise 🔞</h2>

      <p>L'immagine qui sotto mostra la proposta di un'architettura software che ho presentato e stiamo portando avanti per un nostro cliente (dovutamente anonimizzata). Il requisito era disaccoppiare alcune logiche di business e features da un grosso applicativo monolitico per renderle rivendibili sia come applicativo standalone che per comporle con altri applicativi di prodotto già esistenti. Ognuno dei servizi che vedete, si occupa di elaborare dati e salvarli su schema separati del database. Informazioni in tempo reale su mappa, notifiche IOT, GPS Tracking, elaborazioni e calcoli geospaziali sono solo alcune delle feature dell'applicativo.</p>
      <br/>
      <p>Il software va sempre cucito sulle esigenze dei clienti, al tempo stesso capita però che molte di queste esigenze siano in comune tra di loro con poche differenze di business logic o dovute al contesto infrastrutturale e in cui si devono integrare. Senza reinventare la ruota tutte le volte dobbiamo sviluppare applicativi che siano in grado di comporsi e integrarsi tra di loro in maniera agnostica.</p>
      <br/>
      <p>Negli anni ho capito che disaccoppiare è la parola chiave per abbattere i costi di sviluppo e di manutenzione del software, per scalarlo a seconda delle necessità ed evitare di accumulare troppo debito tecnico. Le scelte tecnologiche possono cambiare, nel tempo e con i requisiti, ma con un design modulare sarà facile sostituire o svecchiare la parte interessata. Viceversa spesso e volentieri, o sempre, le patch create per gestire le esigenze dei clienti su applicativi monolitici aumentano l'entropia, con essa il debito tecnico e creano un sacco di altri problemi noti.</p>
      <br/>
      <p>Un incubo per chi sviluppa ma ancor di più per chi si ritrova spesso un applicativo con performance dubbie, su cui sviluppare qualsiasi cosa costa il quadruplo di quanto dovrebbe ed i risultati sono spesso mediocri, limitati dalle scelte di design prese in origine e non più conformi alle esigenze.</p>
      <br/>
      <p>Tenete sempre a mente che le esigenze che avete oggi non sono quelle di domani.</p>
      <br/>
      <p class="signature">Cheers and keep studying</p>
    </div>`,
    categoria: ["SOFTWARE", "DESIGN"],
    immagine:
      "https://media.licdn.com/dms/image/v2/D4D22AQFgE7uzwRzzLw/feedshare-shrink_800/B4DZYWHSKvHAAo-/0/1744127731268?e=1747872000&v=beta&t=lqt6_ZO-n2jmZHZEMzB9Wb5iLBMl_v3mIurKRiCDKw4",
  },
  {
    id: 6,
    titolo: `LLM - Parte 3`,
    data: new Date(2025, 3, 22).toLocaleDateString("it-IT", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    breve: `Deciphering Language Processing in the Human Brain through LLM Representations. Pattern di attivazione semantica nel cervello umano e negli LLM.`,
    contenuto: `
    <div class="post-content">
      <h2 class="font-bold">Deciphering Language Processing in the Human Brain through LLM Representations</h2>

      <p>Ho già citato questo paper in un precedente post, ma siccome continuo a vedere molte persone che quando parlano di LLM si riferiscono all'inferenza probabilistica come unico deus ex machina per spiegarne l'intelligenza "simulata", torniamo sull'argomento.</p>
      <br/>
      <p>Lo studio pubblicato da Google Research esplora le somiglianze tra l'elaborazione del linguaggio nel cervello umano e negli LLM di grandi dimensioni.</p>
      <br/>
      <p>Le similitudini tra cervello e LLM riguardano il modo con cui i due sistemi rappresentano il linguaggio — cioè come trasformano frasi e parole in "forme interne" che gli permettono poi di comprenderne il significato.</p>
      <br/>
      <p>Seppur seguendo strade molto diverse, sia nel cervello che nei modelli AI, quando sentiamo o leggiamo una frase, ogni parola viene legata a dei significati, inserita in un contesto e messa in rapporto con anticipazioni e associazioni varie. Un modello fa questo creando ciò che si chiama embedding contestuale, ovvero una rappresentazione vettoriale che codifica il significato di una parola all'interno della frase. È come una mappa del senso, che cambia a seconda del contesto.</p>
      <br/>
      <p>I ricercatori hanno messo a confronto le rappresentazioni interne del modello AI — gli embeddings — ed i segnali neurali registrati nel cervello, notando una somiglianza notevole. Non sono identici, ma seguono schemi coerenti: ad esempio, quando una parola ha un certo significato nel contesto, sia il cervello che il modello la rappresentano in modo simile, come se ne carpissero lo stesso profilo semantico.</p>
      <br/>
      <blockquote>"Surprisingly, while Whisper was developed solely for speech recognition, without considering how the brain processes language, we found that its internal representations align with neural activity during natural conversations. This alignment was not guaranteed — a negative result would have shown little to no correspondence between the embeddings and neural signals, indicating that the model's representations did not capture the brain's language processing mechanisms."</blockquote>
      <br/>
      <p>Sembra quindi che gli LLM come Whisper non si limitino a predire la prossima parola in modo puramente statistico, ma costruiscano piuttosto rappresentazioni interne che riflettono una comprensione più profonda e strutturata del significato — più simile a ciò che fa un cervello umano di quanto non pensassimo.</p>
      <br/>
      <p>Capito questo è facile dedurre che il prompt engineering sia legato all'attivazione semantica del modello che "autorizziamo" ad usare attraverso il nostro testo di input.</p>
      <br/>
      <p>L'aspetto più interessante però non sta tanto nella somiglianza tra uomo e macchina, perché così non è, quanto piuttosto al fatto che davanti allo stesso stimolo è emerso autonomamente un pattern simile a quello che troviamo già presente in natura.</p>
      <br/>
      <p class="signature">Cheers and keep studying</p>
      <br/>
      <div class="references">
        <p><strong>Link al paper:</strong><br>
        <a class="underline" href="https://lnkd.in/gfCPga6W" target="_blank">https://lnkd.in/gfCPga6W</a></p>
      </div>
    </div>`,
    categoria: ["AI", "LLM"],
    immagine:
      "https://media.licdn.com/dms/image/v2/D5622AQGJFiIPdOEzQw/feedshare-shrink_800/B56ZYz8FmJGsAw-/0/1744628112365?e=1747872000&v=beta&t=sLsfF_Ao9pjrlWWowWm8NvXSrv1GGLYgaSTe2e5KALY",
  },
].reverse();

export async function GET(request: NextRequest) {
  // Ottieni i parametri di query
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "1");
  const pageSize = parseInt(searchParams.get("pageSize") || "6");

  // Calcola l'offset e il limite
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  // Ritarda la risposta per simulare un caricamento realistico
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Ottieni i post per la pagina corrente
  const posts = allPosts.slice(start, end);

  // Determina se ci sono altre pagine
  const hasMore = end < allPosts.length;

  return NextResponse.json({
    posts,
    hasMore,
    totalPosts: allPosts.length,
  });
}
