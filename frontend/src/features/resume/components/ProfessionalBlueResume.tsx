import React from 'react';

interface ResumeData {
  name?: string;
  title?: string;
  email?: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  website?: string;
  summary?: string;
  experience?: Array<{
    position: string;
    company: string;
    location: string;
    period: string;
    highlights?: string[];
  }>;
  education?: Array<{
    degree: string;
    school: string;
    location?: string;
    year: string;
  }>;
  skills?: string[];
  certifications?: Array<{
    name: string;
    issuer: string;
  }>;
}

interface ProfessionalBlueResumeProps {
  data?: ResumeData;
  preview?: boolean;
}

const BLUE = '#1a3c6e';
const LIGHT_BLUE = '#2c5aa0';

export default function ProfessionalBlueResume({
  data = {
    name: 'Taylor Greene',
    title: 'Chief Technology Officer',
    phone: '+1 (555) 456-7890',
    email: 'taylor.greene@example.com',
    location: 'Oklahoma City, OK, United States',
    summary: 'Experienced and forward-thinking Chief Technology Officer (CTO) with 20+ years of extensive experience leading cross-functional tech teams and driving technological advancement in various industries.',
    experience: [
      {
        position: 'Chief Technology Officer',
        company: 'BlueFish Solutions, Oklahoma City, OK',
        location: 'Oklahoma City, OK',
        period: 'January 2013 - Present',
        highlights: [
          'Steered the technological vision of the company while fostering innovation and collaboration across teams.',
          'Led the successful integration of AI technologies, enhancing product capabilities and opening new revenue streams.',
        ],
      },
      {
        position: 'Vice President of Technology',
        company: 'Innovative Solutions Group, Washington, D.C.',
        location: 'Washington, D.C.',
        period: 'June 2005 - December 2012',
        highlights: [
          'Oversaw the development and implementation of strategic technology initiatives, resulting in a 30% increase in efficiency.',
          'Managed a team of 50+ IT professionals, nurturing a high-performance culture.',
        ],
      },
      {
        position: 'Senior Software Engineer',
        company: 'Tech Dynamics, Washington, D.C.',
        location: 'Washington, D.C.',
        period: 'June 2002 - May 2005',
        highlights: [
          'Played a pivotal role in developing flagship products that generated multi-million dollar revenues.',
        ],
      },
    ],
    education: [
      {
        degree: 'Master of Science in Computer Science',
        school: 'Georgetown University, Washington, D.C.',
        location: 'Washington, D.C.',
        year: '',
      },
      {
        degree: 'Bachelor of Science in Computer Science',
        school: 'The George Washington University, Washington, D.C.',
        location: 'Washington, D.C.',
        year: '',
      },
    ],
    skills: [
      'Technology Vision & Strategy',
      'Team Building & Mentoring',
      'Data Analytics',
      'Executive Leadership',
      'Cloud & Infrastructure',
      'Project Management',
      'Database Management',
      'Coding Languages',
      'Budgeting & Financial',
    ],
  },
  preview = false,
}: ProfessionalBlueResumeProps) {
  return (
    <div
      className={`${preview ? 'p-6' : 'p-10'} bg-white text-gray-900 max-w-4xl mx-auto`}
      style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: preview ? '9px' : '13px', lineHeight: '1.5' }}
    >
      {/* Header: Name + Contact */}
      <div className="flex justify-between items-start mb-1">
        <h1
          className="font-bold text-gray-900"
          style={{ fontSize: preview ? '18px' : '32px', lineHeight: '1.2' }}
        >
          {data.name}
        </h1>
        <div className="text-right text-gray-600" style={{ fontSize: preview ? '7px' : '11px' }}>
          {data.phone && <div>{data.phone}</div>}
          {data.email && <div>{data.email}</div>}
          {data.location && <div>{data.location}</div>}
        </div>
      </div>

      {/* Title */}
      <p
        className="text-gray-700 mb-4"
        style={{ fontSize: preview ? '9px' : '14px' }}
      >
        {data.title}
      </p>

      {/* Summary */}
      {data.summary && (
        <p className="text-gray-700 mb-5" style={{ fontSize: preview ? '8px' : '12px', lineHeight: '1.6' }}>
          {data.summary}
        </p>
      )}

      {/* Professional Experience */}
      {data.experience && data.experience.length > 0 && (
        <div className="mb-5">
          <h2
            className="font-bold mb-1 pb-1"
            style={{
              fontSize: preview ? '10px' : '16px',
              color: BLUE,
              borderBottom: `1.5px solid ${LIGHT_BLUE}`,
            }}
          >
            Professional Experience
          </h2>
          <div className="space-y-3">
            {data.experience.map((job, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-gray-900" style={{ fontSize: preview ? '8px' : '12px' }}>
                      {job.company}
                    </span>
                  </div>
                  <span className="text-gray-600 shrink-0 ml-4" style={{ fontSize: preview ? '7px' : '11px' }}>
                    {job.period}
                  </span>
                </div>
                <p className="font-semibold text-gray-800" style={{ fontSize: preview ? '8px' : '12px' }}>
                  {job.position}
                </p>
                {job.highlights && (
                  <ul className="list-disc ml-4 mt-1 space-y-0.5" style={{ fontSize: preview ? '7px' : '11px' }}>
                    {job.highlights.map((h, i) => (
                      <li key={i} className="text-gray-700 line-clamp-2">{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <div className="mb-5">
          <h2
            className="font-bold mb-1 pb-1"
            style={{
              fontSize: preview ? '10px' : '16px',
              color: BLUE,
              borderBottom: `1.5px solid ${LIGHT_BLUE}`,
            }}
          >
            Education
          </h2>
          <div className="space-y-1">
            {data.education.map((edu, idx) => (
              <div key={idx}>
                <p className="font-semibold text-gray-900" style={{ fontSize: preview ? '8px' : '12px' }}>
                  {edu.degree}
                </p>
                <p className="text-gray-600" style={{ fontSize: preview ? '7px' : '11px' }}>
                  {edu.school}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Areas of Expertise / Skills */}
      {data.skills && data.skills.length > 0 && (
        <div className="mb-5">
          <h2
            className="font-bold mb-2 pb-1"
            style={{
              fontSize: preview ? '10px' : '16px',
              color: BLUE,
              borderBottom: `1.5px solid ${LIGHT_BLUE}`,
            }}
          >
            Areas of Expertise
          </h2>
          <div className="grid grid-cols-3 gap-x-6 gap-y-0.5" style={{ fontSize: preview ? '7px' : '11px' }}>
            {data.skills.map((skill, idx) => (
              <div key={idx} className="flex items-start">
                <span className="text-gray-900 mr-1.5">•</span>
                <span className="text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {data.certifications && data.certifications.length > 0 && (
        <div className="mb-5">
          <h2
            className="font-bold mb-2 pb-1"
            style={{
              fontSize: preview ? '10px' : '16px',
              color: BLUE,
              borderBottom: `1.5px solid ${LIGHT_BLUE}`,
            }}
          >
            Certifications
          </h2>
          <div className="space-y-1" style={{ fontSize: preview ? '7px' : '11px' }}>
            {data.certifications.map((cert, idx) => (
              <div key={idx}>
                <span className="font-semibold text-gray-900">{cert.name}</span>
                {cert.issuer && <span className="text-gray-600"> — {cert.issuer}</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Page footer */}
      {preview && (
        <div className="mt-4 pt-2 text-right text-gray-400" style={{ fontSize: '7px' }}>
          Page 1 | 1
        </div>
      )}
    </div>
  );
}
