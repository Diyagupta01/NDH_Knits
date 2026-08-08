import { useState } from 'react';
import { productCategories } from '../data/products';
import { submitInquiry } from '../services/api';
import styles from './ContactPage.module.css';

const initialForm = {
  name: '',
  company_name: '',
  phone: '',
  email: '',
  product_category: '',
  quantity: '',
  message: '',
};

export default function ContactPage() {
  const [form, setForm]           = useState(initialForm);
  const [errors, setErrors]       = useState({});
  const [status, setStatus]       = useState('idle'); // idle | loading | success | error
  const [serverError, setServerError] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  }

  function validate() {
    const errs = {};
    if (!form.name.trim())    errs.name    = 'Name is required.';
    if (!form.phone.trim())   errs.phone   = 'Phone number is required.';
    if (!form.email.trim())   errs.email   = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Please enter a valid email address.';
    if (!form.message.trim()) errs.message = 'Message is required.';
    return errs;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setStatus('loading');
    setServerError('');

    try {
      await submitInquiry(form);
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setServerError(
        err.message || 'Something went wrong. Please try again or contact us directly.'
      );
    }
  }

  return (
    <div className={styles.page}>

      {/* ── Page Hero ──────────────────────────────── */}
      <section className={styles.hero} aria-label="Contact page hero">
        <div className="container">
          <p className="section-label" style={{ color: 'var(--color-accent-light)' }}>
            Get in Touch
          </p>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <div className={styles.heroDivider} />
          <p className={styles.heroSubtitle}>
            For wholesale inquiries, product information, pricing, or any other
            queries — we're here to help.
          </p>
        </div>
      </section>

      {/* ── Main Content ───────────────────────────── */}
      <section className={`section ${styles.mainSection}`}>
        <div className="container">
          <div className={styles.layout}>

            {/* ── Left — Contact Info ──────────────── */}
            <aside className={styles.infoCol} aria-label="Contact information">

              <div className={styles.infoBlock}>
                <h2 className={styles.infoTitle}>Contact Information</h2>
                <div className={styles.infoItems}>
                  <ContactItem icon={<PhoneIcon />} label="Phone">
                    <a href="tel:[PHONE NUMBER]" className={styles.contactLink}>
                      [PHONE NUMBER]
                    </a>
                  </ContactItem>
                  <ContactItem icon={<MailIcon />} label="Email">
                    <a href="mailto:[EMAIL ADDRESS]" className={styles.contactLink}>
                      [EMAIL ADDRESS]
                    </a>
                  </ContactItem>
                  <ContactItem icon={<WhatsAppIcon />} label="WhatsApp">
                    <a
                      href="https://wa.me/[WHATSAPP NUMBER]"
                      className={styles.contactLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [WHATSAPP NUMBER]
                    </a>
                  </ContactItem>
                  <ContactItem icon={<PinIcon />} label="Factory Address">
                    <address className={styles.address}>
                      [FACTORY ADDRESS]<br />
                      Ludhiana, Punjab, India
                    </address>
                  </ContactItem>
                  <ContactItem icon={<ClockIcon />} label="Business Hours">
                    <span className={styles.hoursText}>[BUSINESS HOURS]</span>
                  </ContactItem>
                </div>
              </div>

              {/* Map placeholder */}
              <div className={styles.mapPlaceholder} aria-label="Map location placeholder">
                <div className={styles.mapInner}>
                  <PinIcon />
                  <span className={styles.mapLabel}>[GOOGLE MAP LOCATION]</span>
                  <p className={styles.mapNote}>Map will be embedded here</p>
                </div>
              </div>

            </aside>

            {/* ── Right — Inquiry Form ─────────────── */}
            <div className={styles.formCol}>
              <h2 className={styles.formTitle}>Send an Inquiry</h2>
              <p className={styles.formSubtitle}>
                Fill in the form below and we'll get back to you as soon as possible.
              </p>

              {status === 'success' ? (
                <div className={styles.successState} role="alert" aria-live="polite">
                  <div className={styles.successIcon} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <h3 className={styles.successTitle}>Inquiry Sent</h3>
                  <p className={styles.successMsg}>
                    Thank you for reaching out. We've received your inquiry and will get
                    back to you shortly.
                  </p>
                  <button
                    className={styles.resetBtn}
                    onClick={() => setStatus('idle')}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className={styles.form}
                  noValidate
                  aria-label="Inquiry form"
                >
                  <div className={styles.formRow}>
                    <Field
                      label="Full Name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      error={errors.name}
                      required
                      placeholder="Your full name"
                    />
                    <Field
                      label="Company Name"
                      name="company_name"
                      type="text"
                      value={form.company_name}
                      onChange={handleChange}
                      placeholder="Your company or business name"
                    />
                  </div>
                  <div className={styles.formRow}>
                    <Field
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      error={errors.phone}
                      required
                      placeholder="+91 XXXXX XXXXX"
                    />
                    <Field
                      label="Email Address"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      error={errors.email}
                      required
                      placeholder="you@company.com"
                    />
                  </div>
                  <div className={styles.formRow}>
                    <SelectField
                      label="Product / Category"
                      name="product_category"
                      value={form.product_category}
                      onChange={handleChange}
                      options={[
                        { value: '', label: 'Select a category (optional)' },
                        ...productCategories.map((c) => ({ value: c.slug, label: c.name })),
                        { value: 'multiple', label: 'Multiple Categories' },
                        { value: 'general', label: 'General Inquiry' },
                      ]}
                    />
                    <Field
                      label="Quantity / Requirement"
                      name="quantity"
                      type="text"
                      value={form.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 500 dozen pairs of socks"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="message">
                      Message <span className={styles.required} aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your requirements, products of interest, quantities, or any questions you have."
                      className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      aria-required="true"
                    />
                    {errors.message && (
                      <p className={styles.errorMsg} id="message-error" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {status === 'error' && (
                    <div className={styles.serverError} role="alert" aria-live="assertive">
                      <span>⚠</span> {serverError}
                    </div>
                  )}

                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={status === 'loading'}
                    aria-busy={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <>
                        <span className={styles.spinner} aria-hidden="true" />
                        Sending…
                      </>
                    ) : (
                      'Send Inquiry'
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

/* ── Sub-components ──────────────────────────────────── */
function Field({ label, name, type, value, onChange, error, required, placeholder }) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;
  return (
    <div className={styles.formGroup}>
      <label className={styles.label} htmlFor={id}>
        {label}
        {required && <span className={styles.required} aria-hidden="true"> *</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        aria-describedby={error ? errorId : undefined}
        aria-required={required || undefined}
      />
      {error && (
        <p className={styles.errorMsg} id={errorId} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({ label, name, value, onChange, options }) {
  const id = `field-${name}`;
  return (
    <div className={styles.formGroup}>
      <label className={styles.label} htmlFor={id}>{label}</label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={styles.select}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}

function ContactItem({ icon, label, children }) {
  return (
    <div className={styles.contactItem}>
      <div className={styles.contactItemIcon} aria-hidden="true">{icon}</div>
      <div className={styles.contactItemContent}>
        <span className={styles.contactItemLabel}>{label}</span>
        <div className={styles.contactItemValue}>{children}</div>
      </div>
    </div>
  );
}

/* ── Icons ──────────────────────────────────────────── */
function PhoneIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
}
function MailIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
}
function WhatsAppIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>;
}
function PinIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
}
function ClockIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
}
