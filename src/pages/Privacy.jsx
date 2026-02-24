const Privacy = () => {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Privacy Policy</h1>
        <p className="text-sm text-(--color-gray) mb-8">Last updated: February 2026</p>

        <p className="text-(--color-gray-dark) mb-6">
          This Privacy Policy explains how GlobalPaths collects, uses, and protects your personal information
          when you use our platform, participate in our programs, or interact with our services.
        </p>

        <div className="space-y-6 text-sm text-(--color-gray-dark)">
          <section>
            <h2 className="text-lg font-semibold mb-2">1. Information we collect</h2>
            <p>
              We collect information that you provide directly (such as profile details, application data, and
              communications), as well as limited usage data (such as device information and activity on our
              platform) to operate and improve our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">2. How we use your information</h2>
            <p>
              We use your information to match you with suitable opportunities, deliver learning experiences,
              support you during programs, and communicate important updates related to your account and
              participation.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">3. Sharing and partners</h2>
            <p>
              We may share limited information with trusted partners such as host companies, universities, and
              service providers involved in delivering our programs, always in line with applicable privacy laws.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">4. Your rights</h2>
            <p>
              Depending on your location, you may have rights to access, update, or delete your personal data, as
              well as to object to or restrict certain processing. You can contact us at privacy@globalpaths.com
              for assistance.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

