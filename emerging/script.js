const allCourses = {
  emerging: {
    title: "Emerging Technologies",
    chapters: 7,
  },
  civics: {
    title: "Civics",
    chapters: 5,
  },
  entrepreneur: {
    title: "Entrepreneurship",
    chapters: 5,
  },
  anthropology: {
    title: "Anthropology",
    chapters: 4,
  },
  maths: {
    title: "Mathematics",
    chapters: 6,
  },
  programming: {
    title: "Programming",
    chapters: 8,
  }
};

let currentCourse = "emerging";
let currentChapter = 1;

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

function changeCourse(courseKey) {
  currentCourse = courseKey;
  currentChapter = 1;
  document.getElementById("courseTitle").innerText = allCourses[courseKey].title + " Quiz";
  generateChapterButtons();
  document.getElementById("quiz-container").innerHTML = "";
}

function generateChapterButtons() {
  const chapterButtons = document.getElementById("chapter-buttons");
  chapterButtons.innerHTML = "";
  const total = allCourses[currentCourse].chapters;
  for (let i = 1; i <= total; i++) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = `Chapter ${i}`;
    btn.onclick = () => startChapter(i);
    li.appendChild(btn);
    chapterButtons.appendChild(li);
  }
}

function startChapter(chapter) {
  currentChapter = chapter;
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  const questions = getQuestions(currentCourse, chapter); // implement your question bank
  questions.forEach((q, i) => {
    const card = document.createElement("div");
    card.classList.add("question-card");

    const title = document.createElement("h3");
    title.textContent = `Q${i + 1}. ${q.question}`;
    card.appendChild(title);

    const ul = document.createElement("ul");
    ul.classList.add("options");

    q.options.forEach((opt, idx) => {
      const li = document.createElement("li");
      li.textContent = opt;
      li.addEventListener("click", () => handleAnswer(li, idx, q, answerBox, explanationBox, ul));
      ul.appendChild(li);
    });

    const answerBox = document.createElement("p");
    answerBox.classList.add("correct-answer");
    answerBox.style.display = "none";

    const explanationBox = document.createElement("p");
    explanationBox.classList.add("explanation");
    explanationBox.style.display = "none";

    card.appendChild(ul);
    card.appendChild(answerBox);
    card.appendChild(explanationBox);
    container.appendChild(card);
  });
}

function handleAnswer(selectedLi, selectedIndex, questionObj, answerBox, explanationBox, ul) {
  const allOptions = ul.querySelectorAll("li");
  allOptions.forEach((li, i) => {
    li.style.pointerEvents = "none";
    if (i === questionObj.answer) {
      li.classList.add("correct");
    }
  });

  if (selectedIndex !== questionObj.answer) {
    selectedLi.classList.add("incorrect");
    answerBox.innerText = `Correct Answer: ${questionObj.options[questionObj.answer]}`;
    answerBox.style.display = "block";
    explanationBox.innerText = `Explanation: ${questionObj.explanation}`;
    explanationBox.style.display = "block";
  }
}

