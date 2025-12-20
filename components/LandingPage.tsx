import React, { useState } from 'react';
import { ChevronRight, Star, Check, PlayCircle, ArrowRight } from 'lucide-react';
import { PricingTier, TierLevel } from '../types';
import AuthModal from './AuthModal';

const TIERS: PricingTier[] = [
  {
    id: 'circle',
    name: TierLevel.CIRCLE,
    monthlyPrice: 97,
    annualPrice: 930,
    tagline: 'The System.',
    features: ['Weekly dashboard review by Graziella', 'Monthly group Q&A', 'The 2Equilibrium Method™', 'Graziella\'s Private Vault'],
    cta: 'Join The Circle'
  },
  {
    id: 'mentorship',
    name: TierLevel.MENTORSHIP,
    monthlyPrice: 297,
    annualPrice: 2850,
    tagline: 'The Guidance.',
    features: ['Everything in Circle', '2× monthly 1:1 video calls', 'Priority Feedback Card', 'Direct Message Access'],
    cta: 'Apply for Mentorship',
    isPopular: true
  },
  {
    id: 'private',
    name: TierLevel.PRIVATE,
    monthlyPrice: 597,
    annualPrice: 5730,
    tagline: 'The Inner Circle.',
    features: ['Everything in Mentorship', 'Weekly 30-min strategy calls', 'Unlimited Voxer access', 'Personal plan adjustment weekly'],
    cta: 'Inquire for Private'
  }
];

