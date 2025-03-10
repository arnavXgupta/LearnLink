import React from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, BookOpen, Clock, Users } from "lucide-react";
import Spirograph from "../components/spirograph";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      {/* <div className="header">
        <Spirograph />
      </div> */}
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6">Learn Link</h1>
          <p className="text-xl mb-8">
            Your one-stop destination for all semester study materials
          </p>
          <button
            onClick={() => navigate("/year-selection")}
            className="bg-cream text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Learn Link?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<GraduationCap className="w-8 h-8" />}
              title="Year-wise Content"
              description="Access materials organized by academic year"
            />
            <FeatureCard
              icon={<BookOpen className="w-8 h-8" />}
              title="Branch Specific"
              description="Find content tailored to your branch"
            />
            <FeatureCard
              icon={<Clock className="w-8 h-8" />}
              title="24/7 Access"
              description="Study materials available anytime, anywhere"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Community Driven"
              description="Resources shared by students for students"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-all">
      <div className="text-blue-600 flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default LandingPage;
