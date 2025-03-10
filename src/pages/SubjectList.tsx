import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BookOpen, Lightbulb } from 'lucide-react';

interface SubjectsResponse {
  categorized: boolean;
  subjects: string[] | {
    core: string[];
    elective: string[];
  };
}

function SubjectList() {
  const navigate = useNavigate();
  const { year, branch } = useParams();
  const [subjectsData, setSubjectsData] = useState<SubjectsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/subjects/${year}/${branch}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch subjects');
        }
        
        const data: SubjectsResponse = await response.json();
        setSubjectsData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, [year, branch]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading subjects...</div>
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

  const renderSubjectButton = (subject: string) => (
    <button
      key={subject}
      onClick={() => navigate(`/pdfs/${year}/${branch}/${subject.toLowerCase().replace(/\s+/g, '-')}`)}
      className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all text-center"
    >
      <h2 className="text-2xl font-semibold text-blue-600">{subject}</h2>
      <p className="mt-2 text-gray-600">View study materials</p>
    </button>
  );

  const renderCategorizedSubjects = () => {
    const { core, elective } = subjectsData?.subjects as { core: string[], elective: string[] };
    
    return (
      <>
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Core Subjects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {core.map(renderSubjectButton)}
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-center mb-6">
            <Lightbulb className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Elective Subjects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {elective.map(renderSubjectButton)}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Available Subjects</h1>
        <p className="text-center text-gray-600 mb-12">
          Year {year} - {branch?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
        </p>
        <div className="max-w-6xl mx-auto">
          {subjectsData?.categorized ? (
            renderCategorizedSubjects()
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(subjectsData?.subjects as string[]).map(renderSubjectButton)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SubjectList;