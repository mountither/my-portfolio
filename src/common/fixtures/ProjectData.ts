export type StackCategories =
  | "Design"
  | "Frontend"
  | "Backend"
  | "DevOps"
  | "Other";

type StackInfo = {
  title: string;
  desc: string;
  links?: Array<{ type: "content" | "source-code" | "other"; url: string }>;
};

export type ProjectData = {
  title: string;
  desc?: string;
  image?: string;
  sourceCode?: string;
  links?: Array<string>;
  cardSize: "sm" | "md" | "lg";
  bgColour: string;
  category: string;
  stack: {
    [key in StackCategories | string]?: StackInfo[];
  };
};

export const TECH_STACK_BG_COLOURS = [
  "bg-[#E9CD84]",
  "bg-[#043e69]",
  "bg-[#043356]",
  "bg-[#04233b]",
  "bg-[#031727]",
];

export const projectData: ProjectData[] = [
  {
    title: "BingeNabe",
    desc: "Cross-platform (iOS and Android) film and tv social network app.",
    category: "Mobile",
    links: ["https://www.bingenabe.app/"],
    bgColour: "bg-[#43afa2]",
    cardSize: "lg",
    stack: {
      Design: [
        {
          title: "App prototype (Figma)",
          desc: "UI & UX designs for app's screens and components.",
          links: [
            {
              type: "content",
              url: "https://www.figma.com/file/bZwrg4tAEIlGVgDqkR83yX/BingeNabe-Designs?node-id=35%3A0",
            },
          ],
        },
      ],
      Frontend: [
        {
          title: "UI Development (React Native - Typescript)",
          desc: "Cross platform solution for implementing the app's UI and functionality. App's styling was designed with Tailwind CSS.",
        },
        {
          title: "Animations (Reanimated library)",
          desc: "Used to create smooth animations and interactions throughout the app.",
        },
        {
          title: "State Management (Redux + Redux toolkit + Persist)",
          desc: "Redux is used to manage and store shareable state where necessary.",
        },
        {
          title: "Comment section",
          desc: "A comment section is implemented for 'topics' and 'watchlists'. The 'chat-like' comment section leverages firestore's database listeners with a custom implementation of bidirectional on-scroll pagination.",
        },
      ],
      Backend: [
        {
          title: "BaaS (Firebase)",
          desc: "Backend solution. Services utilised: Authentication (inc. 3rd party registration), Database/Storage, Cloud functions, Push notification capability and Beta builds distribution.",
        },
        {
          title: "Email Delivery (SendGrid)",
          desc: "Email delivery service used to send custom email templates to verify emails, password resets and other user communication.",
        },
        {
          title: "API (TMDB)",
          desc: "Integrated to retrieve open source film and tv related data.",
        },
      ],
      DevOps: [
        {
          title: "Fastlane",
          desc: "Used to automate Beta and Production releases. Fastlane integrates with the App Store and Play Store to upload metadata, screenshots and builds. Other integrated tasks include; CodePush and version control via Github.",
        },
        {
          title: "CodePush",
          desc: "Used to deploy updates to the current app version without rebuilding/redeploying to the App Store or Play Store. This tool is very useful in addressing bugs and small features in a timely manner without the hassle of application reviews and build times.",
        },
      ],
      Other: [
        {
          title: "Companion website (Next JS)",
          desc: "Promotes the app and provides links to the app store and play store. Documents such as Terms of use and Privacy policy are stored via Markdown. In addition, a support form is used to allow users to send questions (easily setup with Next JS's API routes).",
        },
      ],
    },
  },
  {
    title: "ePatientKeeper",
    desc: "A comprehensive web application for managing patient data, prescriptions, and medical records, optimized for both desktop and mobile use.",
    category: "Web/PWA",
    bgColour: "bg-[#b0af7f]",
    links: ["https://epatientkeeper.com"],
    cardSize: "lg",
    stack: {
      Design: [
        {
          title: "Responsive Design",
          desc: "Optimized for both desktop and mobile platforms, ensuring a seamless user experience across devices.",
        },
      ],
      Frontend: [
        {
          title: "UI Development (React - Typescript)",
          desc: "Implemented a user-friendly interface for managing patient data and prescriptions.",
        },
        {
          title: "State Management (React Hook Form)",
          desc: "Ensured efficient state management for patient data input and form handling.",
        },
        {
          title: "OCR Integration (Google Vertex AI)",
          desc: "Integrated OCR capabilities to automatically detect and position fields on medical prescriptions.",
        },
        {
          title: "Localization (i18n)",
          desc: "Supported multiple languages to cater to a diverse user base.",
        },
      ],
      Backend: [
        {
          title: "BaaS (Firebase)",
          desc: "Utilized Firebase for Authentication, Firestore for Database, and Cloud Storage for storing medical records.",
        },
        {
          title: "API (Google Vertex AI)",
          desc: "Used Google Vertex AI for OCR to extract positions of fields on medical prescriptions.",
        },
      ],
      DevOps: [
        {
          title: "Deployment (Vercel)",
          desc: "Deployed the application on Vercel, ensuring continuous integration and deployment.",
        },
      ],
      Other: [
        {
          title: "Statistics",
          desc: "Managed over 1,500 patient records, generated 2,000+ successful prescriptions, and supported 5 doctors using the platform.",
        },
      ],
    },
  },
  {
    title: "Jobora",
    desc: "A talent matching platform for the modern workplace, optimised for web and mobile.",
    category: "Web/Mobile",
    links: ["https://jobora.com.au"],
    bgColour: "bg-[#3c6e71]",
    cardSize: "md",
    stack: {
      Design: [
        {
          title: "Responsive Design",
          desc: "Optimised for web, iOS, and Android platforms, ensuring a seamless user experience across devices.",
        },
      ],
      Frontend: [
        {
          title: "UI Development (Expo - React Native Web)",
          desc: "Implemented a user-friendly interface for both web and mobile platforms using Expo and React Native Web.",
        },
        {
          title: "State Management (Redux Toolkit)",
          desc: "Ensured efficient state management for user data, job listings, and application processes.",
        },
        {
          title: "AI Integration",
          desc: "Integrated advanced AI algorithms for precise talent matching and job recommendations.",
        },
      ],
      Backend: [
        {
          title: "Serverless Architecture (AWS Lambda)",
          desc: "Utilised AWS Lambda functions for scalable and efficient backend processing.",
        },
        {
          title: "Database (Amazon DynamoDB)",
          desc: "Leveraged DynamoDB for storing and managing user profiles, job listings, and matching data.",
        },
        {
          title: "API Integration (Jobaddr)",
          desc: "Integrated Jobaddr API for comprehensive recruitment management features.",
        },
      ],
      DevOps: [
        {
          title: "Deployment (AWS S3 & CloudFront)",
          desc: "Frontend code hosted on S3 and distributed via CloudFront for optimal performance and global reach.",
        },
        {
          title: "CI/CD (AWS CodePipeline)",
          desc: "Implemented continuous integration and deployment using AWS CodePipeline for streamlined updates.",
        },
      ],
      Other: [
        {
          title: "Analytics",
          desc: "Implemented data-driven insights on hiring trends and candidate performance using AWS Analytics services.",
        },
        {
          title: "Security",
          desc: "Ensured data protection and compliance with industry standards using AWS security features.",
        },
      ],
    },
  },
  {
    title: "Barber Software Solutions",
    desc: "Business solutions that allow customers to make and manage bookings for barbershops.",
    links: [
      "https://www.cornerbarberhouse.com.au/",
      "https://thegentscavebarber.com.au/",
    ],
    bgColour: "bg-[#976b70]",
    category: "Web",
    cardSize: "md",
    stack: {
      Design: [
        {
          title: "App prototype (Adobe XD)",
          desc: "UI & UX designs for the website's screens, components and other implementations.",
          links: [
            {
              type: "content",
              url: "https://xd.adobe.com/view/a2c04378-4197-462d-adcc-d8a6f53918da-f793/",
            },
          ],
        },
      ],
      Frontend: [
        {
          title: "UI Development (Next JS - Typescript)",
          desc: "A react framework used to render static and server rendered pages. Custom booking form/calendar.",
        },
        {
          title: "Blog",
          desc: "Notion SDK is used to retrieve blog posts and present them in HTML format. Used for news updates and SEO reasons.",
        },
        {
          title: "Server side & Static generated pages",
          desc: "Server side rendered pages include: manager's and customer's pages (check user roles on server). Statically generated pages include: About, Contact, Blog, etc. These rendering methods help with SEO and page performance.",
        },
        {
          title: "UI Development (React JS)",
          desc: "Implements pages and components with styling by sass preprocesser.",
        },
      ],
      Backend: [
        {
          title: "BaaS (Firebase)",
          desc: "Services include: Authentication (inc. 3rd party registration), Database/Storage and Cloud functions.",
        },
        {
          title: "Database",
          desc: "Realtime updates to booking times when user is selecting date/time. User details on authentication. Stores and analyses product and booking data in NoSQL format.",
        },
        {
          title: "IaaS (Google Compute Engine)",
          desc: "Hosts and runs docker images that consist of the frontend (reactjs), backend framework (nodejs) and web server (nginx)",
        },
        {
          title: "Email delivery (SendGrid)",
          desc: "Sends email to managers when booking is made. Sends customer email on response (accept/reject).",
        },
      ],
      DevOps: [
        {
          title: "Deployment (Vercel)",
          desc: "Website is hosted on Vercel. Github actions used to manage versioning, releases and deployments on push to main branch.",
        },
        {
          title: "Containers (Docker)",
          desc: "Used to automate deployment and cohesively integrate the frontend and backend together in development and production environments.",
        },
        {
          title: "HTTPS certification (Let's Encrypt)",
          desc: "Automated via daily scheduled cronjobs",
        },
        {
          title: "Reverse Proxy and Web server (nginx)",
          desc: "Used to serve the appropriate responses of website pages with correct ssl certificates and external links via email. Reverse proxy is used to direct users from port 80 (http) to port 443 (https).",
        },
      ],
      Other: [
        {
          title: "Admin Portal (Svelte)",
          desc: "A 'serverless' (invokes cloud functions) website that allows admin to create managers accounts for main site using the Svelte frontend framework.",
          links: [
            {
              type: "source-code",
              url: "https://github.com/mountither/cbh-admin-portal",
            },
          ],
        },
        {
          title: "Product management solution (Python/Flask micro-framework)",
          desc: "Manager portal that allows for product information (details and images) to be inserted.",
          links: [
            {
              type: "source-code",
              url: "https://github.com/mountither/gcb-product-flask-service",
            },
          ],
        },
        {
          title: "Statistics",
          desc: "Currently 500+ of bookings are made monthly across both applications and all 5 barbershop locations.",
        },
      ],
    },
  },
  {
    title: "Film/TV discovery + organiser",
    desc: "Browse through a large collection of film/tv catalogue. Users are able to create an account to review/rate and add entries in their watchlists.",
    links: ["https://filmtv-idd.netlify.app/"],
    bgColour: "bg-[#20c997]",
    category: "Web",
    cardSize: "md",
    stack: {
      Design: [
        {
          title: "App prototype (Figma)",
          desc: "UI & UX designs for app's screens and components.",
          links: [
            {
              type: "content",
              url: "https://www.figma.com/file/jQMkTrLZw7uMClisodsCCZ/Film.TV-web-app---designs?node-id=0%3A1",
            },
          ],
        },
      ],
      Frontend: [
        {
          title: "UI Development (Vue JS - Typescript)",
          desc: "Implements of all screens and components. Bootstrap is used as the CSS framework.",
          links: [
            {
              type: "source-code",
              url: "https://github.com/mountither/filmtv-idd",
            },
          ],
        },
        {
          title: "State Management (Vuex)",
          desc: "Global state management solution used to store and mutate data such as; user session info and watchlist info.",
        },
      ],
      Backend: [
        {
          title: "BaaS (Firebase)",
          desc: "Services include: Authentication (email/password), Database/Storage and Cloud functions.",
        },
      ],
      DevOps: [
        {
          title: "Hosting (Netlify)",
          desc: "A suitable hosting solution for static and 'serverless' (in this case) websites.",
        },
      ],
    },
  },
  {
    title: "Historical Mesopotamia",
    desc: "Scrapes wikipedia based data and presents it on a timeline. Each historical era is used to query museum artifacts from 6 museums.",
    links: ["https://www.historicalmesopotamia.com"],
    category: "Web",
    bgColour: "bg-[#566d8c]",
    cardSize: "md",
    stack: {
      Frontend: [
        {
          title: "Development (React JS)",
          desc: "Used to implement components found on two screens and drawer. Styling implemented with Chakra UI and GSAP.",
          links: [
            {
              type: "source-code",
              url: "https://github.com/mountither/museum-web-app",
            },
          ],
        },
        {
          title: "State management",
          desc: "Session storage used to cache some of timeline and gallery data. React in-built state management; Context API (consumes gallery state) and Reducer (used to organise state).",
        },
        {
          title: "APIs consumed",
          desc: "This site uses wikipedia api to fetch data for timeline and other information presented in the drawer. Museum APIs include: The MET, Victoria and Albert Museum, Harvard Art Museums, Science Museum Group, Museums Victoria and Arts Institute Chicago.",
        },
      ],
      DevOps: [
        {
          title: "Deployment (Vercel)",
          desc: "Vercel is the host for this site. Deployment is updated every time changes are pushed to main branch.",
        },
      ],
    },
  },
  {
    title: "VoIP calling app",
    desc: "A proof of concept project that implements WebRTC that allows users to request one-on-one voice calls.",
    links: ["https://github.com/mountither/voip-app"],
    bgColour: "bg-[#34B7F1]",
    category: "Mobile",
    cardSize: "md",
    stack: {
      Frontend: [
        {
          title: "UI Development (React Native - Typescript)",
          desc: "Cross platform solution for implementing the app's UI.",
          links: [
            {
              type: "source-code",
              url: "https://github.com/mountither/voip-app",
            },
          ],
        },
        {
          title: "WebRTC (react-native-webrtc)",
          desc: "WebRTC implementation library for react native.",
        },
        {
          title: "State Management",
          desc: "Redux used to manage call state such as; session meta data and whether calls are answered/ended/muted. The intent is to have the call opened while navigating throughout the app while having the call functionality available.",
        },
      ],
      Backend: [
        {
          title: "BaaS (Firebase)",
          desc: "Services include: Authentication (inc. 3rd party registration), Database/Storage (store user data and act as a signalling server) and Cloud functions",
        },
      ],
    },
  },
  {
    title: "Data Science Projects",
    bgColour: "bg-[#8b8b81]",
    category: "Other",
    cardSize: "md",
    stack: {
      "'Sustainability: Environment in Crisis' project": [
        {
          title: "Data Analysis (Jupyter Notebook)",
          desc: "Cleaning and structuring of csv files to use in graphs. Web scraping data from various websites.",
          links: [
            {
              type: "source-code",
              url: "https://github.com/mountither/DataVizSite/blob/master/public/notebook/EnvironmentDataSiteAnalysis.ipynb",
            },
          ],
        },
        {
          title: "Website (HTML, JS, CSS)",
          desc: "Includes graphs written in d3, Plotly and Leaflet.",
          links: [
            {
              type: "content",
              url: "https://statuesque-toffee-2a6e71.netlify.app/",
            },
          ],
        },
      ],
      "Logistic & KMeans Models": [
        {
          title: "Data Analysis (Jupyter Notebook)",
          desc: "Leveraging Numpy, Pandas and graph libs such as Seaborn to analyse wine data.",
          links: [
            {
              type: "source-code",
              url: "https://github.com/mountither/jupyter-notebooks-export/blob/main/Logistic_KMeans_Models.ipynb",
            },
          ],
        },
      ],
      // "Evaluation of various models (Car Park Data).": [
      //   {
      //     title: "Data Analysis (Jupyter Notebook)",
      //     desc: "",
      //     links: [{ type: "source-code", url: "" }],
      //   },
      // ],
    },
  },
  {
    title: "Other Projects",
    bgColour: "bg-[#545453]",
    category: "Other",
    cardSize: "md",
    stack: {
      Tools: [
        {
          title: "Better World Books price comparator",
          desc: "Web scraper written in Python with the selenium library. This tool finds any price drops in books added in wishlist and uses smptp lib to send an email.",
          links: [
            {
              type: "source-code",
              url: "https://github.com/mountither/books-status-scrape/blob/main/book_site_scrape.py",
            },
          ],
        },
        {
          title: "Github workflow scraper",
          desc: "Web scraper used to extract tests run on every push and output in csv for further analysis. Written in python.",
          links: [
            {
              type: "source-code",
              url: "https://github.com/mountither/workflows-scraper/blob/main/scraper.py",
            },
          ],
        },
        {
          title: "String search in multiple PDFs",
          desc: "Fast way to find text in multiple pdf files in a given folder and returns a file location and page number. Written in C#.",
          links: [
            {
              type: "source-code",
              url: "https://github.com/mountither/pdf-string-search",
            },
          ],
        },
      ],
    },
  },
];
