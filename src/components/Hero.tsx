
const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50/40">
      <div className="container mx-auto px-5 md:px-8 relative pt-28 pb-20 md:pt-40 md:pb-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
              Technology for{' '}
              <span className="gradient-text">Collaborative Finance</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-xl mb-10">
              OFi Consortium coordinates the governance and evolution of open financial tools, ensuring they stay transparent, community-owned, and designed for the long-term resilience of our communities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#about"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-navy-600 text-white font-medium text-sm hover:bg-navy-700 transition-all duration-200 shadow-lg shadow-navy-600/20 hover:shadow-xl hover:shadow-navy-600/30"
              >
                Learn More
              </a>
              <a
                href="#members"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white text-gray-700 font-medium text-sm border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
              >
                Our Members
              </a>
            </div>
          </div>

          {/* Right: Staff photo */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/10 border border-gray-200/60">
              <img
                src="/images/IMG_2734.jpeg"
                alt="OFi Consortium"
                className="w-full aspect-video object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
