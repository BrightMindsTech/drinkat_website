const RetroBorder = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div
        className="h-4 w-full"
        style={{
          backgroundImage: `
            linear-gradient(45deg, hsl(var(--primary)) 25%, transparent 25%),
            linear-gradient(-45deg, hsl(var(--primary)) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, hsl(var(--primary)) 75%),
            linear-gradient(-45deg, transparent 75%, hsl(var(--primary)) 75%)
          `,
          backgroundSize: "16px 16px",
          backgroundPosition: "0 0, 0 8px, 8px -8px, -8px 0px",
        }}
      />
    </div>
  );
};

export default RetroBorder;
