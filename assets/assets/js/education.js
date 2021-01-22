AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Android",
    cardImage: "images/education-page/android-min.jpg",
    moocLink: "https://github.com/anjali1361/Destination_App_Using_Local_API",
  },
  {
    title: "Rest API",
    cardImage: "images/education-page/api-services-min.png",
    moocLink: "https://github.com/anjali1361/API",
  },
  {
    title: "Firebase",
    cardImage: "images/education-page/firebase-firestore-min.png",
    moocLink: "https://github.com/anjali1361/Bit-Network",
  },
  {
    title: "Express",
    cardImage: "images/education-page/express-min.jpg",
    moocLink: "https://github.com/anjali1361/pass-management-system",
  },
  {
    title: "Database",
    cardImage: "images/education-page/mongo-min.png",
    moocLink: "https://github.com/anjali1361/Dance-Website-Pug",
  },
  {
    title: "Python",
    cardImage: "images/education-page/python.jpeg",
    moocLink: "https://github.com/anjali1361/ChatBot",
  },
  {
    title: "Web",
    cardImage: "images/education-page/web_services1-min.png",
    moocLink: "https://github.com/anjali1361/Web-Chat",
  },
  {
    title: "HTTP",
    cardImage: "images/education-page/http-min.png",
    moocLink: "https://github.com/anjali1361/employee-management-system",
  },
  {
    title: "SQL",
    cardImage: "images/education-page/database-min.jpg",
    moocLink: "https://github.com/anjali1361/SQLite-App",
  },
  {
    title: "Cloud Messaging",
    cardImage: "images/education-page/cloud-messaging-min.jpg",
    moocLink: "https://github.com/anjali1361/Messenger/",
  },
  {
    title: "NodeJS",
    cardImage: "images/education-page/js1-min.png",
    moocLink: "https://github.com/anjali1361/Passport-registration",
  },
  {
    title: "Storage",
    cardImage: "images/education-page/storage-min.jpg",
    moocLink: "https://github.com/anjali1361/BookHub",
  },
];

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage,moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Jet Brains Sticker",
    image: "images/education-page/jet brains.png",
    description: "Earned October 20, 2020",
  },
  {
    title: "Hackerrank",
    image: "images/education-page/hackerrank.png",
    description: "Earned October 20, 2020",
  },
  {
    title: "Github",
    image: "images/education-page/github.png",
    description: "Earned October 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description}) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);


/* Timeline Section*/

const timeline = document.querySelector(".timeline");
const timelinesection = [
  {
    heading: "Birsa Institute oF Technology",
    image: "./images/education-page/timeline-1.svg",
    subheading:"Bachelors of Science, Computer Science & Engineering, (2019-2023)",
    description: "<li>Scored 88% in my 1st year</li><li>Best undergraduate Institue</li><li>Opting Chemical Engineering</li><li>Member at HnCC</li>",
  },

  {
    heading: "Senior Secondary-XII",
    image: "./images/education-page/timeline-1.svg",
    subheading:"Student of Science, Computer Science & Mathematics, (2017-2019)",
    description: "<li>Scored 90% in the department</li><li>Saraswati Shishu Mandir,Shyamdih</li><li>A-One Science faculty</li><li>Participated in Science-Fair</li>",
  },

  {
    heading: "Secondary-X",
    image: "./images/education-page/timeline-1.svg",
    subheading:"Student of Science, Computer Science & Mathematics, (2015-2017)",
    description: "<li>Scored 10CGPA in the department</li><li>Saraswati Shishu Mandir,Shyamdih</li><li>A-One Science faculty</li><li>Participated in Science Quizes</li>",
  },

  // {
  //   heading: "Massachusetts Institute of Technology",
  //   image: "./images/education-page/timeline-1.svg",
  //   subheading:"Bachelors of Science, Computer Science & Engineering, (2020-2024)",
  //   description: "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  // },
];

const showCards2 = () => {
  let output = "";
  timelinesection.forEach(
    ({ heading, image, subheading, description}) =>
      (output += `       
      <div class="timeline" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600">
      <div class="timeline-content">
        <h6 class="center-align font-weight-bolder pt-1">${heading}</h6>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4">
            <img src="${image}" alt="" height="110"
              class=" mt-2 w-100 mx-auto">
          </div>
          <div class="col-lg-8 col-md-8 col-sm-8 px-4">
            <span style="opacity: 0.9; font-size: 15px;">
              ${subheading}
            </span>
            <h6 class="text-muted mt-2" style="font-size: small;">Activities:</h6>
            <ol style="margin-top: -8px; margin-left: -10px; font-size: 12px; list-style: disc;">
              ${description}
            </ol>
          </div>
        </div>
      </div>
    </div>`)
  );
  timeline.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);