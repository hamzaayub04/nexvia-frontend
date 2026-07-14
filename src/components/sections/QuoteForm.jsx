import { useRef, useState } from 'react';
import { useToast } from '../../context/ToastContext';
import { initEmailJS, sendQuoteEmail, sendAdminNotification } from '../../services/emailjs';
import { PCB_TYPES, SERVICES, ACCEPTED_FILE_TYPES, API_BASE_URL } from '../../constants';
import ScrollReveal from '../ui/ScrollReveal';

const SHEET_URL =
  'https://script.google.com/macros/s/AKfycbyp2R9qj1nR-JZy8VNcRaMWVXIoL784WPiUzzZ1sEAGV6a2aVkGI4FOc8lkwxOs61b3/exec';

export default function QuoteForm() {
  const formRef = useRef(null);
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('Attach Design Files');
  const [submitting, setSubmitting] = useState(false);
  const { showToast } = useToast();

  const handleFileChange = (e) => {
    const files = e.target.files;
    setFileName(
      files.length > 0
        ? `${files.length} file(s) selected`
        : 'Attach Design Files'
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      initEmailJS();
      await sendQuoteEmail(formRef.current);
      await sendAdminNotification(formRef.current);

      const formData = new FormData(formRef.current);
      fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('from_name'),
          email: formData.get('from_email'),
          phone: formData.get('phone'),
          pcb_type: formData.get('pcb_type'),
          service: formData.get('service_required'),
          quantity: formData.get('quantity'),
          description: formData.get('description'),
        }),
      });

      // Also save the quote to our own database so it shows up in the
      // admin dashboard, not just in email/Google Sheets.
      try {
        const backendData = new FormData();
        backendData.append('name', formData.get('from_name'));
        backendData.append('email', formData.get('from_email'));
        backendData.append('phone', formData.get('phone'));
        backendData.append('quantity', formData.get('quantity'));
        backendData.append('pcbType', formData.get('pcb_type'));
        backendData.append('serviceRequired', formData.get('service_required'));
        backendData.append('description', formData.get('description'));

        const files = fileInputRef.current?.files || [];
        for (const file of files) {
          backendData.append('attachment', file);
        }

        const res = await fetch(`${API_BASE_URL}/quotes`, {
          method: 'POST',
          body: backendData,
        });

        if (!res.ok) {
          const errBody = await res.json().catch(() => ({}));
          console.error('Backend quote save failed:', errBody);
        }
      } catch (backendErr) {
        // Don't block the user-facing success flow if only the DB save
        // fails — email/sheet already succeeded above.
        console.error('Backend quote save error:', backendErr);
      }

      showToast('Inquiry sent successfully! We will be in touch soon.');
      formRef.current.reset();
      setFileName('Attach Design Files');
    } catch (err) {
      console.error('EmailJS error:', err);
      showToast(
        err?.text || 'Send failed. Please email nexviapcbdesign@gmail.com directly.',
        'error'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="quote">
      <div className="container">
        <ScrollReveal>
          <div className="section-eyebrow">Get a Quote</div>
          <h2 className="section-title">
            Tell us about your <span>PCB project</span>
          </h2>
          <p className="section-sub">
            Share your exact requirements below. The more detail you add, the better
            we can estimate.
          </p>
        </ScrollReveal>

        <div className="quote-card reveal" style={{ marginTop: '36px' }}>
          <form ref={formRef} id="quoteForm" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone No.</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+92 3xx xxxxxxx"
                  required
                />
              </div>
              <div className="form-group">
                <label>Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  min="1"
                  placeholder="e.g. 5"
                  required
                />
              </div>
              <div className="form-group">
                <label>PCB Type</label>
                <select name="pcb_type" required>
                  <option value="">Select type</option>
                  {PCB_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Service Required</label>
                <select name="service_required" required>
                  <option value="">Select service</option>
                  {SERVICES.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group full">
                <label>Project Description</label>
                <textarea
                  name="description"
                  placeholder="Explain your board goals, constraints, dimensions, timeline, and any special requirements."
                  required
                />
              </div>
              <div className="form-group full">
                <label htmlFor="fileUpload" className="file-label">
                  <i className="fas fa-cloud-upload-alt"></i>
                  <span>{fileName}</span>
                  <small>pdf, word, images, zip, Gerber, KiCad files accepted</small>
                </label>
                <input
                  ref={fileInputRef}
                  className="file-input-hidden"
                  type="file"
                  id="fileUpload"
                  name="attachment"
                  accept={ACCEPTED_FILE_TYPES}
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <button
              className="btn btn-primary"
              type="submit"
              disabled={submitting}
              style={{ width: '100%', marginTop: '8px' }}
            >
              <i className="fas fa-paper-plane"></i>{' '}
              {submitting ? 'Sending...' : 'Send Inquiry'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}