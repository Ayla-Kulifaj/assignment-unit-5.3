console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
myCollection=[];

function addToCollection(collection, title, artist, yearPublished) {
  const album={title, artist, yearPublished };
  collection.push(album);
  return album;
}
console.log("Adding albums to myCollection: ");
const albumsToAdd=[
{ title: "Back to Black", artist: "Amy Winehouse", yearPublished: 2006 },
{ title: "Abbey Road", artist: "The Beatles", yearPublished: 1969 },
{ title: "Expectations", artist: "Wild Child", yearPublished: 2018 },
{ title: "Hozier", artist: "Hozier", yearPublished: 2014 },
{ title: "Tracy Chapman", artist: "Tracy Chapman", yearPublished: 1988 },
{ title: "There's Really A Wolf", artist: "Russ", yearPublished: 2017 }
];


// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
