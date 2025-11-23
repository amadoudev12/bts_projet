import React, { useState, useMemo } from 'react';
import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
PieChart,
Pie,
Cell,
BarChart,
Bar,
Legend,
} from 'recharts';
import { Search, Bell, Settings, LogOut, User, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

// --------------------------
// Mock data
// --------------------------
const stats = [
    { id: 1, title: "Étudiants", value: 1240, delta: "+6%" },
    { id: 2, title: "Enseignants", value: 64, delta: "+1%" },
    { id: 3, title: "Cours", value: 28, delta: "-2%" },
    { id: 4, title: "Revenus (M)", value: 12.8, delta: "+14%" },
];

const lineData = [
    { month: 'Jan', inscriptions: 40, revenus: 3.2 },
    { month: 'Fév', inscriptions: 70, revenus: 4.1 },
    { month: 'Mar', inscriptions: 60, revenus: 3.6 },
    { month: 'Avr', inscriptions: 90, revenus: 5.2 },
    { month: 'Mai', inscriptions: 120, revenus: 7.1 },
    { month: 'Juin', inscriptions: 150, revenus: 9.0 },
];

const pieData = [
    { name: 'Informatique', value: 400 },
    { name: 'Gestion', value: 300 },
    { name: 'Électronique', value: 200 },
    { name: 'Autres', value: 100 },
];

const COLORS = ['#6C5CE7', '#A29BFE', '#00B894', '#FF7675'];

const tableRows = new Array(8).fill(0).map((_, i) => ({
    id: i + 1,
    name: `Étudiant ${i + 1}`,
    filiere: ['Informatique', 'Gestion', 'Électronique'][i % 3],
    date: `2025-0${(i % 9) + 1}-0${(i % 9) + 1}`,
    statut: ['Actif', 'En attente', 'Retard'][i % 3],
}));

const activities = [
    { time: '09:01', text: 'Paiement reçu - Étudiant 12' },
    { time: '10:30', text: 'Nouvelle inscription - Étudiant 23' },
    { time: '12:01', text: 'Commande pressing déposée' },
    { time: '15:20', text: 'Cours ajouté: Base de données' },
];

// --------------------------
// Small UI components
// --------------------------
function Header({ onToggleSidebar, userName }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white/60 backdrop-blur rounded-2xl">
      <div className="flex items-center gap-4">
        <button aria-label="menu" onClick={onToggleSidebar} className="p-2 rounded-lg hover:bg-gray-100">
        <Menu size={18} />
        </button>
        <h1 className="text-xl font-semibold">BTS Dashboard</h1>
        <span className="text-sm text-gray-500">Tableau de bord</span>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <input
            placeholder="Rechercher..."
            className="pl-10 pr-4 py-2 rounded-xl border border-gray-200 text-sm w-64"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
        </div>

        <button className="p-2 rounded-lg hover:bg-gray-100">
          <Bell />
        </button>

        <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
          <User />
          <div className="text-sm">
            <div className="font-medium">{userName}</div>
            <div className="text-xs text-gray-500">Administrateur</div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Sidebar({ active, onSelect }) {
  const items = [
    { key: 'dashboard', label: 'Tableau de bord' },
    { key: 'students', label: 'Étudiants' },
    { key: 'courses', label: 'Cours' },
    { key: 'timetable', label: "Emploi du temps" },
    { key: 'payments', label: 'Paiements' },
    { key: 'settings', label: 'Paramètres' },
  ];

  return (
    <aside className={`w-64 p-4 bg-white/60 rounded-2xl shadow-sm ${active ? '' : 'hidden md:block'}`}>
      <div className="mb-6">
        <div className="text-lg font-bold mb-2">SchoolManager</div>
        <div className="text-xs text-gray-500">Gestion BTS • Projet</div>
      </div>

      <nav className="flex flex-col gap-2">
        {items.map((it) => (
          <button
            key={it.key}
            onClick={() => onSelect(it.key)}
            className={`text-left px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-3 ${active === it.key ? 'bg-violet-100 font-semibold' : ''}`}>
            <span className="w-2 h-2 bg-violet-300 rounded-full" />
            {it.label}
          </button>
        ))}
      </nav>

      <div className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} Verno</div>
    </aside>
  );
}

function StatCard({ title, value, delta }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-4 shadow-sm"
    >
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-2 flex items-baseline gap-3">
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-sm text-green-500">{delta}</div>
      </div>
    </motion.div>
  );
}

