export const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="animate-spin h-5 w-5 bg-danger" />
    </div>
  );
};
