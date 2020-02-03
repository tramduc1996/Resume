const resumeInfor = {
  personalInfor: {
    FullName: "Daniel Tram",
    Email: "Tramduc1996@gmail.com",
    PhoneNumber: "(310) 972-0289"
  },
  personalLinks: [
    {
      Id: 1,
      Name: "Github",
      Url: "https://github.com/tramduc1996"
    },
    { Id: 2, Name: "Portfolio", Url: "https://danielporfolio.herokuapp.com/" },
    {
      Id: 3,
      Name: "SideProject",
      Url: "https://daniel-lolchams.herokuapp.com/"
    },
    {
      Id: 4,
      Name: "Linkedin",
      Url: "https://www.linkedin.com/in/dainel-tram-21177171/"
    }
  ],
  skills: [
    {
      Id: 1,
      Name: "Front-End",
      ListItems:
        "JavaScript (ES 5/6), React/Redux, J-Query, Bootstrap, AJAX, HTML5, CSS3, UI Bootstrap, UI Router, AXIOS."
    },
    {
      Id: 2,
      Name: "Middle-Tier",
      ListItems:
        "NodeJS, Express, Async, AWS SDK, AWS API Gateway, JSON Web Token, Passport, Web Sockets, Tedious."
    },
    {
      Id: 3,
      Name: "Back-End",
      ListItems: " SQL-Sever Management Studio, T-SQL."
    },
    {
      Id: 4,
      Name: "Other Technical",
      ListItems: "Visual Studio Code, Visual Studio, Git, Git-Hub, Team Foundation Server (TFS), Chrome Dev Tools, React/Redux Dev Tools,"+
       "Google Maps, Google, Microsoft Office, Npm JS, Reactstrap, Trello Board."
    }
  ],
  experiences: [
    {
      Place: "CSU Chancellor's Office, Long Beach CA",
      Date: "Feb, 2019 – present",
      JobTitle: "Web Developer",
      Label: "Link",
      Url: "https://www2.calstate.edu/",
      Descriptions: ` <ul>
        <li>
          Develop and implement appropriate internet/intranet solutions to
          meet customer requirements.
        </li>
        <li>
          Assist in the programming and ongoing maintenance of website pages
          including content updates, coding, and graphics.
        </li>
        <li>
          Assist in development of web templates and style sheets
        </li>
        <li>
          Work closely with both Communications staff and client to ensure
          project quality and timely completion of deliverables.
        </li>
        <li>
          Address any concerns regarding technical operations with Manager,
          Web Development.
        </li>
      </ul>`
    },
    {
      Place: "Grolo Project, Culver City CA",
      Date: "2018 – 2019",
      JobTitle: "Full Stack JavaScript Developer",
      Label: "Link",
      Url: "https://grolo.azurewebsites.net/admin/appuser/login/",
      Descriptions: `  <p>
            Grolo is a multi-tenant software-as-a-service white label platform
            for marketing agencies. Agencies subscribe to Grolo and use it to
            provide a branded application for small and medium local businesses
            to implement social media marketing campaigns and customer loyalty
            programs. The agency, in turn, may configure subscription levels for
            their business clients from freemium minimal support to more
            full-service support where agency representatives actively manage
            campaigns and loyalty programs.
          </p>
          <p>Implemented:</p>
          <ul>
            <li>
              Created full stack Blog for Businesses and Agencies to share their
              views on individual subject.
            </li>
            <li>
              Created a small module that helps our Node.js team to handle
              converting data from SQL to RESTClient.
            </li>
            <li>
              Full stack on Post, where multiple Businesses can create and share
              their advertisement with Social Media.
            </li>
            <li>
              Also designed and implemented the importing CSV file, including
              custom components for surfacing and mapping multiple columns to
              deal with CSV files and table in My-SQL.
            </li>
          </ul>
          <p>
            The application is implemented as a Node.js/Express.js web
            application backed by Microsoft SQL. Server database exposed via
            RESTful Web API. The web client employs ReactJS and responsive web
            design practices for desktop, tablet and mobile devices. Employed an
            agile development process with daily standups and Trello for task
            management. Technologies include Visual Studio 2017.
          </p>`
    },
    {
      Place: "Reactionists Project- Automobility LA Hackathon",
      Date: "Nov, 2018 - Nov, 2018",
      JobTitle: "Full Stack JavaScript Developer- Idea Generator",
      Label: "Link",
      Url: "https://www2.calstate.edu/",
      Descriptions: `<p>
            The project’s missions are to release the burden on Los Angeles’s
            transportation, improve the economy and reputation of neighbors and
            area, and prepare for international events (Olympic 2028) based on
            GM’s Next Generation Infotainment Emulator to design an efficient
            App. Our team was using GM Vehicle APIs and VISA APIs to get real
            time vehicle information such as vehicle speed, location, make,
            secure payment transaction with Visa Payments Processing, VISA Queue
            Insight, and more.
          </p>`
    }
  ],
  education: {
    Name: "El Camino College",
    Date: "2014 - 2017",
    Degree: "Associate of Science (AS) programming in Accounting"
  }
};

export { resumeInfor };
