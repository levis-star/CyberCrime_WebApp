import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();
  const links    = t('footerLinks',    { returnObjects: true });
  const contacts = t('footerContacts', { returnObjects: true });

  return (
    <footer className="siteFooter">
      <div className="footerInner">
        <div className="footerBrand">
          <ShieldCheck size={22} />
          <strong>CyberSafe TZ</strong>
          <span>{t('footerTagline')}</span>
        </div>

        <nav className="footerLinks" aria-label="Footer navigation">
          {links.map(({ to, label }) => (
            <Link className="footerBtn" to={to} key={to}>{label}</Link>
          ))}
        </nav>

        <div className="footerContact">
          <strong>{contacts.heading}</strong>
          <span>{contacts.police}: <a href="tel:112">112</a></span>
          <span>{contacts.unit}: <a href="tel:+255222123456">+255 22 212 3456</a></span>
          <span>{contacts.email}: <a href="mailto:cybercrime@police.go.tz">cybercrime@police.go.tz</a></span>
          <Link className="footerAboutLink" to="/about">{contacts.about}</Link>
        </div>
      </div>

      <div className="footerBar">
        <span>© {new Date().getFullYear()} {t('footerCopyright')}</span>
        <span>{t('footerAct')}</span>
      </div>
    </footer>
  );
}
