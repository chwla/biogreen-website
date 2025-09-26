import React from 'react';
import { FileText, Download } from 'lucide-react';

export default function CertificatesReportsTestimony() {
  return (
    <div className="bg-gray-50 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Certificates Section */}
        <div className="mb-16 bg-gray-100 p-8 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#39702E' }}>
            OUR CERTIFICATES
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="relative group cursor-pointer">
                <div className="text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 min-w-[200px]" style={{ backgroundColor: '#39702E' }}>
                  <FileText size={24} />
                  <span className="font-medium">Certificate</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reports Section */}
        <div className="mb-16 bg-gray-100 p-8 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#39702E' }}>
            OUR REPORTS
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="relative group cursor-pointer">
                <div className="text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 min-w-[200px]" style={{ backgroundColor: '#39702E' }}>
                  <FileText size={24} />
                  <span className="font-medium">Reports</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimony Section */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#39702E' }}>
            TESTIMONIES
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex-shrink-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2">Name</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Biogreen Fertilizer and Gas Manufacturing PLC is a forward-thinking company dedicated to providing green technology solutions for the fertilizer and gas industries.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}