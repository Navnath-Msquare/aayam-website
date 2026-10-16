import React, { useState } from 'react';
import { CheckCircle2, Send, Mail, MapPin, Loader2, AlertCircle, Phone, ExternalLink, X } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    enquiryType: '',
    location: '',
    message: '',
    agreePolicy: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showMap, setShowMap] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agreePolicy) {
      alert('Please agree to be contacted and acknowledge the Privacy Policy.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || 'Failed to submit enquiry. Please try again.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setErrorMessage('Network error: Unable to connect to the mail server. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[460px] sm:min-h-[540px] lg:min-h-[620px] overflow-hidden bg-slate-950 pt-28 sm:pt-36 pb-20 sm:pb-24 flex items-center">
        <img
          src="/images/hero-slide-1.jpg"
          alt="Contact AAYAM - Real Estate & Construction Management"
          className="absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.08] saturate-[1.12] brightness-[0.98]"
        />
        {/* Focused Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent max-w-3xl lg:max-w-4xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent sm:hidden" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-left text-white space-y-3.5 sm:space-y-5">
            {/* Tagline */}
            <div className="inline-block">
              <span className="text-[11px] sm:text-xs md:text-sm font-bold tracking-widest text-[#F15A24] uppercase drop-shadow-sm">
                CONTACT AAYAM
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Let’s Talk About<br />
              Your Projects.
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-200 font-normal max-w-xl leading-relaxed">
              Share your requirements and help us understand how AAYAM can support your team.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Floating Send an Enquiry Form Card */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 -mt-14 sm:-mt-20 md:-mt-24 pb-16 sm:pb-20">
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/90 hover:border-orange-300 transition-colors p-5 sm:p-8 md:p-10 lg:p-12 reveal-zoom-in">
          
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Send an Enquiry
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm md:text-base mt-2">
              Tell us a little about your organisation and requirements, or chat directly via{' '}
              <a
                href="https://wa.me/919876543210?text=Hello%20AAYAM%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20the%20platform."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:underline font-bold inline-flex items-center gap-1"
              >
                {/* <span>WhatsApp (+91 9876543210)</span> */}
              </a>.
            </p>
          </div>

          {/* Form / Success Feedback */}
          {submitted ? (
            <div className="py-12 text-center space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-heading">
                Thank You, {formData.name}!
              </h3>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setErrorMessage('');
                  setFormData({
                    name: '',
                    email: '',
                    organization: '',
                    role: '',
                    enquiryType: '',
                    location: '',
                    message: '',
                    agreePolicy: false
                  });
                }}
                className="mt-4 px-6 py-2.5 rounded-lg bg-[#F15A24] text-white text-sm font-semibold hover:bg-[#d94916] transition-colors"
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="flex justify-end text-xs text-[#F15A24] font-medium">
                * Required fields
              </div>

              {/* Row 1: Your Name & Work Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Your Name <span className="text-[#F15A24]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F15A24] bg-white text-slate-800 placeholder-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Work Email <span className="text-[#F15A24]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F15A24] bg-white text-slate-800 placeholder-slate-400"
                  />
                </div>
              </div>

              {/* Row 2: Organisation & Your Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Organisation
                  </label>
                  <input
                    type="text"
                    placeholder="Company or society name"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-3 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F15A24] bg-white text-slate-800 placeholder-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Your Role <span className="text-[#F15A24]">*</span>
                  </label>
                  <select
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F15A24] bg-white text-slate-800"
                  >
                    <option value="" disabled>Select your role</option>
                    <option value="Developer">Developer / Builder</option>
                    <option value="PMC / Consultant">Project Consultant / PMC</option>
                    <option value="Society Committee">Housing Society Committee Member</option>
                    <option value="Site Engineer">Site Engineer / Contractor</option>
                    <option value="Architect">Architect / Structural Consultant</option>
                    <option value="Other">Other Stakeholder</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Enquiry Type & City / Country */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Enquiry Type <span className="text-[#F15A24]">*</span>
                  </label>
                  <select
                    required
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    className="w-full px-4 py-3 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F15A24] bg-white text-slate-800"
                  >
                    <option value="" disabled>Select enquiry type</option>
                    <option value="Platform Demo">Platform Demo & Walkthrough</option>
                    <option value="Redevelopment Governance">Redevelopment Society Governance</option>
                    <option value="Enterprise Pricing">Enterprise Pricing & Licensing</option>
                    <option value="Partnership">Partnership & Vendor Onboarding</option>
                    <option value="General Query">General Query</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    City / Country
                  </label>
                  <input
                    type="text"
                    placeholder="Where are you based?"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F15A24] bg-white text-slate-800 placeholder-slate-400"
                  />
                </div>
              </div>

              {/* Row 4: Message */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Message <span className="text-[#F15A24]">*</span>
                </label>
                <textarea
                  required
                  rows="4"
                  placeholder="Tell us about your projects, current challenges and what you need."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F15A24] bg-white text-slate-800 placeholder-slate-400"
                />
                <p className="text-xs text-slate-400 mt-1.5">
                  Please avoid sharing confidential project documents or personal identifiers here.
                </p>
              </div>

              {/* Policy Checkbox */}
              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="agreePolicy"
                  checked={formData.agreePolicy}
                  onChange={(e) => setFormData({ ...formData, agreePolicy: e.target.checked })}
                  className="mt-1 w-4 h-4 text-[#F15A24] border-slate-300 rounded focus:ring-[#F15A24]"
                />
                <label htmlFor="agreePolicy" className="text-xs sm:text-sm text-slate-600 leading-relaxed cursor-pointer">
                  I agree to be contacted regarding this enquiry and acknowledge the{' '}
                  <span className="text-slate-900 underline font-medium">Privacy Policy</span>.
                </label>
              </div>

              {/* Error Message */}
              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 flex items-start gap-3 text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-500" />
                  <div>
                    <p className="font-semibold text-red-800">Submission Error</p>
                    <p className="text-xs text-red-600 mt-0.5">{errorMessage}</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#F15A24] hover:bg-[#d94916] disabled:opacity-75 disabled:cursor-not-allowed text-white font-bold text-base shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Enquiry</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>
      </div>

      {/* 3. Direct Contact & Office Details (Phone, Email, Location) */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          
          {/* Card 1: Phone */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-lg hover:shadow-xl hover:border-orange-300 transition-all text-center flex flex-col items-center group">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F15A24] flex items-center justify-center mb-3 group-hover:bg-[#F15A24] group-hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-heading">Call Us</h3>
            <p className="text-xs text-slate-500 mt-1">Mon - Sat, 9:30 AM to 6:30 PM</p>
            <a
              href="tel:9876543210"
              className="mt-3 text-sm font-bold text-[#F15A24] hover:underline flex items-center gap-1.5"
            >
              <span>+91 9876543210</span>
            </a>
          </div>

          {/* Card 2: Email */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-lg hover:shadow-xl hover:border-orange-300 transition-all text-center flex flex-col items-center group">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F15A24] flex items-center justify-center mb-3 group-hover:bg-[#F15A24] group-hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-heading">Email Us</h3>
            <p className="text-xs text-slate-500 mt-1">We respond within 24 hours</p>
            <a
              href="mailto:admin@gmail.com"
              className="mt-3 text-sm font-bold text-[#F15A24] hover:underline flex items-center gap-1.5"
            >
              <span>admin@gmail.com</span>
            </a>
          </div>

          {/* Card 3: Location with "View Location" Button */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-lg hover:shadow-xl hover:border-orange-300 transition-all text-center flex flex-col items-center group">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F15A24] flex items-center justify-center mb-3 group-hover:bg-[#F15A24] group-hover:text-white transition-colors">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-heading">Our Location</h3>
            <p className="text-sm font-bold text-slate-800 mt-1">Pune, Maharashtra</p>
            
            {/* View Location Button */}
            <button
              onClick={() => setShowMap(!showMap)}
              className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#F15A24] hover:bg-[#d94916] text-white text-xs font-semibold shadow-md shadow-orange-600/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{showMap ? 'Hide Location' : 'View Location'}</span>
            </button>
          </div>

        </div>

        {/* Expandable Interactive Map (Shown when "View Location" is clicked) */}
        {showMap && (
          <div className="mt-8 bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            <div className="bg-slate-900 text-white px-5 sm:px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-sm font-bold">
                <MapPin className="w-4 h-4 text-[#F15A24]" />
                <span>Office Location — Pune, Maharashtra</span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Pune,+Maharashtra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-orange-400 hover:text-orange-300 font-semibold inline-flex items-center gap-1 hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setShowMap(false)}
                  className="w-7 h-7 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Close Map"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="w-full h-80 sm:h-96 relative bg-slate-100">
              <iframe
                title="Office Location Map - Pune, Maharashtra"
                src="https://maps.google.com/maps?q=Pune,%20Maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        )}
      </div>

      {/* 4. AAYAM Tagline Banner */}
      <div className="py-12 text-center border-t border-slate-200/80 bg-white">
        <p className="text-lg sm:text-xl font-extrabold text-slate-900 font-heading tracking-wide">
          AAYAM — Every Dimension. Connected.
        </p>
      </div>
    </div>
  );
}
