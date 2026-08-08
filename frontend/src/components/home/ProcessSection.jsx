import SectionHeader from '../ui/SectionHeader';
import styles from './ProcessSection.module.css';

const steps = [
  {
    number: '01',
    title: 'Premium Yarn Selection',
    description:
      'Every product begins with carefully sourced, quality-graded yarn selected for the appropriate weight, texture, and durability.',
  },
  {
    number: '02',
    title: 'Precision Knitting',
    description:
      'Yarn is processed through our manufacturing setup with attention to stitch consistency, tension, and dimensional accuracy.',
  },
  {
    number: '03',
    title: 'Quality Inspection',
    description:
      'In-process checks are performed at multiple stages to identify and correct any defects before they advance further.',
  },
  {
    number: '04',
    title: 'Finishing',
    description:
      'Products are trimmed, shaped, and finished to ensure a clean, market-ready presentation that meets quality expectations.',
  },
  {
    number: '05',
    title: 'Secure Packaging',
    description:
      'Finished products are carefully packaged to protect quality during transit and to meet wholesale presentation standards.',
  },
  {
    number: '06',
    title: 'Dispatch',
    description:
      'Orders are dispatched reliably and on schedule, with a commitment to meeting the timelines of every wholesale partner.',
  },
];

export default function ProcessSection() {
  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="process-heading"
    >
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.leftCol}>
            <SectionHeader
              label="How We Work"
              title="From Yarn to Dispatch"
              subtitle="Every NDH Knits product goes through a carefully managed manufacturing process — from premium yarn selection and precision knitting to rigorous quality checks and secure packaging — ensuring comfort, durability, and consistency in every order."
              align="left"
            />
          </div>
          <div className={styles.rightCol}>
            <ol className={styles.stepList} aria-label="Manufacturing process steps">
              {steps.map((step, index) => (
                <li key={step.number} className={styles.step}>
                  <div className={styles.stepLeft}>
                    <span className={styles.stepNumber} aria-hidden="true">{step.number}</span>
                    {index < steps.length - 1 && (
                      <div className={styles.stepConnector} aria-hidden="true" />
                    )}
                  </div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDesc}>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
