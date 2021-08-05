

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>nom
*/

let theURL = `https://api.github.com/users/` ;
const myURL = `https://api.github.com/users/stevenjhomem`;
let cards = document.querySelector('.cards');


//Getting info from Github!//
function addCard(webAddress){
  return axios.get(webAddress)
    .then( response => {
        console.log(response.data);
        cards.appendChild(cardMaker(response.data));
    })
    .catch( error => {
        console.error(`No information was received.`)
    })
  }
//********************//

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan',
                        'dustinmyers', 
                        'justsml', 
                        'luishrd', 
                        'bigknell'];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:*/

function cardMaker(object){

  //Grabbing all elements from HTML document//
  let div1 = document.createElement('div');
  let avatar = document.createElement('img');
  let div2 = document.createElement('div');
  let name = document.createElement('h3');
  let userName = document.createElement('p');
  let location = document.createElement('p');
  let profileURL = document.createElement('p');
  let URL = document.createElement('a');
  let followersCount = document.createElement('p');
  let followingCount = document.createElement('p');
  let bio = document.createElement('p');
  //********************//

  //Adding classes/attributes/text content/etc that are needed//
  div1.classList.add('card');

  avatar.setAttribute('src', object['avatar_url']);

  div2.classList.add('card-info');

  name.classList.add('name');
  name.textContent = object.name;

  userName.classList.add('username');
  userName.textContent = object.login;

  location.textContent =`Location: ${object.location}`;

  profileURL.textContent = `Profile: `;

  URL.setAttribute('href', object.url);
  URL.textContent = `Github URL for ${object.name}`;

  followersCount.textContent = `Followers: ${object.followers}`;

  followingCount.textContent = `Following: ${object.following}`;

  bio.textContent = `Bio: ${object.bio}`;
  //********************//

  //Appending everything in the order that I want//
  div1.appendChild(avatar);
  div1.appendChild(div2);
  div2.appendChild(name);
  div2.appendChild(userName);
  div2.appendChild(location);
  div2.appendChild(profileURL);
  profileURL.appendChild(URL);
  div2.appendChild(followersCount);
  div2.appendChild(followingCount);
  div2.appendChild(bio);
  //********************//

  return div1;
};

addCard(myURL);
followersArray.forEach((item) =>{
  addCard(theURL+item);
})

    /*<div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
