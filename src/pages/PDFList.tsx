import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FileText, Download } from 'lucide-react';

interface PDF {
  title: string;
  driveUrl: string;
}

interface PDFResponse {
  pdfs: PDF[];
}

function PDFList() {
  const { year, branch, subject } = useParams();
  const [pdfs, setPdfs] = useState<PDF[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPDFs = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/pdfs/${year}/${branch}/${subject}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch PDFs');
        }
        
        const data: PDFResponse = await response.json();
        setPdfs(data.pdfs);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPDFs();
  }, [year, branch, subject]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading PDFs...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-2xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Study Materials</h1>
        <p className="text-center text-gray-600 mb-12">
          {subject?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} - 
          Year {year} - {branch?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
        </p>
        <div className="max-w-4xl mx-auto">
          {pdfs.map((pdf, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md mb-4 flex items-center justify-between"
            >
              <div className="flex items-center">
                <FileText className="w-6 h-6 text-blue-600 mr-4" />
                <h2 className="text-xl font-semibold">{pdf.title}</h2>
              </div>
              <a
                href={pdf.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PDFList;