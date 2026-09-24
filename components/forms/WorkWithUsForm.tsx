'use client';

import React, { useState } from 'react';
import { FormInput, FormTextarea } from './FormFoundation';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants/site-config';

export const WorkWithUsForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    proposal: '',
    website: '', // Honeypot field
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const response = await fetch('/api/work-with-us', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          proposal: '',
          website: '',
        });
      } else {
        setStatus('error');
        setErrorMsg(result.error || 'Failed to submit proposal. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMsg('An unexpected error occurred. Please try again or send a direct email.');
    }
  };

  return (
    <div className="space-y-6">
      {status === 'success' && (
        <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3 text-sm">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold">Partnership Proposal Received</h4>
            <p className="text-xs text-emerald-700 mt-1">
              Thank you for submitting your partnership opportunity. Our group executive direction team will review your proposal and initiate contact.
            </p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-900 flex items-start gap-3 text-sm">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold">Submission Failed</h4>
            <p className="text-xs text-red-700 mt-1">{errorMsg}</p>
            <p className="text-xs text-red-600 mt-1">
              You may also write directly to{' '}
              <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="underline font-semibold">
                {SITE_CONFIG.contactEmail}
              </a>.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot field - hidden from real users */}
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput
            label="Your Name / Title *"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Sarah Jenkins, Director"
            required
            disabled={status === 'submitting'}
          />
          <FormInput
            label="Organization / Company *"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Apex Global Trade Ltd"
            required
            disabled={status === 'submitting'}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput
            label="Business Email *"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="sarah@apexglobal.com"
            required
            disabled={status === 'submitting'}
          />
          <FormInput
            label="Phone / WhatsApp"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            disabled={status === 'submitting'}
          />
        </div>

        <FormTextarea
          label="Overview of Proposed Collaboration *"
          id="proposal"
          name="proposal"
          value={formData.proposal}
          onChange={handleChange}
          placeholder="Describe the scope, subsidiary interested in, and timeline..."
          required
          disabled={status === 'submitting'}
        />

        <Button
          type="submit"
          variant="cta"
          size="lg"
          disabled={status === 'submitting'}
          className="w-full sm:w-auto"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              <span>Submitting Proposal...</span>
            </>
          ) : (
            <span>Submit Partnership Proposal</span>
          )}
        </Button>
      </form>
    </div>
  );
};
