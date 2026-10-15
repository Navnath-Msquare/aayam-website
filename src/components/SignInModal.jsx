import React, { useState } from 'react';
import { X, Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

export default function SignInModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-4 sm:my-8 max-h-[92vh] flex flex-col">
        <div className="bg-slate-900 px-5 sm:px-6 py-4 sm:py-5 text-white flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <img
              src="/AayamLogoV1.png"
              alt="AAYAM"
              className="h-7 sm:h-8 w-auto brightness-0 invert"
            />
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 sm:p-6 overflow-y-auto flex-grow">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
            Sign In to AAYAM
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Access your construction portals, society updates, and approvals.
          </p>

          {isSuccess ? (
            <div className="my-8 text-center space-y-2 py-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <p className="text-sm font-semibold text-slate-800">
                Signing you into your workspace...
              </p>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="name@organization.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F15A24]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F15A24]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-1.5 text-slate-600 cursor-pointer">
                  <input type="checkbox" className="rounded text-[#F15A24] focus:ring-[#F15A24]" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-[#F15A24] hover:underline font-medium">
                  Forgot password?
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-[#F15A24] hover:bg-[#d94916] text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
