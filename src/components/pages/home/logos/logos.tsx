const logos = [
  {
    alt: 'Red Hat',
    src: '/images/logos/redhat.svg',
    width: 245,
    height: 64,
  },
  {
    alt: 'DingTalk',
    src: '/images/logos/dingtalk.svg',
    width: 180,
    height: 64,
  },
  {
    alt: 'Aptive',
    src: '/images/logos/aptive.svg',
    width: 144,
    height: 64,
  },
  {
    alt: 'Kakao Entertainment',
    src: '/images/logos/kakao.svg',
    width: 151,
    height: 64,
  },
  {
    alt: 'Kingsoft',
    src: '/images/logos/kingsoft.svg',
    width: 228,
    height: 64,
  },
  {
    alt: 'Human horizons',
    src: '/images/logos/human-horizons.svg',
    width: 160,
    height: 64,
  },
  {
    alt: 'Salla',
    src: '/images/logos/salla.svg',
    width: 119,
    height: 64,
  },
  {
    alt: 'Miotech',
    src: '/images/logos/miotech.svg',
    width: 194,
    height: 64,
  },
  {
    alt: 'Proton',
    src: '/images/logos/proton.svg',
    width: 252,
    height: 64,
  },
  {
    alt: 'Meta',
    src: '/images/logos/meta.svg',
    width: 189,
    height: 64,
  },
  {
    alt: 'Evermos',
    src: '/images/logos/evermos.svg',
    width: 239,
    height: 64,
  },
  {
    alt: 'Tencent',
    src: '/images/logos/tencent.svg',
    width: 476,
    height: 64,
  },
];

const Logos = () => {
  return (
    <section className="mt-40 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0)34.28%,rgba(240,242,255,0.5)100%)] py-36 2xl:mt-36 2xl:py-32 xl:mt-32 xl:py-28 md:mt-24 md:py-24 sm:mt-20 sm:py-16">
      <div className="container flex flex-col items-center">
        <h2 className="max-w-3xl text-center font-title text-72 font-semibold leading-none xl:max-w-2xl xl:text-56 md:max-w-lg md:text-48 sm:text-40">
          Trusted by engineers worldwide
        </h2>
        <ul className="mt-16 grid max-w-[1000px] grid-cols-4 gap-x-24 gap-y-12 2xl:mt-14 xl:mt-12 xl:max-w-[740px] xl:gap-y-8 xl:gap-x-16 md:mt-10 md:max-w-[660px] md:gap-y-7 md:gap-x-10 sm:mt-8 xs:flex xs:max-w-[460px] xs:flex-wrap xs:justify-center xs:gap-x-6 xs:gap-y-6">
          {logos.map((logo) => (
            <li key={logo.alt} className="mx-auto flex items-center xs:mx-0">
              <img
                className="xl:h-12 xl:w-auto md:h-10 xs:h-8"
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Logos;
