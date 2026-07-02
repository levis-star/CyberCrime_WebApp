import React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AlertBanner from '../components/AlertBanner.jsx';
import { awarenessService } from '../services/awarenessService.js';

export default function AwarenessHub({ language, alerts }) {
  const { t } = useTranslation();
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    awarenessService
      .list(language)
      .then(setContent)
      .catch(() => setContent([]))
      .finally(() => setLoading(false));
  }, [language]);

  const hero  = t('awarenessHero',  { returnObjects: true });
  const empty = t('awarenessEmpty', { returnObjects: true });

  return (
    <section className="page">
      <AlertBanner alerts={alerts} />
      <div className="sectionHeader">
        <span className="eyebrow">{hero.eyebrow}</span>
        <h1>{hero.heading}</h1>
      </div>

      {loading ? (
        <div className="contentGrid">
          {[...Array(4)].map((_, i) => (
            <div className="card skeleton skeletonLesson" key={i} />
          ))}
        </div>
      ) : content.length === 0 ? (
        <div className="emptyState">
          <h3>{empty.heading}</h3>
          <p>{empty.para}</p>
        </div>
      ) : (
        <div className="contentGrid">
          {content.map((item) => (
            <article className="card lesson" key={item.id}>
              <span className="pill">{item.category}</span>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
              {item.steps?.length ? (
                <ul className="lessonSteps">
                  {item.steps.map((step) => <li key={step}>{step}</li>)}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
