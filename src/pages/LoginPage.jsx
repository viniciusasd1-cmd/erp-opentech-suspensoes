import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-10 text-slate-100">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl shadow-slate-950/30">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          ERP OpenTech Suspensoes
        </p>
        <h1 className="mt-4 text-3xl font-semibold">Login</h1>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Tela temporaria para organizar a base do projeto. A autenticacao
          real sera implementada depois.
        </p>

        <div className="mt-8 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="email">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="usuario@opentech.com"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="password">
              Senha
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
            />
          </div>
        </div>

        <button
          type="button"
          className="mt-6 w-full rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Entrar
        </button>

        <Link
          to="/home"
          className="mt-4 inline-flex text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
        >
          Acessar estrutura inicial
        </Link>
      </div>
    </div>
  )
}

export default LoginPage
