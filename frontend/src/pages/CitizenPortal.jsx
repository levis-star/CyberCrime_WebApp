import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  AlertTriangle, ArrowRight, BookOpen, Bot, Building2,
  FileText, FileWarning, Lock, Phone, ScrollText,
  Search, Shield, ShieldAlert, ShieldCheck, Users, Zap
} from 'lucide-react';
import AlertBanner from '../components/AlertBanner.jsx';

const CRIME_COLORS = ['#d34f3f','#e07b39','#d97706','#7c3aed','#0f766e','#1d4ed8','#475569','#b91c1c'];
const HOW_ICONS    = [FileWarning, ShieldCheck, Search, Zap];
const WHO_ICONS    = [Users, Building2, BookOpen, Shield];
const TIP_ICONS    = [Lock, AlertTriangle, Phone];
const NAV_HREFS    = ['/report', '/track', '/awareness', '/chatbot'];
const NAV_ICONS    = [FileWarning, Search, BookOpen, Bot];

export default function CitizenPortal({ alerts }) {
  const { t } = useTranslation();

  const highlights   = t('portalHighlights',  { returnObjects: true });
  const navCards     = t('navCards',           { returnObjects: true });
  const howSection   = t('howSection',         { returnObjects: true });
  const howCards     = t('howCards',           { returnObjects: true });
  const crimeSection = t('crimeSection',       { returnObjects: true });
  const crimeItems   = t('crimeItems',         { returnObjects: true });
  const whoSection   = t('whoSection',         { returnObjects: true });
  const whoItems     = t('whoItems',           { returnObjects: true });
  const tipsSection  = t('tipsSection',        { returnObjects: true });
  const tipItems     = t('tipItems',           { returnObjects: true });
  const chooseSection= t('chooseSection',      { returnObjects: true });
  const legalNote    = t('legalNote',          { returnObjects: true });

  return (
    <section className="page portal">
      <AlertBanner alerts={alerts} />

      {/* ── Hero ── */}
      <div className="heroBand">
        <div className="heroCopy">
          <span className="eyebrow">{t('portalEyebrow')}</span>
          <h1>{t('headline')}</h1>
          <p>{t('subhead')}</p>
          <div className="actions">
            <Link className="button primary" to="/report">{t('report')} <ArrowRight size={18} /></Link>
            <Link className="button" to="/track">{t('track')}</Link>
          </div>
        </div>
        <div className="quickPanel" aria-label="Portal highlights">
          {highlights.map((h, i) => {
            const Icon = [FileWarning, ShieldAlert, Bot, BookOpen][i];
            return (
              <div key={i}><Icon /><strong>{h.title}</strong><span>{h.sub}</span></div>
            );
          })}
        </div>
      </div>

      {/* ── Quick navigation cards ── */}
      <div className="dashSection">
        <div className="sectionHeader compact">
          <span className="eyebrow">{chooseSection.eyebrow}</span>
          <h2>{chooseSection.heading}</h2>
        </div>
        <div className="workflowGrid">
          {navCards.map((card, i) => (
            <Link className={`card workflow${i === 0 ? ' workflowPrimary' : ''}`} to={NAV_HREFS[i]} key={i}>
              {React.createElement(NAV_ICONS[i], { size: 22 })}
              <h2>{card.title}</h2>
              <p>{card.text}</p>
              <span className="cardArrow"><ArrowRight size={16} /></span>
            </Link>
          ))}
        </div>
      </div>

      {/* ── How it works ── */}
      <div className="dashSection dashSectionAlt">
        <div className="sectionHeader compact">
          <span className="eyebrow">{howSection.eyebrow}</span>
          <h2>{howSection.heading}</h2>
          <p>{howSection.para}</p>
        </div>
        <div className="howGrid">
          {howCards.map((card, i) => (
            <div className="howCard" key={card.step}>
              <div className="howStep">{card.step}</div>
              <div className="howIcon">{React.createElement(HOW_ICONS[i], { size: 22 })}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
        <div className="actions" style={{ marginTop: '28px', justifyContent: 'center' }}>
          <Link className="button primary" to="/report">{howSection.ctaReport} <ArrowRight size={18} /></Link>
          <Link className="button" to="/chatbot">{howSection.ctaChatbot}</Link>
        </div>
      </div>

      {/* ── Crime types ── */}
      <div className="dashSection">
        <div className="sectionHeader compact">
          <span className="eyebrow">{crimeSection.eyebrow}</span>
          <h2>{crimeSection.heading}</h2>
          <p>{crimeSection.para}</p>
        </div>
        <div className="crimeGrid">
          {crimeItems.map((item, i) => (
            <div className="crimeCard" key={i}>
              <div className="crimeDot" style={{ background: CRIME_COLORS[i] }} />
              <div>
                <strong>{item.label}</strong>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Who it serves ── */}
      <div className="dashSection dashSectionAlt">
        <div className="sectionHeader compact">
          <span className="eyebrow">{whoSection.eyebrow}</span>
          <h2>{whoSection.heading}</h2>
        </div>
        <div className="whoGrid">
          {whoItems.map((item, i) => (
            <div className="whoCard" key={i}>
              <div className="whoIcon">{React.createElement(WHO_ICONS[i], { size: 24 })}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Quick safety tips ── */}
      <div className="dashSection">
        <div className="sectionHeader compact">
          <span className="eyebrow">{tipsSection.eyebrow}</span>
          <h2>{tipsSection.heading}</h2>
        </div>
        <div className="tipsRow">
          {tipItems.map((tip, i) => (
            <div className="tipCard" key={i}>
              <div className="tipIcon">{React.createElement(TIP_ICONS[i], { size: 26 })}</div>
              <h3>{tip.title}</h3>
              <p>{tip.text}</p>
            </div>
          ))}
        </div>
        <div className="actions" style={{ marginTop: '24px', justifyContent: 'center' }}>
          <Link className="button" to="/awareness">{tipsSection.readAll} <ArrowRight size={16} /></Link>
        </div>
      </div>

      {/* ── Legal framework ── */}
      <div className="dashSection">
        <div className="legalNote panel">
          <Shield size={28} />
          <div>
            <h3>{legalNote.heading}</h3>
            <p>
              {legalNote.text}
              {' '}<Link to="/policy" style={{ color: 'inherit', fontWeight: 600 }}>{legalNote.policy}</Link>
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