// Dummy question generator for testing
function getQuestions(course, chapter) {
  // Emerging Technologies
  if (course === "emerging") {
    if (chapter === 2) {
      return[
  {
    question: "What is the main purpose of Data Science?",
    options: ["To collect data", "To organize files", "To extract knowledge and insights from data", "To store web pages"],
    answer: 2,
    explanation: "Data Science focuses on analyzing structured and unstructured data to extract knowledge and insights."
  },
  {
    question: "Which of the following is NOT a stage in the data processing cycle?",
    options: ["Collection", "Storage", "Analysis", "Destruction"],
    answer: 3,
    explanation: "Destruction is not a stage in the data processing cycle."
  },
  {
    question: "Which of the following best defines data?",
    options: ["Meaningless text", "Processed facts", "Raw facts and figures", "Summarized graphs"],
    answer: 2,
    explanation: "Data refers to raw facts and figures before processing."
  },
  {
    question: "What makes data 'big' in Big Data?",
    options: ["Its structure", "Its price", "Its volume, velocity, and variety", "Its color"],
    answer: 2,
    explanation: "Big Data is characterized by volume, velocity, and variety."
  },
  {
    question: "Which of the following is NOT a characteristic of Big Data?",
    options: ["Volume", "Velocity", "Veracity", "Visibility"],
    answer: 3,
    explanation: "Visibility is not among the 5 V’s of Big Data (Volume, Velocity, Variety, Veracity, and Value)."
  },
  {
    question: "What is information?",
    options: ["Processed data", "Raw facts", "Unorganized numbers", "Input only"],
    answer: 0,
    explanation: "Information is data that has been processed to be meaningful."
  },
  {
    question: "Which of the following is a structured data type?",
    options: ["Photos", "Videos", "Excel sheet", "Audio"],
    answer: 2,
    explanation: "An Excel sheet contains structured, tabular data."
  },
  {
    question: "What is the first step in the Data Value Chain?",
    options: ["Analysis", "Storage", "Acquisition", "Curation"],
    answer: 2,
    explanation: "The data value chain starts with acquiring the data."
  },
  {
    question: "Which tool is used for job scheduling in Hadoop?",
    options: ["PIG", "Hue", "Oozie", "Impala"],
    answer: 2,
    explanation: "Oozie is used for job scheduling in the Hadoop ecosystem."
  },
  {
    question: "Which component in Hadoop is responsible for storage?",
    options: ["Spark", "MapReduce", "HDFS", "Hive"],
    answer: 2,
    explanation: "HDFS (Hadoop Distributed File System) handles data storage in Hadoop."
  },
  {
    question: "What is data curation?",
    options: ["Deleting old files", "Filtering emails", "Managing and preserving data", "Printing reports"],
    answer: 2,
    explanation: "Data curation involves managing and maintaining data over its lifecycle."
  },
  {
    question: "What does Hadoop use for in-memory processing?",
    options: ["Hive", "Spark", "HBase", "Hue"],
    answer: 1,
    explanation: "Spark is used in Hadoop for fast, in-memory data processing."
  },
  {
    question: "Which of these is a NoSQL database in the Hadoop ecosystem?",
    options: ["PIG", "HBase", "Hue", "Sqoop"],
    answer: 1,
    explanation: "HBase is a NoSQL database used in Hadoop for distributed data storage."
  },
  {
    question: "What is the role of YARN in Hadoop?",
    options: ["Job tracking", "Resource management", "Data visualization", "Security"],
    answer: 1,
    explanation: "YARN is used for managing resources across Hadoop clusters."
  },
  {
    question: "Which programming model is used in Hadoop for data processing?",
    options: ["Client-server", "Object-oriented", "MapReduce", "Relational"],
    answer: 2,
    explanation: "MapReduce is the programming model used for batch processing in Hadoop."
  },
  {
    question: "What is data ingestion?",
    options: ["Throwing away old data", "Analyzing information", "Importing data into the system", "Drawing graphs"],
    answer: 2,
    explanation: "Data ingestion is the process of bringing data into a system for processing."
  },
  {
    question: "Which tool transfers data from RDBMS to HDFS?",
    options: ["Hue", "Sqoop", "Hive", "Flume"],
    answer: 1,
    explanation: "Sqoop is used to import data from RDBMS into Hadoop's HDFS."
  },
  {
    question: "Which tool is used to capture streaming event data into Hadoop?",
    options: ["Hue", "Flume", "Sqoop", "Hive"],
    answer: 1,
    explanation: "Flume is used to transfer log and event data to Hadoop."
  },
  {
    question: "Which of the following helps in visualizing analyzed Big Data?",
    options: ["Sqoop", "Flume", "Hue", "HBase"],
    answer: 2,
    explanation: "Hue is a visualization and dashboard tool in Hadoop."
  },
  {
    question: "What kind of data does Hive work best with?",
    options: ["Unstructured", "Audio", "Structured", "Images"],
    answer: 2,
    explanation: "Hive is suitable for structured data and works like a SQL interface in Hadoop."
  },

  // 20 more below
  {
    question: "What does Pig do in Hadoop?",
    options: ["Scheduling", "Visualizing", "Scripting data flows", "Encrypting"],
    answer: 2,
    explanation: "Pig is used for scripting data processing tasks in Hadoop."
  },
  {
    question: "Which programming language is most common in Big Data tools?",
    options: ["HTML", "Python", "C", "Assembly"],
    answer: 1,
    explanation: "Python is widely used in Big Data analytics for its simplicity and libraries."
  },
  {
    question: "Data science overlaps heavily with which field?",
    options: ["Geography", "Art", "Statistics", "History"],
    answer: 2,
    explanation: "Data Science uses many statistical methods for inference and prediction."
  },
  {
    question: "Which process ensures data is usable and meaningful?",
    options: ["Acquisition", "Analysis", "Curation", "Visualization"],
    answer: 2,
    explanation: "Curation manages and maintains high-quality data."
  },
  {
    question: "What comes after analysis in the Big Data lifecycle?",
    options: ["Destruction", "Access", "Curation", "Compression"],
    answer: 1,
    explanation: "Access comes after analyzing the data — results are shared and utilized."
  },
  {
    question: "What is the goal of data visualization?",
    options: ["Hide data", "Decorate data", "Communicate insights", "Encrypt results"],
    answer: 2,
    explanation: "Visualization helps communicate insights through charts, graphs, etc."
  },
  {
    question: "What does 'veracity' mean in Big Data?",
    options: ["Volume", "Speed", "Truthfulness", "Structure"],
    answer: 2,
    explanation: "Veracity refers to the trustworthiness and quality of data."
  },
  {
    question: "What is the role of a data scientist?",
    options: ["Designing clothes", "Building roads", "Extracting insights from data", "Managing banks"],
    answer: 2,
    explanation: "A data scientist analyzes data to generate insights and support decisions."
  },
  {
    question: "Which one is NOT a Hadoop ecosystem component?",
    options: ["Hive", "Spark", "Oozie", "Wireshark"],
    answer: 3,
    explanation: "Wireshark is a network protocol analyzer, not part of the Hadoop ecosystem."
  },
  {
    question: "Which of the following best represents unstructured data?",
    options: ["Excel sheets", "Database rows", "Photos and videos", "Tables"],
    answer: 2,
    explanation: "Unstructured data includes media like images, audio, and video."
  },
  {
    question: "Which is a benefit of Big Data in business?",
    options: ["More paper use", "Slow decisions", "Improved insights", "Bigger offices"],
    answer: 2,
    explanation: "Big Data allows businesses to gain valuable insights for better decisions."
  },
  {
    question: "Which tool runs SQL-like queries on Big Data?",
    options: ["MapReduce", "Pig", "Hive", "HBase"],
    answer: 2,
    explanation: "Hive allows users to write SQL-like queries on Big Data."
  },
  {
    question: "Which is the first phase of Big Data life cycle?",
    options: ["Analysis", "Access", "Storage", "Ingestion"],
    answer: 3,
    explanation: "Data ingestion is the first step in the Big Data processing pipeline."
  },
  {
    question: "Which of the following is NOT an advantage of Hadoop?",
    options: ["Scalable", "Cost-effective", "Fault-tolerant", "Offline"],
    answer: 3,
    explanation: "Hadoop is designed for online distributed systems, not offline use."
  },
  {
    question: "Which data type includes audio, video, and images?",
    options: ["Structured", "Semi-structured", "Unstructured", "Tabular"],
    answer: 2,
    explanation: "Unstructured data includes media formats like audio, video, and images."
  },
  {
    question: "What is MapReduce responsible for?",
    options: ["Job Scheduling", "File Storage", "Parallel data processing", "Monitoring"],
    answer: 2,
    explanation: "MapReduce handles parallel batch data processing in Hadoop."
  },
  {
    question: "Which tool is best for querying large datasets in Hadoop?",
    options: ["Hue", "Sqoop", "Hive", "Pig"],
    answer: 2,
    explanation: "Hive is ideal for querying large, structured datasets with SQL."
  },
  {
    question: "Why do we need data science?",
    options: ["To write essays", "To make random guesses", "To solve complex data problems", "To watch videos"],
    answer: 2,
    explanation: "Data science helps solve complex problems through data insights."
  },
  {
    question: "Which step converts raw data into useful form?",
    options: ["Ingestion", "Curation", "Analysis", "Visualization"],
    answer: 2,
    explanation: "Analysis is the phase where raw data is processed into insights."
  },
  {
    question: "What is the outcome of a good data science process?",
    options: ["Bigger files", "Insights and predictions", "More spreadsheets", "Faster typing"],
    answer: 1,
    explanation: "A successful data science process results in valuable insights or predictions."
  },
];
    } else if (chapter === 1) {
      return [
        {
      question: "Where did the Industrial Revolution begin?",
      options: ["USA", "Germany", "England", "France"],
      answer: 2,
      explanation: "The Industrial Revolution began in England in the late 1700s."
    },
    {
      question: "Which term refers to developing technology that transforms society?",
      options: ["Outdated technology", "Traditional tools", "Emerging technology", "Legacy systems"],
      answer: 2,
      explanation: "Emerging technologies are new or developing technologies expected to significantly impact society."
    },
    {
      question: "Which revolution introduced steam engines?",
      options: ["IR 2.0", "IR 3.0", "IR 4.0", "IR 1.0"],
      answer: 3,
      explanation: "Steam engines were part of the First Industrial Revolution (IR 1.0)."
    },
    {
      question: "Which industrial revolution is marked by digital electronics?",
      options: ["IR 1.0", "IR 2.0", "IR 3.0", "IR 4.0"],
      answer: 2,
      explanation: "IR 3.0, or the Digital Revolution, focused on digital electronics and computers."
    },
    {
      question: "Which of the following is NOT a programmable device?",
      options: ["Xilinx Virtex 6", "Steam Engine", "Altera Stratix", "Atmel AT91CAP7L"],
      answer: 1,
      explanation: "Steam Engine is not a programmable device; it's a mechanical invention from IR 1.0."
    },
    {
      question: "What is the purpose of Human-Computer Interaction (HCI)?",
      options: [
        "To increase computer prices",
        "To make computers more user-friendly",
        "To eliminate computers",
        "To replace hardware"
      ],
      answer: 1,
      explanation: "HCI aims to improve usability and user experience by enhancing how people interact with computers."
    },
    {
      question: "Which of the following is a trend from 2019?",
      options: ["Steam Power", "Digital Twins", "Morse Code", "Coal Engines"],
      answer: 1,
      explanation: "Digital Twins was an emerging technology trend noted in 2019."
    },
    {
      question: "Which discipline does NOT contribute to HCI?",
      options: ["Linguistics", "Computer Science", "Biology", "Geography"],
      answer: 3,
      explanation: "Geography is not typically part of HCI-related fields."
    },
    {
      question: "Why is data called the new oil?",
      options: [
        "It's expensive",
        "It powers decision-making and innovation",
        "It is a fuel source",
        "It replaces machines"
      ],
      answer: 1,
      explanation: "Like oil, data is a powerful resource for innovation and economic value."
    },
    {
      question: "Which technology is common to both AI and IR 4.0?",
      options: ["Steam Engine", "Blockchain", "Electric Lamp", "Mechanical Loom"],
      answer: 1,
      explanation: "Blockchain is a core component in modern emerging technologies including AI and IR 4.0."
    },
    {
      question: "Which term best describes computers that follow instructions?",
      options: ["Manual device", "Programmable device", "Interactive device", "Biological device"],
      answer: 1,
      explanation: "Computers are programmable devices—they follow a set of instructions (programs)."
    },
    {
      question: "The study of AI contributes to HCI through:",
      options: ["Hard drives", "Hardware replacement", "Intelligent systems", "Electricity"],
      answer: 2,
      explanation: "AI contributes to HCI by enabling smart interfaces and responsive interaction."
    },
    {
      question: "Which of the following is an enabling device?",
      options: ["Switches", "Steam engine", "Solar panel", "Barometer"],
      answer: 0,
      explanation: "Switches are part of service enabling devices in digital communication."
    },
    {
      question: "Which term describes machines that interact with the physical world?",
      options: ["Cloud computing", "Cyber-physical systems", "Data centers", "Bluetooth"],
      answer: 1,
      explanation: "Cyber-physical systems like autonomous vehicles combine digital logic with real-world interactions."
    },
    {
      question: "One major benefit of HCI is:",
      options: ["Higher electricity cost", "Reduced usability", "Cost savings", "Obsolete devices"],
      answer: 2,
      explanation: "HCI often reduces training time and errors, resulting in cost savings."
    },
    {
      question: "Which of the following is a chatbot application?",
      options: ["Virtual reality headset", "Steam boiler", "Siri", "Electric drill"],
      answer: 2,
      explanation: "Siri is an example of a voice-activated chatbot AI application."
    },
    {
      question: "Which is NOT part of the 4 IR stages?",
      options: ["Steam", "Electricity", "Manual labor", "Smart systems"],
      answer: 2,
      explanation: "Manual labor is what IR replaced—it’s not a stage of industrial revolution."
    },
    {
      question: "Which of the following is an AI example from IR 4.0?",
      options: ["Spinning Jenny", "Autonomous car", "Cotton Gin", "Steel plow"],
      answer: 1,
      explanation: "Autonomous cars use AI, a key element of IR 4.0."
    },
    {
      question: "What is the purpose of networked devices?",
      options: ["Decorative purposes", "Compete with humans", "Share data and services", "Eliminate cables"],
      answer: 2,
      explanation: "Networked devices allow communication and data sharing over the internet or local networks."
    },
    {
      question: "Which of the following is NOT a characteristic of emerging technologies?",
      options: ["New and impactful", "Expected to shape the future", "Well-established", "Rapid growth"],
      answer: 2,
      explanation: "Well-established technologies are not considered 'emerging'."
    }
      ];
    } else if (chapter === 3) {
      return [
  {
    "question": "What does 'Artificial Intelligence' mean?",
    "options": ["Man-made power", "Human thinking", "Man-made thinking power", "Computer science logic"],
    "answer": 2,
    "explanation": "Artificial Intelligence means 'man-made thinking power'—machines mimicking human intelligence."
  },
  {
    "question": "Who coined the term 'Artificial Intelligence'?",
    "options": ["Alan Turing", "John McCarthy", "Geoffrey Hinton", "Marvin Minsky"],
    "answer": 1,
    "explanation": "John McCarthy coined the term 'Artificial Intelligence' in 1956."
  },
  {
    "question": "Which of the following is a core goal of AI?",
    "options": ["Emotions", "Memory", "Replication", "Learning"],
    "answer": 3,
    "explanation": "One of the primary goals of AI is to enable machines to learn from data or experience."
  },
  {
    "question": "Which AI level involves machines that can apply past experiences?",
    "options": ["Reactive Machines", "Limited Memory", "Theory of Mind", "Self-aware"],
    "answer": 1,
    "explanation": "Limited Memory AI can use historical data to make decisions."
  },
  {
    "question": "What is the main difference between AI and Machine Learning?",
    "options": ["AI is a subset of ML", "ML is a subset of AI", "They are the same", "ML is older than AI"],
    "answer": 1,
    "explanation": "Machine Learning is a subset of Artificial Intelligence focused on learning from data."
  },
  {
    "question": "Which of these is NOT a type of AI based on functionality?",
    "options": ["Narrow AI", "Strong AI", "Flexible AI", "Super AI"],
    "answer": 2,
    "explanation": "Flexible AI is not a recognized type; Narrow, Strong, and Super AI are."
  },
  {
    "question": "Which of the following best defines Deep Learning?",
    "options": ["AI that performs shallow tasks", "AI using rules", "Machine learning with neural networks", "Data processing method"],
    "answer": 2,
    "explanation": "Deep Learning uses artificial neural networks for complex tasks."
  },
  {
    "question": "Which AI type is best at performing a single task?",
    "options": ["General AI", "Narrow AI", "Super AI", "Hybrid AI"],
    "answer": 1,
    "explanation": "Narrow AI is specialized in performing specific tasks."
  },
  {
    "question": "Which of the following is NOT an AI application area?",
    "options": ["Education", "Gaming", "Health", "None of the above"],
    "answer": 3,
    "explanation": "All listed domains use AI, so 'None of the above' is correct."
  },
  {
    "question": "Which year did IBM's Deep Blue defeat Garry Kasparov in chess?",
    "options": ["1995", "1997", "2000", "2002"],
    "answer": 1,
    "explanation": "Deep Blue defeated Garry Kasparov in 1997."
  },
  {
    "question": "Which of the following platforms is a programming interface for AI applications?",
    "options": ["Wireshark", "TensorFlow", "Linux", "Excel"],
    "answer": 1,
    "explanation": "TensorFlow is an open-source platform for machine learning and AI applications."
  },
  {
    "question": "What is the basic unit in a neural network called?",
    "options": ["Bit", "Neuron", "Node", "Agent"],
    "answer": 2,
    "explanation": "Each layer in a neural network consists of nodes, or artificial neurons."
  },
  {
    "question": "Which one of the following areas is NOT typically influenced by AI?",
    "options": ["Agriculture", "Space Exploration", "Cooking", "Medicine"],
    "answer": 2,
    "explanation": "Cooking is less influenced by AI than other areas mentioned."
  },
  {
    "question": "What AI capability allows Siri or Alexa to understand voice commands?",
    "options": ["Natural Language Processing", "Deep Mining", "Data Science", "Speech Amplification"],
    "answer": 0,
    "explanation": "Natural Language Processing (NLP) enables machines to understand human language."
  },
  {
    "question": "Which historical figure developed the Turing Test?",
    "options": ["John McCarthy", "Geoffrey Hinton", "Marvin Minsky", "Alan Turing"],
    "answer": 3,
    "explanation": "Alan Turing developed the Turing Test to evaluate machine intelligence."
  },
  {
    "question": "Which is NOT a characteristic of AI?",
    "options": ["Reasoning", "Learning", "Programming", "Problem-solving"],
    "answer": 2,
    "explanation": "Programming is required to build AI, but not a behavior of AI itself."
  },
  {
    "question": "Which term refers to AI systems that exceed human intelligence?",
    "options": ["Weak AI", "Strong AI", "Super AI", "General AI"],
    "answer": 2,
    "explanation": "Super AI is a hypothetical form of AI that surpasses human intelligence."
  },
  {
    "question": "Which discipline is NOT commonly used in AI development?",
    "options": ["Mathematics", "Sociology", "Art", "Statistics"],
    "answer": 2,
    "explanation": "Art is not a core discipline in AI development compared to the others."
  },
  {
    "question": "Which platform is widely used for creating AI models?",
    "options": ["TensorFlow", "HTML", "Oracle", "Flash"],
    "answer": 0,
    "explanation": "TensorFlow is a popular open-source platform for building AI models."
  },
  {
    "question": "Which of the following is an advantage of AI?",
    "options": ["Emotional intelligence", "Cost-free implementation", "High reliability", "Increased creativity"],
    "answer": 2,
    "explanation": "AI systems are highly reliable and consistent in performance."
  },
  {
    "question": "What is a major drawback of AI?",
    "options": ["Emotional bonding", "Low speed", "High cost", "Unreliability"],
    "answer": 2,
    "explanation": "AI systems often involve high development and maintenance costs."
  },
  {
    "question": "Which of the following is an AI digital assistant?",
    "options": ["Flume", "Hue", "Siri", "PIG"],
    "answer": 2,
    "explanation": "Siri is a virtual assistant developed by Apple using AI."
  },
  {
    "question": "Which company built the AI platform 'Watson'?",
    "options": ["Google", "Apple", "IBM", "Microsoft"],
    "answer": 2,
    "explanation": "IBM developed Watson, an AI platform capable of understanding natural language."
  },
  {
    "question": "Which application of AI is used in fraud detection?",
    "options": ["Computer vision", "Natural language processing", "Pattern recognition", "Data transmission"],
    "answer": 2,
    "explanation": "Pattern recognition is key in identifying fraudulent behavior in systems."
  },
  {
    "question": "Which term defines AI that can outperform humans in all fields?",
    "options": ["Narrow AI", "Artificial General Intelligence", "Super AI", "Machine Learning"],
    "answer": 2,
    "explanation": "Super AI is hypothetical AI that surpasses human capabilities."
  },
  {
    "question": "Which AI stage involves self-awareness and consciousness?",
    "options": ["Stage 1", "Stage 3", "Stage 5", "Stage 7"],
    "answer": 2,
    "explanation": "Stage 5 (Self-aware AI) includes machines that have consciousness."
  },
  {
    "question": "Which is not a level of AI maturity?",
    "options": ["Domain-specific expertise", "Reactive machines", "Cognitive overload", "Reasoning machines"],
    "answer": 2,
    "explanation": "Cognitive overload is not a level of AI maturity."
  },
  {
    "question": "Which of the following is an AI-powered vehicle technology?",
    "options": ["Manual transmission", "Autonomous driving", "Hydraulic steering", "Air conditioning"],
    "answer": 1,
    "explanation": "Autonomous driving is powered by AI for navigation and control."
  },
  {
    "question": "Which is an example of weak AI?",
    "options": ["ChatGPT", "A self-aware robot", "A conscious drone", "A sentient computer"],
    "answer": 0,
    "explanation": "Weak AI like ChatGPT is task-specific and lacks general reasoning."
  },
  {
    "question": "What is the key enabler of modern AI development?",
    "options": ["High electricity use", "Deep motivation", "Big data and computing power", "User feedback"],
    "answer": 2,
    "explanation": "Big data and improved computing resources have enabled AI progress."
  },
  {
    "question": "Which year did the term 'AI winter' refer to first emerge?",
    "options": ["1974", "1984", "1994", "2004"],
    "answer": 0,
    "explanation": "The first AI winter began in 1974 due to reduced funding and interest."
  },
  {
    "question": "Which company created the AI system AlphaGo?",
    "options": ["IBM", "Microsoft", "OpenAI", "DeepMind"],
    "answer": 3,
    "explanation": "DeepMind developed AlphaGo, which defeated a Go world champion."
  },
  {
    "question": "Which AI area deals with visual recognition?",
    "options": ["NLP", "Expert systems", "Computer vision", "Planning systems"],
    "answer": 2,
    "explanation": "Computer vision helps machines interpret visual information."
  },
  {
    "question": "Which device is commonly used as an AI input sensor?",
    "options": ["Printer", "Scanner", "Camera", "Modem"],
    "answer": 2,
    "explanation": "Cameras are input devices used in computer vision for AI."
  },
  {
    "question": "Which concept is essential in enabling chatbots?",
    "options": ["Syntax analysis", "Emotion recognition", "Natural Language Understanding", "Database creation"],
    "answer": 2,
    "explanation": "Natural Language Understanding (NLU) is critical for chatbot communication."
  },
  {
    "question": "What do you call machines that imitate human decision-making?",
    "options": ["Analog computers", "Mechanical devices", "AI agents", "Quantum bots"],
    "answer": 2,
    "explanation": "AI agents are designed to perceive environments and act accordingly."
  },
  {
    "question": "Which of the following best represents General AI?",
    "options": ["Calculators", "Self-driving cars", "Autonomous robots with reasoning", "Text-to-speech tools"],
    "answer": 2,
    "explanation": "General AI refers to systems with broad cognitive capabilities like humans."
  }
]
;
    } else if (chapter === 4) {
      return [
  {
    "question": "What does IoT stand for?",
    "options": ["Internet of Tabs", "Internet of Technology", "Internet of Things", "Interface of Things"],
    "answer": 2,
    "explanation": "IoT stands for Internet of Things, where devices connect and communicate over the internet."
  },
  {
    "question": "Which of the following is a key component in IoT architecture?",
    "options": ["Databases", "Microservices", "Sensors", "Browsers"],
    "answer": 2,
    "explanation": "Sensors are essential components that collect data in IoT systems."
  },
  {
    "question": "Which of these technologies is most associated with IoT?",
    "options": ["Blockchain", "Edge computing", "Artificial vision", "Cybersecurity"],
    "answer": 1,
    "explanation": "Edge computing is widely used in IoT to process data closer to the source."
  },
  {
    "question": "What year did Kevin Ashton coin the term 'Internet of Things'?",
    "options": ["1995", "1999", "2005", "2010"],
    "answer": 1,
    "explanation": "Kevin Ashton coined the term IoT in 1999."
  },
  {
    "question": "Which communication technology is widely used in smart homes?",
    "options": ["Ethernet", "Bluetooth", "5G", "Zigbee"],
    "answer": 3,
    "explanation": "Zigbee is commonly used for communication in smart homes."
  },
  {
    "question": "Which is an example of an IoT application?",
    "options": ["Microsoft Word", "Smartwatch", "Paint", "DVD player"],
    "answer": 1,
    "explanation": "A smartwatch is a wearable IoT device that collects and transmits data."
  },
  {
    "question": "Which of the following is NOT a challenge of IoT?",
    "options": ["Data privacy", "High connectivity", "Security issues", "Scalability"],
    "answer": 1,
    "explanation": "High connectivity is an advantage, not a challenge."
  },
  {
    "question": "IoT devices are usually connected through which protocol?",
    "options": ["TCP/IP", "USB", "SMTP", "HTTP only"],
    "answer": 0,
    "explanation": "IoT devices generally use TCP/IP protocol for internet communication."
  },
  {
    "question": "Which of the following is a benefit of IoT in agriculture?",
    "options": ["Manual irrigation", "Remote crop monitoring", "Increased labor", "Limited data"],
    "answer": 1,
    "explanation": "IoT enables remote crop monitoring using sensors and automation."
  },
  {
    "question": "What is the final step in an IoT data cycle?",
    "options": ["Data storage", "Data transmission", "Data analysis", "Action/Decision"],
    "answer": 3,
    "explanation": "The final step in IoT is taking action based on the processed data."
  },
  {
    "question": "In IoT, what is the role of actuators?",
    "options": ["Collect data", "Store data", "Analyze data", "Perform physical actions"],
    "answer": 3,
    "explanation": "Actuators convert digital signals into physical actions, such as turning motors."
  },
  {
    "question": "Which sector benefits most from IoT-based Smart Grids?",
    "options": ["Retail", "Energy", "Education", "Construction"],
    "answer": 1,
    "explanation": "IoT-based smart grids are mainly used in the energy sector for efficiency."
  },
  {
    "question": "Which of these IoT platforms is open-source?",
    "options": ["AWS IoT", "IBM Watson IoT", "ThingsBoard", "Microsoft Azure IoT"],
    "answer": 2,
    "explanation": "ThingsBoard is a popular open-source IoT platform."
  },
  {
    "question": "What does 'edge computing' mean in IoT?",
    "options": ["Storing data on edge devices", "Processing data at the edge", "Sending data to the cloud", "Designing IoT devices"],
    "answer": 1,
    "explanation": "Edge computing refers to processing data near the data source instead of sending everything to the cloud."
  },
  {
    "question": "Which of the following is a common IoT protocol for lightweight messaging?",
    "options": ["HTTP", "FTP", "MQTT", "POP3"],
    "answer": 2,
    "explanation": "MQTT is a lightweight messaging protocol used in IoT systems."
  },
  {
    "question": "Which layer in IoT handles cloud analytics and decision making?",
    "options": ["Perception layer", "Network layer", "Application layer", "Data link layer"],
    "answer": 2,
    "explanation": "The application layer is responsible for interpreting data and making decisions."
  },
  {
    "question": "What is the main function of IoT gateways?",
    "options": ["Connect devices to power", "Secure the cloud", "Bridge local networks to the cloud", "Act as sensors"],
    "answer": 2,
    "explanation": "IoT gateways connect edge devices to the cloud and sometimes preprocess data."
  },
  {
    "question": "What type of data does a temperature sensor in IoT produce?",
    "options": ["Structured data", "Semi-structured data", "Unstructured data", "Encrypted data"],
    "answer": 0,
    "explanation": "Sensor data like temperature is typically structured numerical data."
  },
  {
    "question": "Which of the following is an IoT security threat?",
    "options": ["Firewalls", "Encryption", "Botnets", "VPNs"],
    "answer": 2,
    "explanation": "Botnets can take over vulnerable IoT devices and cause cyberattacks."
  },
  {
    "question": "What is an advantage of smart homes?",
    "options": ["Manual lighting", "Higher bills", "Remote control of devices", "Increased manual work"],
    "answer": 2,
    "explanation": "Smart homes allow users to remotely control appliances, increasing convenience."
  },
  {
    "question": "What type of network is used to connect devices in IoT?",
    "options": ["LAN only", "MAN", "PAN", "Any network"],
    "answer": 3,
    "explanation": "IoT devices may use LAN, PAN, WAN, or others depending on the use case."
  },
  {
    "question": "Which technology is essential for identifying individual objects in IoT?",
    "options": ["NFC", "QR Code", "RFID", "SMS"],
    "answer": 2,
    "explanation": "RFID is used to uniquely identify and track objects in IoT systems."
  },
  {
    "question": "Which IoT layer is responsible for data sensing?",
    "options": ["Network", "Application", "Perception", "Transport"],
    "answer": 2,
    "explanation": "The perception layer deals with sensors and data collection in IoT."
  },
  {
    "question": "Which of the following is a challenge in IoT device management?",
    "options": ["Battery life", "Screen size", "Portability", "Graphics"],
    "answer": 0,
    "explanation": "Battery life is a critical challenge in maintaining always-connected IoT devices."
  },
  {
    "question": "Smart farming systems use IoT to monitor:",
    "options": ["Soil, crops, and water", "Employee performance", "Market trends", "CCTV footage"],
    "answer": 0,
    "explanation": "IoT in agriculture monitors soil conditions, crop health, and irrigation."
  },
  {
    "question": "Which device enables remote control of lighting in a smart home?",
    "options": ["Thermostat", "Smart plug", "Smart switch", "Digital lock"],
    "answer": 2,
    "explanation": "Smart switches allow remote and automated control of lights and appliances."
  },
  {
    "question": "IoT devices mostly use which kind of communication model?",
    "options": ["One-to-many", "Broadcast", "Many-to-many", "Client-server"],
    "answer": 3,
    "explanation": "IoT communication often follows the client-server model for reliability and control."
  },
  {
    "question": "IoT-based smart cities aim to improve:",
    "options": ["Weather forecasting", "Urban management", "Entertainment", "Tourism only"],
    "answer": 1,
    "explanation": "Smart cities use IoT for better infrastructure, traffic, and waste management."
  },
  {
    "question": "IoT devices often suffer from lack of:",
    "options": ["Data", "Power", "Security", "Applications"],
    "answer": 2,
    "explanation": "Security is a major concern in IoT due to poor protection and exposure to threats."
  },
  {
    "question": "Which component in IoT allows decision-making logic?",
    "options": ["Cloud storage", "Sensor", "Actuator", "Controller"],
    "answer": 3,
    "explanation": "Controllers (like microcontrollers) process inputs and make decisions."
  },
  {
    "question": "The architecture of IoT typically includes how many layers?",
    "options": ["2", "3", "4", "5"],
    "answer": 1,
    "explanation": "IoT architecture typically includes 3 layers: perception, network, and application."
  },
  {
    "question": "Which sector uses IoT for tracking delivery vehicles?",
    "options": ["Education", "Finance", "Logistics", "Retail"],
    "answer": 2,
    "explanation": "Logistics relies on IoT for tracking, fleet management, and optimization."
  },
  {
    "question": "Which term describes intelligent devices that connect to the internet?",
    "options": ["Smart devices", "Remote PCs", "Virtual machines", "Manual terminals"],
    "answer": 0,
    "explanation": "Smart devices are IoT-enabled and capable of sending/receiving data online."
  },
  {
    "question": "IoT improves healthcare by enabling:",
    "options": ["Manual records", "Paper-based tests", "Remote monitoring", "Hospital-based only care"],
    "answer": 2,
    "explanation": "IoT allows remote patient monitoring and real-time health updates."
  },
  {
    "question": "In IoT, what do 'digital twins' represent?",
    "options": ["3D Models", "Online avatars", "Virtual models of physical devices", "Network failures"],
    "answer": 2,
    "explanation": "Digital twins are virtual replicas of real-world devices used in simulations and monitoring."
  }
]
;
    } else if (chapter === 5) {
      return [
  {
    "question": "What does AR stand for in emerging technologies?",
    "options": ["Advanced Rendering", "Artificial Robotics", "Augmented Reality", "Automated Response"],
    "answer": 2,
    "explanation": "AR stands for Augmented Reality, which enhances real-world environments using digital elements."
  },
  {
    "question": "Which technology overlays digital information onto the physical world?",
    "options": ["Virtual Reality", "Augmented Reality", "Mixed Reality", "Real-Time Simulation"],
    "answer": 1,
    "explanation": "Augmented Reality superimposes digital data over real environments."
  },
  {
    "question": "Which device is commonly used to experience AR?",
    "options": ["VR headset", "Smart glasses", "Touchscreen monitor", "Keyboard"],
    "answer": 1,
    "explanation": "Smart glasses like Microsoft HoloLens are commonly used for AR applications."
  },
  {
    "question": "Which of the following is NOT a key component of AR architecture?",
    "options": ["Display", "Tracking", "Projection", "Data Caching"],
    "answer": 3,
    "explanation": "Data caching is not a fundamental component of AR architecture."
  },
  {
    "question": "What is the main difference between AR and VR?",
    "options": ["AR is immersive, VR is not", "AR replaces reality, VR enhances it", "VR is fully virtual, AR overlays digital content on the real world", "They are the same"],
    "answer": 2,
    "explanation": "AR overlays digital content on the real world; VR replaces the real world entirely."
  },
  {
    "question": "What does 'MR' stand for in immersive technology?",
    "options": ["Modified Reality", "Mixed Reality", "Multi Reality", "Mapped Reality"],
    "answer": 1,
    "explanation": "MR stands for Mixed Reality, blending physical and digital worlds."
  },
  {
    "question": "Which of the following industries benefits from AR in training and simulation?",
    "options": ["Agriculture", "Healthcare", "Education", "Entertainment"],
    "answer": 1,
    "explanation": "Healthcare uses AR to simulate surgeries and train professionals."
  },
  {
    "question": "Which of the following is an example of AR use in education?",
    "options": ["E-books", "AR anatomy apps", "Smartboards", "Online quizzes"],
    "answer": 1,
    "explanation": "AR apps allow interactive visualization of anatomy in educational settings."
  },
  {
    "question": "What component of AR helps determine object locations in space?",
    "options": ["Rendering engine", "Tracker", "Controller", "Transmitter"],
    "answer": 1,
    "explanation": "Trackers are essential for locating objects and anchoring digital content in AR."
  },
  {
    "question": "Which of the following is a similarity between AR and MR?",
    "options": ["They both fully block the real world", "They both require headsets", "They blend digital content with the real world", "They are used only in gaming"],
    "answer": 2,
    "explanation": "Both AR and MR combine digital and real-world elements."
  },
  {
    "question": "AR can be enhanced with which of the following technologies?",
    "options": ["3D Mapping", "Traditional media", "Circuit boards", "Printers"],
    "answer": 0,
    "explanation": "3D mapping enhances AR by aligning virtual elements accurately with the physical world."
  },
  {
    "question": "Which of these is an AR application in entertainment?",
    "options": ["PowerPoint", "AR mobile games", "TV shows", "PDFs"],
    "answer": 1,
    "explanation": "AR-based mobile games overlay digital characters on real-world scenes."
  },
  {
    "question": "What is the purpose of AR markers?",
    "options": ["Enhance internet speed", "Control user interface", "Trigger AR content", "Store user data"],
    "answer": 2,
    "explanation": "AR markers (like QR codes) are used to trigger digital overlays."
  },
  {
    "question": "What does AR rely on to align digital objects to physical environments?",
    "options": ["GPS only", "Human input", "Sensors and tracking systems", "Wi-Fi signals"],
    "answer": 2,
    "explanation": "AR uses sensors and tracking to align content correctly."
  },
  {
    "question": "Which type of AR uses GPS and compass for location awareness?",
    "options": ["Marker-based", "Projection-based", "Location-based", "SLAM"],
    "answer": 2,
    "explanation": "Location-based AR uses GPS and compass to determine context."
  },
  {
    "question": "Which application uses AR for medical imaging visualization?",
    "options": ["Pokémon GO", "AR Toolkit", "AccuVein", "Google Maps"],
    "answer": 2,
    "explanation": "AccuVein is an AR tool that helps visualize veins for injections."
  },
  {
    "question": "Which of the following is a limitation of AR?",
    "options": ["Real-time interaction", "Immersion", "High development cost", "3D modeling"],
    "answer": 2,
    "explanation": "AR systems are often costly to develop and deploy."
  },
  {
    "question": "What is the output device typically used in AR systems?",
    "options": ["Camera", "Display screen", "Audio speaker", "Joystick"],
    "answer": 1,
    "explanation": "Displays show the final augmented visuals to users."
  },
  {
    "question": "What field uses AR to project machinery repairs for technicians?",
    "options": ["Banking", "Retail", "Manufacturing", "Law"],
    "answer": 2,
    "explanation": "Manufacturing uses AR for repair guidance and assembly instructions."
  },
  {
    "question": "Which component processes the data in AR systems?",
    "options": ["GPS", "Camera", "CPU", "Display"],
    "answer": 2,
    "explanation": "The CPU processes sensor inputs and generates AR content."
  },
  {
    "question": "Which AR type does not require physical markers?",
    "options": ["Marker-based AR", "Projection-based AR", "Markerless AR", "Head-up AR"],
    "answer": 2,
    "explanation": "Markerless AR uses location data or object recognition instead of markers."
  },
  {
    "question": "Which algorithm helps AR systems map unknown environments?",
    "options": ["Sorting", "SLAM", "Binary Search", "ARP"],
    "answer": 1,
    "explanation": "SLAM (Simultaneous Localization and Mapping) helps devices map environments in real-time."
  },
  {
    "question": "Which of the following describes immersive AR?",
    "options": ["Only audio interaction", "Text-based overlays", "Full digital integration into surroundings", "Printed content"],
    "answer": 2,
    "explanation": "Immersive AR blends digital objects realistically into physical space."
  },
  {
    "question": "Which AR application is used in navigation?",
    "options": ["Snapchat", "Google Lens", "Google Maps AR", "Adobe Illustrator"],
    "answer": 2,
    "explanation": "Google Maps AR provides real-time navigation overlays on live video."
  },
  {
    "question": "What type of user input does AR often use?",
    "options": ["Mouse clicks", "Keyboard", "Gestures and voice", "Script writing"],
    "answer": 2,
    "explanation": "AR interfaces often include gestures and voice commands."
  },
  {
    "question": "Which of the following is true for Virtual Reality (VR)?",
    "options": ["Requires physical reality", "Enhances surroundings", "Completely immersive", "Overlays digital images"],
    "answer": 2,
    "explanation": "VR is a completely immersive digital experience."
  },
  {
    "question": "What is a key requirement for good AR performance?",
    "options": ["Bright screen", "High memory", "Accurate tracking", "Colorful interface"],
    "answer": 2,
    "explanation": "Tracking accuracy ensures realistic placement of virtual elements."
  },
  {
    "question": "Which term describes the digital content used in AR systems?",
    "options": ["Overlays", "Frames", "Widgets", "Snippets"],
    "answer": 0,
    "explanation": "Overlays are digital images, text, or animations layered onto real views."
  },
  {
    "question": "Which software library is commonly used in AR development?",
    "options": ["Vuforia", "React", "JQuery", "MongoDB"],
    "answer": 0,
    "explanation": "Vuforia is a leading AR SDK for developing augmented experiences."
  },
  {
    "question": "What AR concept is used in mobile gaming apps like Pokémon GO?",
    "options": ["SLAM", "Location-based AR", "Virtual Reality", "3D Modeling"],
    "answer": 1,
    "explanation": "Pokémon GO uses location-based AR triggered by GPS coordinates."
  },
  {
    "question": "Which hardware component captures the environment for AR processing?",
    "options": ["Microphone", "Camera", "Speaker", "Router"],
    "answer": 1,
    "explanation": "Cameras capture the real world to allow AR systems to overlay digital elements."
  },
  {
    "question": "Which component detects user head movements in AR headsets?",
    "options": ["Touchpad", "Accelerometer", "Joystick", "Trackpad"],
    "answer": 1,
    "explanation": "Accelerometers help detect device movement and orientation."
  },
  {
    "question": "Which company manufactures HoloLens AR headsets?",
    "options": ["Apple", "Meta", "Microsoft", "Google"],
    "answer": 2,
    "explanation": "Microsoft developed the HoloLens AR headset for commercial and industrial use."
  },
  {
    "question": "Which of these is a key feature of AR-based learning apps?",
    "options": ["Flashcards only", "Textbooks only", "3D visualization", "Multiple choice quizzes only"],
    "answer": 2,
    "explanation": "AR enhances learning by showing interactive 3D models."
  },
  {
    "question": "Which of the following can be added using AR in retail?",
    "options": ["Weather forecast", "Product comparison", "Virtual try-on", "Manual checkout"],
    "answer": 2,
    "explanation": "AR enables users to virtually try on clothes, glasses, etc."
  },
  {
    "question": "What is the function of projection in AR architecture?",
    "options": ["Sound control", "Virtual keyboard", "Display augmentation", "Security check"],
    "answer": 2,
    "explanation": "Projection components are responsible for displaying the augmented content to users."
  },
  {
    "question": "What is one major challenge in AR system development?",
    "options": ["Short battery life", "Low interest", "No user interface", "Too much demand"],
    "answer": 0,
    "explanation": "AR devices often consume battery quickly due to constant tracking and rendering."
  }
]
;
    } else if (chapter === 6) {
      return [
  {
    "question": "Which of the following is a major ethical issue in emerging technologies?",
    "options": ["Storage", "Speed", "Privacy", "Design"],
    "answer": 2,
    "explanation": "Privacy is a major concern as technologies collect and process personal data."
  },
  {
    "question": "Digital privacy mainly deals with:",
    "options": ["Battery usage", "Data ownership and protection", "Internet speed", "Device color"],
    "answer": 1,
    "explanation": "Digital privacy refers to protecting personal data and controlling who can access it."
  },
  {
    "question": "What is meant by professional accountability in tech?",
    "options": ["Doing things manually", "Owning errors and being responsible", "Filing taxes", "Hiring staff"],
    "answer": 1,
    "explanation": "Accountability means being responsible for your actions and their consequences."
  },
  {
    "question": "Which of the following is a general ethical principle?",
    "options": ["Transparency", "Speed", "Noise reduction", "App usage"],
    "answer": 0,
    "explanation": "Transparency in processes and decisions is an essential ethical principle."
  },
  {
    "question": "Which right is most directly affected by surveillance technology?",
    "options": ["Right to vote", "Right to work", "Right to privacy", "Right to education"],
    "answer": 2,
    "explanation": "Surveillance impacts individuals' right to privacy and personal space."
  },
  {
    "question": "What do ethical and regulatory challenges often aim to address?",
    "options": ["Low speed networks", "Security updates", "Harm caused by misuse", "Better design"],
    "answer": 2,
    "explanation": "Ethical frameworks help prevent harm and misuse of technologies."
  },
  {
    "question": "Which of the following best describes 'digital ethics'?",
    "options": ["Safe coding", "Ethical behavior in digital environments", "Free software", "Multimedia use"],
    "answer": 1,
    "explanation": "Digital ethics refers to responsible use of technology and digital content."
  },
  {
    "question": "Which of the following is a professional responsibility?",
    "options": ["Creating memes", "Writing viruses", "Protecting user data", "Overusing resources"],
    "answer": 2,
    "explanation": "Professionals must ensure user data is protected from misuse or breaches."
  },
  {
    "question": "Why is trust important in technology?",
    "options": ["To make software cheaper", "To increase screen time", "To promote safe and effective use", "To boost sales"],
    "answer": 2,
    "explanation": "Trust ensures that users are confident in how systems operate and handle data."
  },
  {
    "question": "Which type of privacy involves keeping personal communications confidential?",
    "options": ["Information privacy", "Individual privacy", "Communication privacy", "Visual privacy"],
    "answer": 2,
    "explanation": "Communication privacy protects the confidentiality of conversations and messages."
  },
  {
    "question": "Which principle ensures data is collected with the consent of users?",
    "options": ["Flexibility", "Availability", "Transparency", "Informed consent"],
    "answer": 3,
    "explanation": "Informed consent means users agree to data collection with full understanding."
  },
  {
    "question": "What does it mean to be a responsible digital professional?",
    "options": ["Break rules for innovation", "Ignore laws", "Follow ethical and legal standards", "Avoid responsibility"],
    "answer": 2,
    "explanation": "Responsible professionals comply with ethical and legal expectations."
  },
  {
    "question": "Which is NOT a key ethical concern in AI systems?",
    "options": ["Bias", "Accountability", "Transparency", "Screen resolution"],
    "answer": 3,
    "explanation": "Screen resolution is a technical feature, not an ethical issue."
  },
  {
    "question": "How can AI systems be made more trustworthy?",
    "options": ["By hiding decisions", "By showing results only", "By explaining decisions clearly", "By deleting logs"],
    "answer": 2,
    "explanation": "Explainability improves trust and user understanding of AI outcomes."
  },
  {
    "question": "What is a common threat from data breaches?",
    "options": ["Faster internet", "User happiness", "Identity theft", "Hardware damage"],
    "answer": 2,
    "explanation": "Data breaches can lead to identity theft and other privacy violations."
  },
  {
    "question": "Which of the following is a threat in digital systems?",
    "options": ["Encryption", "Botnets", "Secure protocols", "Firewalls"],
    "answer": 1,
    "explanation": "Botnets are malicious networks that can be used in cyberattacks."
  },
  {
    "question": "What is the role of regulation in emerging tech?",
    "options": ["Ban technology", "Reduce profits", "Provide legal standards and protection", "Delay innovation"],
    "answer": 2,
    "explanation": "Regulations ensure safe, legal, and fair use of technology."
  },
  {
    "question": "Which of the following ensures fair data use?",
    "options": ["Data leaks", "Data hoarding", "Ethical data governance", "Unfiltered access"],
    "answer": 2,
    "explanation": "Data governance policies ensure ethical and lawful use of data."
  },
  {
    "question": "What is a risk of algorithmic bias?",
    "options": ["Accuracy improvement", "Fair access", "Discrimination", "Higher efficiency"],
    "answer": 2,
    "explanation": "Bias in algorithms can lead to unfair treatment or discrimination."
  },
  {
    "question": "What principle involves being answerable for one's digital actions?",
    "options": ["Transparency", "Accountability", "Ownership", "Collaboration"],
    "answer": 1,
    "explanation": "Accountability means taking responsibility for actions and decisions."
  },
  {
    "question": "Which of the following is NOT a privacy principle?",
    "options": ["Purpose limitation", "Data minimization", "Random collection", "Access control"],
    "answer": 2,
    "explanation": "Random data collection goes against standard privacy principles."
  },
  {
    "question": "What is the best way to handle sensitive data?",
    "options": ["Store it unencrypted", "Avoid backups", "Encrypt and secure it", "Share openly"],
    "answer": 2,
    "explanation": "Sensitive data must be encrypted and properly secured to avoid leaks."
  },
  {
    "question": "What can cause loss of user trust in a system?",
    "options": ["High uptime", "Accurate outputs", "Data misuse", "Free features"],
    "answer": 2,
    "explanation": "Trust is lost when users feel their data has been misused."
  },
  {
    "question": "Which field addresses ethical risks in tech development?",
    "options": ["UI Design", "Systems Analysis", "Technology Ethics", "Accounting"],
    "answer": 2,
    "explanation": "Technology ethics is the field that studies moral implications of new tech."
  },
  {
    "question": "Which of these could be an ethical design goal?",
    "options": ["Manipulate users", "Confuse customers", "Increase addiction", "Respect user autonomy"],
    "answer": 3,
    "explanation": "Ethical designs respect user autonomy and informed decision-making."
  },
  {
    "question": "Professional ethics expects you to:",
    "options": ["Steal ideas", "Mislead users", "Follow codes of conduct", "Hide mistakes"],
    "answer": 2,
    "explanation": "Professionals should follow a code of conduct ensuring integrity and honesty."
  },
  {
    "question": "Ethical design encourages developers to:",
    "options": ["Make addictive apps", "Collect all data", "Prevent user harm", "Block features"],
    "answer": 2,
    "explanation": "A key ethical goal is to prevent harm to users through responsible design."
  },
  {
    "question": "Which of the following is a digital privacy threat?",
    "options": ["2FA", "Cloud storage", "Phishing attacks", "File compression"],
    "answer": 2,
    "explanation": "Phishing attacks aim to steal user data and violate digital privacy."
  },
  {
    "question": "Which of these helps establish trust in a software system?",
    "options": ["Ambiguity", "Secrecy", "Clarity", "Lack of documentation"],
    "answer": 2,
    "explanation": "Clarity in communication and documentation builds trust with users."
  },
  {
    "question": "Which is a feature of trustworthy technology?",
    "options": ["Hidden errors", "Fast failures", "Predictable behavior", "No feedback"],
    "answer": 2,
    "explanation": "Trustworthy systems behave consistently and predictably."
  },
  {
    "question": "Ethics in AI seeks to avoid:",
    "options": ["Faster computation", "User personalization", "Social harm", "Efficient storage"],
    "answer": 2,
    "explanation": "Ethical AI development aims to prevent harm and uphold fairness."
  },
  {
    "question": "Why is data minimization important?",
    "options": ["Faster charging", "Reducing data collection to the necessary minimum", "Improving bandwidth", "Design simplicity"],
    "answer": 1,
    "explanation": "Data minimization limits data collection to only what is needed, reducing privacy risk."
  },
  {
    "question": "Digital trust is built on:",
    "options": ["Speed", "Style", "Ethics, privacy, and transparency", "Marketing"],
    "answer": 2,
    "explanation": "Trust depends on ethics, clear communication, and responsible data handling."
  },
  {
    "question": "Which is NOT a threat in the digital environment?",
    "options": ["Hacking", "Encryption", "Phishing", "Malware"],
    "answer": 1,
    "explanation": "Encryption protects data and is a safeguard, not a threat."
  },
  {
    "question": "An example of unethical behavior in tech is:",
    "options": ["Documenting bugs", "Sharing source code", "Inserting spyware", "Fixing errors"],
    "answer": 2,
    "explanation": "Inserting spyware without consent violates user trust and privacy."
  },
  {
    "question": "What is the goal of ethical frameworks in emerging technologies?",
    "options": ["Limit creativity", "Slow progress", "Guide responsible development", "Restrict users"],
    "answer": 2,
    "explanation": "Ethical frameworks promote responsible, safe, and fair innovation."
  },
  {
    "question": "Which of these is a sign of ethical leadership?",
    "options": ["Profit-first thinking", "Ignoring risks", "Transparent decision-making", "Removing user rights"],
    "answer": 2,
    "explanation": "Ethical leaders act transparently and prioritize public good."
  },
  {
    "question": "Why is digital ethics important in society?",
    "options": ["To block websites", "To regulate apps", "To balance innovation and responsibility", "To promote censorship"],
    "answer": 2,
    "explanation": "Digital ethics ensures innovation serves people fairly and responsibly."
  }
]
;
    } else if (chapter === 7) {
      return [
  {
    "question": "Which technology manipulates matter at the atomic and molecular scale?",
    "options": ["Biotechnology", "Artificial Intelligence", "Nanotechnology", "Blockchain"],
    "answer": 2,
    "explanation": "Nanotechnology involves manipulating materials at nanometer scales."
  },
  {
    "question": "Which emerging technology involves genetic modification?",
    "options": ["Blockchain", "Nanotech", "Biotechnology", "Cloud computing"],
    "answer": 2,
    "explanation": "Biotechnology includes genetic engineering, used in medicine and agriculture."
  },
  {
    "question": "Which of the following technologies ensures decentralized data storage and transactions?",
    "options": ["Cloud computing", "AI", "Blockchain", "IoT"],
    "answer": 2,
    "explanation": "Blockchain is a decentralized ledger technology with secure data handling."
  },
  {
    "question": "What is the smallest unit typically used in nanotechnology?",
    "options": ["Micrometer", "Millimeter", "Nanometer", "Angstrom"],
    "answer": 2,
    "explanation": "Nanotechnology operates at the nanometer scale (1 billionth of a meter)."
  },
  {
    "question": "Which of these is a use case of blockchain technology?",
    "options": ["Word processing", "Cryptocurrency", "Image editing", "Data compression"],
    "answer": 1,
    "explanation": "Blockchain is widely known for enabling secure cryptocurrency systems like Bitcoin."
  },
  {
    "question": "Which is a primary benefit of cloud computing?",
    "options": ["Slower speeds", "Physical server management", "Scalability and flexibility", "Offline access only"],
    "answer": 2,
    "explanation": "Cloud computing allows for scalable and flexible data and application access."
  },
  {
    "question": "Which of these is a potential risk of cloud computing?",
    "options": ["No internet needed", "Data loss", "Enhanced privacy", "Low storage"],
    "answer": 1,
    "explanation": "Cloud computing can risk data loss if not properly backed up or secured."
  },
  {
    "question": "Which sector uses biotechnology for improved crop production?",
    "options": ["Manufacturing", "Retail", "Agriculture", "Finance"],
    "answer": 2,
    "explanation": "Biotech enhances agriculture through genetically modified crops."
  },
  {
    "question": "Smart contracts are mostly associated with which technology?",
    "options": ["Biotech", "Cloud", "Blockchain", "Nanotech"],
    "answer": 2,
    "explanation": "Smart contracts are self-executing programs on a blockchain."
  },
  {
    "question": "Which of these is an example of cloud storage?",
    "options": ["Dropbox", "CD-ROM", "USB Drive", "Hard Disk"],
    "answer": 0,
    "explanation": "Dropbox is a cloud-based storage solution."
  },
  {
    "question": "Which term refers to storing data on internet servers rather than local devices?",
    "options": ["Blockchain", "Cloud computing", "IoT", "Edge computing"],
    "answer": 1,
    "explanation": "Cloud computing allows access to remote servers for storage and processing."
  },
  {
    "question": "Which of the following is a potential ethical concern in biotechnology?",
    "options": ["Slow processing", "High cost", "Genetic privacy", "User interface"],
    "answer": 2,
    "explanation": "Ethical concerns in biotech include genetic modification and privacy."
  },
  {
    "question": "What does DNA stand for in biotech?",
    "options": ["Digital Network Architecture", "Deoxyribonucleic Acid", "Data Navigation Algorithm", "Domain Name Access"],
    "answer": 1,
    "explanation": "DNA is the molecule carrying genetic instructions in living organisms."
  },
  {
    "question": "Which field benefits most from nanomedicine?",
    "options": ["Art", "Entertainment", "Healthcare", "Mining"],
    "answer": 2,
    "explanation": "Nanomedicine uses nanotech for drug delivery and diagnostics in healthcare."
  },
  {
    "question": "Which of the following enables on-demand access to computing resources?",
    "options": ["Blockchain", "Edge computing", "Cloud computing", "VR"],
    "answer": 2,
    "explanation": "Cloud computing provides flexible access to computing services via the internet."
  },
  {
    "question": "Which is a benefit of using blockchain in finance?",
    "options": ["Manual records", "Central control", "Improved transparency", "Offline payments"],
    "answer": 2,
    "explanation": "Blockchain offers transparency by recording transactions in immutable ledgers."
  },
  {
    "question": "Which of the following is a cloud service model?",
    "options": ["SaaS", "WiFi", "HTTP", "BIOS"],
    "answer": 0,
    "explanation": "SaaS (Software as a Service) allows software access via the internet."
  },
  {
    "question": "What is CRISPR used for in biotechnology?",
    "options": ["Data storage", "Gene editing", "Medical imaging", "Cell counting"],
    "answer": 1,
    "explanation": "CRISPR is a powerful gene-editing tool in biotechnology."
  },
  {
    "question": "Which of these is NOT a feature of blockchain?",
    "options": ["Transparency", "Decentralization", "Mutability", "Security"],
    "answer": 2,
    "explanation": "Blockchain data is immutable, meaning it cannot be changed."
  },
  {
    "question": "Which cloud service provides virtual hardware?",
    "options": ["IaaS", "SaaS", "PaaS", "NaaS"],
    "answer": 0,
    "explanation": "IaaS (Infrastructure as a Service) offers virtualized hardware resources."
  },
  {
    "question": "Nanotechnology is most likely to impact which of the following?",
    "options": ["Spiritual life", "Quantum physics", "Material science", "Mobile apps"],
    "answer": 2,
    "explanation": "Nanotech significantly influences material science and engineering at small scales."
  },
  {
    "question": "Which of these ensures data is consistent across blockchain participants?",
    "options": ["Consensus mechanism", "IP address", "Router", "Smartphone"],
    "answer": 0,
    "explanation": "Consensus mechanisms help all nodes agree on the same data in a blockchain."
  },
  {
    "question": "Which cloud model allows customers to run their own apps?",
    "options": ["IaaS", "SaaS", "PaaS", "FaaS"],
    "answer": 2,
    "explanation": "PaaS (Platform as a Service) provides platforms for users to develop and run apps."
  },
  {
    "question": "Which blockchain feature makes transactions unchangeable?",
    "options": ["Encryption", "Mining", "Immutability", "Backup"],
    "answer": 2,
    "explanation": "Immutability ensures blockchain records cannot be altered once added."
  },
  {
    "question": "Which of the following is a use of biotech in healthcare?",
    "options": ["Video streaming", "Antibiotic production", "Music therapy", "Online exams"],
    "answer": 1,
    "explanation": "Biotech enables large-scale production of antibiotics and vaccines."
  },
  {
    "question": "What is the goal of personalized medicine in biotechnology?",
    "options": ["Use of traditional drugs", "One-size-fits-all treatment", "Treating based on genetic makeup", "Avoiding technology"],
    "answer": 2,
    "explanation": "Personalized medicine tailors treatments based on a patient’s genes."
  },
  {
    "question": "Which is a concern in cloud computing?",
    "options": ["Increased accessibility", "Vendor lock-in", "Data backup", "Software updates"],
    "answer": 1,
    "explanation": "Vendor lock-in limits user flexibility to switch service providers."
  },
  {
    "question": "Which nanotech application improves solar energy efficiency?",
    "options": ["Nanochips", "Nanocoatings", "Nanobots", "Nanotubes"],
    "answer": 1,
    "explanation": "Nanocoatings reduce reflection and improve solar panel absorption."
  },
  {
    "question": "Which blockchain term refers to digital currencies?",
    "options": ["Tokens", "Keys", "Contracts", "Nodes"],
    "answer": 0,
    "explanation": "Tokens are digital currencies used within blockchain systems."
  },
  {
    "question": "Which of the following best describes hybrid cloud?",
    "options": ["A type of software", "A local backup", "Combination of private and public clouds", "A mobile phone service"],
    "answer": 2,
    "explanation": "Hybrid cloud combines private and public cloud services for flexibility."
  },
  {
    "question": "Which material is commonly used in nanotechnology?",
    "options": ["Plastic", "Glass", "Carbon nanotubes", "Wood"],
    "answer": 2,
    "explanation": "Carbon nanotubes are strong, lightweight materials used in nanotech."
  },
  {
    "question": "Which of these enables cloud service automation?",
    "options": ["Keyboard", "API", "Joystick", "Monitor"],
    "answer": 1,
    "explanation": "APIs allow programs to communicate with cloud services for automation."
  },
  {
    "question": "What is a benefit of using cloud computing in business?",
    "options": ["Increased hardware cost", "Scalability", "Local-only access", "Longer deployment time"],
    "answer": 1,
    "explanation": "Cloud computing offers scalability—adjusting resources as needed."
  },
  {
    "question": "Which property of blockchain supports tracking of digital assets?",
    "options": ["Anonymity", "Decentralization", "Traceability", "Latency"],
    "answer": 2,
    "explanation": "Traceability allows blockchain to track assets through every transaction."
  },
  {
    "question": "What is a smart material developed using nanotech?",
    "options": ["Chalk", "Self-cleaning glass", "Wool", "Cement"],
    "answer": 1,
    "explanation": "Self-cleaning glass uses nanotech to break down dirt and resist water."
  },
  {
    "question": "What role does blockchain play in supply chain management?",
    "options": ["Complicates tracking", "Adds middlemen", "Improves transparency", "Slows communication"],
    "answer": 2,
    "explanation": "Blockchain improves supply chain transparency and record accuracy."
  },
  {
    "question": "What’s one ethical concern in genetic editing?",
    "options": ["Fast results", "Increased health", "Designer babies", "Plant growth"],
    "answer": 2,
    "explanation": "Gene editing raises ethical issues like the possibility of creating 'designer babies'."
  }
]
;
    }
  }

  // Civics
  if (course === "civics") {
    if (chapter === 1){ return [
      
  {
    question: "Which of the following best defines 'Civic Education'?",
    options: [
      "A religious moral doctrine",
      "A way to enforce government laws",
      "A study that enhances the role of citizens in democracy",
      "A method to increase national defense"
    ],
    answer: 2,
    explanation: "Civic education refers to the study that promotes active and responsible citizenship in a democratic society."
  },
  {
    question: "What is the primary aim of moral and civic education in higher education institutions in Ethiopia?",
    options: [
      "To teach local dialects",
      "To train military personnel",
      "To instill democratic culture and ethical values",
      "To replace religious education"
    ],
    answer: 2,
    explanation: "Its primary aim is to educate students about democratic culture, ethical values, and responsibilities."
  },
  {
    question: "Which philosopher emphasized the need for education aligned with a state's constitution?",
    options: [
      "Socrates",
      "Aristotle",
      "Plato",
      "Hobbes"
    ],
    answer: 1,
    explanation: "Aristotle stated that citizens should be educated in accordance with the constitution of their state."
  },
  {
    question: "According to the module, good citizens are:",
    options: [
      "Born with innate moral traits",
      "Created through civic education and values",
      "Only those who obey laws",
      "Determined by social status"
    ],
    answer: 1,
    explanation: "Good citizens are developed through civic education, not born with it innately."
  },
  {
    question: "Which of the following distinguishes maximal civic education from minimal?",
    options: [
      "It focuses solely on examinations",
      "It excludes moral values",
      "It includes active participation and discussion",
      "It relies only on classroom lectures"
    ],
    answer: 2,
    explanation: "Maximal civic education emphasizes student engagement, values, and active participation."
  },
  {
    question: "What does ethics primarily study?",
    options: [
      "Scientific discoveries",
      "Political systems",
      "Right and wrong in human behavior",
      "Religious rituals"
    ],
    answer: 2,
    explanation: "Ethics is the philosophical study of morality and human conduct."
  },
  {
    question: "How does morality differ from ethics?",
    options: [
      "Morality is about scientific facts",
      "Ethics is emotional; morality is rational",
      "Morality deals with conduct; ethics with its study",
      "There is no difference"
    ],
    answer: 2,
    explanation: "Morality refers to conduct, while ethics is the study of such conduct."
  },
  {
    question: "Which of the following is NOT a goal of civic and moral education?",
    options: [
      "Creating responsible citizens",
      "Teaching war strategies",
      "Encouraging democratic values",
      "Promoting critical thinking"
    ],
    answer: 1,
    explanation: "Teaching war strategies is unrelated to the goals of moral and civic education."
  },
  {
    question: "What makes an act ethical according to ethical standards?",
    options: [
      "It aligns with personal desires",
      "It is legal under all conditions",
      "It conforms to moral standards and reason",
      "It benefits a specific group"
    ],
    answer: 2,
    explanation: "Ethical acts are judged by their conformity to reason and shared moral standards."
  },
  {
    question: "Which is TRUE about civic education's role in democracy?",
    options: [
      "It replaces voting rights",
      "It discourages civil participation",
      "It promotes active involvement and responsibility",
      "It only focuses on political leaders"
    ],
    answer: 2,
    explanation: "Civic education equips citizens with skills and values needed to actively engage in democratic life."
  },

      {
    question: "Which of the following is NOT considered a source of ethics?",
    options: [
      "Philosophy",
      "Religion",
      "Culture",
      "Fashion trends"
    ],
    answer: 3,
    explanation: "Fashion trends are not a recognized foundation or source of ethical systems."
  },
  {
    question: "What role does critical thinking play in civic education?",
    options: [
      "It discourages political debate",
      "It enhances obedience to authority",
      "It encourages analysis and independent judgment",
      "It eliminates the need for values"
    ],
    answer: 2,
    explanation: "Critical thinking enables students to question, evaluate, and understand civic responsibilities."
  },
  {
    question: "According to the module, why is civic education vital in Ethiopian universities?",
    options: [
      "To prepare students for military service",
      "To teach international law",
      "To promote democracy, tolerance, and civic duties",
      "To strengthen religious beliefs"
    ],
    answer: 2,
    explanation: "It prepares students to uphold democratic values and participate responsibly in society."
  },
  {
    question: "A good moral act is one that:",
    options: [
      "Is accepted by everyone",
      "Is enforced by law",
      "Respects human dignity and promotes well-being",
      "Maximizes personal pleasure"
    ],
    answer: 2,
    explanation: "Ethical acts promote human dignity, mutual respect, and societal good."
  },
  {
    question: "Which is NOT a characteristic of moral standards?",
    options: [
      "Universality",
      "Impartiality",
      "Flexibility for personal gain",
      "Prescriptiveness"
    ],
    answer: 2,
    explanation: "Moral standards are not meant to be adjusted for personal interest or gain."
  },
  {
    question: "Which ancient Greek thinker introduced the Socratic Method?",
    options: [
      "Aristotle",
      "Socrates",
      "Plato",
      "Pythagoras"
    ],
    answer: 1,
    explanation: "Socrates developed the question-and-answer method to explore ethical truths."
  },
  {
    question: "Which aspect does civic education NOT directly cover?",
    options: [
      "Citizenship duties",
      "Moral decision-making",
      "Scientific experiment design",
      "Democratic engagement"
    ],
    answer: 2,
    explanation: "Scientific experiment design is outside the scope of civic and moral education."
  },
  {
    question: "Ethical relativism holds that:",
    options: [
      "There is a single universal moral truth",
      "Moral judgments vary based on culture",
      "Ethics is determined by science",
      "Only laws define morality"
    ],
    answer: 1,
    explanation: "Ethical relativism argues that morality depends on cultural and societal norms."
  },
  {
    question: "Which behavior shows civic responsibility?",
    options: [
      "Ignoring laws that seem minor",
      "Participating in community service",
      "Spreading misinformation",
      "Avoiding public discussions"
    ],
    answer: 1,
    explanation: "Community service is a key form of civic engagement and responsibility."
  },
  {
    question: "Which principle is most crucial in moral decision-making?",
    options: [
      "Desire for popularity",
      "Self-interest",
      "Rational justification",
      "Peer influence"
    ],
    answer: 2,
    explanation: "Rationality is central to moral choices that respect universal values."
  },
  {
    question: "What distinguishes moral education from civic education?",
    options: [
      "Moral education is religious only",
      "Civic is based on laws; moral on values",
      "Civic is personal; moral is public",
      "They are completely unrelated"
    ],
    answer: 1,
    explanation: "Moral education concerns ethical values; civic education focuses on democratic duties."
  },
  {
    question: "Which is an outcome of civic illiteracy?",
    options: [
      "Improved national unity",
      "Passive citizenship and authoritarianism",
      "Greater innovation",
      "Stronger institutions"
    ],
    answer: 1,
    explanation: "Without civic understanding, citizens are more prone to manipulation and apathy."
  },
  {
    question: "Which of the following is NOT a moral value?",
    options: [
      "Honesty",
      "Kindness",
      "Speed",
      "Respect"
    ],
    answer: 2,
    explanation: "Speed is a technical quality, not an ethical or moral value."
  },
  {
    question: "Which is a feature of democracy that civic education promotes?",
    options: [
      "Monopoly of power",
      "Citizenship inactivity",
      "Participation and equality",
      "Political suppression"
    ],
    answer: 2,
    explanation: "Democracy relies on participation, transparency, and equality—values civic education promotes."
  },
  {
    question: "Civic and moral education help students to:",
    options: [
      "Only memorize rules",
      "Focus on exams only",
      "Develop analytical, ethical, and participatory skills",
      "Avoid public engagement"
    ],
    answer: 2,
    explanation: "It encourages students to think critically, act morally, and participate actively."
  },
  {
    question: "Why is universal moral principle important?",
    options: [
      "It changes per person",
      "It is useful for government only",
      "It ensures fairness and ethical consistency",
      "It prevents diversity"
    ],
    answer: 2,
    explanation: "Universal principles provide common ground for fairness and moral evaluation."
  },
  {
    question: "What role does tolerance play in civic education?",
    options: [
      "Weakens cultural identity",
      "Promotes conflict",
      "Encourages respect for diversity and peaceful coexistence",
      "Discourages opinion-sharing"
    ],
    answer: 2,
    explanation: "Tolerance is essential to mutual respect and peaceful democratic life."
  },
  {
    question: "What is civic virtue?",
    options: [
      "Patriotism and devotion to community welfare",
      "Obedience to religious laws",
      "Rejection of politics",
      "Avoiding taxes"
    ],
    answer: 0,
    explanation: "Civic virtue includes actions like voting, community service, and lawfulness."
  },
  {
    question: "Which is NOT a quality of a morally responsible citizen?",
    options: [
      "Selfishness",
      "Integrity",
      "Justice",
      "Empathy"
    ],
    answer: 0,
    explanation: "Selfishness goes against the values of moral responsibility and public good."
  },
  {
    question: "Which of the following practices supports moral growth?",
    options: [
      "Rote memorization",
      "Critical self-reflection",
      "Blind obedience",
      "Isolation from society"
    ],
    answer: 1,
    explanation: "Self-reflection helps individuals evaluate and improve moral behavior."
  }
];
}
    else if (chapter === 2){ return [
  {
    question: "Which of the following best defines democracy?",
    options: [
      "Rule by a selected elite",
      "Government controlled by military",
      "System where citizens hold sovereign power",
      "Leadership through divine appointment"
    ],
    answer: 2,
    explanation: "Democracy is a form of government where power ultimately rests with the people."
  },
  {
    question: "Which type of democracy is exercised through direct citizen participation?",
    options: [
      "Monarchical democracy",
      "Representative democracy",
      "Direct democracy",
      "Federal democracy"
    ],
    answer: 2,
    explanation: "Direct democracy allows citizens to vote directly on laws and policies."
  },
  {
    question: "What is the key principle of the rule of law?",
    options: [
      "The law applies only to citizens",
      "Leaders are above the law",
      "Everyone is subject to the law",
      "The law changes based on social class"
    ],
    answer: 2,
    explanation: "The rule of law means that no one is above the law, including leaders."
  },
  {
    question: "Which of these is NOT a democratic value?",
    options: [
      "Tolerance",
      "Pluralism",
      "Authoritarianism",
      "Participation"
    ],
    answer: 2,
    explanation: "Authoritarianism contradicts the principles of democracy."
  },
  {
    question: "Which term refers to the division of powers among legislative, executive, and judiciary branches?",
    options: [
      "Rule of law",
      "Federalism",
      "Separation of powers",
      "Nationalization"
    ],
    answer: 2,
    explanation: "Separation of powers ensures checks and balances among government branches."
  },
  {
    question: "What does political tolerance mean in a democracy?",
    options: [
      "Only majority views are accepted",
      "Minorities must remain silent",
      "Accepting and respecting opposing opinions",
      "Preventing public debates"
    ],
    answer: 2,
    explanation: "Tolerance means respecting differing views, a core value in democratic life."
  },
  {
    question: "What is the role of a constitution in a democracy?",
    options: [
      "A symbolic tradition",
      "A religious text",
      "A legal framework outlining government structure and rights",
      "A temporary guideline"
    ],
    answer: 2,
    explanation: "A constitution establishes legal rights, structures of government, and limits power."
  },
  {
    question: "In a representative democracy, how do citizens exercise their power?",
    options: [
      "Through divine rule",
      "By electing representatives",
      "Through family lineage",
      "By hereditary leadership"
    ],
    answer: 1,
    explanation: "In representative democracy, citizens elect officials to act on their behalf."
  },
  {
    question: "Which of the following is essential for a free and fair election?",
    options: [
      "One-party rule",
      "Use of force",
      "Independent electoral commission",
      "Censorship of media"
    ],
    answer: 2,
    explanation: "An independent electoral body ensures fairness and transparency in elections."
  },
  {
    question: "Which of the following is an undemocratic practice?",
    options: [
      "Public accountability",
      "Censorship of opposing views",
      "Political pluralism",
      "Rule of law"
    ],
    answer: 1,
    explanation: "Censorship suppresses freedom of speech and contradicts democratic ideals."
  },
  {
    question: "Which principle allows citizens to express opinions without fear?",
    options: [
      "Freedom of speech",
      "Martial law",
      "Judicial supremacy",
      "Nationalism"
    ],
    answer: 0,
    explanation: "Freedom of speech is a fundamental right in a democratic society."
  },
  {
    question: "Which one is an example of democratic participation?",
    options: [
      "Avoiding elections",
      "Peaceful protest",
      "Single-party dictatorship",
      "Suppression of media"
    ],
    answer: 1,
    explanation: "Peaceful protest is a legal form of political participation in democracy."
  },
  {
    question: "Democracy is sustained by which of the following?",
    options: [
      "Blind loyalty to leaders",
      "Active and informed citizenship",
      "Strict religious law",
      "Limited access to information"
    ],
    answer: 1,
    explanation: "Democracy thrives when citizens are informed, engaged, and active."
  },
  {
    question: "What is majority rule?",
    options: [
      "The largest party rules without input",
      "The decision of the largest number prevails, respecting minority rights",
      "Minority dominates decision-making",
      "There is no voting"
    ],
    answer: 1,
    explanation: "Majority rule in democracy also requires protection of minority rights."
  },
  {
    question: "Which of the following is a danger to democracy?",
    options: [
      "Free press",
      "Political debate",
      "Authoritarianism",
      "Independent judiciary"
    ],
    answer: 2,
    explanation: "Authoritarianism restricts freedom and centralizes power, undermining democracy."
  },
  {
    question: "A citizen's duty in democracy includes:",
    options: [
      "Avoiding taxes",
      "Obeying laws and voting",
      "Rejecting others' beliefs",
      "Depending on government entirely"
    ],
    answer: 1,
    explanation: "Citizens are expected to follow laws and participate in civic life."
  },
  {
    question: "Which of the following helps ensure transparency in governance?",
    options: [
      "Secret policies",
      "Censorship",
      "Open access to information",
      "One-party rule"
    ],
    answer: 2,
    explanation: "Transparency relies on citizens’ access to government actions and decisions."
  },
  {
    question: "Political pluralism means:",
    options: [
      "Military control of parties",
      "One ideology dominates",
      "Multiple groups coexist and compete",
      "Prohibition of opposition"
    ],
    answer: 2,
    explanation: "Pluralism enables coexistence of various political, cultural, and ideological groups."
  },
  {
    question: "Which is NOT a characteristic of democratic elections?",
    options: [
      "Regular timing",
      "Equal voting rights",
      "Intimidation of voters",
      "Transparency"
    ],
    answer: 2,
    explanation: "Free elections must be fair, equal, and free from intimidation."
  },
  {
    question: "Which is the best safeguard against tyranny in democracy?",
    options: [
      "Unquestioned loyalty",
      "Military control",
      "Checks and balances",
      "Centralization of power"
    ],
    answer: 2,
    explanation: "Checks and balances prevent concentration of power and abuse."
  },
  {
    question: "In a constitutional democracy, power is limited by:",
    options: [
      "Individual preferences",
      "Military leaders",
      "A written legal framework",
      "Economic status"
    ],
    answer: 2,
    explanation: "Constitutions legally define and limit government powers."
  },
  {
    question: "Civil society contributes to democracy by:",
    options: [
      "Replacing elections",
      "Promoting military rule",
      "Enhancing public participation",
      "Silencing criticism"
    ],
    answer: 2,
    explanation: "Civil society empowers citizens to express needs and influence policies."
  },
  {
    question: "Judicial independence ensures that:",
    options: [
      "Judges follow party lines",
      "Judiciary is free from external influence",
      "Judges serve executive will",
      "Laws vary by person"
    ],
    answer: 1,
    explanation: "An independent judiciary ensures impartial justice and rule of law."
  },
  {
    question: "Which action upholds democratic accountability?",
    options: [
      "Leaders hiding policies",
      "Citizens asking for justification of decisions",
      "Silencing press",
      "Avoiding elections"
    ],
    answer: 1,
    explanation: "Citizens must hold leaders accountable through legal and civic means."
  },
  {
    question: "Democracy protects minorities by ensuring:",
    options: [
      "Majority supremacy",
      "Suppression of differences",
      "Equal legal rights and protections",
      "One culture dominates"
    ],
    answer: 2,
    explanation: "Democracy defends minority rights through equality before the law."
  },
  {
    question: "Free press in democracy serves to:",
    options: [
      "Spread state propaganda",
      "Inform citizens and expose abuses",
      "Support censorship",
      "Avoid criticism"
    ],
    answer: 1,
    explanation: "A free press is essential for transparency, accountability, and informed citizens."
  },
  {
    question: "Which of the following weakens democratic culture?",
    options: [
      "Respect for law",
      "Corruption",
      "Equal rights",
      "Participation"
    ],
    answer: 1,
    explanation: "Corruption undermines trust and fair functioning in a democracy."
  },
  {
    question: "Public dialogue contributes to democracy by:",
    options: [
      "Suppressing dissent",
      "Encouraging open exchange of ideas",
      "Limiting speech",
      "Silencing minority views"
    ],
    answer: 1,
    explanation: "Dialogue fosters understanding and collective problem-solving in society."
  },
  {
    question: "Which element is central to democratic citizenship?",
    options: [
      "Blind obedience",
      "Apathy",
      "Active responsibility",
      "Avoiding engagement"
    ],
    answer: 2,
    explanation: "Citizenship in democracy means informed, responsible engagement in society."
  },
  {
    question: "What does civic equality mean?",
    options: [
      "Same income for all",
      "Equal access to rights and participation",
      "Same education level",
      "Power for elites"
    ],
    answer: 1,
    explanation: "Civic equality ensures all citizens are equal under the law and in participation."
  },
  {
    question: "A democratic constitution is:",
    options: [
      "Secret",
      "Flexible without consent",
      "Public, legal, and binding",
      "Imposed by elites"
    ],
    answer: 2,
    explanation: "It is a public legal document that defines citizen rights and government duties."
  },
  {
    question: "Democracy requires citizens to:",
    options: [
      "Accept tyranny",
      "Stay passive",
      "Be informed and involved",
      "Be silent"
    ],
    answer: 2,
    explanation: "Active and informed citizenry is vital for democratic governance."
  },
  {
    question: "A key reason democracy fails is:",
    options: [
      "Citizen awareness",
      "Strong institutions",
      "Low public participation",
      "Rule of law"
    ],
    answer: 2,
    explanation: "Democracy weakens when citizens do not engage in civic processes."
  },
  {
    question: "What type of democracy is practiced when citizens vote for representatives?",
    options: [
      "Direct",
      "Absolute",
      "Representative",
      "Tribal"
    ],
    answer: 2,
    explanation: "In representative democracy, elected officials make decisions on behalf of the people."
  },
  {
    question: "Tolerance in democracy includes:",
    options: [
      "Banning differing views",
      "Accepting diversity and peaceful disagreement",
      "Punishing critics",
      "Enforcing one religion"
    ],
    answer: 1,
    explanation: "Democracy supports peaceful coexistence of different views and lifestyles."
  }
]

}
    else if (chapter === 3){ return [
  {
    question: "What does constitutionalism primarily refer to?",
    options: [
      "A dictatorship based on rules",
      "Absolute rule of majority",
      "Government limited by a constitution",
      "Elimination of judicial systems"
    ],
    answer: 2,
    explanation: "Constitutionalism means governance under the framework and limits set by a constitution."
  },
  {
    question: "Which of the following is NOT a feature of a constitution?",
    options: [
      "Defines powers of government",
      "Outlines citizen rights",
      "Gives unlimited power to the military",
      "Creates legal boundaries for leaders"
    ],
    answer: 2,
    explanation: "A true constitution limits power and does not grant absolute authority to any institution."
  },
  {
    question: "Why is the supremacy of the constitution important?",
    options: [
      "To allow flexible interpretation by leaders",
      "To ensure military control",
      "To guarantee that all laws conform to the constitution",
      "To enable quick decision-making"
    ],
    answer: 2,
    explanation: "Supremacy ensures that all actions and laws align with constitutional principles."
  },
  {
    question: "A rigid constitution is characterized by:",
    options: [
      "Ease of amendment",
      "Lack of legal authority",
      "Strong amendment procedures",
      "No enforcement power"
    ],
    answer: 2,
    explanation: "Rigid constitutions have detailed and formal amendment processes to preserve stability."
  },
  {
    question: "What does constitutional democracy mean?",
    options: [
      "Ruling by constitution without elections",
      "Democracy restricted by religion",
      "Democracy functioning under a constitution",
      "Random voting with no rules"
    ],
    answer: 2,
    explanation: "It means democratic governance that operates under constitutional law."
  },
  {
    question: "What is the significance of a written constitution?",
    options: [
      "It can be ignored easily",
      "It provides a clear legal reference",
      "It avoids public access",
      "It is symbolic only"
    ],
    answer: 1,
    explanation: "A written constitution provides a concrete legal guide for citizens and officials."
  },
  {
    question: "The Ethiopian constitution recognizes sovereignty lies in:",
    options: [
      "The president",
      "The military",
      "The people and nations/nationalities",
      "The House of Federation"
    ],
    answer: 2,
    explanation: "Article 8 declares sovereignty resides in the nations, nationalities, and peoples."
  },
  {
    question: "Which article in the Ethiopian constitution guarantees human rights?",
    options: [
      "Article 5",
      "Article 10",
      "Article 13",
      "Article 40"
    ],
    answer: 2,
    explanation: "Article 13 affirms human rights and freedoms under international standards."
  },
  {
    question: "The separation of powers is meant to:",
    options: [
      "Unify branches of government",
      "Enable judicial supremacy",
      "Prevent abuse by dividing authority",
      "Weaken the executive"
    ],
    answer: 2,
    explanation: "Separation of powers checks government branches against each other to avoid tyranny."
  },
  {
    question: "Which of the following undermines constitutionalism?",
    options: [
      "Rule of law",
      "Judicial independence",
      "Abuse of emergency powers",
      "Civic education"
    ],
    answer: 2,
    explanation: "Emergency powers, when abused, can override constitutional limits and harm democracy."
  },
  {
    question: "Which body interprets the Ethiopian constitution?",
    options: [
      "House of Peoples’ Representatives",
      "Council of Constitutional Inquiry and House of Federation",
      "Supreme Court",
      "Prime Minister’s Office"
    ],
    answer: 1,
    explanation: "Interpretation is conducted by the Council of Constitutional Inquiry and the House of Federation."
  },
  {
    question: "Which is a core characteristic of constitutional government?",
    options: [
      "Absolute rule",
      "Unwritten norms",
      "Limited government authority",
      "Religious law"
    ],
    answer: 2,
    explanation: "Constitutional governments are limited by law and accountable to the people."
  },
  {
    question: "Which of the following makes a constitution democratic?",
    options: [
      "It is flexible for rulers",
      "It guarantees fundamental rights",
      "It enforces censorship",
      "It favors one party"
    ],
    answer: 1,
    explanation: "Democratic constitutions secure rights such as freedom, equality, and justice."
  },
  {
    question: "Which of these is NOT typically found in a constitution?",
    options: [
      "National anthem lyrics",
      "Bill of rights",
      "Government structure",
      "Limits of power"
    ],
    answer: 0,
    explanation: "Constitutions define political and legal frameworks, not cultural songs."
  },
  {
    question: "What is the highest law in a country under constitutionalism?",
    options: [
      "Military codes",
      "Court rulings",
      "The constitution",
      "Political party charter"
    ],
    answer: 2,
    explanation: "The constitution is the supreme law under which all other laws must conform."
  },
  {
    question: "How does federalism in Ethiopia relate to constitutionalism?",
    options: [
      "It removes autonomy",
      "It grants absolute power to one region",
      "It decentralizes authority within a constitutional framework",
      "It creates chaos"
    ],
    answer: 2,
    explanation: "Ethiopia’s constitutionally-based federalism gives self-rule rights to regions."
  },
  {
    question: "Constitutional review is primarily intended to:",
    options: [
      "Delay legislation",
      "Increase party power",
      "Ensure laws match the constitution",
      "Enforce executive control"
    ],
    answer: 2,
    explanation: "Review checks that laws conform to constitutional principles."
  },
  {
    question: "What is judicial review?",
    options: [
      "Making new laws",
      "Reviewing government budgets",
      "Determining constitutionality of laws",
      "Punishing citizens"
    ],
    answer: 2,
    explanation: "Judicial review allows courts or constitutional bodies to test laws against the constitution."
  },
  {
    question: "Which right is NOT explicitly listed in most constitutions?",
    options: [
      "Right to education",
      "Right to fair trial",
      "Right to privacy",
      "Right to wealth"
    ],
    answer: 3,
    explanation: "While education, privacy, and fair trial are often listed, wealth is not a guaranteed right."
  },
  {
    question: "Which article in Ethiopia’s constitution relates to equality before the law?",
    options: [
      "Article 25",
      "Article 13",
      "Article 50",
      "Article 39"
    ],
    answer: 0,
    explanation: "Article 25 guarantees equality and protection under the law for all individuals."
  },
  {
    question: "Which branch enforces laws under constitutionalism?",
    options: [
      "Legislative",
      "Judiciary",
      "Executive",
      "House of Federation"
    ],
    answer: 2,
    explanation: "The executive branch implements laws created by the legislature."
  },
  {
    question: "Why is constitutional supremacy crucial?",
    options: [
      "It allows for flexible law-making",
      "It permits judicial independence",
      "It ensures all institutions follow the same legal standard",
      "It prioritizes customary law"
    ],
    answer: 2,
    explanation: "Constitutional supremacy mandates that all laws and government actions obey the constitution."
  },
  {
    question: "What is meant by constitutional rigidity?",
    options: [
      "Inability to write laws",
      "Constitution can’t be challenged",
      "Difficult amendment process",
      "Overruling citizen rights"
    ],
    answer: 2,
    explanation: "Rigid constitutions require complex procedures to amend, preserving legal stability."
  },
  {
    question: "Which of the following weakens constitutional government?",
    options: [
      "Elections",
      "Military rule",
      "Judicial independence",
      "Free media"
    ],
    answer: 1,
    explanation: "Military dominance threatens constitutional limits and democratic governance."
  },
  {
    question: "A constitution that limits leaders' power is called:",
    options: [
      "Unwritten constitution",
      "Autocratic rule",
      "Limited government framework",
      "Political compromise"
    ],
    answer: 2,
    explanation: "Such constitutions are the foundation of limited, accountable governance."
  },
  {
    question: "Which Ethiopian constitutional article affirms freedom of religion?",
    options: [
      "Article 27",
      "Article 21",
      "Article 9",
      "Article 50"
    ],
    answer: 0,
    explanation: "Article 27 guarantees every person's right to freedom of religion."
  },
  {
    question: "Constitutionalism promotes the idea that power should be:",
    options: [
      "Absolute",
      "Unchecked",
      "Limited and accountable",
      "Inherited"
    ],
    answer: 2,
    explanation: "It limits power through legal mechanisms and citizen oversight."
  },
  {
    question: "The concept of constitutional sovereignty means:",
    options: [
      "Leaders rule by birthright",
      "Military controls laws",
      "Power resides in the constitution",
      "Power changes monthly"
    ],
    answer: 2,
    explanation: "Sovereignty lies in the people and is expressed through a supreme constitution."
  },
  {
    question: "Which branch of government interprets laws?",
    options: [
      "Executive",
      "Legislative",
      "Judiciary",
      "Regional council"
    ],
    answer: 2,
    explanation: "The judiciary is responsible for interpreting and applying laws."
  },
  {
    question: "A constitutional body that ensures fundamental rights is:",
    options: [
      "Parliament",
      "House of Federation",
      "Judiciary",
      "Police"
    ],
    answer: 2,
    explanation: "Courts uphold and protect constitutional rights of individuals."
  },
  {
    question: "What is a constitution?",
    options: [
      "A party policy document",
      "A political speech",
      "The supreme law guiding a nation's legal and political systems",
      "A journalistic report"
    ],
    answer: 2,
    explanation: "Constitutions outline government structure, citizen rights, and legal procedures."
  },
  {
    question: "Which of the following protects minority groups?",
    options: [
      "Martial law",
      "Majoritarian rule",
      "Constitutional rights and provisions",
      "Silencing mechanisms"
    ],
    answer: 2,
    explanation: "Constitutions often include clauses that secure minority protections."
  },
  {
    question: "Which principle holds that the government must act according to law?",
    options: [
      "Populism",
      "Supremacy of the executive",
      "Rule of law",
      "Judicial activism"
    ],
    answer: 2,
    explanation: "Rule of law requires government actions to align with established legal principles."
  },
  {
    question: "What is the role of a constitutional preamble?",
    options: [
      "Declare war",
      "Introduce the nation's values and goals",
      "Set political party policies",
      "Limit court powers"
    ],
    answer: 1,
    explanation: "The preamble outlines key values and aspirations of the constitution."
  },
  {
    question: "In Ethiopia, what constitutional right allows groups to form their own state?",
    options: [
      "Freedom of assembly",
      "Right to self-determination",
      "Freedom of religion",
      "Equality before the law"
    ],
    answer: 1,
    explanation: "Article 39 grants groups the right to self-determination, including secession."
  },
  {
    question: "Which of the following is NOT a check and balance?",
    options: [
      "Judicial review",
      "Legislative oversight",
      "Military tribunals controlling courts",
      "Executive veto"
    ],
    answer: 2,
    explanation: "Military override of courts violates checks and balances."
  },
  {
    question: "Constitutional law differs from ordinary law in that it:",
    options: [
      "Applies only to judges",
      "Can be easily changed",
      "Is the supreme source for all other laws",
      "Changes with each election"
    ],
    answer: 2,
    explanation: "All legal systems are based on and subordinate to constitutional law."
  },
  {
    question: "Which of these undermines constitutional order?",
    options: [
      "Parliamentary debate",
      "Executive orders following the constitution",
      "Corruption and impunity",
      "Peaceful demonstrations"
    ],
    answer: 2,
    explanation: "Corruption violates constitutional governance and citizen trust."
  }
]

}
    else if (chapter === 4){ return [
  {
    question: "What is the primary role of government in society?",
    options: [
      "To enforce religion",
      "To manage private businesses",
      "To regulate, protect rights, and provide services",
      "To limit citizen involvement"
    ],
    answer: 2,
    explanation: "Government exists to create order, protect rights, and provide public services."
  },
  {
    question: "Which of the following is a key feature of good governance?",
    options: [
      "Secrecy",
      "Corruption",
      "Transparency",
      "Unilateral decision-making"
    ],
    answer: 2,
    explanation: "Good governance is characterized by transparency, accountability, and inclusiveness."
  },
  {
    question: "Which of the following best defines 'rule of law'?",
    options: [
      "Leaders are above the law",
      "Laws apply only to citizens",
      "Everyone is equal before the law",
      "Laws change frequently"
    ],
    answer: 2,
    explanation: "Rule of law ensures that laws apply equally to all, including leaders."
  },
  {
    question: "Which branch of government interprets the law?",
    options: [
      "Legislative",
      "Judicial",
      "Executive",
      "Civil society"
    ],
    answer: 1,
    explanation: "The judiciary interprets and applies the law in a democratic system."
  },
  {
    question: "Which of the following is NOT a principle of good governance?",
    options: [
      "Accountability",
      "Participation",
      "Nepotism",
      "Transparency"
    ],
    answer: 2,
    explanation: "Nepotism undermines fairness and violates principles of good governance."
  },
  {
    question: "Which body is primarily responsible for making laws in Ethiopia?",
    options: [
      "Judiciary",
      "Cabinet",
      "House of Peoples' Representatives",
      "Police"
    ],
    answer: 2,
    explanation: "The House of Peoples’ Representatives is the federal legislative body in Ethiopia."
  },
  {
    question: "What does accountability in governance mean?",
    options: [
      "Blaming others",
      "Hiding information",
      "Answering for one's actions and decisions",
      "Limiting public access"
    ],
    answer: 2,
    explanation: "Accountability means officials are answerable for their actions and decisions."
  },
  {
    question: "Which of the following weakens good governance?",
    options: [
      "Corruption",
      "Public participation",
      "Access to justice",
      "Decentralization"
    ],
    answer: 0,
    explanation: "Corruption undermines trust and efficiency in governance systems."
  },
  {
    question: "Which principle ensures citizens are involved in governance?",
    options: [
      "Exclusion",
      "Participation",
      "Secrecy",
      "Militarization"
    ],
    answer: 1,
    explanation: "Participation is a core principle that ensures citizen involvement in governance."
  },
  {
    question: "Which type of government structure does Ethiopia follow?",
    options: [
      "Unitary state",
      "Federal system",
      "Monarchy",
      "Confederation"
    ],
    answer: 1,
    explanation: "Ethiopia is a federal republic with a constitutionally based division of powers."
  },
  {
    question: "Which of the following institutions oversees government accountability?",
    options: [
      "Museums",
      "Civil society organizations",
      "Public schools",
      "State-run media"
    ],
    answer: 1,
    explanation: "Civil society plays a crucial role in promoting transparency and accountability."
  },
  {
    question: "Which principle of governance ensures equal application of the law?",
    options: [
      "Rule of majority",
      "Rule of law",
      "Rule of elite",
      "Rule by decree"
    ],
    answer: 1,
    explanation: "The rule of law requires fair and equal application of laws to all."
  },
  {
    question: "How can decentralization improve governance?",
    options: [
      "By reducing local participation",
      "By increasing bureaucracy",
      "By bringing government closer to the people",
      "By removing regional autonomy"
    ],
    answer: 2,
    explanation: "Decentralization allows local governments to address community-specific needs."
  },
  {
    question: "What is the danger of unchecked executive power?",
    options: [
      "Increased public trust",
      "Improved transparency",
      "Tyranny and abuse of power",
      "Balanced policymaking"
    ],
    answer: 2,
    explanation: "Unchecked executive authority often leads to authoritarianism and corruption."
  },
  {
    question: "Good governance promotes:",
    options: [
      "Political instability",
      "Economic growth and justice",
      "Favoritism",
      "Single-party rule"
    ],
    answer: 1,
    explanation: "Sound governance supports development, fairness, and prosperity."
  },
  {
    question: "What is the purpose of a check and balance system?",
    options: [
      "To promote executive dominance",
      "To eliminate opposition",
      "To prevent abuse of power",
      "To merge institutions"
    ],
    answer: 2,
    explanation: "Checks and balances ensure one branch doesn't overpower the others."
  },
  {
    question: "A transparent government allows citizens to:",
    options: [
      "Be excluded from decisions",
      "Understand and monitor actions",
      "Rely only on rumors",
      "Accept secrecy"
    ],
    answer: 1,
    explanation: "Transparency builds trust and enables citizens to hold leaders accountable."
  },
  {
    question: "Which of these violates the principle of good governance?",
    options: [
      "Public consultation",
      "Corruption",
      "Citizen participation",
      "Judicial review"
    ],
    answer: 1,
    explanation: "Corruption undermines fairness and erodes public confidence."
  },
  {
    question: "Judicial independence ensures that judges:",
    options: [
      "Follow political directives",
      "Apply personal beliefs",
      "Decide cases without external pressure",
      "Ignore legal precedent"
    ],
    answer: 2,
    explanation: "Judicial independence allows fair interpretation of law, free from interference."
  },
  {
    question: "Which of the following is an element of democratic governance?",
    options: [
      "Authoritarian leadership",
      "State secrecy",
      "Free and fair elections",
      "Military rule"
    ],
    answer: 2,
    explanation: "Democracy relies on regular, fair elections and citizen involvement."
  },
  {
    question: "Which article in the Ethiopian constitution emphasizes accountability?",
    options: [
      "Article 12",
      "Article 8",
      "Article 39",
      "Article 50"
    ],
    answer: 0,
    explanation: "Article 12 ensures that government actions are accountable and open to public scrutiny."
  },
  {
    question: "The executive branch is responsible for:",
    options: [
      "Interpreting laws",
      "Making laws",
      "Enforcing laws",
      "Funding political campaigns"
    ],
    answer: 2,
    explanation: "The executive enforces and implements laws made by the legislature."
  },
  {
    question: "The legislative branch is tasked with:",
    options: [
      "Appointing judges",
      "Making laws",
      "Conducting elections",
      "Managing courts"
    ],
    answer: 1,
    explanation: "The legislature is responsible for proposing, debating, and passing laws."
  },
  {
    question: "How does corruption affect governance?",
    options: [
      "Improves services",
      "Increases public trust",
      "Distorts fairness and reduces efficiency",
      "Simplifies regulation"
    ],
    answer: 2,
    explanation: "Corruption undermines fairness, transparency, and trust in public institutions."
  },
  {
    question: "Why is citizen participation important?",
    options: [
      "To delay government actions",
      "To distract from leadership",
      "To legitimize governance and guide policies",
      "To empower only elites"
    ],
    answer: 2,
    explanation: "Public involvement ensures representation and responsiveness in governance."
  },
  {
    question: "Public accountability involves:",
    options: [
      "Ignoring public concerns",
      "Blaming other branches",
      "Explaining decisions and taking responsibility",
      "Centralizing control"
    ],
    answer: 2,
    explanation: "Public officials must justify their actions to the people and accept responsibility."
  },
  {
    question: "Good governance ensures equitable access to:",
    options: [
      "Luxury items",
      "Government positions only",
      "Resources and services",
      "Foreign aid"
    ],
    answer: 2,
    explanation: "Governments must serve all citizens equally with fairness and justice."
  },
  {
    question: "Which condition supports sustainable governance?",
    options: [
      "Lack of oversight",
      "Transparent institutions",
      "Elite dominance",
      "Information withholding"
    ],
    answer: 1,
    explanation: "Sustainable governance depends on open, responsive, and accountable systems."
  },
  {
    question: "Freedom of the press helps governance by:",
    options: [
      "Suppressing opposition",
      "Promoting only official views",
      "Informing the public and revealing misconduct",
      "Creating division"
    ],
    answer: 2,
    explanation: "Free media informs citizens and helps hold leaders accountable."
  },
  {
    question: "Which of these violates democratic principles?",
    options: [
      "Freedom of speech",
      "Right to protest",
      "Rigged elections",
      "Political pluralism"
    ],
    answer: 2,
    explanation: "Rigging elections undermines legitimacy and democratic order."
  },
  {
    question: "Why is the separation of powers critical in preventing tyranny?",
    options: [
      "It slows down governance",
      "It gives full power to elected officials",
      "It ensures no single branch holds absolute authority",
      "It allows one party to dominate"
    ],
    answer: 2,
    explanation: "By dividing power among branches, separation of powers ensures checks and balances and protects freedom."
  },
  {
    question: "How does transparency in governance strengthen democracy?",
    options: [
      "It increases complexity",
      "It reduces citizen engagement",
      "It enables public trust and informed participation",
      "It only helps the judiciary"
    ],
    answer: 2,
    explanation: "Transparency allows citizens to understand and engage in government decisions, building legitimacy."
  },
  {
    question: "Which of the following best reflects a failure in public accountability?",
    options: [
      "Publishing audit reports",
      "Ignoring corruption allegations",
      "Holding public forums",
      "Responding to citizen feedback"
    ],
    answer: 1,
    explanation: "Ignoring corruption undermines accountability and weakens trust in government."
  },
  {
    question: "Why is civic engagement essential for good governance?",
    options: [
      "It confuses policy makers",
      "It delays law enforcement",
      "It allows policies to reflect the needs of the people",
      "It causes division among parties"
    ],
    answer: 2,
    explanation: "Governance becomes responsive and legitimate when citizens actively participate in decisions."
  },
  {
    question: "Which scenario most violates the rule of law?",
    options: [
      "Judges follow legal codes",
      "Leaders are tried in court",
      "Officials act without legal justification",
      "Laws are published publicly"
    ],
    answer: 2,
    explanation: "Acting outside legal frameworks undermines justice and violates the rule of law."
  },
  {
    question: "How does decentralization reduce political conflict in diverse societies?",
    options: [
      "By concentrating power in the capital",
      "By marginalizing local groups",
      "By allowing local autonomy and representation",
      "By standardizing all policies nationally"
    ],
    answer: 2,
    explanation: "Decentralization allows groups to govern according to their needs, reducing tension and enhancing inclusion."
  },
  {
    question: "What is the impact of corruption on service delivery?",
    options: [
      "Improved equity",
      "Faster services",
      "Distorted priorities and reduced access",
      "Increased public satisfaction"
    ],
    answer: 2,
    explanation: "Corruption wastes resources, prioritizes the powerful, and limits fair access to services."
  },
  {
    question: "In a democratic governance model, laws gain legitimacy from:",
    options: [
      "Presidential approval alone",
      "Military enforcement",
      "Popular consent and constitutional procedure",
      "Traditional leaders"
    ],
    answer: 2,
    explanation: "Legitimate laws are based on public consent, legislative debate, and legal procedures."
  },
  {
    question: "How do independent institutions safeguard democracy?",
    options: [
      "By supporting ruling parties",
      "By rubber-stamping executive orders",
      "By monitoring and limiting power abuses",
      "By keeping public opinions secret"
    ],
    answer: 2,
    explanation: "Independent bodies like courts, auditors, and human rights commissions hold power in check."
  },
  {
    question: "Which example shows strong democratic governance?",
    options: [
      "Opposition leaders imprisoned without trial",
      "Leaders declare emergency powers indefinitely",
      "Citizens vote in fair elections and challenge unfair laws",
      "State controls all media narratives"
    ],
    answer: 2,
    explanation: "The ability to vote freely and hold leaders accountable defines strong democratic governance."
  },
  {
  question: "What is a state?",
  options: [
    "A business organization",
    "A family unit",
    "A politically organized body with sovereignty and authority",
    "An economic institution"
  ],
  answer: 2,
  explanation: "A state is a political entity with defined territory, permanent population, government, and sovereignty."
},
{
  question: "Which theory views the state as a neutral body balancing competing groups?",
  options: [
    "Capitalist state theory",
    "Leviathan state theory",
    "Pluralist state theory",
    "Patriarchal state theory"
  ],
  answer: 2,
  explanation: "Pluralist theory sees the state as a mediator among diverse social groups."
},
{
  question: "What is the main characteristic of the capitalist state theory?",
  options: [
    "It emphasizes public welfare",
    "It views the state as serving the ruling economic class",
    "It believes the state protects traditional family values",
    "It views the state as a religious authority"
  ],
  answer: 1,
  explanation: "The capitalist state theory sees the state as serving the interests of the dominant capitalist class."
},
{
  question: "Which concept describes a state that expands its power over all aspects of life?",
  options: [
    "Minimal state",
    "Developmental state",
    "Totalitarian state",
    "Federal state"
  ],
  answer: 2,
  explanation: "A totalitarian state seeks control over all political, economic, and social aspects of life."
},
{
  question: "Which type of state focuses on economic growth and structural transformation?",
  options: [
    "Minimal state",
    "Developmental state",
    "Welfare state",
    "Leviathan state"
  ],
  answer: 1,
  explanation: "A developmental state plays a strong role in guiding economic development."
},
{
  question: "What is a religious state?",
  options: [
    "A state with no religious involvement",
    "A state governed entirely by religious law",
    "A state supporting multiple religions equally",
    "A secular democratic state"
  ],
  answer: 1,
  explanation: "A religious state bases its governance and legal system on religious doctrines."
},
{
  question: "Which form of state provides minimal interference in citizens’ lives?",
  options: [
    "Developmental state",
    "Welfare state",
    "Minimal state",
    "Collectivized state"
  ],
  answer: 2,
  explanation: "A minimal state restricts itself to enforcing law and protecting rights with little social or economic intervention."
},
{
  question: "What defines a government?",
  options: [
    "A set of religious beliefs",
    "A business enterprise",
    "The machinery for implementing laws and public policies",
    "A traditional family structure"
  ],
  answer: 2,
  explanation: "Government is the institution that administers laws and public policies."
},
{
  question: "What is the purpose of citizenship?",
  options: [
    "To limit individual rights",
    "To isolate social groups",
    "To define rights, duties, and identity within a state",
    "To enforce religious practices"
  ],
  answer: 2,
  explanation: "Citizenship provides individuals with legal identity and civic rights and duties in a state."
},
{
  question: "Which theory of citizenship emphasizes individual rights and freedoms?",
  options: [
    "Communitarian theory",
    "Liberal theory",
    "Republican theory",
    "Multicultural theory"
  ],
  answer: 1,
  explanation: "Liberal citizenship focuses on protecting individual rights and freedom from state interference."
},
{
  question: "What is multicultural citizenship concerned with?",
  options: [
    "Promoting one culture above all",
    "Ignoring cultural identities",
    "Recognizing and respecting diverse cultural identities within a nation",
    "Restricting immigration"
  ],
  answer: 2,
  explanation: "Multicultural citizenship values cultural diversity and inclusive national identity."
},
{
  question: "Which of the following is a legal way to acquire citizenship?",
  options: [
    "Inheritance of wealth",
    "Owning property",
    "Birth within a country or through descent",
    "Winning an election"
  ],
  answer: 2,
  explanation: "Citizenship can be acquired by birth in a state, descent, or naturalization."
},
{
  question: "What is 'statelessness'?",
  options: [
    "Being born in a small state",
    "Having dual nationality",
    "Lacking any recognized citizenship by any country",
    "Being a refugee"
  ],
  answer: 2,
  explanation: "Statelessness is the condition where an individual is not considered a national by any state."
},
{
  question: "Which theory views the state as a patriarchal institution reinforcing gender hierarchy?",
  options: [
    "Capitalist theory",
    "Leviathan theory",
    "Pluralist theory",
    "Patriarchal theory"
  ],
  answer: 3,
  explanation: "The patriarchal state theory argues that the state supports male dominance and suppresses women’s interests."
}

]

;}
    else if (chapter === 5){ return [
  {
    question: "What does a constitution primarily define?",
    options: [
      "Religious practices",
      "Military ranks",
      "Structure and powers of the government",
      "Election schedules"
    ],
    answer: 2,
    explanation: "A constitution outlines the organization of government, powers, and citizen rights."
  },
  {
    question: "Which of the following is a feature of constitutionalism?",
    options: [
      "Unlimited state power",
      "Government actions constrained by law",
      "Religious law dominance",
      "Military-led governance"
    ],
    answer: 1,
    explanation: "Constitutionalism ensures that government authority is limited and based on law."
  },
  {
    question: "What distinguishes a codified constitution?",
    options: [
      "Unwritten principles",
      "Oral traditions",
      "Single, written document",
      "Religious texts"
    ],
    answer: 2,
    explanation: "A codified constitution is systematically written in one document."
  },
  {
    question: "Which is a major purpose of a constitution?",
    options: [
      "To regulate the stock market",
      "To formalize government structure and citizen rights",
      "To enforce cultural dress codes",
      "To establish global trade rules"
    ],
    answer: 1,
    explanation: "Constitutions establish a country’s governmental framework and citizen rights."
  },
  {
    question: "The 1995 FDRE Constitution introduced which major system?",
    options: [
      "Unitary monarchy",
      "Military dictatorship",
      "Federal democratic republic",
      "Colonial administration"
    ],
    answer: 2,
    explanation: "The 1995 Constitution marked Ethiopia’s shift to a federal democratic republic."
  },
  {
    question: "Which constitution was Ethiopia's first written constitution?",
    options: [
      "The 1955 Constitution",
      "The 1987 Constitution",
      "The 1931 Constitution",
      "The 1995 Constitution"
    ],
    answer: 2,
    explanation: "The 1931 Constitution was Ethiopia’s first written constitution."
  },
  {
    question: "What concept ensures that government officials are accountable for their actions?",
    options: [
      "Rule of privilege",
      "Public anonymity",
      "Accountability",
      "Judicial supremacy"
    ],
    answer: 2,
    explanation: "Accountability requires public officials to justify their actions and decisions."
  },
  {
    question: "Which principle of democracy supports freedom of expression and political participation?",
    options: [
      "Authoritarianism",
      "Transparency",
      "Censorship",
      "Militarism"
    ],
    answer: 1,
    explanation: "Transparency ensures openness in governance and supports participation."
  },
  {
    question: "What is a key characteristic of a democratic election?",
    options: [
      "Single-party control",
      "Military supervision",
      "Free, fair, and regular voting",
      "Random appointments"
    ],
    answer: 2,
    explanation: "Democratic elections must be free, fair, and held at regular intervals."
  },
  {
    question: "Which constitution recognized the right to self-determination in Ethiopia?",
    options: [
      "1931 Constitution",
      "1987 Constitution",
      "1995 Constitution",
      "1955 Constitution"
    ],
    answer: 2,
    explanation: "The 1995 FDRE Constitution granted nations, nationalities, and peoples the right to self-determination."
  }
  ,{
    question: "What does a constitution primarily define?",
    options: [
      "Religious practices",
      "Military ranks",
      "Structure and powers of the government",
      "Election schedules"
    ],
    answer: 2,
    explanation: "A constitution outlines the organization of government, powers, and citizen rights."
  },
  {
    question: "Which of the following is a feature of constitutionalism?",
    options: [
      "Unlimited state power",
      "Government actions constrained by law",
      "Religious law dominance",
      "Military-led governance"
    ],
    answer: 1,
    explanation: "Constitutionalism ensures that government authority is limited and based on law."
  },
  {
    question: "What distinguishes a codified constitution?",
    options: [
      "Unwritten principles",
      "Oral traditions",
      "Single, written document",
      "Religious texts"
    ],
    answer: 2,
    explanation: "A codified constitution is systematically written in one document."
  },
  {
    question: "Which is a major purpose of a constitution?",
    options: [
      "To regulate the stock market",
      "To formalize government structure and citizen rights",
      "To enforce cultural dress codes",
      "To establish global trade rules"
    ],
    answer: 1,
    explanation: "Constitutions establish a country’s governmental framework and citizen rights."
  },
  {
    question: "The 1995 FDRE Constitution introduced which major system?",
    options: [
      "Unitary monarchy",
      "Military dictatorship",
      "Federal democratic republic",
      "Colonial administration"
    ],
    answer: 2,
    explanation: "The 1995 Constitution marked Ethiopia’s shift to a federal democratic republic."
  },
  {
    question: "Which constitution was Ethiopia's first written constitution?",
    options: [
      "The 1955 Constitution",
      "The 1987 Constitution",
      "The 1931 Constitution",
      "The 1995 Constitution"
    ],
    answer: 2,
    explanation: "The 1931 Constitution was Ethiopia’s first written constitution."
  },
  {
    question: "What concept ensures that government officials are accountable for their actions?",
    options: [
      "Rule of privilege",
      "Public anonymity",
      "Accountability",
      "Judicial supremacy"
    ],
    answer: 2,
    explanation: "Accountability requires public officials to justify their actions and decisions."
  },
  {
    question: "Which principle of democracy supports freedom of expression and political participation?",
    options: [
      "Authoritarianism",
      "Transparency",
      "Censorship",
      "Militarism"
    ],
    answer: 1,
    explanation: "Transparency ensures openness in governance and supports participation."
  },
  {
    question: "What is a key characteristic of a democratic election?",
    options: [
      "Single-party control",
      "Military supervision",
      "Free, fair, and regular voting",
      "Random appointments"
    ],
    answer: 2,
    explanation: "Democratic elections must be free, fair, and held at regular intervals."
  },
  {
    question: "Which constitution recognized the right to self-determination in Ethiopia?",
    options: [
      "1931 Constitution",
      "1987 Constitution",
      "1995 Constitution",
      "1955 Constitution"
    ],
    answer: 2,
    explanation: "The 1995 FDRE Constitution granted nations, nationalities, and peoples the right to self-determination."
  },
  {
    question: "Which branch of government enforces laws in a democratic system?",
    options: [
      "Legislative",
      "Executive",
      "Judicial",
      "Civil society"
    ],
    answer: 1,
    explanation: "The executive branch is responsible for implementing and enforcing laws."
  },
  {
    question: "What does separation of powers prevent?",
    options: [
      "Efficient governance",
      "Government accountability",
      "Concentration of power in one branch",
      "Judicial independence"
    ],
    answer: 2,
    explanation: "Separation of powers prevents abuse by dividing responsibilities among branches."
  },
  {
    question: "What does the rule of law ensure?",
    options: [
      "Leaders are above the law",
      "Laws are applied arbitrarily",
      "Everyone is equal under the law",
      "Only citizens follow laws"
    ],
    answer: 2,
    explanation: "The rule of law holds that all individuals and institutions are subject to the law."
  },
  {
    question: "How does a democratic constitution protect rights?",
    options: [
      "By giving the government unlimited power",
      "By listing duties only",
      "By guaranteeing fundamental rights",
      "By abolishing elections"
    ],
    answer: 2,
    explanation: "Democratic constitutions include enforceable provisions for protecting citizens’ rights."
  },
  {
    question: "Which of the following is an element of democracy?",
    options: [
      "Censorship",
      "Military rule",
      "Free and fair elections",
      "Autocracy"
    ],
    answer: 2,
    explanation: "A key element of democracy is the ability to choose leaders through fair elections."
  },
  {
    question: "What does Article 39 of the FDRE Constitution guarantee?",
    options: [
      "Freedom of religion",
      "Right to property",
      "Right to self-determination",
      "Right to education"
    ],
    answer: 2,
    explanation: "Article 39 allows nations and nationalities to self-determine, including secession."
  },
  {
    question: "How is the supremacy of the constitution upheld?",
    options: [
      "By letting courts make laws",
      "By allowing public opinion to override it",
      "By requiring all laws to conform to it",
      "By applying it only in emergencies"
    ],
    answer: 2,
    explanation: "The constitution overrides all other laws and decisions that contradict it."
  },
  {
    question: "What is judicial review?",
    options: [
      "The appointment of judges",
      "Parliament reviewing cases",
      "Courts assessing constitutionality of laws",
      "Police review of crime"
    ],
    answer: 2,
    explanation: "Judicial review allows courts to invalidate laws that contradict the constitution."
  },
  {
    question: "What is the significance of fundamental rights in the constitution?",
    options: [
      "They give absolute power to leaders",
      "They are optional suggestions",
      "They guarantee individual freedoms and legal protection",
      "They apply only during elections"
    ],
    answer: 2,
    explanation: "Fundamental rights ensure dignity, freedom, and protection from state overreach."
  },
  {
    question: "Why are checks and balances important?",
    options: [
      "To delay government action",
      "To control the press",
      "To limit power and maintain accountability",
      "To prevent elections"
    ],
    answer: 2,
    explanation: "Checks and balances ensure no branch dominates and that each limits the other."
  },
  {
    question: "Which body has the power to interpret the FDRE Constitution?",
    options: [
      "House of Peoples’ Representatives",
      "Council of Constitutional Inquiry",
      "Federal Supreme Court",
      "Prime Minister"
    ],
    answer: 1,
    explanation: "The Council of Constitutional Inquiry investigates constitutional issues for interpretation."
  },
  {
    question: "What principle ensures that state power is derived from the people?",
    options: [
      "Federalism",
      "Popular sovereignty",
      "Judicial activism",
      "Civil disobedience"
    ],
    answer: 1,
    explanation: "Popular sovereignty means power lies with the people, exercised through elections."
  },
  {
    question: "What does democracy promote?",
    options: [
      "Unequal representation",
      "Centralized control",
      "Citizen participation and equality",
      "Permanent leaders"
    ],
    answer: 2,
    explanation: "Democracy relies on participation, inclusiveness, and representation of all."
  },
  {
    question: "What is the foundation of democratic legitimacy?",
    options: [
      "Military strength",
      "Economic performance",
      "Consent of the governed",
      "Party loyalty"
    ],
    answer: 2,
    explanation: "Legitimacy arises when governments reflect the will and consent of the people."
  },
  {
    question: "Which human rights are considered absolute?",
    options: [
      "Right to property",
      "Freedom of speech",
      "Protection against torture and slavery",
      "Right to vote"
    ],
    answer: 2,
    explanation: "Some rights, such as protection from torture, cannot be limited under any circumstance."
  },
  {
    question: "What is the primary role of the Ethiopian Human Rights Commission?",
    options: [
      "Making laws",
      "Conducting elections",
      "Protecting and promoting human rights",
      "Judging court cases"
    ],
    answer: 2,
    explanation: "The Commission monitors human rights practices and promotes awareness and protection."
  },
  {
    question: "How is equality before the law ensured?",
    options: [
      "Through elite courts",
      "By ignoring cultural differences",
      "By applying the law uniformly to all citizens",
      "By favoring elected officials"
    ],
    answer: 2,
    explanation: "Legal equality ensures all individuals are treated fairly by the legal system."
  },
  {
    question: "What are duties of citizens under the FDRE Constitution?",
    options: [
      "To avoid participation in governance",
      "To serve the ruling party only",
      "To obey the law, pay taxes, and respect others’ rights",
      "To reject diversity"
    ],
    answer: 2,
    explanation: "Citizens are expected to obey laws and support constitutional governance."
  },
  {
    question: "What is democracy's relationship with human rights?",
    options: [
      "They are unrelated",
      "Democracy suppresses human rights",
      "Democracy ensures and protects human rights",
      "Human rights dominate democracy"
    ],
    answer: 2,
    explanation: "Democracy provides a framework for promoting and safeguarding human rights."
  },
  {
    question: "Which international agreement outlines universal human rights?",
    options: [
      "UN Charter of 1945",
      "Universal Declaration of Human Rights (1948)",
      "Geneva Convention",
      "Treaty of Versailles"
    ],
    answer: 1,
    explanation: "The 1948 UDHR defines key rights and freedoms for all humans worldwide."
  },
  {
    question: "Which institution in Ethiopia has legislative authority?",
    options: [
      "Council of Ministers",
      "House of Federation",
      "House of Peoples' Representatives",
      "Supreme Court"
    ],
    answer: 2,
    explanation: "The House of Peoples' Representatives makes federal laws."
  },
  {
    question: "Which principle ensures officials are answerable to the public?",
    options: [
      "Sovereignty",
      "Federalism",
      "Accountability",
      "Decentralization"
    ],
    answer: 2,
    explanation: "Accountability requires government officials to explain and justify their actions."
  }
];
}
}

  // Entrepreneurship
  if (course === "entrepreneur") {
    if (chapter === 1) return [];
    if (chapter === 2) return [];
    if (chapter === 3) return [];
    if (chapter === 4) return [];
    if (chapter === 5) return [];
  }

  // Anthropology
  if (course === "anthropology") {
    if (chapter === 1) return [];
    if (chapter === 2) return [];
    if (chapter === 3) return [];
    if (chapter === 4) return [];
  }

  // Mathematics
  if (course === "maths") {
    if (chapter === 1) return[];
    if (chapter === 2) return [];
    if (chapter === 3) return [];
    if (chapter === 4) return [];
    if (chapter === 5) return [];
    if (chapter === 6) return [];
  }

  // Programming
  if (course === "programming") {
    if (chapter === 1) return [];
    if (chapter === 2) return [];
    if (chapter === 3) return [];
    if (chapter === 4) return [];
    if (chapter === 5) return [];
    if (chapter === 6) return [];
    if (chapter === 7) return [];
    if (chapter === 8) return [];
  }

  // Default: return dummy questions
  return [
    
  ];
}


// Init
document.addEventListener("DOMContentLoaded", () => {
  changeCourse(currentCourse);
});
