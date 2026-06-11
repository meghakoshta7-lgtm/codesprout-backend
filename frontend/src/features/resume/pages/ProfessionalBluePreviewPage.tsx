import React, { useState } from 'react';
import { Download, Eye, Edit3 } from 'lucide-react';
import ProfessionalBlueResume from '../components/ProfessionalBlueResume';
import toast from 'react-hot-toast';

export default function ProfessionalBluePreviewPage() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleDownload = () => {
    toast.success('Download feature coming soon!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Professional Blue Template</h1>
              <p className="text-sm text-slate-400 mt-1">Clean corporate resume with blue section headers</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Eye className="w-4 h-4" />
                {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              </button>
              <button
                onClick={() => toast.success('Redirecting to builder...')}
                className="flex items-center gap-2 px-4 py-2 bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-lg transition-colors"
              >
                <Edit3 className="w-4 h-4" />
                Use Template
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Preview */}
      {!isFullscreen ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="transform scale-[0.8] origin-top">
              <ProfessionalBlueResume preview={true} />
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[calc(100vh-80px)] bg-white overflow-auto">
          <ProfessionalBlueResume preview={true} />
        </div>
      )}
    </div>
  );
}
