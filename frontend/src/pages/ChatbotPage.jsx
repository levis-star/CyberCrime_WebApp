import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AlertTriangle, Bot, Loader2, Send } from 'lucide-react';
import { chatbotService } from '../services/chatbotService.js';

export default function ChatbotPage({ language }) {
  const { t } = useTranslation();
  const [message,    setMessage]    = useState('');
  const [thread,     setThread]     = useState([{ role: 'bot', text: t('chatbotInitial') }]);
  const [loading,    setLoading]    = useState(false);
  const [escalation, setEscalation] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [thread]);

  const ask = async () => {
    const text = message.trim();
    if (!text || loading) return;
    setMessage('');
    setThread((prev) => [...prev, { role: 'user', text }]);
    setLoading(true);
    setEscalation(false);
    try {
      const answer = await chatbotService.query(text, language);
      setThread((prev) => [...prev, { role: 'bot', text: answer.reply }]);
      if (answer.escalationRecommended) setEscalation(true);
    } catch {
      setThread((prev) => [...prev, { role: 'bot', text: t('chatbotError') }]);
    } finally {
      setLoading(false);
    }
  };

  const escalation_t = t('chatbotEscalation', { returnObjects: true });
  const hero_t       = t('chatbotHero',        { returnObjects: true });

  return (
    <section className="page narrow">
      <div className="sectionHeader">
        <span className="eyebrow">{hero_t.eyebrow}</span>
        <h1>{hero_t.heading}</h1>
      </div>

      {escalation && (
        <div className="escalationBanner">
          <AlertTriangle size={20} />
          <div>
            <strong>{escalation_t.heading}</strong>
            <p>{escalation_t.para}</p>
          </div>
        </div>
      )}

      <div className="chatPanel">
        {thread.map((item, i) => (
          <div className={`message ${item.role}`} key={`${item.role}-${i}`}>
            {item.role === 'bot' ? <Bot size={18} /> : null}
            <p>{item.text}</p>
          </div>
        ))}
        {loading && (
          <div className="message">
            <Bot size={18} />
            <p className="typingDots"><Loader2 size={16} className="spin" /> {t('chatbotThinking')}</p>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="chatInput">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && ask()}
          placeholder={t('chatbotPh')}
          disabled={loading}
        />
        <button className="button primary" onClick={ask} disabled={loading || !message.trim()}>
          {loading ? <Loader2 size={18} className="spin" /> : <Send size={18} />}
          {t('chatbotSend')}
        </button>
      </div>
    </section>
  );
}
