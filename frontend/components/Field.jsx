export default function Field({ label, children }) {
  return (
    <label className="block my-2">
      <span className="block text-sm text-gray-600 my-2">{label}</span>
      {children}
    </label>
  );
}
