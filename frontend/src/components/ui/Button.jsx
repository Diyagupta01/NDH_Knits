import styles from './Button.module.css';

/**
 * Button variants:
 *   primary   — filled accent background (default)
 *   secondary — outlined accent border
 *   ghost     — no border, text only
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  as: Tag = 'button',
  className = '',
  ...props
}) {
  const cls = [
    styles.btn,
    styles[variant],
    styles[size],
    className,
  ].filter(Boolean).join(' ');

  return (
    <Tag className={cls} {...props}>
      {children}
    </Tag>
  );
}
