import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  Calendar, 
  Users, 
  LayoutDashboard, 
  Settings, 
  ChevronRight, 
  Plus, 
  MapPin, 
  Clock,
  ArrowUpRight,
  TrendingUp,
  Award,
  UserPlus,
  CheckCircle2,
  ExternalLink,
  Newspaper,
  ListOrdered,
  RefreshCw,
  Heart,
  Briefcase,
  Mail,
  X
} from 'lucide-react';

// --- CONFIGURATION ---
const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTSQJm0XPGHhQwiVcR52BMKYTTf8C7RNNrQ9luUfqiyndMz0UdjD5LtSsBi_SnaV1dim-GtxIxma1kA/pub?gid=1997370743&single=true&output=csv"; 

const LEAGUE_NAME = "WHITEWATER TRAILS TOUR";

const INITIAL_PLAYERS = [
  { id: 1, name: "Ben Swinerton", handicap: 4, points: 160, rounds: 12, avgScore: 72 },
  { id: 2, name: "Alex Johnson", handicap: 12, points: 145, rounds: 8, avgScore: 78 },
  { id: 3, name: "Sarah Miller", handicap: 15, points: 132, rounds: 8, avgScore: 82 },
  { id: 4, name: "Mike Ross", handicap: 8, points: 128, rounds: 7, avgScore: 74 },
  { id: 5, name: "David Chen", handicap: 18, points: 110, rounds: 8, avgScore: 88 },
];

const FALLBACK_SCHEDULE = [
  { id: 101, date: "2026-05-15", course: "Whitewater Valley Estates", time: "08:30 AM", status: "Upcoming" },
];

const SPONSORS = [
  {
    tier: "Title Sponsor",
    name: "Whitewater Golf Apparel",
    description: "Official outfitter of the 2026 WTT Season.",
    logo: "WGA",
    color: "bg-white text-black"
  },
  {
    tier: "Platinum",
    name: "Trailhead Brewing Co.",
    description: "The 19th Hole's exclusive beverage partner.",
    logo: "TBC",
    color: "bg-slate-800 text-white"
  },
  {
    tier: "Platinum",
    name: "Summit Financial",
    description: "Securing your future while you secure the green.",
    logo: "SF",
    color: "bg-slate-800 text-white"
  },
  {
    tier: "Gold",
    name: "Rapid Run Cart Services",
    description: "Reliable transport for every round.",
    logo: "RR",
    color: "bg-white/5 text-slate-400"
  }
];

const NEWS = [
  { 
    id: 1, 
    title: "2026 Season Kickoff: A New Era for WTT", 
    date: "March 10, 2026", 
    excerpt: "With the 2026 season right around the corner, the WTT is looking forward to another season. New commissioner Ben Swinerton is excited to take over and is hoping to grow the league.",
    category: "COMMISSIONER'S DESK"
  },
  { 
    id: 2, 
    title: "Registration Deadline: April 7", 
    date: "March 5, 2026", 
    excerpt: "Player registration for the summer season is officially open through Tuesday, April 7.",
    category: "OFFICIAL ANNOUNCEMENT"
  }
];

