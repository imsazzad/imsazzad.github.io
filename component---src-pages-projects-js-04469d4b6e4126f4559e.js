(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{147:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),o=i(196),r=(i(185),i(186)),l=i.n(r),s=i(187),c=i.n(s),d=i(188),u=i.n(d),g=i(189),M=i.n(g),m=i(190),I=i.n(m),p=i(191),h=i.n(p),y=i(192),L=i.n(y),j=i(193),D=i.n(j),N=[{id:9,title:"Project DEEP VISION ( Object Recognition & Localization )",icon:h.a,description:"The project has two parts.One part was to find out the machine learning solution for object recognition\n& the second part is building the software part on top of it. I have worked on both part. In this RnD I\nhad to find out using what minimum images for training we can have a good precision & recall in both\nobject recognition and localization. we use 20% data for training and 80% for testing. still, we got a\ndecent accuracy of 90%. I used both traditional machine learning and Deep learning for this work.t\nThen We have to build a multi-tenant software on top of it so that multiple clients can use it. Here\nwe used YOLO algorithm to identify and localize objects.",githubPath:null,demoPath:"http://deepvision.infolytx.net/",year:"July 2018 – Oct 2018",techUsed:"Deep Learning, ReactJS, AWS, Serverless Architecture, SQL, JS"},{id:7,title:"Project Surveillance, Epidemiology, End Results Program (“SEER”)",icon:L.a,description:"<p> 'Project SEER' attempts to detect the type (Benign, Uncertain, Carcinoma in Situ, Malignant )of breast cancer based on the SEER dataset from the National Institutes of Health (NIH). To classify the patients, we explored several traditional machine learning and deep learning techniques such as Support vector machine, Decision tree, Logistic regression, Naive Bayes, Feedforward, and Recurrent neural networks. We filled in some gaps in the data by preprocessing using imputation and other techniques. We identified 15 key features (out of 138 attributes) from the dataset, such as “CS Lymph Nodes”, “CS tumor age”, “Age at diagnosis”, “Tumor marker” etc. Our final dataset consisted of ~1.6 million breast cancer records. After training our data model, we achieved ~98% accuracy using a deep learning architecture. Then we tuned the parameters and were able to increase the accuracy to 99.25%. In summary, some of our algorithm’s predictions were accurate 99.25% of the time in detecting which of the 4 classes or types of breast cancer were present in the data.</p>",githubPath:null,demoPath:null,year:"Dec 2017 – Feb 2018",techUsed:"Python, TensorFlow, Keras, Traditional ML and DL"},{id:8,title:"Project N2C2 ( Identifying Patients for Clinical Trials )",icon:D.a,description:"<p>First I want to share that For this work we were invited to present our work on a workshop is co-located with AMIA in San Francisco, California. </p><p>Patient cohort identification for the clinical trial is a fairly tedious and expensive component of the drug\ndevelopment. Existing selection processes do not necessarily guarantee optimal selection. However, the\nexistence of EHRs and the application of\n(NLP) techniques such as IE can enable automated, scalable, and\nunbiased selection of patients who meet the selection criteria for clinical trials.\nWe built a knowledge-driven EHR medical Information Extraction framework by extending the\ncTAKES natural language processing tool developed at the Mayo Clinic. cTakes is built on top of\nthe UIMA.<p> <p>To support the needs of the selection criteria, we <p> <ul><li>Incorporated medical ontology into the annotation framework to enhance the\nrecognition and extraction of medical terms - conditions, procedures, encounters etc.\nOntologies used include the National Library of Medicine's MeSH\nontology, UMLS ontology, Systematized\nNomenclature of Medicine -- Clinical Terms (SNOMED CT).</li><li>Created custom annotators to annotate the<ul><li> value of a glycated hemoglobin test</li><li>identification of a myocardial infarction event</li> <li>use of aspirin by a patient to prevent myocardial infarction</li><li>Diagnosis of ketoacidosis in the past year</li><li> history of intra-abdominal surgery, small or large intestine resection or small\nbowel obstruction</li><li>existence of DM</li><li> the language spoken by the patient</li></ul></li><li>Structured unstructured clinical content such as EHRs by extracting and inferring medical terms such as findings, tests, procedures, diseases, etc using NLP techniques</li><li>Implemented Object Detection Algorithm to classify and localize an object in an image with 98%accuracy.</li><li>Created heuristics that applied combined medical knowledge into rules and are applied\nto the annotated text to determine whether a selection criterion has been met.</li><li>Extended Wendy Chapman's NegEx algorithm determining negation from clinical reports\nto determine negation on multiple negation phrases on one sentence</li></p><p>Initial results on test data gave us a macro precision of 87.16% and a macro recall of 82.79%\nwere very promising. </p>",githubPath:null,demoPath:"https://portal.dbmi.hms.harvard.edu/projects/n2c2-t1/",year:"Mar 2018 – May 2018",techUsed:"Java, CTakes,"},{id:6,title:"AnnaLytx: An intelligent conversational virtual agent",icon:c.a,description:"<p>Anna is our intelligent conversation virtual agent who can help you with all things Infolytx. She can help you learn more about who we are and what we do. She can help you apply for a position with us. She can carry on a conversation with you, joke with you, tell you the weather in Vladivostok, or the time in Tumbuktoo. Here we use Our expertise in NLP, information extraction, AI and Machine Learning coupled with our experience in developing cognitive agents using multiple frameworks including IBM’s Watson, Google’s Dialog flow, and Amazon’s Alexa.</p><p>Key Features: <p> <ul><li>Able to participate in the complex and nuanced conversation, where she understands the context</li><li>Engage in natural sounding small talk to make the conversation appear engaging</li><li>Support task-directed conversation as she directs prospective candidates to submit applications for potential positions with Infolytx.</li><li>Answer who and why questions from both local and the wider web content by applying NLP and IR techniques to extract answers to who and why question</li><li>Demonstrate richer and in-context intelligence by the ability to answer questions about the time and weather globally.</li></ul></p><p>What I did here: <p> <ul><li>Designed the solution so that it can be reused for multiple clients. ( Our team used this framework for another two client projects successfully.)</li><li>Answered initial who and why questions from conversation & discovery by applying NLP and IR techniques to extract answers to who and why question</li></ul></p>",githubPath:null,demoPath:"https://www.infolytx.com/our-insights/portfolio-items/annalytx/",year:"May 2017 – Dec 2017",techUsed:"React, Python, Dialogue-flow, AWS, Watson conversation& discovery etc."},{id:5,title:"DeepCare: Activity Recognition via Deep Learning",icon:u.a,description:"<p><ul><li>The DeepCare solution allows Certified Nursing Assistants (CNAs) and nurses to monitor more closely the ambulatory status of residents at eldercare and assisted living facilities. DeepCare uses Deep Learning and other machine learning techniques to determine whether a resident is sitting, walking, standing or climbing stairs. Wearables or smartphones outfitted with the app continuously sends sensor (accelerometer, gyroscope, GPS) data to a back-end server. The system then uses the machine-learning models to accurately predict the class of activity the user is performing.</li>NaN</ul></p>",githubPath:null,demoPath:null,year:"Jan 2017 – Apr 2017",techUsed:"Java, Dropwizard, Python, Flask, Hibernate, tensorflow, Keras"},{id:4,title:"Random Acts of Pizza : Kaggle Competition",icon:M.a,description:"This competition contains a dataset with 5671 textual requests for pizza from the Reddit community Random Acts of Pizza together with their outcome (successful/unsuccessful) and meta-data. We created an algorithm capable of predicting which requests will garner a cheesy (but sincere!) act of kindness.",githubPath:null,demoPath:null,year:"Nov 2016 – Dec 2016",techUsed:"Python, traditional ML, LDA"},{id:3,title:"Unstructured Data Analysis",icon:l.a,description:"<p>Worked with a team to develop a web application, using the Ionic Framework, Java to annotate Risk factors like Hyperlipidemia, Diabetic, Hypertension, Obesity using Regular Expression and other technics and convert it to CDA(Clinical Document Architecture) which is a popular, flexible structure of clinical health records defined by Health Level 7 International (HL7 ) </p><p>Accomplishments: <p> <ul></li><li>Designed and developed user-friendly interface for easy navigation</li><li>Optimized REST responses from a Java-based backend to efficiently send and receive application data</li><li>Led code management and maintenance for multiple developers using Git, JIRA, TDD, CI/CD, Code Analysis, Code Coverage</li><li>Worked in a team using Agile methodologies, collaborating with the client and improving the application through continuous feedback.</li></ul></p>",githubPath:null,demoPath:"http://uda.infolytx.net/",year:"Jun 2016 – Oct 2016",techUsed:"Java, AngularJS, MongoDB, cTakes, NLP CDA, UMLS, SNOMED CT, LOINC etc"},{id:2,title:"PharmaCoWatch",icon:I.a,description:"<p>A Java-based PaaS Solution where content from sources like FDA and social media has been parsed, analyzed using Big Data technology to build a Machine Learning Predictive Model for adverse drugs reaction intelligence</p>NaN <ul><li>Optimized REST responses from a Java-based backend to efficiently send and receive application data</li><li>Led code management and maintenance for multiple developers using Git, JIRA, TDD, CI/CD, Code Analysis, Code Coverage</li><li>Worked in a team using Agile methodologies, collaborating with the client and improving the application through continuous feedback.</li><li>Assisted in designing and writing intricate SQL queries to process the data.</li></ul></p>",githubPath:null,demoPath:null,year:"Feb 2016",techUsed:"Hadoop, RapidMiner-ML package, cTakes - Clinical Text Analysis platform, NLP"},{id:1,title:"Pharmalytx",icon:I.a,description:"<p>Sales force ennoblement for Pharma</p> <ul><li>Profiling and Ranking Physicians</li><li>Generating Drug recommendations for Physicians using Data Analytics (Classification, Clustering, Association rules)</li></ul></p>",githubPath:null,demoPath:null,year:"Oct 2015",techUsed:"java, aws , rapid miner, xamarin"},{id:10,title:"Bdipo",icon:I.a,description:" <ul><li>Automated form filler, result and news of IPO application in Bangladesh, IPO result in Bangladesh</li><li>Worked on form filler, result of IPO application of bdipo</li></ul></p>",githubPath:null,demoPath:"http://www.bdipo.com/",year:"Sep 2014 – Aug 2015",techUsed:"java, aws , rapid miner, xamarin"},{id:11,title:"Stock Portfolio",icon:I.a,description:" <ul><li>Shows stocks information of user</li><li>Used Text parsing to parse user information from text file.</li><li>Used Ruby on Rails, MySQL, Unit and Integration testing.</li></ul></p>",githubPath:null,demoPath:"http://www.bdipo.com/",year:"Jun 2015 – Aug 2015",techUsed:"java, aws , rapid miner, xamarin"},{id:12,title:"RetailAr",icon:I.a,description:"<p>Retail-Ar is a prototype showcasing the use of 3D modeling and augmented reality to promote specials and offers by retailers wanting to build a social media buzz among their most loyal followers.</p></p>",githubPath:null,demoPath:"https://www.youtube.com/watch?v=h2QLxQ0xkVo&feature=youtu.be",year:"Jun 2015 – Aug 2015",techUsed:"Ruby on rails, Android, java script, Boot Strap , Nginx, MySql, AWS"}],S=i(194),A=i.n(S),w=i(195),f=i.n(w),x=[{id:1,title:"4 bit Processor design",icon:A.a,description:"Detailed design of a 4 bit processor and its full simulation was done in this project.\nThe processor includes 32 instructions, has no pipelines .\nAverage CPI is 5 where maximum CPI is 6.\nSimulation was done with Proteus.\nA separate ALU unit and a Modified Booth Multiplier was designed and implemented with LSI chips as part of the project",githubPath:null,demoPath:null,year:"June 2013",techUsed:null},{id:3,title:"Doctor’s Community",description:"It is a social networking site like “Facebook”, but mostly for doctors.\nKey features :\nDistinct profile for doctors\nSharing knowledge between doctors\nSearching doctor’s location with specific criteria\nSpecific class of doctor’s community\nSearching and learning on various diseases\nA great chance for advertisement for medicine companies and medical clinics.",icon:f.a,githubPath:null,demoPath:null,year:"June 2012",techUsed:" . NET , C# , oracle 10g"},{id:4,title:"Share Bazar Automation",description:"It is designed and implemented to help a person to buy a company share with some hypothetical analysis and observing the data. It has different indicator giving positive or negative decision by analyzing data of that company’s share.",icon:f.a,githubPath:null,demoPath:null,year:"November 2010",techUsed:"NET , C# , oracle 10g"},{id:5,title:"Media player",description:"My media player can play audio of all format and video of mpeg and mpg format. User can choose which file is to be selected by file chooser for playing",icon:f.a,githubPath:null,demoPath:null,year:"October 2010",techUsed:"Java"},{id:6,title:"Scientific calculator",description:"It can operate two integer, float of any number of digits. The operations are addition , subtraction , multiplication , division , inverse , logarithm , square , square root , store .",icon:f.a,githubPath:null,demoPath:null,year:"August 2010",techUsed:"Java"},{id:7,title:"Hearts Game",description:"4 player can play the game . It is a 52 card game . Each player have 13 cards . The player gave the highest card of same suit given by the first player , will be the first player of next deal. A scoreboard was maintained in my game to choose the winner . The player scores lowest point will be the winner.",icon:f.a,githubPath:null,demoPath:null,year:"Feb 2010",techUsed:"C++"},{id:2,title:"Nachos",description:"Building a thread system\nImplementation of KThread.join()\nImplementation of condition variables directly, by using interrupt enable and disable to provide atomicity.\nImplementation of synchronous send and receive of one word messages (also known as Adastyle rendezvous), using condition variables\nMultiprogramming\nImplementation of the system calls read and write as documented in syscall.h.\nImplementation of support for multiprogramming.\nImplementation of the system calls (exec, join, and exit )\nCaching and Virtual Memory\nInvestigation the interaction between the TLB, the virtual memory system, and the file system.\nImplementation softwaremanagement of the TLB, with software translation via an inverted page table.\nImplementation demand paging of virtual memory",icon:f.a,githubPath:null,demoPath:null,year:"October 2012",techUsed:"java"}],b=i(151),T=b.a.div.withConfig({displayName:"ProjectBox__Box",componentId:"sc-1hevtsw-0"})(["max-width:450px;width:35%;min-height:470px;border-radius:8px;box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2);transition:box-shadow 0.3s ease-out;background-color:#fff;margin:0 4% 4%;:hover{box-shadow:0 8px 17px 2px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12),0 5px 5px -3px rgba(0,0,0,0.2);transition:box-shadow 0.3s;}@media (max-width:700px){width:100%;min-height:auto;max-width:fit-content;}@media (min-width:768px) and (max-width:1030px){width:100%;min-height:auto;box-sizing:border-box;max-width:100%;margin:0 0 4%;}"]),E=b.a.div.withConfig({displayName:"ProjectBox__BoxIcon",componentId:"sc-1hevtsw-1"})(["height:120px;display:flex;justify-content:flex-start;align-items:center;padding:4%;box-sizing:border-box;border-radius:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;background-color:rgba(127,161,232,0.3);img{width:25%;margin-right:5%;margin-bottom:0;}h3{margin:0;flex:1;color:#0f1645;}@media (min-width:768px) and (max-width:1030px){img{width:10%;}}"]),v=b.a.div.withConfig({displayName:"ProjectBox__BoxDescription",componentId:"sc-1hevtsw-2"})(["padding:5%;flex-direction:column;display:FLEX;height:calc(100% - 120px);p{color:#0f1645;}a{color:#7fa1e8;font-size:20px;font-weight:bold;display:block;margin:0 0 10px;text-decoration:none;}"]),C=b.a.div.withConfig({displayName:"ProjectBox__BoxStack",componentId:"sc-1hevtsw-3"})(["margin-top:auto;p{margin:0;}"]),z=function(e){var t=e.info;return n.a.createElement(T,null,n.a.createElement(E,null,n.a.createElement("img",{src:t.icon,alt:"rashmiap project icon"}),n.a.createElement("h3",null,t.title)),n.a.createElement(v,null,n.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.description}}),n.a.createElement(C,null,null!=t.githubPath?n.a.createElement("a",{href:t.githubPath},"On Github "):"",null!=t.demoPath?n.a.createElement("a",{href:t.demoPath},"Project Demo "):"",n.a.createElement("p",null,"Development year - ",t.year," "),n.a.createElement("p",null,"Technology stack - ",t.techUsed," "))))},P=b.a.div.withConfig({displayName:"projectsStyle__ProjectsWrapper",componentId:"sc-15imuc6-0"})(["padding-top:10%;padding-bottom:5%;"]),k=b.a.div.withConfig({displayName:"projectsStyle__ProjectsSection",componentId:"sc-15imuc6-1"})(["display:flex;flex-wrap:wrap;justify-content:center;@media (max-width:700px){flex-direction:column;margin-bottom:10%;}@media (min-width:768px) and (max-width:1030px){flex-direction:column;}"]),B=i(158);t.default=function(){return n.a.createElement(B.a,null,n.a.createElement(P,null,n.a.createElement(o.d,null,n.a.createElement(o.b,null,n.a.createElement(o.a,null,"Professional"),n.a.createElement(o.a,null,"Undergrad")),n.a.createElement(o.c,null,n.a.createElement(k,null,N.map(function(e){return n.a.createElement(z,{key:e.id,info:e})}))),n.a.createElement(o.c,null,n.a.createElement(k,null,x.map(function(e){return n.a.createElement(z,{key:e.id,info:e})}))))))}},152:function(e,t,i){var a;e.exports=(a=i(154))&&a.default||a},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Md Abdul Hasib"}}}}},154:function(e,t,i){"use strict";i.r(t);i(34);var a=i(0),n=i.n(a),o=i(4),r=i.n(o),l=i(55),s=i(2),c=function(e){var t=e.location,i=s.default.getResourcesForPathnameSync(t.pathname);return i?n.a.createElement(l.a,Object.assign({location:t,pageResources:i},i.json)):null};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=c},155:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABCBJREFUWAntV9tPFFcY/51ZQO6BpQhYtgU0LFKqNqtuSeqtqQ+mmjYiMTVK05e+tPHR9KElBH3wsf0HNCWNJl6axqRPxkRLrQRRE+sNSSQqgmB3NQsrrOzM6fl29gwzO2fYpfatPQ/7nfP7fbdznW+B/3pjS1mA3h+n3jMY/xScbwJjbwrbFWn7cYE9EVi/xtkv3Z8vv5Gr35wS6Plpag8MfoRzHszFMWNsGBr7tmf/8jPZ9BdN4HDfi0adJ05w8PezOVLxDGzAx5bt+66rYlTFE+aZQG/fsy0G9LOco8rLOBecMUQ0+Dq6u6ovqfSVCaSCc+O8mHm+ymipmFiJeY1p21VJuBJILTvmrr7uzDOTpJXwoXBD5nbkZSqae+5edkNP4refezExeh3z87MOM5/GUF5agra1Yazc/A0MaA6eBjQhHYkTottuJx0rQKed68ZpuwL1KfiZHzoxNxvLpFzj1qY6hD/phl7c7OIIYD6t0347nKmKq6ayopnnEpxsRx5H8GvfIeS9HFa5ErNxxrASoEfG657Tsi+lPY8lMHDusNgIw2VGMSiWJKwEUi+cRDNk5p5n0I5hfp7pcuRRBPMPTzk4ObDHshJIPa9S4x9IOkyhYDWOfhmyrEfv9Ft9R4ee8nRbSMB82yXukI6T6mDMgbjnWN1Qhe8PtmNjazX2bmtMEQ/Hniq0BWSLZb+G8sPiMvL5NCR1935SYkWFBfhqdyt2b24Qfk3TrztW4+aDKB6Mz7h8pQErlj0BL2URJB/T8YSYp4ggolCgQE0ZdoQD2LO1AaVFbjdNK8oxHplT+xRPrCTsluMCVF7et+vrEKjgaGmsQF1VMYKBctRUFkkfnrLKX6nmGCYksZAAfc89Eli36QB2Bv5AQ22ZtMsqH0/OoOmdj9V6ZqwUZz+EHkcW0Gq2YnrZWrUzBToRnUXkpQZ/S4eCFZAoXCRhJUCVjARVcij+ISYTtSrKhZ28FEF4Zzd8+YUujgB7rPS5NfV6+ibveb2GpJGHJLb4LyJYetc0UPxeGavH5UgIxZVvKViaPBvu6appkeTCGSBElFHQuetjJJWTIoUL0Y8wGAtjVfF9hMqHUKC9wiujANdi6zESb8aMUSaCSwuFpBi2Zm0BYfSVEpdswMYru9PJMtyIhRDTzUNJksYz6bHSSIDk2/4lJD1HAgRQDUfFA/X/zUY+yXemT8cZkKSqJPtr7E/cHzyN6MQw5uJRqWrJwhI//HVBNG/sxBv171o4dcTMcy/JpKW9KL135SRu9R+T1OJSTLXtgy/Q0v5ZSo9mvlhR6toC6Z0KSKrhpkav3r71+3EJZ5ei9iJ9WjHac/KhKkalI+UWSJJkW9uac+Jq7rJjufRLKmqHBi+f35BN13MFpKEIvl72lyLjL57SX7f/W9YV+BvgVF91MaBOggAAAABJRU5ErkJggg=="},156:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAEZklEQVR4nO3dTYgcRRjG8f/oagQDJoascQejsBoxRhT8QlnEQ8DdkwHFk4iaiyJ4UG8iuYh4UfAigjmIYk6iiIhKjAYixK+DRBPiV9QQN7sheDEbyZrNenirmczoJt3VVfa7vc8Pmt4Zuqtq6t2urprurgEREREREREREREREUmsU2Pfc4G7gQmgC5yXpESL3zwwDewCtgHH/o9M1wF7QuZaFl6mgLuqVGzMEbIW+AJYAxwCXgT2A39HpNVGHeAK4AFgDKuXceCTXBm+jUV/J7AiVyYt0AFewurqF2BZjkxGgDlgBjtSvLgF2B6WB5stSp/zgb1YUDblyGBTSPz9HInXsBzYGJZuw2UZ9AxWZ8+X2XioYuIXh/VUxf1yOwZ83HQhFnA4rFeV2bhqQIpOwHxYjwNPVkyj7T4EXjjtdVFXpTpQVQMyqAucHCjAUjdZZ+e6AQH4Hb/NxaJzTtMFkH4KSB7R51YFJI8ucE3MjgqIMwqIMwqIMwqIMwqIMwqIMwqIMwqIMwqIMwqIMwqIM3W/fv8A2J2iIGLqBmSSmhdkpJ+aLGcUEGfqBkQ3OSRWNyDRF2Lkv6nJckYBcUbjEGc0DnFGTZYz6vY6o26vM2qynElxs/UE9uSS9IwQ2ftM0e39rWYabRXV+1S315nYgIyjZqqskbC+sszGsQHZgz2fLmc3AaynZEsSG5BJ9NRUWZeH9fEyG6foZXmwDHgcuBX4GXvm8UijJYrUhnFIB3gPuBF4EzgFfAmsbLJQsdpwhNwGrMY6GqeAd7BgPMwifDq4DUfIGuAnLBiFH8L7i04bArIbm3VnfXi9EpvvZEdTBaqjapN1IqyzzGwT6TB2Qv8UOACMAq9gMyp4UNTViTNuFWkMmyri2xyJ17QcmxVoddMFGfAqVmdP5Uh8CJu+bh64J0cGLXMVNv6YA67OlckjWEBmgMdox3kohzHgV6yuXiu7U+wkmC8Dj4a/p4DvyTfF3zqsOUrpJDax2FzidKE3xd9oeP0Z1iWfyZBXn/ux7mXTE016XY5gk5dV6gDVmSa2MApcRp5B5gTwBPAV8FaiNG8G7sWu5eT4grSYjXQ/eY7ARm3GPuBW52kmoxOyMwqIMwqIM94DUvRQZhOmWaR1QcI0k/EckCHgvvD3voTp7g3rjcBwwnRbbRR4F+sNTdObLziVXSHtb7DrKTJgGHgWGxv8iI2k54E/gTsy5LcWu4ZSDOIOYnPZb8e+Kb49Q56lpBgY1tUFvqb/gtIs8Ad2ffyvEmm8DrwB3AQ8h32u4r2FXARsAR7i3z8qMIf9usG2Enkn5SEgW7HB2g5s5DyN3Q15Q4U09mF3wlxIrwkq3jubIeyG8WGsPu4Ensb+IS7BjtYl5Tus2bi26YKcprEyeehlHQ3rDY2WomcVvbsNj55pwxw8NFmbsWZrFvictGOOGNdhTdVH2NfmS04HOxEXPSsPy07g0oyfeUEejpDCCuB6mv+1twNhERERERERERERERGJ9A8rx2bE9TB+fwAAAABJRU5ErkJggg=="},157:function(e,t,i){e.exports=i.p+"static/blue-bg-4283e44d7dfa85772dfaaf86985c945a.png"},158:function(e,t,i){"use strict";var a=i(153),n=i(0),o=i.n(n),r=i(4),l=i.n(r),s=i(33),c=i.n(s),d=(i(152),o.a.createContext({})),u=function(e){return o.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func};var g=i(151),M=i(155),m={title:"Md Abdul Hasib | Frontend Developer",favicon:i.n(M).a,author:"Md Abdul Hasib",description:"Hello there, welcome to my portfolio. I am a front end developer, visual artist and an animal lover based out of Bangalore.",copyright:"Md Abdul Hasib, Copyright (c) 2019",keywords:["Md Abdul Hasib","ZoojooBE","frontend engineer","frontend developer","fullstack engineer","web engineer","bangalore","software engineer","engineer","ui engineer"]},I=i(159),p=i.n(I),h=i(156),y=i.n(h),L=i(157),j=i.n(L),D=i(15),N=(i(160),Object(g.a)(c.a).withConfig({displayName:"NavLink__LinkNav",componentId:"zdf0xk-0"})(["color:#ffffff;margin-right:35px;transition:color 0.2s ease-out;text-decoration:none;:hover{color:#7fa1e8;transition:color 0.2s;}&.active{color:#7fa1e8;}@media (max-width:700px){margin-right:14px;:last-of-type{display:flex;}}"])),S=function(e){var t=e.info;return o.a.createElement(N,{to:t.path,exact:"true",activeClassName:"active"},t.label)},A=[{label:"About",path:"/"},{label:"Experience",path:"/experience"},{label:"Projects",path:"/projects"},{label:"Contact",path:"/contact"},{label:"Recommendation",path:"/recommendation"},{label:"Certificates",path:"/certificates"}],w=function(){return o.a.createElement("nav",{className:"nav"},o.a.createElement("div",{className:"nav-list"},A.map(function(e){return o.a.createElement(S,{info:e,key:e.label})})))},f=function(e){var t=e.footerClass;return o.a.createElement("div",{className:"defaultFooter "+t},o.a.createElement("p",null,"View site source on ",o.a.createElement("a",{href:"https://github.com/sazzadBuet08/abdulhasib.github.io"},"Github")," | Designer ",o.a.createElement("a",{href:"https://www.linkedin.com/in/md-abdul-hasib-sazzad-19b88099/"},"Md Abudl Hasib")))};f.propTypes={footerClass:l.a.string};var x=f,b=g.a.div.withConfig({displayName:"layout__Wrapper",componentId:"tx35jc-0"})(["background-image:url(",");width:100%;background-repeat:no-repeat;background-size:cover;min-height:100vh;height:auto;background-position:bottom;padding:5% 8%;position:relative;@media (max-width:700px){min-height:100vh;height:auto;}"],j.a),T=function(e){var t=e.children;return o.a.createElement(u,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:m.description},{name:"keywords",content:m.keywords.join(", ")},{name:"author",content:m.author},{name:"copyright",content:m.copyright}],link:[{rel:"shortcut icon",type:"image/png",href:""+y.a}]}),o.a.createElement(D.Location,null,function(e){var i=e.location;return o.a.createElement(b,{className:"/"===i.pathname?"cutBackground":""},o.a.createElement(w,null),t,o.a.createElement(x,{footerClass:"/"===i.pathname?"footerInitial":"footerAbsolute"}))}))},data:a})};T.propTypes={children:l.a.node.isRequired};t.a=T},186:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTE1IDQuMzRWOGgzLjY2QzE4LjA1IDYuMyAxNi43IDQuOTUgMTUgNC4zNHpNOC4wNCAxNC4zNmwuNDQuNjdjMS4xOS4xNiAyLjE5LjkyIDIuNjggMS45N2gyLjY4Yy41Ni0xLjE4IDEuNzctMiAzLjE2LTIgLjE1IDAgLjMxLjAxLjQ2LjAzbC4yOS0uMzdjLjQtLjUxLjctMS4wNy45Mi0xLjY2SDcuMzdjLjMyLjY3LjU3IDEuMTkuNjcgMS4zNnoiLz48cGF0aCBkPSJNMTMgMnY4aDhjMC00LjQyLTMuNTgtOC04LTh6bTIgNlY0LjM0YzEuNy42IDMuMDUgMS45NSAzLjY2IDMuNjZIMTV6bS04LjU2IDNsLS45NS0ySDJ2MmgyLjIyczEuODkgNC4wNyAyLjEyIDQuNDJjLTEuMS41OS0xLjg0IDEuNzUtMS44NCAzLjA4QzQuNSAyMC40MyA2LjA3IDIyIDggMjJjMS43NiAwIDMuMjItMS4zIDMuNDYtM2gyLjA4Yy4yNCAxLjcgMS43IDMgMy40NiAzIDEuOTMgMCAzLjUtMS41NyAzLjUtMy41IDAtMS4wNC0uNDYtMS45Ny0xLjE4LTIuNjFDMjAuMzcgMTQuNTQgMjEgMTIuODQgMjEgMTFINi40NHpNOCAyMGMtLjgzIDAtMS41LS42Ny0xLjUtMS41UzcuMTcgMTcgOCAxN3MxLjUuNjcgMS41IDEuNVM4LjgzIDIwIDggMjB6bTkgMGMtLjgzIDAtMS41LS42Ny0xLjUtMS41UzE2LjE3IDE3IDE3IDE3czEuNS42NyAxLjUgMS41UzE3LjgzIDIwIDE3IDIwem0uNzQtNS4zNGwtLjI5LjM3Yy0uMTQtLjAyLS4zLS4wMy0uNDUtLjAzLTEuMzkgMC0yLjYuODItMy4xNiAyaC0yLjY4Yy0uNS0xLjA0LTEuNS0xLjgtMi42OC0xLjk3bC0uNDQtLjY3Yy0uMS0uMTctLjM0LS42OS0uNjctMS4zNmgxMS4yOWMtLjIxLjU5LS41MiAxLjE1LS45MiAxLjY2eiIvPjwvc3ZnPg0K"},187:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBvcGFjaXR5PSIuODciIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPjxwYXRoIG9wYWNpdHk9Ii4zIiBkPSJNMTMuMzQgNC42Nkw5IDl2MTBoOWwzLTd2LTJoLTguNzd6Ii8+PHBhdGggZD0iTTIxIDhoLTYuMzFsLjk1LTQuNTcuMDMtLjMyYzAtLjQxLS4xNy0uNzktLjQ0LTEuMDZMMTQuMTcgMSA3LjU5IDcuNTlDNy4yMiA3Ljk1IDcgOC40NSA3IDl2MTBjMCAxLjEuOSAyIDIgMmg5Yy44MyAwIDEuNTQtLjUgMS44NC0xLjIybDMuMDItNy4wNWMuMDktLjIzLjE0LS40Ny4xNC0uNzN2LTJjMC0xLjEtLjktMi0yLTJ6bTAgNGwtMyA3SDlWOWw0LjM0LTQuMzRMMTIuMjMgMTBIMjF2MnpNMSA5aDR2MTJIMXoiLz48L3N2Zz4NCg=="},188:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBkPSJNMTUuNSA1LjVjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAyek01IDIyYzIuOCAwIDUtMi4yIDUtNXMtMi4yLTUtNS01LTUgMi4yLTUgNSAyLjIgNSA1IDV6bTAtOC41YzEuOSAwIDMuNSAxLjYgMy41IDMuNVM2LjkgMjAuNSA1IDIwLjUgMS41IDE4LjkgMS41IDE3czEuNi0zLjUgMy41LTMuNXptMi44LTIuM0wxMSAxNHY1aDJ2LTYuMmwtMi4yLTIuMyAyLjQtMi40LjguOGMxLjMgMS4zIDMgMi4xIDUuMSAyLjFWOWMtMS41IDAtMi43LS42LTMuNi0xLjVsLTEuOS0xLjljLS41LS40LTEtLjYtMS42LS42cy0xLjEuMi0xLjQuNkw3LjggOC40Yy0uNC40LS42LjktLjYgMS40IDAgLjYuMiAxLjEuNiAxLjR6TTE5IDEyYy0yLjggMC01IDIuMi01IDVzMi4yIDUgNSA1IDUtMi4yIDUtNS0yLjItNS01LTV6bTAgOC41Yy0xLjkgMC0zLjUtMS42LTMuNS0zLjVzMS42LTMuNSAzLjUtMy41IDMuNSAxLjYgMy41IDMuNS0xLjYgMy41LTMuNSAzLjV6Ii8+PC9zdmc+DQo="},189:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBkPSJNMTEuNDkgMy40OGMwIDEuMS45IDIgMiAyczItLjkgMi0yLS45LTItMi0yLTIgLjktMiAyem0tLjYgMTEuNWwyLjEgMnY2aDJ2LTcuNWwtMi4xLTIgLjYtM2MxLjMgMS41IDMuMyAyLjUgNS41IDIuNXYtMmMtMS45IDAtMy41LTEtNC4zLTIuNGwtMS0xLjZjLS40LS42LTEtMS0xLjctMS0uMyAwLS41LjEtLjguMWwtNS4yIDIuMnY0LjdoMnYtMy40bDEuOC0uNy0xLjYgOC4xLTQuOS0xLS40IDIgNyAxLjQgMS00LjR6Ii8+PC9zdmc+DQo="},190:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTE4IDEwaDR2N2gtNHoiLz48cGF0aCBkPSJNNCA2aDE4VjRINGMtMS4xIDAtMiAuOS0yIDJ2MTFIMHYzaDE0di0zSDRWNnptMTkgMmgtNmMtLjU1IDAtMSAuNDUtMSAxdjEwYzAgLjU1LjQ1IDEgMSAxaDZjLjU1IDAgMS0uNDUgMS0xVjljMC0uNTUtLjQ1LTEtMS0xem0tMSA5aC00di03aDR2N3oiLz48L3N2Zz4NCg=="},191:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTIwIDhsLTggNS04LTV2MTBoMTZ6bTAtMkg0bDggNC45OXoiLz48cGF0aCBkPSJNNCAyMGgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0ySDRjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJ6TTIwIDZsLTggNC45OUw0IDZoMTZ6TTQgOGw4IDUgOC01djEwSDRWOHoiLz48L3N2Zz4="},192:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTEyIDYuNWMtMy43OSAwLTcuMTcgMi4xMy04LjgyIDUuNSAxLjY1IDMuMzcgNS4wMiA1LjUgOC44MiA1LjVzNy4xNy0yLjEzIDguODItNS41QzE5LjE3IDguNjMgMTUuNzkgNi41IDEyIDYuNXptMCAxMGMtMi40OCAwLTQuNS0yLjAyLTQuNS00LjVTOS41MiA3LjUgMTIgNy41czQuNSAyLjAyIDQuNSA0LjUtMi4wMiA0LjUtNC41IDQuNXoiLz48cGF0aCBkPSJNMTIgNC41QzcgNC41IDIuNzMgNy42MSAxIDEyYzEuNzMgNC4zOSA2IDcuNSAxMSA3LjVzOS4yNy0zLjExIDExLTcuNWMtMS43My00LjM5LTYtNy41LTExLTcuNXptMCAxM2MtMy43OSAwLTcuMTctMi4xMy04LjgyLTUuNUM0LjgzIDguNjMgOC4yMSA2LjUgMTIgNi41czcuMTcgMi4xMyA4LjgyIDUuNWMtMS42NSAzLjM3LTUuMDMgNS41LTguODIgNS41em0wLTEwYy0yLjQ4IDAtNC41IDIuMDItNC41IDQuNXMyLjAyIDQuNSA0LjUgNC41IDQuNS0yLjAyIDQuNS00LjUtMi4wMi00LjUtNC41LTQuNXptMCA3Yy0xLjM4IDAtMi41LTEuMTItMi41LTIuNXMxLjEyLTIuNSAyLjUtMi41IDIuNSAxLjEyIDIuNSAyLjUtMS4xMiAyLjUtMi41IDIuNXoiLz48L3N2Zz4="},193:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBkPSJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QzE1LjQxIDEyLjU5IDE2IDExLjExIDE2IDkuNSAxNiA1LjkxIDEzLjA5IDMgOS41IDNTMyA1LjkxIDMgOS41IDUuOTEgMTYgOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHoiLz48L3N2Zz4="},194:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHptMCAwaDI0djI0SDBWMHoiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTE1IDE1SDV2NGgxNHYtNGgtNHptLTcgM0g2di0yaDJ2MnptMy41IDBoLTJ2LTJoMnYyem0zLjUgMGgtMnYtMmgydjJ6Ii8+PHBhdGggZD0iTTE2IDQuMmMxLjUgMCAzIC42IDQuMiAxLjdsLjgtLjhDMTkuNiAzLjcgMTcuOCAzIDE2IDNzLTMuNi43LTUgMi4xbC44LjhDMTMgNC44IDE0LjUgNC4yIDE2IDQuMnptLTMuMyAyLjVsLjguOGMuNy0uNyAxLjYtMSAyLjUtMXMxLjguMyAyLjUgMWwuOC0uOGMtLjktLjktMi4xLTEuNC0zLjMtMS40cy0yLjQuNS0zLjMgMS40ek0xOSAxM2gtMlY5aC0ydjRINWMtMS4xIDAtMiAuOS0yIDJ2NGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0ydi00YzAtMS4xLS45LTItMi0yem0wIDZINXYtNGgxNHY0ek02IDE2aDJ2Mkg2em0zLjUgMGgydjJoLTJ6bTMuNSAwaDJ2MmgtMnoiLz48L3N2Zz4NCg=="},195:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTcgMTIuMjd2My43Mmw1IDIuNzMgNS0yLjczdi0zLjcyTDEyIDE1ek01LjE4IDlMMTIgMTIuNzIgMTguODIgOSAxMiA1LjI4eiIvPjxwYXRoIGQ9Ik0xMiAzTDEgOWw0IDIuMTh2NkwxMiAyMWw3LTMuODJ2LTZsMi0xLjA5VjE3aDJWOUwxMiAzem01IDEyLjk5bC01IDIuNzMtNS0yLjczdi0zLjcyTDEyIDE1bDUtMi43M3YzLjcyem0tNS0zLjI3TDUuMTggOSAxMiA1LjI4IDE4LjgyIDkgMTIgMTIuNzJ6Ii8+PC9zdmc+DQo="}}]);
//# sourceMappingURL=component---src-pages-projects-js-04469d4b6e4126f4559e.js.map