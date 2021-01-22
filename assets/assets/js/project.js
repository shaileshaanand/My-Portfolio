/* Project Cards */

const projectcards = document.querySelector(".projectcards");
const projects = [
  {
    title: "Chat Bot",
    cardImage: "images/project-page/chat_bot.png",
    description:
      "Chat-Bot made using ChatterBot & Chatterbot-corpus in python",
    Previewlink: "",
    Githublink: "https://github.com/anjali1361/ChatBot",
  },
  {
    title: "Leverage A Cloud Database",
    cardImage: "images/project-page/authentication.png",
    description:
      "Login and Signup using Passport & MongoDB in Nodejs",
    Previewlink: "",
    Githublink: "https://github.com/anjali1361/Passport-registration",
  },
  {
    title: "Snake Game",
    cardImage: "images/project-page/snake_game.png",
    description:
      "Snake Game made with pygame and random in python,Watch the demo...",
    Previewlink: "https://github.com/anjali1361/demo_snake_game",
    Githublink: "https://github.com/anjali1361/Snake-Game",
  },
  {
    title: "Encrypting & Decrypting Password/Images",
    cardImage: "images/project-page/encrypt.png",
    description:
      "Application to Encrypt/Decrypt Password and Images in Java",
    Previewlink: "",
    Githublink: "https://github.com/anjali1361/Password_Image_Encryption_Decryption",
  },
  {
    title: "Bootstrap",
    cardImage: "images/project-page/bootstrap_website.png",
    description:
      "A website made only with Bootstrap from scratch,Watch the preview...",
    Previewlink: "https://anjali1361.github.io/Bootstrap_Website.github.io/",
    Githublink: "https://github.com/anjali1361/Bootstrap_Website.github.io",
  },
  {
    title: "Dino Game",
    cardImage: "images/project-page/dino_preview.png",
    description:
      "Save the Dino from the creature,Just play it using the link",
    Previewlink: " https://anjali1361.github.io/dino_game_LHD/",
    Githublink: "https://github.com/anjali1361/dino_game_LHD",
  },
  {
    title: "Light Your Kitchen",
    cardImage: "images/project-page/light_your_kitchen.png",
    description:
      "Web Appliaction havin GPS Map implemented. Check it out at preview...",
    Previewlink: "https://anjali1361.github.io/Light_Your_Kitchen_Website/",
    Githublink: "https://github.com/anjali1361/Light_Your_Kitchen_Website",
  },
  {
    title: "Blog App",
    cardImage: "images/project-page/blog.png",
    description:
      "An Android Alumni Network app made with Firebase",
    Previewlink: "",
    Githublink: "https://github.com/anjali1361/Bit-Network",
  },
  {
    title: "Collage App",
    cardImage: "images/project-page/collage_app.png",
    description:
      "Project for Hackathon in Android Domain having lots of features implemented, view the demo...",
    Previewlink: "https://youtu.be/7jkJTZ47Ebg",
    Githublink: "https://github.com/anjali1361/hack_with_cw",
  },
  {
    title: "Portfolio Website",
    cardImage: "images/project-page/port.png",
    description:
      "A simple open source code for creating Personel-Portfolio, view it...",
    Previewlink: "https://anjali1361.github.io/",
    Githublink: "https://github.com/anjali1361/anjali1361.github.io",
  },
  {
    title: "Automate Registration Email",
    cardImage: "images/project-page/automate_email.png",
    description:
      "Automate Email on each users registration for any course made to carry the task for my Internship Program with Mailgun.",
    Previewlink: "",
    Githublink: "https://github.com/anjali1361/Automate_Node_Emailer",
  },
  {
    title: "Chat Application",
    cardImage: "images/project-page/chat.png",
    description:
      "Web-Chat Application made using Socket.io.Have fun and chat with others using the link provided.",
    Previewlink: "https://chat-application-610af.web.app/",
    Githublink: "https://github.com/anjali1361/Web-Chat",
  },
];

const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, description, Previewlink, Githublink }) =>
      (output += `       
    <div class="column skill-card card">
      <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
        <div class="header">
        </div>
        <div class="data">
          <div class="content">
          <div class="title-div">
            <h1 class="title"><a href="#">${title}</a></h1>
            </div>
            <p class="text">${description}</p>
            <ul class="menu-content">
              <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
              <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>`)
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
