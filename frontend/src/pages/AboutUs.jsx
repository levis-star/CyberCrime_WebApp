import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Archive, Bot, BookOpen, Clock, EyeOff, FileText, Lock,
  Mail, MapPin, Phone, Search, Shield, ShieldCheck
} from 'lucide-react';

const MISSION_ICONS = [FileText, BookOpen, Bot, Search];
const COMMIT_ICONS  = [EyeOff, Lock, Clock, Archive];

const AUTHORITIES = [
  { name: 'Tanzania Police Force — Cybercrime Unit', address: 'Police Headquarters, Dar es Salaam', phone: '+255 22 212 3456', email: 'cybercrime@police.go.tz', hours: 'Monday – Friday, 08:00 – 17:00' },
  { name: 'Emergency Police Line',                   address: 'Nationwide',                          phone: '112',              email: null,                      hours: '24 hours, 7 days a week' },
  { name: 'Tanzania Communications Regulatory Authority (TCRA)', address: 'Mawasiliano Towers, Sam Nujoma Road, Dar es Salaam', phone: '+255 22 211 9730', email: 'dg@tcra.go.tz', hours: 'Monday – Friday, 08:00 – 16:30' },
  { name: 'Financial Intelligence Unit (FIU)',        address: 'Bank of Tanzania Building, Dar es Salaam', phone: '+255 22 223 9000', email: 'info@fiu.go.tz', hours: 'Monday – Friday, 08:00 – 16:00' },
];

export default function AboutUs() {
  const { t } = useTranslation();

  const hero          = t('aboutHero',       { returnObjects: true });
  const missionSec    = t('aboutMission',    { returnObjects: true });
  const missionItems  = t('missionItems',    { returnObjects: true });
  const commitSec     = t('aboutCommit',     { returnObjects: true });
  const commitItems   = t('commitItems',     { returnObjects: true });
  const authSec       = t('aboutAuthorities',{ returnObjects: true });

  return (
    <section className="page aboutPage">

      {/* ── Hero ── */}
      <div className="aboutHero">
        <div className="aboutHeroCopy">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1>{hero.heading}</h1>
          <p>{hero.para}</p>
        </div>
        <div className="aboutHeroVisual">
          <ShieldCheck size={72} strokeWidth={1.2} />
          <p>{hero.visual}</p>
        </div>
      </div>

      {/* ── Mission ── */}
      <div className="aboutSection">
        <div className="sectionHeader">
          <span className="eyebrow">{missionSec.eyebrow}</span>
          <h2>{missionSec.heading}</h2>
          <p>{missionSec.para}</p>
        </div>
        <div className="missionGrid">
          {missionItems.map((item, i) => (
            <div className="missionCard" key={i}>
              {React.createElement(MISSION_ICONS[i], { size: 28 })}
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Commitment to citizens ── */}
      <div className="aboutSection">
        <div className="sectionHeader">
          <span className="eyebrow">{commitSec.eyebrow}</span>
          <h2>{commitSec.heading}</h2>
          <p>{commitSec.para}</p>
        </div>
        <div className="commitGrid">
          {commitItems.map((item, i) => (
            <div className="commitCard" key={i}>
              <div className="commitIcon">{React.createElement(COMMIT_ICONS[i], { size: 26 })}</div>
              <h3>{item.heading}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Authority contacts ── */}
      <div className="aboutSection">
        <div className="sectionHeader">
          <span className="eyebrow">{authSec.eyebrow}</span>
          <h2>{authSec.heading}</h2>
          <p>{authSec.para}</p>
        </div>
        <div className="authorityGrid">
          {AUTHORITIES.map((auth) => (
            <div className="authorityCard" key={auth.name}>
              <h3>{auth.name}</h3>
              <div className="authorityDetails">
                <span><MapPin size={15} />{auth.address}</span>
                <span><Phone size={15} /><a href={`tel:${auth.phone}`}>{auth.phone}</a></span>
                {auth.email && (
                  <span><Mail size={15} /><a href={`mailto:${auth.email}`}>{auth.email}</a></span>
                )}
                <span className="authorityHours">{authSec.open}{auth.hours}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
