/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
      quote: "We will do it again",
      source: "Jordi Cuixart",
      citation: "Civil and social leader, pacifist, and political prisoner. President of Òmnium Cultural.",
      year: "Contemporary"
  },
  {
      quote: "Our task, that of journalists, writers, artists, is to clarify the dark areas of the collective memory of our peoples.",
      source: "Montserrat Roig",
      citation: "Catalan writer known for novels, short stories, reportages, and journalistic articles.",
      year: "1946 – 1991"
  },
  {
      quote: "Everything is to be done and everything is possible",
      source: "Miquel Martí i Pol",
      citation: "Catalan poet, writer, and translator.",
      year: "1929-2003"
  },
  {
      quote: "Work, and work every day, because the cultivation of a language can never be abandoned",
      source: "Pompeu Fabra",
      citation: "Engineer and linguist, notable for his work on the Catalan language.",
      year: "1868-1948"
  },
  {
      quote: "Who is more suited than the artist to defend the freedom so essential for their creative work?",
      source: "Pau Casals",
      citation: "Musician and cellist, emphasizing the artist's role in defending creative freedom.",
      year: "1876 – 1973"
  },
  {
      quote: "We will suffer again, we will fight again, we will win again!",
      source: "Lluís Companys",
      citation: "Politician and lawyer, President of the Generalitat, executed by the Francoist dictatorship.",
      year: "1882-1940"
  },
  {
      quote: "The truth has always tempted me in a bad way.",
      source: "Mercè Rodoreda",
      citation: "Catalan writer known for her influential literary works.",
      year: "1908 – 1983"
  },
  {
      quote: "Only relationships based on freedom are enriching and fruitful. Those born in repression usually go wrong.",
      source: "Raül Romeva",
      citation: "Politician, civil and political rights activist, pacifist, ecologist, and political prisoner. Doctor in international relations and economist.",
      year: "Contemporary"
  },
  {
      quote: "Citizens of Catalonia, I am here now",
      source: "Josep Tarradellas",
      citation: "President of the Generalitat in exile.",
      year: "1899-1988"
  },
  {
      quote: "The political debate based on the criminalization of the adversary is the prelude to totalitarianism",
      source: "Carles Puigdemont",
      citation: "President of the Generalitat in exile.",
      year: "Contemporary"
  },
  {
      quote: "Life is a complicated and difficult thing, impossible to describe, which consists of going along",
      source: "Josep Pla",
      citation: "Writer and journalist, known for his detailed descriptions of Catalan life.",
      year: "1897 – 1981"
  },
  {
      quote: "Against the vice of ruling badly, there is the virtue of disobedience.",
      source: "Lluís Maria Xirinacs",
      citation: "Politician, philosopher, writer, and religious figure from Catalonia.",
      year: "1932 – 2007"
  },
  {
      quote: "Awaken iron!",
      source: "Almogàvers",
      citation: "Battle cry of Almogàvers, light infantry troops in the Crown of Aragon and Castile during the Middle Ages.",
      year: "12th-15th century"
  },
  {
      quote: "Box or bandage",
      source: "General Prim",
      citation: "Joan Prim i Prats, influential military and political figure in 19th-century Spain.",
      year: "19th century"
  }
];


/***
 * `getRandomQuote` function
***/

const getRandomQuote = (quotes) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return quote;
};

const quote = getRandomQuote(quotes);

/***
 * `printQuote` function
***/

console.log(quote);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);