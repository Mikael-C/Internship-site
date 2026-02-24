const Cookies = () => {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Cookie Policy</h1>
        <p className="text-sm text-(--color-gray) mb-8">Last updated: February 2026</p>

        <p className="text-(--color-gray-dark) mb-6">
          This Cookie Policy explains how GlobalPaths uses cookies and similar technologies on our website and
          platform.
        </p>

        <div className="space-y-6 text-sm text-(--color-gray-dark)">
          <section>
            <h2 className="text-lg font-semibold mb-2">1. What are cookies?</h2>
            <p>
              Cookies are small text files stored on your device that help websites function, remember your
              preferences, and understand how you interact with content.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">2. How we use cookies</h2>
            <p>
              We use essential cookies to keep the platform secure and functional, as well as optional analytics
              cookies to understand usage patterns and improve our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">3. Managing preferences</h2>
            <p>
              Most browsers let you control cookies through settings. You can choose to block or delete cookies,
              though this may affect how our website functions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cookies;

