import './style.css';
import { RealtimeAgent, RealtimeSession } from '@openai/agents-realtime';

const reviews = [
  {
    name: "Sarah M.",
    location: "New York, USA",
    review:
      "I often would feel anxious at night and overthink and cry myself to sleep, feeling completely alone with my worries. MindEase became my lifeline, having someone to talk to at 3 AM when the world felt too heavy changed everything for me.",
    rating: 5,
  },
  {
    name: "Ahmed K.",
    location: "Dubai, UAE",
    review:
      "Yes, very happy with it. Finally found support that understands my background and culture.",
    rating: 5,
  },
  {
    name: "Maria L.",
    location: "São Paulo, Brazil",
    review:
      "After losing my job, I fell into a deep depression. MindEase helped me rebuild my confidence step by step. The 24/7 support meant I never had to face my darkest moments alone.",
    rating: 5,
  },
];

const countryStats = [
  { flag: '🇺🇸', users: '34k+', country: 'USA' },
  { flag: '🇦🇪', users: '28k+', country: 'UAE' },
  { flag: '🇳🇱', users: '25k+', country: 'Netherlands' },
  { flag: '🇪🇸', users: '31k+', country: 'Spain' },
];

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen wellness-gradient text-white font-[Montserrat]">
    <div class="text-center max-w-4xl mx-auto py-24">
      <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 mb-12 border border-white/30">
        <span class="text-white text-lg">✨</span> <span class="text-white text-sm font-medium">AI-Powered Mental Wellness</span>
      </div>
      <h1 class="text-6xl md:text-8xl mb-8 tracking-tight font-medium">
        Welcome to <span class="bg-gradient-to-r from-white via-purple-200 to-orange-200 bg-clip-text text-transparent font-semibold">Mynd Ease</span>
      </h1>
      <p class="text-xl md:text-2xl text-white/90 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
        Your personal AI companion for mental wellness. Get culturally-aware support in your language, available 24/7 for judgment-free guidance.
      </p>
      <div class="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
        <button id="startButton" class="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm px-12 py-6 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
          Get Started →
        </button>
        <div class="flex items-center gap-2 text-white/80 mt-4 sm:mt-0">
          <span class="text-white">🛡️</span><span class="text-sm font-medium">Private & Secure</span>
        </div>
      </div>
    </div>

    <!-- Feature Cards Section -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-32 px-4">
      <div class="bg-white/20 backdrop-blur-md rounded-3xl p-8 text-white text-center shadow-md transition-all duration-300">
        <div class="text-4xl mb-4">❤️</div>
        <h3 class="text-xl font-semibold mb-3">Emotional Support</h3>
        <p class="text-sm leading-relaxed font-light">
          Chat with our culturally-aware AI companion that understands your background, language, and emotional needs. Available 24/7 for judgment-free support.
        </p>
      </div>

      <div class="bg-white/20 backdrop-blur-md rounded-3xl p-8 text-white text-center shadow-md transition-all duration-300">
        <div class="text-4xl mb-4">🧠</div>
        <h3 class="text-xl font-semibold mb-3">Intelligent Coaching</h3>
        <p class="text-sm leading-relaxed font-light">
          Receive personalized guidance and coping strategies powered by advanced AI. Get practical exercises and insights tailored to your unique situation.
        </p>
      </div>

      <div class="bg-white/20 backdrop-blur-md rounded-3xl p-8 text-white text-center shadow-md transition-all duration-300">
        <div class="text-4xl mb-4">💬</div>
        <h3 class="text-xl font-semibold mb-3">Instant Conversations</h3>
        <p class="text-sm leading-relaxed font-light">
          Start meaningful conversations anytime you need support. No appointments, no waiting – your AI wellness companion is always ready to listen and help.
        </p>
      </div>
    </div>

    <!-- Reviews Section -->
    <div class="mb-32 px-4">
      <div class="text-center mb-20">
        <h2 class="text-4xl md:text-5xl font-light mb-6 tracking-tight">Stories of Hope & Healing</h2>
        <p class="text-xl text-white/80 max-w-2xl mx-auto font-light">Real people sharing how MindEase helped them through their darkest moments</p>
      </div>
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        ${reviews.map(r => `
          <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div class="flex items-center mb-6">
              ${'<span class="text-yellow-300">★</span>'.repeat(r.rating)}
            </div>
            <p class="text-white/90 leading-relaxed mb-8 font-light italic">"${r.review}"</p>
            <div class="border-t border-white/20 pt-6">
              <div class="font-medium">${r.name}</div>
              <div class="text-white/60 text-sm font-light">${r.location}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>

    <!-- Country Stats Section -->
    <div class="text-center">
      <p class="text-white/80 mb-8 font-light">Trusted by people from over 50 countries</p>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        ${countryStats.map(stat => `
          <div class="flex flex-col items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-6 min-w-[90px] border border-white/20">
            <div class="text-2xl">${stat.flag}</div>
            <div class="font-medium text-sm">${stat.users}</div>
            <div class="text-white/60 text-xs font-light">${stat.country}</div>
          </div>`).join('')}
      </div>
    </div>
  </div>
`;

// Realtime voice button logic
document.getElementById('startButton').addEventListener('click', async () => {
  const agent = new RealtimeAgent({
    name: 'Assistant',
    instructions: 'You provide mental health assistance, companionship, psychological insights and good advice.',
  });

  const session = new RealtimeSession(agent);

  try {
    const res = await fetch('/api/session');
    const data = await res.json();
    const ephemeralKey = data.client_secret.value;

    await session.connect({ apiKey: ephemeralKey });
    console.log("✅ Connected to Realtime API");
  } catch (err) {
    console.error("❌ Failed to connect:", err);
  }
});

