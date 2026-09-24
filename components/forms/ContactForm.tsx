'use client';

import React, { useState } from 'react';
import { FormInput, FormTextarea } from './FormFoundation';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants/site-config';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          message: '',
          website: '',
        });
      } else {
        setStatus('error');
        setErrorMsg(result.error || 'Failed to submit inquiry. Please try again.');
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
            <h4 className="font-bold">Inquiry Sent Successfully</h4>
            <p className="text-xs text-emerald-700 mt-1">
              Thank you for reaching out to Orallio Group. Our corporate team will review your message and respond promptly.
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
            label="Full Name *"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            required
            disabled={status === 'submitting'}
          />
          <FormInput
            label="Corporate Email *"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            required
            disabled={status === 'submitting'}
          />
        </div>

        <FormInput
          label="Subject / Subsidiary Interested In *"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="e.g. Commodity Sourcing Inquiry"
          required
          disabled={status === 'submitting'}
        />

        <FormTextarea
          label="Message Details *"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Provide context regarding your inquiry..."
          required
          disabled={status === 'submitting'}
        />

        <Button
          type="submit"
          variant="cta"
          size="md"
          disabled={status === 'submitting'}
          className="w-full sm:w-auto"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              <span>Sending Inquiry...</span>
            </>
          ) : (
            <span>Submit Inquiry</span>
          )}
        </Button>
      </form>
    </div>
  );
};
