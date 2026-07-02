import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Building2, FileCheck, MapPin, Search, ShieldCheck, UserCheck } from 'lucide-react';
import { reportService } from '../services/reportService.js';

const TASK_FORCE_LABELS = {
  police:       'Tanzania Police Force (Jeshi la Polisi)',
  military:     "Tanzania People's Defence Force (TPDF)",
  court:        'Mahakama (Court System)',
  fia:          'Financial Intelligence Authority (FIA)',
  tcra:         'Tanzania Communications Regulatory Authority (TCRA)',
  intelligence: 'Tanzania Intelligence & Security Services (TISS)',
};

const STATUS_COLORS = {
  new:          '#5f736f',
  under_review: '#0f766e',
  escalated:    '#d97706',
  resolved:     '#16a34a',
  closed:       '#94a3b8',
};

export default function TrackCase() {
  const { t } = useTranslation();
  const [trackingCode, setTrackingCode] = useState('');
  const [result,       setResult]       = useState(null);
  const [error,        setError]        = useState('');
  const [loading,      setLoading]      = useState(false);

  const labels     = t('trackLabels',  { returnObjects: true });
  const awaiting   = t('trackAwaiting',{ returnObjects: true });

  const track = async () => {
    setError('');
    setResult(null);
    setLoading(true);
    try {
      setResult(await reportService.track(trackingCode.trim()));
    } catch {
      setError(t('trackNotFound'));
    } finally {
      setLoading(false);
    }
  };

  const report     = result?.report;
  const evidence   = result?.evidence || [];
  const assignment = report?.assignment;

  return (
    <section className="page narrow">
      <div className="sectionHeader">
        <span className="eyebrow">{t('trackHero.eyebrow')}</span>
        <h1>{t('trackHero.heading')}</h1>
        <p>{t('trackHero.para')}</p>
      </div>

      <div className="trackBox">
        <input
          placeholder={t('trackPlaceholder')}
          value={trackingCode}
          onChange={(e) => setTrackingCode(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && track()}
        />
        <button className="button primary" onClick={track} disabled={loading || !trackingCode.trim()}>
          <Search size={18} />{loading ? t('trackSearching') : t('trackSearch')}
        </button>
      </div>

      {error ? <p className="error">{error}</p> : null}

      {report && (
        <article className="caseCard">
          <div className="caseStatusRow">
            <span className="caseStatusBadge" style={{ background: STATUS_COLORS[report.status] || '#5f736f' }}>
              {report.status.replace('_', ' ').toUpperCase()}
            </span>
            <code className="caseCode">{report.trackingCode}</code>
          </div>

          <h2>{report.category}</h2>
          <p className="caseDesc">{report.description}</p>

          <div className="reviewBox">
            <p><strong>{labels.region}</strong><span>{report.locationRegion}</span></p>
            {report.locationDistrict && <p><strong>{labels.district}</strong><span>{report.locationDistrict}</span></p>}
            <p><strong>{labels.severity}</strong><span>{report.pythonSeverityScore ?? report.severityScore}</span></p>
            <p><strong>{labels.submitted}</strong><span>{new Date(report.createdAt).toLocaleDateString('en-TZ', { year: 'numeric', month: 'long', day: 'numeric' })}</span></p>
          </div>

          {assignment ? (
            <div className="assignmentCard">
              <div className="assignmentHeader">
                <UserCheck size={22} />
                <h3>{t('trackAssignedHeading')}</h3>
              </div>
              <div className="assignmentDetails">
                <div className="assignmentRow">
                  <Building2 size={16} />
                  <div>
                    <span className="assignLabel">{labels.taskForce}</span>
                    <strong>{TASK_FORCE_LABELS[assignment.taskForce] || assignment.taskForceName}</strong>
                  </div>
                </div>
                <div className="assignmentRow">
                  <MapPin size={16} />
                  <div>
                    <span className="assignLabel">{labels.assignedRegion}</span>
                    <strong>{assignment.region}</strong>
                  </div>
                </div>
                <div className="assignmentRow">
                  <ShieldCheck size={16} />
                  <div>
                    <span className="assignLabel">{labels.assignedDistrict}</span>
                    <strong>{assignment.district}</strong>
                  </div>
                </div>
                <p className="assignedDate">
                  {labels.assignedOn} {new Date(assignment.assignedAt).toLocaleDateString('en-TZ', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
          ) : (
            <div className="assignmentPending">
              <UserCheck size={20} />
              <div>
                <strong>{awaiting.heading}</strong>
                <p>{awaiting.para}</p>
              </div>
            </div>
          )}

          {evidence.length > 0 && (
            <div className="evidenceSection">
              <h3><FileCheck size={18} /> {t('trackEvidence')} ({evidence.length})</h3>
              <ul className="uploadedList">
                {evidence.map((f) => (
                  <li key={f.id}>
                    <FileCheck size={16} />
                    <span>{f.fileUrl.split('/').pop()}</span>
                    <span className="logTime">{new Date(f.uploadedAt).toLocaleDateString()}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>
      )}
    </section>
  );
}
