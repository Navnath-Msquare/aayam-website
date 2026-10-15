import React from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

export default function StakeholderDetailModal({ item, onClose, onBookDemo }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-4 sm:my-8 max-h-[92vh] flex flex-col">
        {item.image && (
          <div className="relative aspect-[16/9] w-full bg-slate-900 flex-shrink-0">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-950/70 text-white flex items-center justify-center hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="absolute bottom-4 left-6 right-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F15A24] text-white">
                {item.badge || 'AAYAM Platform'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mt-2">
                {item.title}
              </h3>
            </div>
          </div>
        )}

        <div className="p-5 sm:p-6 space-y-4 overflow-y-auto flex-grow">
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            {item.description}
          </p>

          <div className="space-y-2 pt-2 border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Core Capabilities Included:
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F15A24] flex-shrink-0" />
                <span>Single-pane visibility over milestones, contractors and site handovers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F15A24] flex-shrink-0" />
                <span>Live digital trail for approvals, NOCs and compliance documentation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F15A24] flex-shrink-0" />
                <span>Automated SMS & WhatsApp notifications for key society decisions</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-xs text-slate-500 hover:text-slate-800 font-medium"
            >
              Back
            </button>
            <button
              onClick={() => {
                onClose();
                onBookDemo();
              }}
              className="px-5 py-2.5 rounded-lg bg-[#F15A24] hover:bg-[#d94916] text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-md transition-all"
            >
              <span>Schedule Custom Walkthrough</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