const LandingPage: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <>
    <div className="font-sans text-brand-navy bg-brand-cream overflow-x-hidden selection:bg-brand-gold selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-brand-cream/90 backdrop-blur-md border-b border-brand-navy/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="font-serif text-2xl font-bold tracking-tight text-brand-navy">
            2EQUILIBRIUM <span className="text-brand-gold text-lg italic font-normal ml-1">GDS</span>
          </div>
          <button onClick={() => setIsAuthModalOpen(true)} className="text-xs uppercase tracking-[0.2em] font-medium hover:text-brand-gold transition-colors">
            Member Access
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-cream to-brand-cream z-0"></div>
        
        {/* Decorative Lines */}
        <div className="absolute top-0 right-0 w-1/3 h-full border-l border-brand-navy/5 hidden lg:block"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-brand-navy/5 hidden lg:block"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-fade-in-up">
            <span className="block text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-brand-gold"></span>
              Private Coaching
            </span>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-brand-navy mb-8">
              Clarity.<br />
              <span className="italic text-brand-gold/80">Equilibrium.</span><br />
              Graziella.
            </h1>
            <p className="text-brand-navy/70 text-lg md:text-xl leading-relaxed max-w-lg mb-10 font-light border-l-2 border-brand-gold pl-6">
              I’m selectively opening spots to coach you directly using my proven 2Equilibrium Method. This isn't a program. It is direct access to me.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-brand-navy text-white px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-brand-gold transition-all duration-300 shadow-xl shadow-brand-navy/10">
                Apply for Coaching
              </button>
              <button className="group flex items-center gap-3 px-8 py-4 uppercase tracking-widest text-xs font-bold text-brand-navy hover:text-brand-gold transition-colors">
                Watch the Film
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="relative h-[600px] lg:h-[800px] w-full mt-10 lg:mt-0">
             <div className="absolute inset-4 border border-brand-gold/30 z-20"></div>
             <img 
               src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2776&auto=format&fit=crop" 
               alt="Graziella De Souza" 
               className="absolute inset-0 w-full h-full object-cover z-10 grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out shadow-2xl"
             />
             <div className="absolute bottom-10 left-[-2rem] bg-brand-cream p-6 shadow-xl z-30 max-w-xs hidden md:block">
               <p className="font-serif italic text-xl text-brand-navy">"I don't coach to maintain. I coach to transform."</p>
               <p className="text-xs uppercase tracking-widest text-brand-gold mt-4">— Graziella De Souza</p>
             </div>
          </div>
        </div>
      </section>

      {/* A Week With Graziella (Geometric Blocking) */}
      <section className="py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-end mb-16 border-b border-brand-navy/10 pb-8">
             <div className="flex-1">
               <h2 className="font-serif text-4xl md:text-5xl text-brand-navy mb-4">Step Into My Private World</h2>
               <p className="text-brand-navy/60 max-w-xl">I don't just teach this lifestyle; I live it. As a member, you get intimate, behind-the-scenes access to my routines.</p>
             </div>
             <div className="text-right hidden md:block">
               <span className="text-9xl font-serif text-brand-blue/50 leading-none -mb-8 block">04</span>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-brand-navy/10">
             <div className="p-12 bg-brand-blue/30 flex flex-col justify-center">
                <span className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-4">Latest Episode</span>
                <h3 className="font-serif text-3xl mb-6">A Week With Graziella: Episode 04</h3>
                <ul className="space-y-4 mb-8">
                  {['What I eat in a day', 'Private training sessions', 'Unfiltered Q&A from home'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-brand-navy/80 font-medium">
                      <div className="w-1.5 h-1.5 bg-brand-gold rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="self-start text-xs uppercase tracking-widest font-bold border-b border-brand-navy pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors">
                  View Series Access
                </button>
             </div>
             <div className="relative h-[400px] group overflow-hidden cursor-pointer">
                <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=2787&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Episode Thumbnail" />
                <div className="absolute inset-0 bg-brand-navy/20 flex items-center justify-center group-hover:bg-brand-navy/10 transition-colors">
                   <div className="w-20 h-20 bg-brand-cream/90 rounded-full flex items-center justify-center shadow-lg">
                      <PlayCircle className="w-8 h-8 text-brand-navy ml-1" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Pricing / Tiers (Clean Cards) */}
      <section className="py-24 bg-brand-cream relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-serif text-4xl md:text-5xl text-brand-navy mb-6">Your Proximity to Graziella</h2>
            <p className="text-brand-navy/60">Choose your level of access. Spaces are strictly limited to ensure quality of attention.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TIERS.map((tier) => (
              <div key={tier.id} className={`flex flex-col p-10 border transition-all duration-300 ${
                tier.isPopular 
                  ? 'bg-white border-brand-gold shadow-[0_20px_50px_rgba(11,28,51,0.1)] transform md:-translate-y-4' 
                  : 'bg-white border-brand-navy/5 hover:border-brand-gold/50'
              }`}>
                {tier.isPopular && (
                  <div className="self-start bg-brand-navy text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 mb-6">
                    Selected
                  </div>
                )}
                <h3 className="font-serif text-3xl text-brand-navy mb-2">{tier.name}</h3>
                <p className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-6">{tier.tagline}</p>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-serif text-brand-navy">${tier.monthlyPrice}</span>
                  <span className="text-brand-navy/40 text-sm">/month</span>
                </div>

                <div className="flex-1 space-y-4 mb-10">
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-brand-gold shrink-0 mt-1" />
                      <span className="text-sm text-brand-navy/70 leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-4 uppercase tracking-widest text-xs font-bold transition-all border ${
                  tier.isPopular 
                    ? 'bg-brand-navy text-white border-brand-navy hover:bg-brand-gold hover:border-brand-gold' 
                    : 'bg-transparent text-brand-navy border-brand-navy/20 hover:border-brand-navy'
                }`}>
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <p className="text-brand-gold text-sm italic font-serif">
               "Private" tier currently has 9 spots remaining for this quarter.
             </p>
          </div>
        </div>
      </section>

      {/* Testimonials (High Contrast) */}
      <section className="py-24 bg-brand-navy text-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-brand-white/10">
              {[1, 2, 3].map((i) => (
                <div key={i} className="px-6 py-8 md:py-0">
                   <div className="flex text-brand-gold mb-6">
                     {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                   </div>
                   <p className="font-serif text-xl leading-relaxed mb-8 text-brand-white/90">
                     "Graziella personally reviewed my check-ins every week. It wasn't just advice; it was a complete recalibration of my lifestyle."
                   </p>
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-brand-gold/20 rounded-full"></div>
                     <div>
                       <p className="text-xs font-bold uppercase tracking-widest text-white">Sarah Jenkins</p>
                       <p className="text-xs text-brand-gold">Executive, London</p>
                     </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-brand-white border-t border-brand-navy/5 text-center">
        <p className="font-serif text-2xl text-brand-navy mb-6 tracking-tight">2EQUILIBRIUM</p>
        <p className="text-brand-navy/50 text-sm mb-2">This is Graziella's private world.</p>
        <p className="text-brand-navy/30 text-xs">© 2025 Graziella De Souza. All Rights Reserved.</p>
      </footer>
    </div>

    <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
};

export default LandingPage;