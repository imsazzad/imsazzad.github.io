import pregnancy from '../assets/images/projects/pregnancy.svg'
import like from '../assets/images/projects/social.svg'
import dare from '../assets/images/projects/dare.svg'
import journey from '../assets/images/projects/journey.svg'
import website from '../assets/images/projects/website.svg'
import aware from '../assets/images/projects/aware.svg'
import email from '../assets/images/projects/email.svg'
import vision from '../assets/images/projects/vision.svg'
import search from '../assets/images/projects/search.svg'

export default [
    {
        id: 9,
        title: "Project DEEP VISION ( Object Recognition & Localization )",
        icon: email,
        description: "The project has two parts.One part was to find out the machine learning solution for object recognition\n" +
            "& the second part is building the software part on top of it. I have worked on both part. In this RnD I\n" +
            "had to find out using what minimum images for training we can have a good precision & recall in both\n" +
            "object recognition and localization. we use 20% data for training and 80% for testing. still, we got a\n" +
            "decent accuracy of 90%. I used both traditional machine learning and Deep learning for this work.t\n" +
            "Then We have to build a multi-tenant software on top of it so that multiple clients can use it. Here\n" +
            "we used YOLO algorithm to identify and localize objects.",
        githubPath: null,
        demoPath: null,
        year: "July 2018 – Oct 2018",
        techUsed: "Deep Learning, ReactJS, AWS, Serverless Architecture, SQL, JS"
    },
    {
        id: 8,
        title: "Project N2C2 ( Identifying Patients for Clinical Trials )",
        icon: search,
        description: "<p>First I want to share that For this work we were invited to present our work on a workshop is co-located with AMIA in San Francisco, California. </p>" +
            "<p>Patient cohort identification for the clinical trial is a fairly tedious and expensive component of the drug\n" +
            "development. Existing selection processes do not necessarily guarantee optimal selection. However, the\n" +
            "existence of EHRs and the application of\n" +
            "(NLP) techniques such as IE can enable automated, scalable, and\n" +
            "unbiased selection of patients who meet the selection criteria for clinical trials.\n" +
            "We built a knowledge-driven EHR medical Information Extraction framework by extending the\n" +
            "cTAKES natural language processing tool developed at the Mayo Clinic. cTakes is built on top of\n" +
            "the UIMA.<p> " +
            "<p>To support the needs of the selection criteria, we <p> " +

            "<ul><li>Incorporated medical ontology into the annotation framework to enhance the\n" +
            "recognition and extraction of medical terms - conditions, procedures, encounters etc.\n" +
            "Ontologies used include the National Library of Medicine's MeSH\n" +
            "ontology, UMLS ontology, Systematized\n" +
            "Nomenclature of Medicine -- Clinical Terms (SNOMED CT).</li>" +

            "<li>Created custom annotators to annotate the" +
            "<ul><li> value of a glycated hemoglobin test</li>" +
            "<li>identification of a myocardial infarction event</li> " +
            "<li>use of aspirin by a patient to prevent myocardial infarction</li>" +
            "<li>Diagnosis of ketoacidosis in the past year</li>" +
            "<li> history of intra-abdominal surgery, small or large intestine resection or small\n" +
            "bowel obstruction</li>" +
            "<li>existence of DM</li>" +
            "<li> the language spoken by the patient</li>" +
            "</ul>" +
            "</li>" +
            "<li>Structured unstructured clinical content such as EHRs by extracting and inferring medical terms such as findings, tests, procedures, diseases, etc using NLP techniques</li>" +
            "<li>Implemented Object Detection Algorithm to classify and localize an object in an image with 98%accuracy.</li>" +
            "<li>Created heuristics that applied combined medical knowledge into rules and are applied\n" +
            "to the annotated text to determine whether a selection criterion has been met.</li>" +
            "<li>Extended Wendy Chapman's NegEx algorithm determining negation from clinical reports\n" +
            "to determine negation on multiple negation phrases on one sentence</li>" +
            "</p>" +
            "<p>Initial results on test data gave us a macro precision of 87.16% and a macro recall of 82.79%\n" +
            "were very promising. </p>",
        githubPath: null,
        demoPath: null,
        year: "Mar 2018 – May 2018",
        techUsed: "Java, CTakes,"
    },
    {
        id: 7,
        title: "Vision ERA OCR",
        icon: vision,
        description: "Vision ERA platform uses OCR  technologies to extract relevant data from printed documents such as government ID cards and invoices while automating a significant amount of cognitive work. Developed the front-end using HTML5 Canvas with ReactJS, Material-UI for CSS and MobX for state management. The uploaded document is mapped onto the canvas which shows the highlighted co-ordinates by hovering over the extracted data and also allowing users to extract a snippet by selecting the mouse over the area.",
        githubPath: null,
        demoPath: null,
        year: "2019",
        techUsed: "React, Material-UI, MobX"
    },
    {
        id: 6,
        title: "Zoojoobe Social Stream",
        icon: like,
        description: "Social feed is a feature on the Zoojoobe platform that leverages on the social behaviour within the corporate.It allows users on the platform to share media that keeps them motivated to do a certain task. Like all other social feeds, Zoojoobe Stream also has social elements like liking, sharing, commenting, subscribing to a particular post and so on. Developed using ReactJS and draft-js-plugins, a react plugin architecture for Facebook's Draft.js which includes emojis, mentions and stickers. ",
        githubPath: null,
        demoPath: null,
        year: "2018",
        techUsed: "React, react-dropzone, draft-js-plugins"
    },
    {
        id: 5,
        title: "Zoojoobe Dare",
        icon: dare,
        description: "Dare is a feature on the Zoojoobe platform developed in ReactJS that primarily focuses on the competitive behaviour of the users. Two users compete with each other to complete a particular healthy task. Meanwhile other users within the corporate can motivate the user using the cheer function.",
        githubPath: null,
        demoPath: null,
        year: "2017",
        techUsed: "React, Material-UI"
    },
    {
        id: 4,
        title: "Zoojoobe Journey",
        icon: journey,
        description: "Journey feature on the Zoojoobe platform is a set of curated activities that are a set of micro-tasks that a user has to form to achieve a bigger goal like forming a complex habit. Journey feature has multiple levels which changes based on user activity. The whole task list is customised based on user activity.",
        githubPath: null,
        demoPath: null,
        year: "2017",
        techUsed: "React, Material-UI"
    },
    {
        id: 3,
        title: "Zoojoobe Pregnancy module",
        icon: pregnancy,
        description: "Maternity module was primarily designed for the women within a corporate. The feature takes into account the user's due date based on which it recommends articles and relevant mindfulness tracks. This feature helps them stay healthy throughout the process.",
        githubPath: null,
        demoPath: null,
        year: "2017",
        techUsed: "React, Material-UI, React-Sound-Manager"
    },
    {
        id: 2,
        title: "Zoojoobe Sales website",
        icon: website,
        description: "Zoojoobe is a game based social wellness platform that unites the workforce to form healthier habits. The platform leverages on the tremendous power of the trusted social network at our workplace to motivate employees to form healthier habits. Developed the sales website on wordpress.",
        githubPath: null,
        demoPath: "https://www.zoojoo.be",
        year: "2016",
        techUsed: "HTML, CSS, jquery"
    },
    {
        id: 1,
        title: "Aware Dashboard",
        icon: aware,
        description: "Aware is a mindfulness meditation mobile app which provides guided meditation sessions to users. Developed the web front end for Aware Dashboard using ReactJS. Some of the features of this dashboard include User Profile, App related stats, Coupon redemption, Gifting module and Payment gateway integration using Paddle.",
        githubPath: null,
        demoPath: "https://my.awaremeditationapp.com/",
        year: "2017",
        techUsed: "React, Material-UI, SASS"
    },

];
