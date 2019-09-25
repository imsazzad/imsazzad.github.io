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
        title: "Project Surveillance, Epidemiology, End Results Program (“SEER”)",
        icon: vision,
        description: "<p> 'Project SEER' attempts to detect the type (Benign, Uncertain, Carcinoma in Situ, Malignant )of breast cancer based on the SEER dataset from the National Institutes of Health (NIH). To classify the patients, we explored several traditional machine learning and deep learning techniques such as Support vector machine, Decision tree, Logistic regression, Naive Bayes, Feedforward, and Recurrent neural networks. We filled in some gaps in the data by preprocessing using imputation and other techniques. We identified 15 key features (out of 138 attributes) from the dataset, such as “CS Lymph Nodes”, “CS tumor age”, “Age at diagnosis”, “Tumor marker” etc. Our final dataset consisted of ~1.6 million breast cancer records. After training our data model, we achieved ~98% accuracy using a deep learning architecture. Then we tuned the parameters and were able to increase the accuracy to 99.25%. In summary, some of our algorithm’s predictions were accurate 99.25% of the time in detecting which of the 4 classes or types of breast cancer were present in the data.</p>",
        githubPath: null,
        demoPath: null,
        year: "Dec 2017 – Feb 2018",
        techUsed: "Python, TensorFlow, Keras, Traditional ML and DL"
    },
    {
        id: 6,
        title: "AnnaLytx: An intelligent conversational virtual agent",
        icon: like,
        description: "",
        githubPath: null,
        demoPath: null,
        year: "May 2017 – Dec 2017",
        techUsed: "React, Python, Dialogue-flow, AWS, Watson conversation& discovery etc."
    },
    {
        id: 5,
        title: "DeepCare: Activity Recognition via Deep Learning",
        icon: dare,
        description: "<p><ul><li>The DeepCare solution allows Certified Nursing Assistants (CNAs) and nurses to monitor more closely the ambulatory status of residents at eldercare and assisted living facilities. DeepCare uses Deep Learning and other machine learning techniques to determine whether a resident is sitting, walking, standing or climbing stairs. Wearables or smartphones outfitted with the app continuously sends sensor (accelerometer, gyroscope, GPS) data to a back-end server. The system then uses the machine-learning models to accurately predict the class of activity the user is performing.</li>" +
            +"<li>The system then continuously sends status notifications to caregivers via both a desktop web application and a mobile app. When the system detects adverse (e.g. such as falling) or unusual events (such as no motion for a long time during the day) alerts are sent both to companion apps worn by caregivers and a web application that might be installed at a nurse’s station</li>" +
            "</ul></p>",
        githubPath: null,
        demoPath: null,
        year: "Jan 2017 – Apr 2017",
        techUsed: "Java, Dropwizard, Python, Flask, Hibernate, tensorflow, Keras"
    },
    {
        id: 4,
        title: "Random Acts of Pizza : Kaggle Competition",
        icon: journey,
        description: "Journey feature on the Zoojoobe platform is a set of curated activities that are a set of micro-tasks that a user has to form to achieve a bigger goal like forming a complex habit. Journey feature has multiple levels which changes based on user activity. The whole task list is customised based on user activity.",
        githubPath: null,
        demoPath: null,
        year: "Nov 2016 – Dec 2016",
        techUsed: "Python"
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