// --- Components ---

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
      active 
        ? 'bg-white text-[#020424] shadow-lg' 
        : 'text-slate-400 hover:bg-white/5 hover:text-white'
    }`}
  >
    <Icon size={20} />
    <span className="font-semibold tracking-wide uppercase text-[10px] md:text-xs text-left">{label}</span>
  </button>
);

const Card = ({ title, children, action }) => (
  <div className="bg-[#050830] border border-white/10 rounded-xl overflow-hidden shadow-2xl h-full">
    <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center bg-white/2">
      <h3 className="font-bold text-white uppercase tracking-widest text-xs md:text-sm">{title}</h3>
      {action}
    </div>
    <div className="p-6">
      {children}
    </div>
  </div>
);

const SponsorsPage = () => {
  const [showInquiry, setShowInquiry] = useState(false);

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
        <div className="text-center md:text-left">
          <h3 className="text-white font-black uppercase tracking-widest text-lg mb-2 italic">Partner with WTT</h3>
          <p className="text-slate-500 text-sm max-w-xl font-medium">Support local golf and gain visibility across our growing community. We are currently accepting new sponsors for the 2026 season.</p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <button 
            onClick={() => setShowInquiry(true)}
            className="inline-flex items-center px-8 py-3 bg-white text-[#020424] rounded-lg font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-all active:scale-95"
          >
            <Mail size={16} className="mr-2" /> Inquire Now
          </button>
        </div>
      </div>

      {showInquiry && (
        <div className="bg-blue-600/10 border border-blue-500/30 rounded-xl p-6 max-w-2xl mx-auto relative animate-in zoom-in-95 duration-300">
          <button onClick={() => setShowInquiry(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white">
            <X size={20} />
          </button>
          <h4 className="text-white font-bold uppercase mb-2">Sponsorship Inquiry</h4>
          <p className="text-slate-300 text-sm mb-4">Please reach out to <span className="text-white font-bold">Ben Swinerton</span> directly via email to receive the 2026 Prospectus and rate card.</p>
          <a href="mailto:commissioner@whitewatertrails.com" className="text-blue-400 font-bold hover:underline text-sm">commissioner@whitewatertrails.com</a>
        </div>
      )}

      <div className="space-y-12">
        <div className="text-center">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.6em] mb-8">Official 2026 Partners</p>
          <div className="flex justify-center">
            <div className="bg-white p-8 md:p-12 rounded-2xl text-center max-w-md w-full shadow-2xl shadow-white/5 group hover:scale-[1.02] transition-transform">
               <div className="w-20 h-20 bg-[#020424] text-white flex items-center justify-center rounded-xl mx-auto mb-6 font-black text-2xl italic">WGA</div>
               <h4 className="text-[#020424] text-2xl font-black uppercase tracking-tighter leading-none">Whitewater Golf Apparel</h4>
               <p className="text-slate-500 text-[10px] mt-3 font-black uppercase tracking-[0.2em]">Title Sponsor & Outfitter</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPONSORS.filter(s => s.tier !== "Title Sponsor").map((sponsor, i) => (
            <div key={i} className="bg-[#050830] border border-white/10 p-8 rounded-xl hover:border-white/30 transition-all flex flex-col items-center text-center group">
              <span className={`text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-widest mb-6 ${
                sponsor.tier === 'Platinum' ? 'bg-white text-[#020424]' : 'bg-white/10 text-slate-400'
              }`}>
                {sponsor.tier}
              </span>
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 font-black text-xl shadow-lg transition-transform group-hover:scale-110 ${sponsor.color}`}>
                {sponsor.logo}
              </div>
              <h4 className="text-white font-black uppercase tracking-tight text-lg mb-2">{sponsor.name}</h4>
              <p className="text-slate-500 text-xs font-medium leading-relaxed">{sponsor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const RegistrationPage = () => {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdzpfkCJjmICdmvVdQTkLv5Ld1nPv_-QKDxNS83WMwKL9ITEQ/viewform?embedded=true";
  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white rounded-xl overflow-hidden shadow-2xl relative h-[600px] md:h-[850px]">
        <iframe src={googleFormUrl} className="w-full h-full border-none" title="Player Registration">Loading…</iframe>
      </div>
    </div>
  );
};

