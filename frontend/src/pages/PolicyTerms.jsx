import React from 'react';
import { useTranslation } from 'react-i18next';

export default function PolicyTerms() {
  const { t } = useTranslation();
  const hero     = t('policyHero',     { returnObjects: true });
  const sections = t('policySections', { returnObjects: true });

  return (
    <section className="page policyPage">
      <div className="sectionHeader">
        <span className="eyebrow">{hero.eyebrow}</span>
        <h1>{hero.heading}</h1>
        <p>{hero.para}</p>
      </div>
      <div className="policyGrid">
        {sections.map((section) => (
          <article className="panel prose" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