// --------------------------
// Main Exported Component
// --------------------------
export default function AppDashboard() {
  const [sidebar, setSidebar] = useState(true);
  const [active, setActive] = useState('dashboard');
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('Tous');

  const filteredRows = useMemo(() => {
    return tableRows.filter((r) => {
      const matchesQuery = r.name.toLowerCase().includes(query.toLowerCase()) || r.filiere.toLowerCase().includes(query.toLowerCase());
      const matchesFilter = filter === 'Tous' ? true : r.statut === filter;
      return matchesQuery && matchesFilter;
    });
  }, [query, filter]);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="grid md:grid-cols-6 gap-6">
        <div className="md:col-span-1">
          <Sidebar active={active} onSelect={setActive} />
        </div>

        <main className="md:col-span-5 space-y-6">
          <Header onToggleSidebar={() => setSidebar((s) => !s)} userName="El Hadj" />

          {/* Stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <StatCard key={s.id} title={s.title} value={s.value} delta={s.delta} />
            ))}
          </div>

          {/* Charts and right column */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold">Évolution des inscriptions & revenus</h3>
                  <div className="text-xs text-gray-500">Derniers mois</div>
                </div>
                <div className="text-xs text-gray-500">Filtre: 6 mois</div>
              </div>

              <div style={{ width: '100%', height: 250 }}>
                <ResponsiveContainer>
                  <LineChart data={lineData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="inscriptions" stroke="#6C5CE7" strokeWidth={3} dot={{ r: 3 }} />
                    <Line type="monotone" dataKey="revenus" stroke="#00B894" strokeWidth={2} dot={{ r: 3 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Répartition par filière</h3>
              <div style={{ width: '100%', height: 250 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={80} innerRadius={45} paddingAngle={4}>
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Table & Activities */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Derniers inscrits</h3>
                  <div className="text-xs text-gray-500">Liste récente</div>
                </div>

                <div className="flex items-center gap-2">
                  <select className="p-2 rounded-lg border" value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option>Tous</option>
                    <option>Actif</option>
                    <option>En attente</option>
                    <option>Retard</option>
                  </select>

                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Recherche par nom ou filière"
                    className="px-3 py-2 rounded-lg border"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-xs text-gray-500 text-left">
                    <tr>
                      <th className="pb-2">Nom</th>
                      <th className="pb-2">Filière</th>
                      <th className="pb-2">Date</th>
                      <th className="pb-2">Statut</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRows.map((r) => (
                      <tr key={r.id} className="border-t">
                        <td className="py-3">{r.name}</td>
                        <td>{r.filiere}</td>
                        <td>{r.date}</td>
                        <td>
                          <span
                            className={`px-3 py-1 rounded-full text-xs ${
                              r.statut === 'Actif' ? 'bg-green-100 text-green-700' : r.statut === 'En attente' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                            }`}
                          >
                            {r.statut}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Activité récente</h3>
              <div className="flex flex-col gap-3">
                {activities.map((a, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 text-xs text-gray-500">{a.time}</div>
                    <div className="text-sm">{a.text}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-right">
                <button className="px-3 py-2 rounded-lg bg-violet-600 text-white text-sm">Voir tout</button>
              </div>
            </div>
          </div>

          <footer className="text-xs text-gray-500 text-center py-6">Made with ♥ for ton projet BTS — Verno</footer>
        </main>
      </div>
    </div>
  );
}
