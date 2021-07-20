import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"
import instagramIcon from "./images/instagram.svg"
import avatar from "./images/avatar.png"
import badminton from "./images/badminton.jpg"
import photography from "./images/photography.jpg"


export default {

  //   Header Details ---------------------
  name: "Loan",
  headerTagline: [
    //Line 1 For Header
    "Web developer",
    //Line 2 For Header
    "UX, UI, Front-end",
    //Line 3 For Header
    "and experience",
  ],
  //   Header Paragraph
  headerParagraph:
    "Be all you can be",

  //Contact Email
  contactEmail: "nguyenloan150492@gmail.com",
  contactPhone: "+358 504706222",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Helsinki Kamppi", 
      para:
        "Shopping center Kamppi website",
      imageSrc: "https://source.unsplash.com/1THJ5GRABqI",
      url: "https://www.kamppihelsinki.fi/",
    },
    {
      title: "Dixi center", 
      para:
        "Shopping center Dixi website", 
      imageSrc: "https://source.unsplash.com/sfL_QOnmy00",
      url: "http://dixi.fi/",
    },
    {
      title: "Thesis",
      para:
        "React-redux webpage", 
      imageSrc:
        "https://images.unsplash.com/photo-1584447108007-8ba5452bdfb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIzNjc0Nzc4&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
      url: "https://github.com/hongloans9/Thesis-Demo-Client",
    },
    {
      title: "Matkus center",
      para:
        "Shopping center Matkus website",
      imageSrc: "https://source.unsplash.com/2x19-mRQgX8",
      url: "https://www.matkusshoppingcenter.fi/",
    },
    {
      title: "Open blog",
      para: "React-redux webpage", 
      imageSrc: "https://source.unsplash.com/jLwVAUtLOAQ",
      url: "https://hongloans9.github.io/Open-Blog/",
    },
    {
      title: "ORI: DIY tutorials and products sharing app",
      para:
        "Ori is a hybrid app that we created to share photos and videos about DIY’s tutorials and products",
      imageSrc: "https://source.unsplash.com/SnITZTTeJVE",
      url: "https://github.com/hongloans9/Ori---Media-Sharing-Application",
    },
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "My full name is Nguyen Hong Loan. My hometown is Nha Trang - a coastal city in Southern Vietnam. I've lived in Finland since 2015, currently my place is located in Espoo, Finland.",
  aboutParaTwo:
    "I'm a web developer. I love what I do since I’ve started doing it. I find every new experience as an opportunity to learn and to put my knowledge into practice. My favorite projects are those that require me to push beyond my boundaries and acquire new skills and knowledge in order to succeed. In my spare time I enjoy experimenting with new frameworks and libraries.",
  aboutTag:
    "#hard-working #willing-to-learn-new-things #team-work #UX/UI #front-end",
  aboutImage: avatar,

  //   End About Section ---------------------

  // Skills Section ---------------

  skills: [
    {
      name: "html/css",
      percentage: "85%",
    },
    {
      name: "JAVASCRIPT/JQUERY",
      percentage: "80%",
    },
    {
      name: "SCSS/BOOTSTRAP",
      percentage: "75%",
    },
    {
      name: "REACT/REDUX",
      percentage: "60%",
    },
    {
      name: "Angular",
      percentage: "85%",
    },
    {
      name: "NODEJS",
      percentage: "50%",
    },
    {
      name: "WEBPACK/BABEL",
      percentage: "40%",
    },
    {
      name: "LIFERAY VELOCITY/JENKINS/GIT",
      percentage: "65%",
    },
    {
      name: "PHOTOSHOP/LIGHROOM",
      percentage: "70%",
    },
    {
      name: "SEO",
      percentage: "80%",
    },
    
  ],

  // End Skills Section --------------------------

  //   Interest Section --------------------------
  interests: [
    {
      title: "Playing sports", 
      para:
        "#Badminton #Golf #TableTennis #Swimming #Basketball #Football #Skating #Climbing",
      imageSrc: badminton,
    },
    {
      title: "Travel & Photography", 
      para:
        "#Vietnam #Thailand #Singapore #Finland #Sweden #Estonia #Austria #Czech #France #USA #Denmark #Spain #Italy #Holand", 
      imageSrc: photography,
    },
    {
      title: "Music & Movies",
      para:
        "#Pop #ballad #R&B #SoundTrack #KoreanMusic #Pixar #MavelStudios", 
      imageSrc: "https://source.unsplash.com/Pn7JBX42z3Q",
    },
  ],

  // End Interest Section -----------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create something great together!",
  social: [
    { img: githubIcon, 
      url: "https://github.com/hongloans9" 
    },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/loan-nguyen-1303/",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/",
    },
  ],
  // End Contact Section ---------------
}

