import {AsyncStorage} from 'react-native'

export const FLASHCARD_STORAGE_KEY = 'MobileFlashcards:flashcards'

/*

Example Javascript Structure:

{
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}
*/

/*
getDecks: return all of the decks along with their titles, questions, and answers.
*/
export function getDecks(){
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
}
/*
getDeck: take in a single id argument and return the deck associated with that id.
*/
export function getDeck(deckId){
  const deckData = getDecks()

// AJS -- not sure if this works
  return deckData[deckId]
}
/*
saveDeckTitle: take in a single title argument and add it to the decks.
 AKA: "New Deck"
*/
export function saveDeckTitle(title){
  console.log("saveDeckTitle:"+title)
  //  title: 'React',
  //  questions: []
}
/*
addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.

*/
export function addCardToDeck(title,card){

  //  questions: []

//  {
//    question: 'What is React?',
//    answer: 'A library for managing user interfaces'
//  },

//  return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY,JSON.stringify({
//  [title]:card,
//}))
}

/*
export function submitEntry({entry, key}) {
  return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY,JSON.stringify({
    [key]:entry,
  }))

}

export function removeEntry(key){
    return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
      .then((results)=> {
        const data = JSON.parse(results)
        data[key] = undefined
        delete data[key]
        AsyncStorage.setItem(CALENDAR_STORAGE_KEY,JSON.stringify(data))
      })
}
*/
