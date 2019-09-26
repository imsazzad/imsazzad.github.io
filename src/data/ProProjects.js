import pregnancy from '../assets/images/projects/pregnancy.svg'
import like from '../assets/images/projects/social.svg'
import dare from '../assets/images/projects/dare.svg'
import journey from '../assets/images/projects/journey.svg'
import website from '../assets/images/projects/website.svg'
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
        demoPath: "http://deepvision.infolytx.net/",
        year: "July 2018 – Oct 2018",
        techUsed: "Deep Learning, ReactJS, AWS, Serverless Architecture, SQL, JS"
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
        demoPath: "https://portal.dbmi.hms.harvard.edu/projects/n2c2-t1/",
        year: "Mar 2018 – May 2018",
        techUsed: "Java, CTakes,"
    },
    {
        id: 6,
        title: "AnnaLytx: An intelligent conversational virtual agent",
        icon: like,
        description: "<p>Anna is our intelligent conversation virtual agent who can help you with all things Infolytx. She can help you learn more about who we are and what we do. She can help you apply for a position with us. She can carry on a conversation with you, joke with you, tell you the weather in Vladivostok, or the time in Tumbuktoo. Here we use Our expertise in NLP, information extraction, AI and Machine Learning coupled with our experience in developing cognitive agents using multiple frameworks including IBM’s Watson, Google’s Dialog flow, and Amazon’s Alexa.</p>" +
            "<p>Key Features: <p>" +
            " <ul>" +
            "<li>Able to participate in the complex and nuanced conversation, where she understands the context</li>" +
            "<li>Engage in natural sounding small talk to make the conversation appear engaging</li>" +
            "<li>Support task-directed conversation as she directs prospective candidates to submit applications for potential positions with Infolytx.</li>" +
            "<li>Answer who and why questions from both local and the wider web content by applying NLP and IR techniques to extract answers to who and why question</li>" +
            "<li>Demonstrate richer and in-context intelligence by the ability to answer questions about the time and weather globally.</li>" +
            "</ul></p>" +
            "<p>What I did here: <p>" +
            " <ul>" +
            "<li>Designed the solution so that it can be reused for multiple clients. ( Our team used this framework for another two client projects successfully.)</li>" +
            "<li>Answered initial who and why questions from conversation & discovery by applying NLP and IR techniques to extract answers to who and why question</li>" +
            "</ul></p>",
        githubPath: null,
        demoPath: "https://www.infolytx.com/our-insights/portfolio-items/annalytx/",
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
        description: "This competition contains a dataset with 5671 textual requests for pizza from the Reddit community Random Acts of Pizza together with their outcome (successful/unsuccessful) and meta-data. We created an algorithm capable of predicting which requests will garner a cheesy (but sincere!) act of kindness.",
        githubPath: null,
        demoPath: null,
        year: "Nov 2016 – Dec 2016",
        techUsed: "Python, traditional ML, LDA"
    },
    {
        id: 3,
        title: "Unstructured Data Analysis",
        icon: pregnancy,
        description: "<p>Worked with a team to develop a web application, using the Ionic Framework, Java to annotate Risk factors like Hyperlipidemia, Diabetic, Hypertension, Obesity using Regular Expression and other technics and convert it to CDA(Clinical Document Architecture) which is a popular, flexible structure of clinical health records defined by Health Level 7 International (HL7 ) </p>" +
            "<p>Accomplishments: <p>" +
            " <ul></li>" +
            "<li>Designed and developed user-friendly interface for easy navigation</li>" +
            "<li>Optimized REST responses from a Java-based backend to efficiently send and receive application data</li>" +
            "<li>Led code management and maintenance for multiple developers using Git, JIRA, TDD, CI/CD, Code Analysis, Code Coverage</li>" +
            "<li>Worked in a team using Agile methodologies, collaborating with the client and improving the application through continuous feedback.</li>" +
            "</ul></p>",
        githubPath: null,
        demoPath: "http://uda.infolytx.net/",
        year: "Jun 2016 – Oct 2016",
        techUsed: "Java, AngularJS, MongoDB, cTakes, NLP CDA, UMLS, SNOMED CT, LOINC etc"
    },
    {
        id: 2,
        title: "PharmaCoWatch",
        icon: website,
        description: "<p>A Java-based PaaS Solution where content from sources like FDA and social media has been parsed, analyzed using Big Data technology to build a Machine Learning Predictive Model for adverse drugs reaction intelligence</p>" +
            +"<p>Accomplishments:</p>" +
            " <ul>" +
            "<li>Optimized REST responses from a Java-based backend to efficiently send and receive application data</li>" +
            "<li>Led code management and maintenance for multiple developers using Git, JIRA, TDD, CI/CD, Code Analysis, Code Coverage</li>" +
            "<li>Worked in a team using Agile methodologies, collaborating with the client and improving the application through continuous feedback.</li>" +
            "<li>Assisted in designing and writing intricate SQL queries to process the data.</li>" +
            "</ul></p>",
        githubPath: null,
        demoPath: null,
        year: "Feb 2016",
        techUsed: "Hadoop, RapidMiner-ML package, cTakes - Clinical Text Analysis platform, NLP"
    },
    {
        id: 1,
        title: "Pharmalytx",
        icon: website,
        description: "<p>Sales force ennoblement for Pharma</p>" +
            " <ul>" +
            "<li>Profiling and Ranking Physicians</li>" +
            "<li>Generating Drug recommendations for Physicians using Data Analytics (Classification, Clustering, Association rules)</li>" +
            "</ul></p>",
        githubPath: null,
        demoPath: null,
        year: "Oct 2015",
        techUsed: "java, aws , rapid miner, xamarin"
    },
    {
        id: 10,
        title: "Bdipo",
        icon: website,
        description:
            " <ul>" +
            "<li>Automated form filler, result and news of IPO application in Bangladesh, IPO result in Bangladesh</li>" +
            "<li>Worked on form filler, result of IPO application of bdipo</li>" +
            "</ul></p>",
        githubPath: null,
        demoPath: "http://www.bdipo.com/",
        year: "Sep 2014 – Aug 2015",
        techUsed: "java, aws , rapid miner, xamarin"
    },
    {
        id: 11,
        title: "Stock Portfolio",
        icon: website,
        description:
            " <ul>" +
            "<li>Shows stocks information of user</li>" +
            "<li>Used Text parsing to parse user information from text file.</li>" +
            "<li>Used Ruby on Rails, MySQL, Unit and Integration testing.</li>" +
            "</ul></p>",
        githubPath: null,
        demoPath: "http://www.bdipo.com/",
        year: "Jun 2015 – Aug 2015",
        techUsed: "java, aws , rapid miner, xamarin"
    },
    {
        id: 12,
        title: "RetailAr",
        icon: website,
        description: "<p>Retail-Ar is a prototype showcasing the use of 3D modeling and augmented reality to promote specials and offers by retailers wanting to build a social media buzz among their most loyal followers.</p>" +
            "</p>",
        githubPath: null,
        demoPath: "https://www.youtube.com/watch?v=h2QLxQ0xkVo&feature=youtu.be",
        year: "Jun 2015 – Aug 2015",
        techUsed: "Ruby on rails, Android, java script, Boot Strap , Nginx, MySql, AWS"
    }

];
