import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LockKeyhole, LogIn, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext.jsx';

export default function Login() {
  const { t } = useTranslation();
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [error,    setError]    = useState('');
  const [loading,  setLoading]  = useState(false);
  const { login } = useAuth();
  const navigate  = useNavigate();

  const hero = t('loginHero', { returnObjects: true });
  const form = t('loginForm', { returnObjects: true });

  const submit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);
    try {
      const user = await login(email, password);
      navigate(user.role === 'citizen' ? '/' : '/admin');
    } catch {
      setError(form.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page loginPage">
      <div className="loginIntro">
        <ShieldCheck size={42} />
        <span className="eyebrow">{hero.eyebrow}</span>
        <h1>{hero.heading}</h1>
        <p>{hero.para}</p>
      </div>
      <form className="formPanel loginForm" onSubmit={submit}>
        <div className="sectionHeader compactHeader">
          <LockKeyhole size={28} />
          <h2>{form.heading}</h2>
        </div>
        <label>
          {form.email}
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="username" />
        </label>
        <label>
          {form.password}
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password" />
        </label>
        {error ? <p className="error">{error}</p> : null}
        <button className="button primary" type="submit" disabled={loading}>
          <LogIn size={18} />{loading ? form.submitting : form.submit}
        </button>
      </form>
    </section>
  );
}