const Dashboard = ({ players, schedule, loading }) => (
  <div className="space-y-6 animate-in fade-in duration-700">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-xl text-[#020424]">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[#020424]/60 text-[10px] font-black uppercase tracking-tighter">Defending Champ</p>
            <h2 className="text-2xl font-black mt-1 uppercase leading-none">{players[0].name}</h2>
          </div>
          <Trophy className="text-[#020424]/20" size={32} />
        </div>
        <div className="mt-4 flex items-center text-xs font-bold"><TrendingUp size={14} className="mr-1" /><span>REIGNING COMMISSIONER</span></div>
      </div>
      <div className="bg-[#050830] border border-white/20 p-6 rounded-xl text-white shadow-xl">
        <p className="text-slate-500 text-[10px] font-black uppercase tracking-tighter">Season Opener</p>
        <h2 className="text-2xl font-bold mt-1 uppercase leading-none truncate">{loading ? "..." : (schedule[0]?.course || "TBD")}</h2>
        <div className="mt-4 flex items-center text-xs text-slate-400 font-medium"><Calendar size={14} className="mr-2" /><span>{loading ? "Loading..." : `${schedule[0]?.date || ""} @ ${schedule[0]?.time || ""}`}</span></div>
      </div>
      <div className="bg-[#050830] border border-white/20 p-6 rounded-xl text-white shadow-xl">
        <p className="text-slate-500 text-[10px] font-black uppercase tracking-tighter">Registration Status</p>
        <h2 className="text-2xl font-bold mt-1 uppercase leading-none">OPEN</h2>
        <div className="mt-4 flex items-center text-xs text-slate-400 font-medium"><Clock size={14} className="mr-2" /><span>Closes April 7</span></div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card title="WTT Leaderboard">
        <div className="space-y-4">
          {players.slice(0, 4).map((player, idx) => (
            <div key={player.id} className="flex items-center justify-between group border-b border-white/5 pb-3 last:border-0">
              <div className="flex items-center space-x-3">
                <span className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-black ${idx === 0 ? 'bg-white text-[#020424]' : 'bg-white/5 text-slate-500'}`}>0{idx + 1}</span>
                <span className="text-white text-sm font-bold tracking-tight uppercase group-hover:translate-x-1 transition-transform">{player.name}</span>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-right w-12"><p className="text-[9px] text-slate-500 font-black uppercase leading-none">PTS</p><p className="text-sm font-black text-white">{player.points}</p></div>
              </div>
            </div>
          ))}
        </div>
      </Card>
      <Card title="Next 3 Events">
        <div className="space-y-4">
          {loading ? (
            <div className="py-8 text-center animate-pulse">
              <RefreshCw className="mx-auto mb-2 text-slate-700 animate-spin" />
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Syncing with Sheet</p>
            </div>
          ) : schedule.slice(0, 3).map((item) => (
            <div key={item.id} className="flex items-center p-3 rounded-lg hover:bg-white/5 transition-all group">
              <div className="bg-white/5 p-2 rounded-md mr-4 group-hover:bg-white group-hover:text-[#020424] transition-colors"><MapPin size={18} /></div>
              <div className="flex-1">
                <h4 className="text-white font-bold uppercase tracking-tight text-xs md:text-sm leading-tight">{item.course}</h4>
                <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest mt-1">{item.date}</p>
              </div>
              <ChevronRight className="text-slate-700" size={16} />
            </div>
          ))}
        </div>
      </Card>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [players] = useState(INITIAL_PLAYERS);
  const [schedule, setSchedule] = useState(FALLBACK_SCHEDULE);
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!SHEET_URL) return;
    const fetchSchedule = async () => {
      setLoading(true);
      try {
        const response = await fetch(SHEET_URL);
        const data = await response.text();
        const rows = data.split('\n');
        const parsed = rows.slice(1).map((row, index) => {
          const columns = row.split(',');
          if (columns.length < 3) return null;
          const [id, date, course, time] = columns;
          if (!date || !course) return null;
          return { id: 200 + index, date: date.trim(), course: course.trim(), time: time?.trim() || "TBD" };
        }).filter(Boolean);
        if (parsed.length > 0) setSchedule(parsed);
      } catch (err) { console.error("Sync failed", err); } finally { setLoading(false); }
    };
    fetchSchedule();
  }, []);

  return (
    <div className="min-h-screen bg-[#020424] text-white flex flex-col md:flex-row font-sans selection:bg-white selection:text-black">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-white/10">
        <h1 className="text-lg font-black tracking-tighter italic uppercase">WTT</h1>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 bg-white/5 rounded-lg">
          {sidebarOpen ? <X size={20} /> : <Users size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed inset-0 z-50 bg-[#020424] p-8 flex flex-col transition-transform md:relative md:translate-x-0 md:w-72 md:border-r md:border-white/10 md:flex
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="mb-12 flex items-center justify-between">
          <h1 className="text-2xl font-black tracking-tighter text-white leading-none uppercase italic border-l-4 border-white pl-4">
            WHITEWATER<br/><span className="text-slate-500">TRAILS TOUR</span>
          </h1>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden"><X size={24} /></button>
        </div>
        
        <nav className="flex-1 space-y-2">
          {[
            { id: 'dashboard', icon: LayoutDashboard, label: 'Home' },
            { id: 'standings', icon: ListOrdered, label: 'Standings' },
            { id: 'schedule', icon: Calendar, label: 'Schedule' },
            { id: 'sponsors', icon: Heart, label: 'Sponsors' },
            { id: 'registration', icon: UserPlus, label: 'Registration' },
            { id: 'news', icon: Newspaper, label: 'News' },
          ].map((tab) => (
            <SidebarItem 
              key={tab.id} 
              icon={tab.icon} 
              label={tab.label} 
              active={activeTab === tab.id} 
              onClick={() => { setActiveTab(tab.id); setSidebarOpen(false); }} 
            />
          ))}
        </nav>
        
        <div className="mt-auto pt-8 border-t border-white/10">
          <SidebarItem icon={Settings} label="Admin" active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 md:p-12">
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
          <div>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Member Portal</p>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none italic">{activeTab}</h2>
          </div>
          <div className="hidden md:flex items-center space-x-3 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
            <span className="text-xs font-black uppercase tracking-widest">B. Swinerton</span>
            <div className="w-8 h-8 rounded bg-white flex items-center justify-center font-black text-[#020424] text-xs">BS</div>
          </div>
        </header>

        <div className="max-w-6xl pb-12">
          {activeTab === 'dashboard' && <Dashboard players={players} schedule={schedule} loading={loading} />}
          {activeTab === 'sponsors' && <SponsorsPage />}
          {activeTab === 'registration' && <RegistrationPage />}
          {activeTab === 'schedule' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-left-4">
              {loading ? (
                <div className="col-span-full py-20 text-center"><RefreshCw className="animate-spin mx-auto text-slate-600 mb-4" /><p className="text-slate-500 font-black uppercase tracking-widest text-xs">Syncing Schedule</p></div>
              ) : schedule.map((s, idx) => (
                <div key={s.id} className="p-6 bg-[#050830] border border-white/10 rounded-xl hover:border-white/30 transition-all">
                  <span className="bg-white text-[#020424] text-[9px] font-black px-2 py-1 rounded uppercase mb-4 inline-block">Round {idx + 1}</span>
                  <p className="text-slate-500 text-[10px] font-black uppercase mb-1">{s.date}</p>
                  <h3 className="text-lg md:text-xl font-black text-white mb-4 leading-tight uppercase">{s.course}</h3>
                  <div className="flex items-center text-slate-400 text-[10px] font-black tracking-widest uppercase"><Clock size={12} className="mr-2" />{s.time} Start</div>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'standings' && <div className="bg-[#050830] border border-white/10 p-12 rounded-xl text-center"><p className="text-slate-500 font-bold uppercase tracking-widest italic">Live Standings Module Loading for 2026...</p></div>}
          {activeTab === 'news' && (
            <div className="space-y-6 animate-in slide-in-from-right-4">
              {NEWS.map(n => (
                <div key={n.id} className="bg-white/2 border border-white/10 p-6 md:p-8 rounded-xl hover:bg-white/5 transition-colors">
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">{n.date} — {n.category}</p>
                  <h4 className="text-xl md:text-2xl font-black uppercase mb-4 italic leading-tight">{n.title}</h4>
                  <p className="text-slate-400 font-medium text-sm md:text-base">{n.excerpt}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
