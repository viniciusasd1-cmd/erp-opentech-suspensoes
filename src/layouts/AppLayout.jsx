import { NavLink, Outlet } from 'react-router-dom'

const navigationItems = [
  { to: '/home', label: 'Home' },
  { to: '/clientes', label: 'Clientes' },
  { to: '/produtos', label: 'Produtos' },
  { to: '/pedidos', label: 'Pedidos' },
  { to: '/ordens-producao', label: 'Ordens de Producao' },
]

function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              ERP OpenTech Suspensoes
            </p>
            <h1 className="text-xl font-semibold text-slate-900">
              Base inicial do frontend
            </h1>
          </div>

          <NavLink
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
            to="/login"
          >
            Ir para login
          </NavLink>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-6 lg:grid-cols-[240px_1fr]">
        <aside className="rounded-2xl bg-slate-900 p-4 text-slate-100 shadow-sm">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Modulos
          </p>

          <nav className="flex flex-col gap-2">
            {navigationItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    'rounded-xl px-4 py-3 text-sm font-medium transition',
                    isActive
                      ? 'bg-white text-slate-900'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        <main className="rounded-2xl bg-white p-6 shadow-sm">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout
