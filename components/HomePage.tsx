import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PricingTier, TierLevel } from '../types';

const TIERS: PricingTier[] = [
  {
    id: 'foundation',
    name: 'Foundation' as TierLevel,
    monthlyPrice: 29,
    annualPrice: 348,
    tagline: 'Start Your Journey',
    features: ['6-month Foundation phase', 'Daily lesson unlock', 'Journal with mood tracking', 'Chapter quizzes', 'Progress analytics'],
    cta: 'Start Monthly'
  },
  {
    id: 'transformation',
    name: 'Transformation' as TierLevel,
    monthlyPrice: 21.50,
    annualPrice: 129,
    tagline: '6 Months + Free Trial',
    features: ['Everything in Foundation', '1-week FREE trial', 'Extended journey access', 'Priority feature updates', 'Community forums'],
    cta: 'Start Free Trial',
    isPopular: true
  },
  {
    id: 'lifetime',
    name: 'Lifetime Wellness' as TierLevel,
    monthlyPrice: 20.75,
    annualPrice: 249,
    tagline: 'Best Value',
    features: ['Everything in Transformation', 'Immediate quiz retries', 'Future phase access included', 'Lifetime updates', 'Premium support'],
    cta: 'Get Lifetime Access'
  }
];

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-blue via-brand-cream to-brand-cream">
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-brand-navy mb-6">
              Your Lifetime Wellness <span className="text-brand-gold">Companion</span>
            </h1>
            <h2 className="text-2xl md:text-3xl uppercase tracking-wide font-bold text-brand-navy mb-8">
              YOUR 6-MONTH TRANSFORMATION JOURNEY
            </h2>
            <p className="text-brand-navy/70 text-lg md:text-xl leading-relaxed max-w-lg mb-10 font-light border-l-2 border-brand-gold pl-6">
              A mobile app that guides you through 6 months of daily lessons, mindful eating practices, and gentle movement—transforming Graziella's proven wellness system into your personal journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-brand-navy text-white px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-brand-gold transition-all duration-300 shadow-xl">
                Download the App
              </button>
              <button className="bg-transparent text-brand-navy border border-brand-navy/20 hover:border-brand-navy px-10 py-4 uppercase tracking-widest text-xs font-bold transition-all">
                Start Free Trial
              </button>
            </div>
          </div>

          <div className="relative h-[500px] lg:h-[600px] w-full mt-10 lg:mt-0">
            <div className="absolute inset-4 border border-brand-gold/30 z-20"></div>
            <img
              src="/images/Florhome.png"
              alt="Wellness Journey"
              className="absolute inset-0 w-full h-full object-cover z-10 grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-brand-navy mb-8 text-center">Our Philosophy</h2>
          <p className="text-brand-navy/70 text-lg leading-relaxed max-w-4xl mx-auto text-center">
            Wellness isn't about restriction—it's about harmony. The 2Equilibrium app guides you through a gentle, sustainable transformation using daily lessons that unlock one at a time. No overwhelming information dumps. No punishing routines. Just progressive, nurturing guidance that adapts to your pace. Our approach combines mindful eating, gentle movement, and self-compassion to create lasting change that feels natural, not forced.
          </p>
        </div>
      </section>

      {/* Graziella Bio Section */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] lg:h-[600px] w-full">
              <div className="absolute inset-4 border border-brand-gold/30 z-20"></div>
              <img
                src="/images/GraziellaBio.jpg"
                alt="Graziella DeSouza"
                className="absolute inset-0 w-full h-full object-cover z-10 grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out shadow-2xl"
              />
            </div>

            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-navy mb-6">Meet Graziella</h2>
              <p className="text-brand-navy/70 text-lg leading-relaxed mb-6">
                Hi, I'm Graziella Cialone de Souza—a Nutrition and Lifestyle Coach who transformed my wellness system into the 2Equilibrium app. With certifications in Life Coaching, NLP, Positive Psychology, Personal Training, Nutrition, and Genetics-based Program Design, I've distilled decades of expertise into daily lessons you can access anytime, anywhere.
              </p>
              <p className="text-brand-navy/70 text-lg leading-relaxed mb-8">
                This app isn't just information—it's transformation. Every lesson, journal prompt, and movement suggestion comes from real experience helping people create sustainable change. I've taken everything that works and made it available to you in a format that respects your time, honors your pace, and meets you where you are.
              </p>
              <p className="font-serif text-xl italic text-brand-gold">— Graziella</p>
              <button
                onClick={() => navigate('/about')}
                className="mt-8 text-sm uppercase tracking-widest text-brand-navy hover:text-brand-gold transition-colors inline-flex items-center gap-2"
              >
                Full Bio
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Journey - 6 Chapters Section */}
      <section className="py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-brand-navy mb-4 text-center">Your Foundation Journey</h2>
          <p className="text-brand-gold uppercase tracking-widest text-xs text-center mb-16">Six Transformative Chapters</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-brand-cream p-8 shadow-lg">
              <div className="text-brand-gold text-sm font-bold mb-2">CHAPTER 1 • DAYS 1-5</div>
              <h3 className="font-serif text-2xl text-brand-navy mb-4">Awakening Your Wellness Path</h3>
              <p className="text-brand-navy/70 leading-relaxed">
                Discover your 'why' and establish daily rhythms. Set intentions that resonate with your true desires and create a foundation for lasting change.
              </p>
            </div>

            <div className="bg-brand-cream p-8 shadow-lg">
              <div className="text-brand-gold text-sm font-bold mb-2">CHAPTER 2 • DAYS 6-10</div>
              <h3 className="font-serif text-2xl text-brand-navy mb-4">Nourishment Fundamentals</h3>
              <p className="text-brand-navy/70 leading-relaxed">
                Learn the 70/30 rule, understand macronutrients, and discover how to nourish your body properly. Food becomes fuel, not fear.
              </p>
            </div>

            <div className="bg-brand-cream p-8 shadow-lg">
              <div className="text-brand-gold text-sm font-bold mb-2">CHAPTER 3 • DAYS 11-15</div>
              <h3 className="font-serif text-2xl text-brand-navy mb-4">Mindful Eating Rituals</h3>
              <p className="text-brand-navy/70 leading-relaxed">
                How we eat matters as much as what we eat. Master chewing, portions, and calorie density to transform your relationship with food.
              </p>
            </div>

            <div className="bg-brand-cream p-8 shadow-lg">
              <div className="text-brand-gold text-sm font-bold mb-2">CHAPTER 4 • DAYS 16-20</div>
              <h3 className="font-serif text-2xl text-brand-navy mb-4">Meal Architecture</h3>
              <p className="text-brand-navy/70 leading-relaxed">
                Build balanced meals throughout the day. Create a sustainable structure for breakfast, lunch, dinner, and smart beverage choices.
              </p>
            </div>

            <div className="bg-brand-cream p-8 shadow-lg">
              <div className="text-brand-gold text-sm font-bold mb-2">CHAPTER 5 • DAYS 21-25</div>
              <h3 className="font-serif text-2xl text-brand-navy mb-4">Gentle Movement Foundations</h3>
              <p className="text-brand-navy/70 leading-relaxed">
                Movement as self-care, not punishment. Embrace walking, post-meal movement, and joyful body flow that nurtures rather than depletes.
              </p>
            </div>

            <div className="bg-brand-cream p-8 shadow-lg">
              <div className="text-brand-gold text-sm font-bold mb-2">CHAPTER 6 • DAYS 26-30</div>
              <h3 className="font-serif text-2xl text-brand-navy mb-4">Mindset & Self-Compassion</h3>
              <p className="text-brand-navy/70 leading-relaxed">
                The inner work that sustains the outer changes. Cultivate self-talk, discipline, and compassion that support lifelong wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl text-brand-navy mb-6">Choose Your Subscription</h2>
            <p className="text-brand-navy/60 text-lg max-w-2xl mx-auto">
              Start with a free trial or commit to your wellness journey with plans designed for every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`bg-brand-white p-8 shadow-xl relative ${tier.isPopular ? 'ring-2 ring-brand-gold scale-105' : ''}`}
              >
                {tier.isPopular && (
                  <div className="absolute top-0 right-0 bg-brand-gold text-white text-xs uppercase tracking-widest px-4 py-2">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-serif text-3xl text-brand-navy mb-2">{tier.name}</h3>
                  <p className="text-brand-navy/60 italic">{tier.tagline}</p>
                </div>

                <div className="mb-8">
                  {tier.id === 'foundation' ? (
                    <>
                      <p className="text-5xl font-bold text-brand-navy mb-2">
                        ${tier.monthlyPrice}
                        <span className="text-lg font-normal text-brand-navy/60">/month</span>
                      </p>
                      <p className="text-sm text-brand-navy/60">
                        Billed monthly
                      </p>
                    </>
                  ) : tier.id === 'transformation' ? (
                    <>
                      <p className="text-5xl font-bold text-brand-navy mb-2">
                        ${tier.annualPrice}
                        <span className="text-lg font-normal text-brand-navy/60">/6 months</span>
                      </p>
                      <p className="text-sm text-brand-navy/60">
                        ~${tier.monthlyPrice}/month • 1-week FREE trial
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-5xl font-bold text-brand-navy mb-2">
                        ${tier.annualPrice}
                        <span className="text-lg font-normal text-brand-navy/60">/year</span>
                      </p>
                      <p className="text-sm text-brand-navy/60">
                        ~${tier.monthlyPrice}/month
                      </p>
                    </>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-navy/70">
                      <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-brand-navy text-white py-4 uppercase tracking-widest text-xs font-bold hover:bg-brand-gold transition-all duration-300">
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Your Wellness Journey Starts Today
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10">
            Download the 2Equilibrium app and begin your transformation journey. With daily lessons that unlock one at a time, journaling tools to track your progress, and a gentle approach that honors your pace—transformation has never felt this natural. Start your free trial and discover what sustainable wellness truly feels like.
          </p>
          <button className="bg-brand-gold text-brand-navy px-12 py-4 uppercase tracking-widest text-xs font-bold hover:bg-white transition-all duration-300">
            Download the App
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
