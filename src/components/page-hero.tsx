type PageHeroProps = {
  kicker: string;
  title: string;
  description: string;
};

export function PageHero({ kicker, title, description }: PageHeroProps) {
  return (
    <div className="space-y-4">
      <p className="section-kicker">{kicker}</p>
      <h1 className="headline balance-text">{title}</h1>
      <p className="max-w-2xl text-base leading-7 text-espresso/70 md:text-lg">
        {description}
      </p>
    </div>
  );
}
