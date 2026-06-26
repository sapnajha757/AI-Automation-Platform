export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div>
          <h2 className="text-2xl font-bold">ARMORY AI</h2>
          <p className="mt-2 text-gray-400">
            © 2026 All Rights Reserved
          </p>
        </div>

        <div className="flex gap-8">
          <a href="#">Product</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}