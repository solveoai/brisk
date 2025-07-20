import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactDrawer: React.FC<ContactDrawerProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    company_name: '',
    company_website: '',
    company_size: '',
    companys_revenue: '',
    project_budget: '',
    services_needed: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-gray-900/80 backdrop-blur-[2px] z-40 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed right-0 top-0 h-screen w-full lg:w-[40vw] px-2 pb-4 flex flex-row items-center justify-center text-gray-900 transform z-50 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="shadow-2xl rounded-xl w-[96%] md:w-[98%] lg:w-full h-[90%] bg-blue-50 overflow-hidden">
          <div className="flex flex-col px-4 md:px-6 py-2">
            <div className="flex flex-row justify-end">
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium pt-0 pb-[1.75rem] text-left">
              Tell us about your automation needs
            </h2>
          </div>

          <div className="h-[calc(100%-56px)] overflow-y-auto px-4 py-1 md:px-6 md:py-2">
            <div className="space-y-4">
              <form className="w-full h-full flex flex-col pr-1 gap-[1rem] md:pr-0" onSubmit={handleSubmit}>
                <div className="w-full flex flex-col lg:flex-row gap-2 mb-4">
                  <div className="w-full lg:w-1/2 flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-1">
                      <p className="text-md font-medium">What is your name?</p>
                    </div>
                    <input 
                      type="text" 
                      placeholder="Name" 
                      className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-1">
                      <p className="text-md font-medium">What is your email?</p>
                    </div>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col gap-2 mb-4">
                  <div className="flex flex-row items-center gap-1">
                    <p className="text-md font-medium">What is your role in the company?</p>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Enter role" 
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    name="role" 
                    value={formData.role}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="w-full flex flex-col lg:flex-row gap-2 mb-4">
                  <div className="w-full lg:w-1/2 flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-1">
                      <p className="text-md font-medium">Company Name</p>
                    </div>
                    <input 
                      type="text" 
                      placeholder="Enter company name" 
                      className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      name="company_name" 
                      value={formData.company_name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-1">
                      <p className="text-md font-medium">Company Website</p>
                    </div>
                    <input 
                      type="url" 
                      placeholder="Enter company website" 
                      className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      name="company_website" 
                      value={formData.company_website}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col lg:flex-row gap-2 mb-4">
                  <div className="w-full lg:w-1/2 flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-1">
                      <p className="text-md font-medium">Company Size</p>
                    </div>
                    <select 
                      name="company_size" 
                      className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formData.company_size}
                      onChange={handleInputChange}
                    >
                      <option value="">Select company size</option>
                      <option value="1-20">Less than 20</option>
                      <option value="20-50">20-50</option>
                      <option value="50-100">50-100</option>
                      <option value="100-500">100-500</option>
                      <option value="500-1000">More than 500</option>
                    </select>
                  </div>
                  <div className="w-full lg:w-1/2 flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-1">
                      <p className="text-md font-medium">Company's Annual Revenue</p>
                    </div>
                    <select 
                      name="companys_revenue" 
                      className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formData.companys_revenue}
                      onChange={handleInputChange}
                    >
                      <option value="">Select revenue range</option>
                      <option value="<1M">Less than $1M</option>
                      <option value="1M-5M">$1M-$5M</option>
                      <option value="5M-10M">$5M-$10M</option>
                      <option value="10M-50M">$10M-$50M</option>
                      <option value=">50M">More than $50M</option>
                    </select>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-2 mb-4">
                  <div className="flex flex-row items-center gap-1">
                    <p className="text-md font-medium">Project budget</p>
                  </div>
                  <select 
                    name="project_budget" 
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.project_budget}
                    onChange={handleInputChange}
                  >
                    <option value="">Select budget range</option>
                    <option value="Less than $50K">Less than $50K</option>
                    <option value="$50K-$100K">$50K-$100K</option>
                    <option value="$100K-$500K">$100K-$500K</option>
                    <option value="More than $500K">More than $500K</option>
                  </select>
                </div>

                <div className="w-full flex flex-col gap-2 mb-4">
                  <div className="flex flex-row items-center gap-1">
                    <p className="text-md font-medium">What services are you interested in?</p>
                  </div>
                  <select 
                    name="services_needed" 
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.services_needed}
                    onChange={handleInputChange}
                  >
                    <option value="">Select service</option>
                    <option value="Assessing">Assessing automation opportunities</option>
                    <option value="Training">Training your team on automation</option>
                    <option value="Implementing">Implementing custom automation solutions</option>
                  </select>
                </div>

                <div className="w-full flex flex-col gap-2 mb-4">
                  <div className="flex flex-row items-center gap-1">
                    <p className="text-md font-medium">Message</p>
                  </div>
                  <textarea 
                    name="message" 
                    rows={7} 
                    placeholder="Tell us about your automation challenges and goals" 
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-fit text-gray-900 cursor-pointer py-2 px-4 rounded-full border border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  Send inquiry
                </button>
              </form>
              <div className="h-[100px] w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDrawer;