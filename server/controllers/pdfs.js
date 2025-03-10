// Mock database - Replace with actual database integration
const pdfsData = {
  '1': {
    'computer-science': {
      'programming-fundamentals': [
        {
          title: 'Introduction to Programming',
          driveUrl: 'https://drive.google.com/file/d/14y6mzy-JZXnJFPZHNFFfKltx_MZmetTA/view?usp=sharing'
        },
        {
          title: 'Variables and Data Types',
          driveUrl: 'https://drive.google.com/file/d/example2'
        },
        {
          title: 'Control Structures',
          driveUrl: 'https://drive.google.com/file/d/example3'
        }
      ]
    }
  }
  // Add more years, branches, and subjects
};

export const getPDFs = (req, res) => {
  const { year, branch, subject } = req.params;
  
  try {
    const pdfs = pdfsData[year]?.[branch]?.[subject];
    
    if (!pdfs) {
      return res.status(404).json({ 
        message: 'No PDFs found for the specified subject' 
      });
    }
    
    res.json({ pdfs });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error fetching PDFs',
      error: error.message 
    });
  }
};