const LaunchUI = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Background circle */}
    <circle cx="12" cy="12" r="11" fill="#000000" stroke="currentColor" strokeWidth="1" />
    
    {/* Candlestick chart */}
    {/* Bullish candle 1 */}
    <line x1="6" y1="14" x2="6" y2="8" stroke="#10b981" strokeWidth="0.5" />
    <rect x="5" y="10" width="2" height="3" fill="#10b981" />
    
    {/* Bearish candle 2 */}
    <line x1="10" y1="16" x2="10" y2="6" stroke="#ef4444" strokeWidth="0.5" />
    <rect x="9" y="11" width="2" height="4" fill="#ef4444" />
    
    {/* Bullish candle 3 */}
    <line x1="14" y1="15" x2="14" y2="7" stroke="#10b981" strokeWidth="0.5" />
    <rect x="13" y="9" width="2" height="4" fill="#10b981" />
    
    {/* Bearish candle 4 */}
    <line x1="18" y1="13" x2="18" y2="5" stroke="#ef4444" strokeWidth="0.5" />
    <rect x="17" y="8" width="2" height="3" fill="#ef4444" />
    
    {/* Trend line */}
    <path d="M 4 17 L 8 13 L 12 15 L 16 10 L 20 7" stroke="#3b82f6" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
export default LaunchUI;