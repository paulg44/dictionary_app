// Bring in external API and test

async function dictionaryApi() {
  // Variables from HTML
  const inputWord = document.querySelector('#word');
  const defineBtn = document.querySelector('#button');
  const refreshBtn = document.querySelector('#refresh');
  let noun = document.querySelector('#noun');
  let verb = document.querySelector('#verb');
  // let adjective = document.querySelector('#adjective');
  // let adverb = document.querySelector('#adverb');

  // Event listener for input
  // This event listener needs to be async so that it only functions when needed
  // Event listener using Enter
  inputWord.addEventListener('keydown', async e => {
    if (e.key === 'Enter') {
      defineWord();
    }
  });

  // Event listener using the button
  defineBtn.addEventListener('click', async e => {
    defineWord();
  });

  async function defineWord() {
    word = inputWord.value;

    console.log(word);

    // Fetch API
    let response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${word}`
    );
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      return alert(
        'Input does not exist or is spelt incorrectly, please try again.'
      );
    }

    // Noun
    // Get a random noun by using Math.random() and Math.floor() combined with the length of the array
    const randomNoun = Math.floor(
      Math.random() * data[0].meanings[0].definitions.length
    );
    // Change the textContent of the noun to the random noun
    noun.textContent = data[0].meanings[0].definitions[randomNoun].definition;

    // Verb
    // Random Verb
    const randomVerb = Math.floor(
      Math.random() * data[0].meanings[1].definitions.length
    );
    // Verb textContent
    verb.textContent = data[0].meanings[1].definitions[randomVerb].definition;

    // Adjective
    // Random Adjective
    // const randomAdjective = Math.floor(
    //   Math.random() * data[0].meanings[2].definitions.length
    // );
    // // Adjective textContent
    // adjective.textContent =
    //   data[0].meanings[2].definitions[randomAdjective].definition;

    // // Adverb
    // // Random Adverb
    // const randomAdverb = Math.floor(
    //   Math.random() * data[0].meanings[3].definitions.length
    // );
    // // Adverb textContent
    // adverb.textContent =
    //   data[0].meanings[3].definitions[randomAdverb].definition;
  }

  // Write some code for if one of the four options doesnt exist

  // Write some code for when a word doesn't exist or spelt wrong etc

  // Event listener for refresh button
  refreshBtn.addEventListener('click', e => {
    inputWord.value = '';
    noun.textContent = '';
    verb.textContent = '';
    // adjective.textContent = '';
    // adverb.textContent = '';
  });
}
dictionaryApi();

// Make button for different types of definition???
// Toggle through different definitions???

/* 1. Enter a word into and input
        a. declare input in a variable ✅ 
        b. connect input to the API ✅
   2. Press the button and get the definition
        a. declare button in a variable ✅
        b. add event listener to button ✅
   3. Display the definition on the page ✅
        a. declare a variable for the definition ✅
        b. add the definition to the page using textContent ✅
    4. Make a button to refresh ✅
    5. If verb/noun doesn't exist display a message 
        a. check definition has value 
        b. create p with message if not 
        c. style p
    6. If word is spelt incorrectly or doesn't exist display error message ✅
        a. check if word exists input  ✅
        b. check if word is spelt correct ✅
        c. if nothing is returned create error pop up ✅
        d. style alert
    7. Get audio phonetic from API 
        a. create audio button 
        b. connect button to an evenListener 
        c. use audio in API to play sound

*/
