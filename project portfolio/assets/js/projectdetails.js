AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Employee Management System",
    cardImage: "assets/images/project-page/book.png",
    place: "ERP Website",
    time: "PHP,HTML,CSS,JS",
    desp: "<li>Employees are the pillar of any organization and an ideal employee management tool makes a big difference to an organization.</li><li>Secured Website built using PHP , HTML CSS JS</li><li>It is a platform where all work-related as well as important personal details of an employee is stored and managed in a secure way</li>",
  },
  {
    title: "Quiz Website",
    cardImage: "assets/images/project-page/quiz.jpg",
    place: "Web App",
    time: "HTML , CSS , JavaScript , Laravel",
    desp: "<li>Admin & Student both can login.</li><li>Admin has right to enable/disable quiz , enable/disable course , add questions upto 200 .</li><li>Student can n number of quizes daily.They will also get deatiled explanation of wrong answer.</li><li>Secured & Safe Website </li><li>a software that would help faculty to create a quiz using the questions from the database based on his/her choice of topics and he should be provided with various facilities and options to create a quiz of his choice.</li>",
  },
  {
    title: "Food Website",
    cardImage: "assets/images/project-page/recipe.jpg",
    place: "Website",
    time: "HTML , CSS , JavaScript , Python , Django",
    desp:"<li>User can Safely & Securely do payments</li><li> It is used by the leading food delivery apps to offer the best experience to the customers. A few of the great APIs for this feature include Google Maps, MapKit, or Waze’s Navigation. For example, Uber uses Google Maps on all the platforms.</li><li>Customers can leverage the most out of social media. </li>"
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
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
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Basic",
    cardImage: "assets/images/10.png",
    description:
      "✔ Lite editor <br> ✔ Single user only <br>✔  Get access to free templates only <br>✔ Export HTML & images",
  },
  {
    title: "Standard",
    cardImage: "assets/images/15.png",
    description:
      "✔ Full-featured editor<br> ✔Unlock all available templates <br>✔Create & save unlimited messages<br> ✔Organize your work into 3 projects",
     
  },
  {
    title: "Premium",
    cardImage: "assets/images/20.png",
    description:
      " ✔Full-featured editor <br> ✔Fast image delivery (250 GB included) <br> ✔ 1 extra user included ",
  },
 
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Vulnerability Assessment & Penetration Testing (VAPT) Services",
    subtitle:"" ,
    image: "assets/images/service-details/service-details-1.jpg",
    desp: "The VAPT testers from Craact are familiar with different ethical hacking techniques such as Foot printing and reconnaissance, Host enumeration, Scanning networks, System hacking Evading IDS, Firewalls and honeypots, Social engineering, SQL injection, Session hijacking, Exploiting the network etc.",
  },
  {
    title: "Web, API & Mobile Application Security Testing",
    subtitle: "",
    image: "assets/images/service-details/service-details-3.jpg",
    desp: "Our Security Testing Services encompass IT Risk assessment, IT Risk analysis, Intrusion Detection, Anti-virus and Malware protection, SPAM and web filters and Firewalls. Craact’s end-to-end security testing services help client company deploy a solution that integrates with your existing network infrastructure and intrusion detection solutions thereby improves your business scalability.",
  },
  {
    title: "Digital Marketing",
    subtitle: "",
    image: "assets/images/service-details/service-details-5.jpg",
    desp: "Digital marketing services provide businesses of all sizes with an opportunity to market their brand 24/7 at a low cost. From startups to medium-sized enterprises to multiple-location companies, a digital marketing company helps you expand your niche market reach to offer goods and services to your target customers, irrespective of time differences or location.",
  },
  {
    title: "Graphics & Designing",
    subtitle: "",
    image: "assets/images/service-details/service-details-6.jpg",
    desp: "Websites, businesses and brands are all much more than just words and products—they’re also images and art. Graphic design is an integral part of any business and that’s as true for your company’s image as it is for your marketing. Success online is multifaceted in the modern age.",
  },
  {
    title: "Custom Software Development Services",
    subtitle: "",
    image: "assets/images/service-details/service-details-7.jpg",
    desp: "Custom software development is a way to get a competitive advantage in the market due to the superior functionality a custom solution provides. With 32 years in IT, Craact offers custom software development services to plan and deliver tailored quality software reliably and promptly.",
  },
  {
    title: "Digital Marketing",
    subtitle: "",
    image: "assets/images/service-details/service-details-1.jpg",
    desp: "Digital marketing services provide businesses of all sizes with an opportunity to market their brand 24/7 at a low cost. From startups to medium-sized enterprises to multiple-location companies, a digital marketing company helps you expand your niche market reach to offer goods and services to your target customers, irrespective of time differences or location.",
 },
  {
    title: "Graphics & Designing",
    subtitle: "",
    image:"assets/images/service-details/service-details-2.jpg",
    desp: "Websites, businesses and brands are all much more than just words and products—they’re also images and art. Graphic design is an integral part of any business and that’s as true for your company’s image as it is for your marketing. Success online is multifaceted in the modern age.",
  },
  {
    title: "Web, API & Mobile Application Security Testing",
    subtitle: "",
    image: "assets/images/service-details/service-details-3.jpg",
    desp: "Our Security Testing Services encompass IT Risk assessment, IT Risk analysis, Intrusion Detection, Anti-virus and Malware protection, SPAM and web filters and Firewalls. Craact’s end-to-end security testing services help client company deploy a solution that integrates with your existing network infrastructure and intrusion detection solutions thereby improves your business scalability.",
   },
  {
    title: "Vulnerability Assessment & Penetration Testing (VAPT) Services",
    subtitle: "",
    image: "assets/images/service-details/service-details-4.jpg",
    desp: "The VAPT testers from Craact are familiar with different ethical hacking techniques such as Foot printing and reconnaissance, Host enumeration, Scanning networks, System hacking Evading IDS, Firewalls and honeypots, Social engineering, SQL injection, Session hijacking, Exploiting the network etc.",
  },
  {
    title: "Custom Software Development Services",
    subtitle: "",
    image: "assets/images/service-details/service-details-5.jpg",
    desp: "Custom software development is a way to get a competitive advantage in the market due to the superior functionality a custom solution provides. With 32 years in IT, Craact offers custom software development services to plan and deliver tailored quality software reliably and promptly.",
   },
  {
    title: "Vulnerability Assessment & Penetration Testing (VAPT) Services",
    subtitle: "",
    image: "assets/images/service-details/service-details-6.jpg",
    desp: "The VAPT testers from Craact are familiar with different ethical hacking techniques such as Foot printing and reconnaissance, Host enumeration, Scanning networks, System hacking Evading IDS, Firewalls and honeypots, Social engineering, SQL injection, Session hijacking, Exploiting the network etc.",
   },
  {
    title: "Graphics & Designing",
    subtitle: "",
    image:"assets/images/service-details/service-details-7.jpg",
    desp: "Websites, businesses and brands are all much more than just words and products—they’re also images and art. Graphic design is an integral part of any business and that’s as true for your company’s image as it is for your marketing. Success online is multifaceted in the modern age.",
 },
  {
    title: "Custom Software Development Services",
    subtitle: "",
    image:"assets/images/service-details/service-details-8.jpg",
    desp: "Custom software development is a way to get a competitive advantage in the market due to the superior functionality a custom solution provides. With 32 years in IT, Craact offers custom software development services to plan and deliver tailored quality software reliably and promptly.",
  },
  
  

];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp}) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="https://www.craact.com/service-details.php" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3); 
