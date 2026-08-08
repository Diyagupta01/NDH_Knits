import SectionHeader from '../ui/SectionHeader';
import styles from './WhyChooseSection.module.css';

const features = [
  {
    icon: <YearsIcon />,
    title: '70+ Years of Textile Excellence',
    description:
      "Decades of manufacturing expertise passed down through generations, rooted in Ludhiana's rich textile heritage.",
  },
  {
    icon: <QualityIcon />,
    title: 'Premium Quality Materials',
    description:
      'Every product begins with carefully selected raw materials, ensuring the highest standards of comfort and durability.',
  },
  {
    icon: <FactoryIcon />,
    title: 'Modern Manufacturing Facilities',
    description:
      'Our facilities combine traditional craftsmanship with modern manufacturing practices to deliver consistent output.',
  },
  {
    icon: <InspectIcon />,
    title: 'Strict Quality Control',
    description:
      'Rigorous quality checks at every stage of production ensure that only the best products leave our facility.',
  },
  {
    icon: <DeliveryIcon />,
    title: 'Timely Delivery',
    description:
      'We understand the needs of wholesale buyers and are committed to meeting delivery timelines consistently.',
  },
  {
    icon: <TrustIcon />,
    title: 'Trusted Across India',
    description:
      'Retailers and wholesalers across India rely on NDH Knits for dependable products and long-term supply partnerships.',
  },
  {
    icon: <PrecisionIcon />,
    title: 'Crafted with Precision',
    description:
      'Every stitch reflects our dedication to precision manufacturing — producing products that meet the demands of the market.',
  },
  {
    icon: <B2BIcon />,
    title: 'B2B Ready',
    description:
      'We are structured and experienced to handle bulk orders efficiently, from initial inquiry through to dispatch.',
  },
];

export default function WhyChooseSection() {
  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="why-choose-heading"
    >
      <div className="container">
        <SectionHeader
          label="Our Strengths"
          title="Why Choose NDH Knits?"
          subtitle="Built on trust, precision, and decades of manufacturing know-how."
          align="center"
        />
        <div className={styles.grid}>
          {features.map((feat) => (
            <FeatureCard key={feat.title} {...feat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrap} aria-hidden="true">
        {icon}
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{description}</p>
    </div>
  );
}

/* ── Icons ─────────────────────────────────────────── */
function YearsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}
function QualityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}
function FactoryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 20h20M4 20V10l6-4v4l6-4v14"/>
      <rect x="14" y="14" width="4" height="6"/>
    </svg>
  );
}
function InspectIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 11l3 3L22 4"/>
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
    </svg>
  );
}
function DeliveryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="3" width="15" height="13" rx="1"/>
      <path d="M16 8h4l3 3v5h-7V8z"/>
      <circle cx="5.5" cy="18.5" r="2.5"/>
      <circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  );
}
function TrustIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}
function PrecisionIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="3"/>
      <line x1="12" y1="2" x2="12" y2="5"/>
      <line x1="12" y1="19" x2="12" y2="22"/>
      <line x1="2" y1="12" x2="5" y2="12"/>
      <line x1="19" y1="12" x2="22" y2="12"/>
    </svg>
  );
}
function B2BIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}
