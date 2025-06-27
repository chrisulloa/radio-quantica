function LanguageButton({
  lang,
  isActive,
  onClick,
}: {
  lang: "PT" | "EN";
  isActive: boolean;
  onClick: (e: any) => any;
}) {
  return (
    <button
      onClick={onClick}
      value={lang}
      className={`rounded-2xl border text-xs h-min p-2 hover:cursor-pointer hover:text-black hover:bg-white border-white ${
        isActive ? "text-black bg-white" : "text-white hover:opacity-70"
      }`}
    >
      {lang}
    </button>
  );
}

function LanguageSelector({
  selectedLocale,
  onClick,
}: {
  selectedLocale: "PT" | "EN";
  onClick: (e: any) => any;
}) {
  return (
    <div className="flex gap-x-3">
      <LanguageButton
        lang="EN"
        isActive={selectedLocale === "EN"}
        onClick={onClick}
      />
      <LanguageButton
        lang="PT"
        isActive={selectedLocale === "PT"}
        onClick={onClick}
      />
    </div>
  );
}

export default LanguageSelector;
