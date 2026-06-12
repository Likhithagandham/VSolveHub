type ServicesSearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
};

export function ServicesSearchBar({ value, onChange, placeholder, label }: ServicesSearchBarProps) {
  return (
    <div className="services-search-bar">
      <span className="services-search-icon" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" />
        </svg>
      </span>
      <input
        type="search"
        className="services-search-input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
      />
    </div>
  );
}
