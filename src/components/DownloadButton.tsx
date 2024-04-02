const DownloadButton = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-4 mb-6">
        <h2 className="text-2xl font-mono max-sm:text-xl max-sm:m-2 text-center">Like my profile? Here is some more info!</h2>
        <a href="/Saransh Bangar - Software Engineer.pdf" download target="_blank">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Download Resume
            </button>
        </a>
    </section>
  )
}

export default DownloadButton