// Mock database - Replace with actual database integration
const subjectsData = {
  '1': {
    'computer-science': [
      'Programming Fundamentals',
      'Digital Logic',
      'Mathematics I',
      'Physics',
      'Basic Electrical Engineering',
      'Engineering Graphics',
      'Mathematics II',
      'Chemistry'
    ],
    'electronics-and-computer-engineering': [
      'Introduction to Electronics',
      'Basic Programming',
      'Mathematics I',
      'Physics',
      'Digital Logic Design',
      'Electric Circuits',
      'Mathematics II',
      'Engineering Drawing'
    ]
  },
  '2': {
    'computer-science': [
      'Data Structures and Algorithms',
      'Object-Oriented Programming',
      'Discrete Mathematics',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks',
      'Mathematics III',
      'Signals and Systems'
    ],
    'electronics-and-computer-engineering': [
      'Data Structures',
      'Analog Electronics',
      'Digital Electronics',
      'Signals and Systems',
      'Microprocessors and Microcontrollers',
      'Object-Oriented Programming',
      'Electromagnetic Theory',
      'Mathematics III'
    ]
  },
  '3': {
    'computer-science': {
      'core': [
        'Software Engineering',
        'Computer Architecture and Organization',
        'Machine Learning',
        'Probability and Statistics',
        'Network Programming',
        'Theory of Computation',
        'Computer Graphics',
        'Microprocessor-Based Systems Design'
      ],
      'elective': [
        'Cloud Computing',
        'Computer Vision',
        'Computer & Network Security',
        'Data Science Fundamentals',
        'Finance, Accounting, and Valuation',
        'Secure Coding',
        'Cyber Forensics',
        'Blockchain Technology and Applications',
        '3D Modelling and Animation',
        'Game Design & Development',
        'Augmented and Virtual Reality',
        'GPU Computing',
        'Data Analytics and Visualization',
        'Natural Language Processing',
        'Deep Learning'
      ]
    },
    'electronics-and-computer-engineering': {
      'core': [
        'Digital Signal Processing',
        'Computer Architecture',
        'VLSI Design',
        'Control Systems',
        'Communication Systems',
        'Database Management Systems',
        'Operating Systems',
        'Computer Networks'
      ],
      'elective': [
        'Embedded Systems',
        'Internet of Things',
        'Wireless Communication',
        'Digital Image Processing',
        'Machine Learning for Signal Processing',
        'Advanced Digital System Design',
        'Antenna Theory and Design',
        'Robotics and Automation'
      ]
    }
  },
  '4': {
    'computer-science': {
      'core': [
        'Artificial Intelligence and Machine Learning',
        'Big Data Analytics',
        'Internet of Things (IoT)',
        'Cyber Security and Ethical Hacking',
        'Cloud Computing',
        'Blockchain Technology and Applications',
        'Advanced Database Systems'
      ],
      'elective': [
        'Advanced Cyber Security',
        'AI for Robotics',
        'Data Mining',
        'Human-Computer Interaction',
        'Information Retrieval',
        'Mobile App Development',
        'Network Security',
        'Parallel Computing',
        'Software Project Management',
        'Web Development'
      ]
    },
    'electronics-and-computer-engineering': {
      'core': [
        'Advanced Computer Architecture',
        'Wireless Networks',
        'Satellite Communication',
        'Digital Image Processing',
        'VLSI System Design',
        'Machine Learning'
      ],
      'elective': [
        'Artificial Intelligence',
        'Cloud Computing',
        'Big Data Analytics',
        'Cryptography and Network Security',
        'Advanced Signal Processing',
        'Optical Communication',
        'Biomedical Signal Processing',
        'Radar Systems'
      ]
    }
  }
};


export const getSubjects = (req, res) => {
  const { year, branch } = req.params;
  
  try {
    const subjects = subjectsData[year]?.[branch];
    
    if (!subjects) {
      return res.status(404).json({ 
        message: 'No subjects found for the specified year and branch' 
      });
    }
    
    if (['3', '4'].includes(year)) {
      return res.json({
        categorized: true,
        subjects: {
          core: subjects.core,
          elective: subjects.elective
        }
      });
    }
    
    // For 1st and 2nd year, return flat array
    res.json({
      categorized: false,
      subjects: subjects
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error fetching subjects',
      error: error.message 
    });
  }
};