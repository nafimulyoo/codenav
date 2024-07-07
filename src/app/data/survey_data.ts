const survey_questions = [
  {
    "id": 1,
    "title": "Experience in IT",
    "type": "narrative",
    "narrative": "Please provide information about your experience and interest in the IT field. This will help us understand your background and preferences.",
    "summary_narrative": "User's experience and interest in the IT field.",
    "questions": [
      {
        "id": 1.1,
        "type": "multiple_choice",
        "question": "Have you ever worked on a project or taken a course in the IT field?",
        "options": ["Yes", "No"]
      },
      {
        "id": 1.2,
        "type": "open_ended",
        "question": "If yes, please describe your experience in the IT field so far."
      }
    ]
  },
  {
    "id": 2,
    "title": "Software Development",
    "type": "narrative",
    "narrative": "Software development involves creating applications or systems that can be used by end users. This process includes activities such as coding, debugging, and testing. Developers use various programming languages and tools to build software that meets specific needs and solves problems. Skills in this field include programming languages (e.g., Java, Python, C++), software engineering principles, version control (e.g., Git), and development methodologies (e.g., Agile).",
    "summary_narrative": "User's interest and experience in software development.",
    "questions": [
      {
        "id": 2.1,
        "type": "multiple_choice",
        "question": "Are you interested in software development?",
        "options": ["Very interested", "Interested", "Not interested", "Not Sure"]
      },
      {
        "id": 2.2,
        "type": "open_ended",
        "question": "What excites you the most about software development? Describe any projects or technologies you would like to explore further."
      }
    ]
  },
  {
    "id": 3,
    "title": "Network and Infrastructure",
    "type": "narrative",
    "narrative": "Network and infrastructure encompass the management and maintenance of IT systems that facilitate communication and operational efficiency. This includes setting up and managing network equipment, servers, and data centers. Professionals in this field ensure that the IT infrastructure is reliable, secure, and performs well. Skills needed include network configuration and management (e.g., Cisco, Juniper), server administration (e.g., Linux, Windows Server), and knowledge of cloud platforms (e.g., AWS, Azure).",
    "summary_narrative": "User's interest and experience in network and infrastructure.",
    "questions": [
      {
        "id": 3.1,
        "type": "multiple_choice",
        "question": "Are you interested in managing and maintaining IT systems?",
        "options": ["Very interested", "Interested", "Not interested", "Not Sure"]
      },
      {
        "id": 3.2,
        "type": "open_ended",
        "question": "If yes, please explain what interests you in this field."
      }
    ]
  },
  {
    "id": 4,
    "title": "Cybersecurity",
    "type": "narrative",
    "narrative": "Cybersecurity focuses on protecting systems, networks, and data from digital attacks. This field involves implementing preventive measures, detecting security breaches, and responding to threats. Cybersecurity professionals work to safeguard sensitive information and ensure the integrity and availability of IT resources. Skills in this field include understanding security protocols (e.g., SSL/TLS, VPNs), knowledge of security tools (e.g., firewalls, intrusion detection systems), and ethical hacking techniques.",
    "summary_narrative": "User's interest and experience in cybersecurity.",
    "questions": [
      {
        "id": 4.1,
        "type": "multiple_choice",
        "question": "Are you interested in cybersecurity?",
        "options": ["Very interested", "Interested", "Not interested", "Not Sure"]
      },
      {
        "id": 4.2,
        "type": "open_ended",
        "question": "Why do you think cybersecurity is important? Do you have any specific experiences or interests in this field?"
      }
    ]
  },
  {
    "id": 5,
    "title": "Data Science",
    "type": "narrative",
    "narrative": "Data science involves the collection, analysis, and interpretation of data to generate useful insights. It uses statistical techniques, machine learning, and data visualization tools to uncover patterns and trends. Data scientists help organizations make data-driven decisions by transforming raw data into actionable knowledge. Skills required include programming languages (e.g., Python, R), statistical analysis, machine learning algorithms, and data visualization tools (e.g., Tableau, Power BI).",
    "summary_narrative": "User's interest and experience in data science.",
    "questions": [
      {
        "id": 5.1,
        "type": "multiple_choice",
        "question": "Are you interested in data science and analytics?",
        "options": ["Very interested", "Interested", "Not interested", "Not Sure"]
      },
      {
        "id": 5.2,
        "type": "open_ended",
        "question": "What draws you to data science? Are there any specific techniques or tools you are eager to learn?"
      }
    ]
  },
  {
    "id": 6,
    "title": "DevOps",
    "type": "narrative",
    "narrative": "DevOps is an approach that integrates software development (development) and IT operations (operations) to accelerate and improve the quality of software delivery. It involves practices such as continuous integration, continuous delivery, and infrastructure as code. DevOps aims to enhance collaboration between development and operations teams. Skills needed include knowledge of CI/CD tools (e.g., Jenkins, GitLab CI), containerization (e.g., Docker, Kubernetes), and scripting languages (e.g., Bash, Python).",
    "summary_narrative": "User's interest and experience in DevOps.",
    "questions": [
      {
        "id": 6.1,
        "type": "multiple_choice",
        "question": "Are you interested in DevOps?",
        "options": ["Very interested", "Interested", "Not interested", "Not Sure"]
      },
      {
        "id": 6.2,
        "type": "open_ended",
        "question": "Are you interested in the rapid and automated delivery of software? Share your thoughts on DevOps."
      }
    ]
  },
  {
    "id": 7,
    "title": "Artificial Intelligence and Machine Learning",
    "type": "narrative",
    "narrative": "Artificial Intelligence (AI) and Machine Learning (ML) involve creating systems that can learn and make decisions automatically based on data. AI and ML are used in a wide range of applications, from natural language processing and computer vision to predictive analytics and robotics. These technologies enable machines to perform tasks that typically require human intelligence. Skills in this field include programming languages (e.g., Python, Java), understanding machine learning frameworks (e.g., TensorFlow, PyTorch), and knowledge of algorithms and models (e.g., neural networks, decision trees).",
    "summary_narrative": "User's interest and experience in AI and machine learning.",
    "questions": [
      {
        "id": 7.1,
        "type": "multiple_choice",
        "question": "Are you interested in AI and machine learning?",
        "options": ["Very interested", "Interested", "Not interested", "Not Sure"]
      },
      {
        "id": 7.2,
        "type": "open_ended",
        "question": "What are your thoughts on AI and machine learning? Do you have any experience or projects related to this field that you can share?"
      }
    ]
  },
  {
    "id": 8,
    "title": "UI/UX Design",
    "type": "narrative",
    "narrative": "User Interface (UI) and User Experience (UX) design focus on creating intuitive and enjoyable interfaces for users. This involves graphic design, interaction design, and user research. UI/UX designers aim to make digital products easy to use and aesthetically pleasing, enhancing overall user satisfaction. Skills needed include design tools (e.g., Adobe XD, Sketch), wireframing and prototyping, user research techniques, and understanding of design principles.",
    "summary_narrative": "User's interest and experience in UI/UX design.",
    "questions": [
      {
        "id": 8.1,
        "type": "multiple_choice",
        "question": "Are you interested in UI/UX design?",
        "options": ["Very interested", "Interested", "Not interested", "Not Sure"]
      },
      {
        "id": 8.2,
        "type": "open_ended",
        "question": "How do you see the importance of UI/UX design in software development? Do you have any interest or experience in this field?"
      }
    ]
  },
  {
    "id": 9,
    "title": "IT Management",
    "type": "narrative",
    "narrative": "IT management involves overseeing IT projects, teams, and resources to achieve organizational goals efficiently and effectively. This includes planning, organizing, and managing IT services and infrastructure. IT managers ensure that IT systems support business objectives and run smoothly. Skills in this field include project management (e.g., PMP, Agile), leadership and communication, budgeting, and strategic planning.",
    "summary_narrative": "User's interest and experience in IT management.",
    "questions": [
      {
        "id": 9.1,
        "type": "multiple_choice",
        "question": "Are you interested in IT management?",
        "options": ["Very interested", "Interested", "Not interested", "Not Sure"]
      },
      {
        "id": 9.2,
        "type": "open_ended",
        "question": "Are you interested in managing IT projects or teams? Share your experience or views on IT management."
      }
    ]
  },
  {
    "id": 10,
    "title": "Robotics and IoT",
    "type": "narrative",
    "narrative": "Robotics and the Internet of Things (IoT) involve integrating hardware and software to create systems that can interact with the physical environment and make autonomous decisions. Robotics includes designing, building, and programming robots, while IoT connects devices to the internet, enabling them to collect and exchange data. Skills required include programming languages (e.g., C++, Python), knowledge of robotics frameworks (e.g., ROS), understanding of IoT protocols (e.g., MQTT), and sensor integration.",
    "summary_narrative": "User's interest and experience in robotics and IoT.",
    "questions": [
      {
        "id": 10.1,
        "type": "multiple_choice",
        "question": "Are you interested in robotics and IoT?",
        "options": ["Very interested", "Interested", "Not interested", "Not Sure"]
      },
      {
        "id": 10.2,
        "type": "open_ended",
        "question": "Are you interested in integrating hardware and software? Share your thoughts on robotics and IoT."
      }
    ]
  },
  {
    "id": 11,
    "title": "VR and AR",
    "type": "narrative",
    "narrative": "Virtual Reality (VR) and Augmented Reality (AR) are technologies that create immersive experiences by blending the real and virtual worlds. VR provides a fully simulated environment, while AR overlays digital content onto the real world. These technologies are used in gaming, training, education, and various other applications. Skills in this field include programming languages (e.g., C#, Unity), 3D modeling and animation, understanding of VR/AR hardware, and user experience design.",
    "summary_narrative": "User's interest and experience in VR and AR.",
    "questions": [
      {
        "id": 11.1,
        "type": "multiple_choice",
        "question": "Are you interested in VR and AR?",
        "options": ["Very interested", "Interested", "Not interested", "Not Sure"]
      },
      {
        "id": 11.2,
        "type": "open_ended",
        "question": "What are your views on the development of VR and AR? Have you ever created or used VR/AR applications?"
      }
    ]
  },
  {
    "id": 12,
    "title": "Programming and Scripting",
    "type": "narrative",
    "narrative": "Programming and scripting involve writing code to create applications, websites, or automated systems. This includes various programming languages and techniques. Programmers develop software to solve problems, automate tasks, and build new features. Skills needed include proficiency in programming languages (e.g., Python, JavaScript), understanding of algorithms and data structures, and knowledge of development environments (e.g., Visual Studio Code, Eclipse).",
    "summary_narrative": "User's interest and experience in programming and scripting.",
    "questions": [
      {
        "id": 12.1,
        "type": "multiple_choice",
        "question": "Are you interested in programming and scripting?",
        "options": ["Very interested", "Interested", "Not interested", "Not Sure"]
      },
      {
        "id": 12.2,
        "type": "open_ended",
        "question": "What is your favorite programming language and why? Describe a programming project you are most proud of."
      }
    ]
  },
  {
    "id": 13,
    "title": "Database Management",
    "type": "narrative",
    "narrative": "Database management involves storing, managing, and maintaining data to ensure its availability, security, and optimal performance. This includes designing database structures, writing queries, and performing backups. Database administrators ensure that data is organized and accessible for users and applications. Skills required include proficiency in SQL, understanding of database management systems (e.g., MySQL, PostgreSQL), knowledge of data modeling, and familiarity with database performance tuning.",
    "summary_narrative": "User's interest and experience in database management.",
    "questions": [
      {
        "id": 13.1,
        "type": "multiple_choice",
        "question": "Are you interested in database management?",
        "options": ["Very interested", "Interested", "Not interested", "Not Sure"]
      },
      {
        "id": 13.2,
        "type": "open_ended",
        "question": "Do you have any experience in database management? Share a story about a database project you have worked on."
      }
    ]
  },
  {
    "id": 14,
    "title": "Other IT Fields",
    "type": "narrative",
    "narrative": "Please let us know if there are any other IT fields you are interested in that were not mentioned above. Your feedback will help us improve the learning experience in this application.",
    "summary_narrative": "User's interest in other IT fields.",
    "questions": [
      {
        "id": 14.1,
        "type": "multiple_choice",
        "question": "Are there any other IT fields you are interested in that were not mentioned above?",
        "options": ["Yes", "No"]
      },
      {
        "id": 14.2,
        "type": "open_ended",
        "question": "If yes, please explain."
      }
    ]
  }
]

export default survey_questions;
