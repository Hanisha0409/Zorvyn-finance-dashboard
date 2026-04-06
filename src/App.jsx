import { useState, useMemo } from "react";
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";
import {
  LayoutDashboard, CreditCard, BarChart3, Settings, Moon, Sun, Plus
} from "lucide-react";

export default function App() {
  const [dark, setDark] = useState(true);
  const [page, setPage] = useState("dashboard");
  const [role, setRole] = useState("admin");

  const [transactions, setTransactions] = useState([
    { id: 1, date: "04 Apr", category: "Food", type: "Expense", amount: 500 },
    { id: 2, date: "03 Apr", category: "Salary", type: "Income", amount: 50000 },
    { id: 3, date: "02 Apr", category: "Shopping", type: "Expense", amount: 2000 },
    { id: 4, date: "01 Apr", category: "Travel", type: "Expense", amount: 4500 },
    { id: 5, date: "30 Mar", category: "Bills", type: "Expense", amount: 3000 },
    { id: 6, date: "28 Mar", category: "Freelance", type: "Income", amount: 15000 },
    { id: 7, date: "25 Mar", category: "Groceries", type: "Expense", amount: 1200 },
    { id: 8, date: "22 Mar", category: "Fuel", type: "Expense", amount: 2500 },
    { id: 9, date: "20 Mar", category: "Investment", type: "Income", amount: 10000 },
    { id: 10, date: "18 Mar", category: "Dining", type: "Expense", amount: 1800 },
    { id: 11, date: "15 Mar", category: "Salary", type: "Income", amount: 50000 },
    { id: 12, date: "10 Mar", category: "Travel", type: "Expense", amount: 6200 },
  ]);

  const [newTxn, setNewTxn] = useState({ category: "", amount: "", type: "Expense" });

  const chartData = useMemo(() => {
    return Array.from({ length: 10 }).map((_, i) => ({
      date: `Apr ${i + 1}`,
      income: Math.random() * 5000 + 2000,
      expense: Math.random() * 3000 + 1000
    }));
  }, []);

  const theme = dark
    ? "bg-gradient-to-br from-[#050A14] via-[#0B1220] to-[#0F172A] text-white"
    : "bg-gradient-to-br from-gray-100 to-gray-200 text-black";

  const glass = dark
    ? "bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)]"
    : "bg-white border border-gray-200 shadow-lg";

  const sidebarBg = dark
    ? "bg-[#0B0F19] border-r border-white/10"
    : "bg-white border-r border-gray-300 shadow-md";

  const handleAdd = () => {
    if (!newTxn.category || !newTxn.amount) return;

    setTransactions([
      {
        id: Date.now(),
        date: "Today",
        ...newTxn,
        amount: Number(newTxn.amount)
      },
      ...transactions
    ]);

    setNewTxn({ category: "", amount: "", type: "Expense" });
  };

  return (
    <div className={`${theme} min-h-screen flex transition-all duration-500`}>

      {/* SIDEBAR */}
      <div className={`w-60 p-4 ${sidebarBg} transition-all duration-300`}>
        <h1 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(99,102,241,0.8)] tracking-wide">
          Zorvyn
        </h1>

        {[
          ["dashboard", "Dashboard", LayoutDashboard],
          ["transactions", "Transactions", CreditCard],
          ["insights", "Insights", BarChart3],
          ["settings", "Settings", Settings]
        ].map(([key, label, Icon]) => (
          <button
            key={key}
            onClick={() => setPage(key)}
            className={`flex items-center gap-3 w-full px-3 py-2 mb-2 rounded-lg transition-all duration-300
              ${page === key
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.7)] scale-[1.03]"
                : dark
                  ? "text-gray-400 hover:bg-white/10 hover:text-white"
                  : "text-gray-600 hover:bg-gray-200 hover:text-black"
              }`}
          >
            <Icon size={16}/>
            {label}
          </button>
        ))}
      </div>

      {/* MAIN */}
      <div className="flex-1 p-4 flex flex-col gap-4">

        {/* TOPBAR */}
        <div className="flex justify-end gap-3">
          <div className="px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-sm flex gap-2 items-center shadow-[0_0_15px_rgba(99,102,241,0.6)]">
            {role}
            <button
              onClick={() => setRole(role === "admin" ? "user" : "admin")}
              className="bg-white/20 px-2 rounded hover:scale-105 transition"
            >
              switch
            </button>
          </div>

          <button onClick={() => setDark(!dark)} className="hover:scale-110 transition">
            {dark ? <Sun/> : <Moon/>}
          </button>
        </div>

        {/* DASHBOARD */}
        {page === "dashboard" && (
          <div className="flex flex-col gap-4 flex-1">
            <div className="grid md:grid-cols-4 gap-4">
              {[
                ["Total", "₹2,48,500"],
                ["Income", "₹1,20,000"],
                ["Expense", "₹70,000"],
                ["Savings", "₹58,500"]
              ].map(([t, v], i) => (
                <div key={i} className={`p-4 rounded-xl ${glass}`}>
                  <p className="text-sm text-gray-400">{t}</p>
                  <h2 className="text-xl font-semibold">{v}</h2>
                </div>
              ))}
            </div>

            <div className={`p-4 rounded-xl flex-1 ${glass}`}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Area dataKey="income" stroke="#22c55e" fill="#22c55e33" />
                  <Area dataKey="expense" stroke="#ef4444" fill="#ef444433" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* 🔥 ONLY THIS BLOCK MODIFIED */}
        {page === "transactions" && (
          <div className="flex flex-col gap-4 flex-1">

            {role === "admin" && (
              <div className={`p-4 rounded-xl ${glass} flex gap-3`}>
                <input
                  placeholder="Category"
                  className="p-2 border rounded w-full bg-transparent"
                  value={newTxn.category}
                  onChange={(e)=>setNewTxn({...newTxn,category:e.target.value})}
                />
                <input
                  placeholder="Amount"
                  className="p-2 border rounded w-full bg-transparent"
                  value={newTxn.amount}
                  onChange={(e)=>setNewTxn({...newTxn,amount:e.target.value})}
                />
                <select
                  className="p-2 border rounded bg-transparent"
                  onChange={(e)=>setNewTxn({...newTxn,type:e.target.value})}
                >
                  <option>Expense</option>
                  <option>Income</option>
                </select>
                <button onClick={handleAdd} className="bg-blue-600 px-4 rounded">
                  <Plus size={16}/>
                </button>
              </div>
            )}

            <div className={`rounded-xl ${glass} flex-1 overflow-hidden`}>

              <div className="grid grid-cols-4 px-4 py-3 text-xs uppercase tracking-wide border-b border-white/10 text-gray-400">
                <span>Category</span>
                <span>Date</span>
                <span>Type</span>
                <span className="text-right">Amount</span>
              </div>

              <div className="overflow-y-auto h-full">
                {transactions.map((t) => (
                  <div
                    key={t.id}
                    className="grid grid-cols-4 px-4 py-3 items-center border-b border-white/5 hover:bg-white/5 transition"
                  >
                    <span className="font-medium">{t.category}</span>
                    <span className="text-gray-400">{t.date}</span>

                    <span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        t.type === "Income"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}>
                        {t.type}
                      </span>
                    </span>

                    <span className={`text-right font-semibold ${
                      t.type === "Income" ? "text-green-400" : "text-red-400"
                    }`}>
                      ₹{t.amount}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        )}

        {/* INSIGHTS (UNCHANGED) */}
        {page === "insights" && (
          <div className="grid md:grid-cols-3 gap-4 flex-1">
            <div className={`p-6 rounded-xl ${glass}`}>
              <h2 className="text-3xl font-bold tracking-wide">48%</h2>
              <p className="text-sm text-gray-400 mt-1">Savings Rate</p>
            </div>

            <div className={`p-6 rounded-xl ${glass}`}>
              <h2 className="text-3xl font-bold tracking-wide">₹23,000</h2>
              <p className="text-sm text-gray-400 mt-1">Monthly Spend</p>
            </div>

            <div className={`p-6 rounded-xl ${glass}`}>
              <h2 className="text-3xl font-bold tracking-wide">Food</h2>
              <p className="text-sm text-gray-400 mt-1">Top Category</p>
            </div>

            <div className={`p-4 rounded-xl col-span-3 ${glass}`}>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={chartData}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Area dataKey="income" stroke="#22c55e" fill="#22c55e33" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* SETTINGS (UNCHANGED) */}
        {page === "settings" && (
          <div className={`p-4 rounded-xl ${glass}`}>
            <div className="space-y-3">
              <div className="flex justify-between">
                <p>Dark Mode</p>
                <button onClick={() => setDark(!dark)} className="bg-blue-500 px-3 py-1 rounded">
                  Toggle
                </button>
              </div>

              <div className="flex justify-between">
                <p>Currency</p>
                <select className="bg-transparent border px-2 py-1 rounded">
                  <option>INR</option>
                  <option>USD</option>
                </select>
              </div>

              <div className="flex justify-between">
                <p>Notifications</p>
                <button className="bg-green-500 px-3 py-1 rounded">On</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}