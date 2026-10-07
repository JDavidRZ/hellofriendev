function PageHeading({ title, children }) {
  return (
    <header className="mb-8 max-w-2xl">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">{title}</h1>
      {children && <p className="mt-3 text-lg leading-7 text-slate-600 dark:text-slate-300">{children}</p>}
    </header>
  )
}

export default PageHeading
