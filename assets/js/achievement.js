//  Work achievements cards


const achievementscards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Hack With CW",
    cardImage: "images/achievements-page/won.jpeg",
    place: "Code Warriors",
    time: "(December, 2020 - present)",
    desp: "<li>Worked in group of five and had prsented an Android Application as our hack.</li> <li>Students can order their food before reaching the canteen and can save their time.</li><li>They can share their Startup/Project ideas and can find the right team to work with in required Domains.</li><li>Check our hack at Github.</li>",
  },
  {
    title: "Fall Fest",
    cardImage: "images/achievements-page/fall-fest.png",
    place: "IIT ISM",
    time: "(December 19-20, 2020)",
    desp: "<li>Worked in group of four and had prsented an Android Application as our hack.</li><li>Our app has a Telegram-Bot implemented where one can get all the Administrative Information.</li><li>Students can get all the study resources of respective years.</li><li>New comers can find the way to our collage.</li>",
  },
  {
    title: "Local Hack Day:Build",
    cardImage: "images/achievements-page/local_hack_day.png",
    place: "MLH",
    time: "(Jan-19 to Jan-20 ,2021)",
    desp:"<li>Wrked in group of three and had presented Haks in Dmains including:- Android, Web, AI, ML, Graphics, Gaming.</li><li>A week long Hackathon where we had given challenges on daily as well as weekly basis.</li><li>Snake Game using pygame,Web Dino Game, Automate Birthday Wish, Chat-Bot with ChatterBot & Chatterbot-corpus, ML with Teachable Machine and many more</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  achievementscards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Fall Fest",
    cardImage: "images/achievements-page/fall_fest.jpeg",
    description:
      "Certificate of Participation at fall fest, an Extra-Collage Hackathon, organized by IIT-ISM.",
  },
  {
    title: "Hack With CW",
    cardImage: "images/achievements-page/Hackathon.png",
    description:
      "Certificate for Excellence for acheiving 6th position out of top 12 Teams, in sponsorship with Code-Warriors.",
  },
  {
    title: "Internshala Android Training",
    cardImage: "images/achievements-page/app-1.png",
    description:
      "Certificate of recognition for scoring 69% in the final test of Android App Development Trainings with Kotlin.",
  },
  {
    title: "AICTE Java Course",
    cardImage: "images/achievements-page/java361dm-1.png",
    description:
      "Certificate for Performing well in Training from 361DM.",
  },
  {
    title: "Digital Marketing With Iternshala",
    cardImage: "images/achievements-page/Digital-Marketing-1.png",
    description:
      "Certificate to score 75% in the final test offered by Internshala.",
  },
  {
    title: "DSA at Udemy",
    cardImage: "images/achievements-page/Ms-excel-1.png",
    description:
      "Certificate for succesfully complting the DS-Algo training at Udemy.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="background-image: url(${cardImage});background-repeat: no-repeat, repeat; background-size: cover; background-position: center; width="64" height="300"">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2>
          <p class="copy">${description}</p></div>
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  {
    title: "Dev Badge",
    image: "images/achievements-page/dev.png",
    time: "01/2020 - 01/2020",
    desp: "<li>Participated in Hactoberfest 2020 held in October and Won this badge for succefully completing my 4PRs.</li><hr /><li>It was the in the early morning nearly 12AM on 1st Octber I made my 4PRs.</li>",
  },
  {
    title: "Hacktoberfest T-Shirt",
    image: "images/achievements-page/t-shirt.jpeg",
    time: "01/2020 - 01/2020",
    desp: "<li>Won this for merging of my 4PRs that I made for the first time.</li><hr/><li>I was eagerly waited for it and got it in the mid of November 2020 with lots of Goodies and Stickers too.</li>",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
