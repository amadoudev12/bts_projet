import React, { useState, useEffect } from 'react';
import { Search, Bell, User} from 'lucide-react';
import { motion } from 'framer-motion';
import etudiantService from '../api/etudiantService'
import matiereService from '../api/matiereService'
import filiereService from '../api/filiereService'
import EtudiantList from '../components/etudiantList';
const COLORS = ['#6C5CE7', '#A29BFE', '#00B894', '#FF7675'];

// const tableRows = new Array(8).fill(0).map((_, i) => ({
//     id: i + 1,
//     name: `Étudiant ${i + 1}`,
//     filiere: ['Informatique', 'Gestion', 'Électronique'][i % 3],
//     date: `2025-0${(i % 9) + 1}-0${(i % 9) + 1}`,
//     statut: ['Actif', 'En attente', 'Retard'][i % 3],
// }));

function Header({ userName }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white/60 backdrop-blur rounded-2xl">
      <div className="flex items-center gap-4">
        <button aria-label="menu" className="p-2 rounded-lg hover:bg-gray-100">
        </button>
        <h1 className="text-xl font-semibold">BTS Dashboard</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <input
            placeholder="Rechercher..."
            className="pl-10 pr-4 py-2 rounded-xl border border-gray-200 text-sm w-64"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
        </div>
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

// function Sidebar({ active, onSelect }) {
//   const items = [
//     { key: 'dashboard', label: 'Tableau de bord' },
//     { key: 'students', label: 'Étudiants' },
//     { key: 'courses', label: 'Cours' },
//     { key: 'timetable', label: "Emploi du temps" },
//     { key: 'payments', label: 'Paiements' },
//     { key: 'settings', label: 'Paramètres' },
//   ];

//   return (
//     <aside className={`w-64 p-4 bg-white/60 rounded-2xl shadow-sm ${active ? '' : 'hidden md:block'}`}>
//       <div className="mb-6">
//         <div className="text-lg font-bold mb-2">SchoolManager</div>
//         <div className="text-xs text-gray-500">Gestion BTS • Projet</div>
//       </div>

//       <nav className="flex flex-col gap-2">
//         {items.map((it) => (
//           <button
//             key={it.key}
//             onClick={() => onSelect(it.key)}
//             className={`text-left px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-3 ${active === it.key ? 'bg-violet-100 font-semibold' : ''}`}>
//             <span className="w-2 h-2 bg-violet-300 rounded-full" />
//             {it.label}
//           </button>
//         ))}
//       </nav>

//       <div className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} Verno</div>
//     </aside>
//   );
// }

function StatCard({ title, value }) {
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
      </div>
    </motion.div>
  );
}

// --------------------------
// Main Exported Component
// --------------------------
export default function AppDashboard() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('tous');
  const [stats, setStats] = useState([])
  const [filieres, setFilieres] = useState([])
      //recuperation des filiere
  useEffect(()=> {
          filiereService.getAll()
          .then(res => res.data)
          .then((data) => {
          console.log('les données du backEnd:',data.result);
          setFilieres(data.result)
          })
          .catch(err => console.log(err))
      },[])
  useEffect(()=>{
    const FetchCount = async ()=>{
      const [etudiants, matieres, filiere] = await Promise.all([
        etudiantService.count(),
        matiereService.getCountMat(),
        filiereService.getCountFil()
      ])
      const statsFinale = [
        { title: "etudiant", value: etudiants.data.nombre.total },
        { title: "matiere", value: matieres.data.result.total_mat },
        { title: "filiere", value: filiere.data.result.total_filiere}
      ]

      setStats(statsFinale)
    }
    FetchCount()
    console.log(filter);
    
  },[])
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="grid md:grid-cols-6 gap-6">

        <main className="md:col-span-5 space-y-6">
          <Header  userName="El Hadj" />

          {/* Stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <StatCard key={s.title} title={s.title} value={s.value} delta={s.delta} />
            ))}
          </div>
          {/* Table & Activities */}
          <div>
            <div className="lg:col-span-2 bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Liste récente</h3>
                </div>

                <div className="flex items-center gap-2">
                  <select className="p-2 rounded-lg border"  value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="tous">Tous les etudiant</option>
                    {
                      filieres.map((filiere, index)=>(
                        <option key={index} value={filiere.nom_filiere}>{filiere.nom_filiere}</option>
                      ))
                    }
                  </select>
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Recherche par nom"
                    className="px-3 py-2 rounded-lg border"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <EtudiantList filter={filter}/>
              </div>
            </div>
          </div>
          <footer className="text-xs text-gray-500 text-center py-6"> ton projet BTS — Nero</footer>
        </main>
      </div>
    </div>
  );
}
