const posts = [
  {
    category: 'For Students',
    title: 'How to turn a remote internship into a full-time offer',
    readTime: '8 min read',
    highlight:
      'Practical strategies to stand out, build trust with your manager, and showcase impact in a distributed team.',
  },
  {
    category: 'For Companies',
    title: 'Designing remote internship projects that actually ship',
    readTime: '6 min read',
    highlight:
      'A framework for scoping high-impact, low-risk projects that give interns ownership and deliver real value.',
  },
  {
    category: 'For Educators',
    title: 'Embedding work-based learning into your curriculum',
    readTime: '9 min read',
    highlight:
      'How universities are integrating remote internships into credit-bearing courses and employability programs.',
  },
  {
    category: 'Future of Work',
    title: 'Why project-based experience matters more than ever',
    readTime: '7 min read',
    highlight:
      'Employers are hiring for skills, not just degrees. Here’s what that means for learners everywhere.',
  },
];

const Blog = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute top-[-15%] left-[10%] w-[40vw] h-[40vw] max-w-[520px] max-h-[520px] bg-(--color-accent-light) rounded-[60%_40%_30%_70%/60%_30%_70%_40%] opacity-30" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[45vw] h-[45vw] max-w-[620px] max-h-[620px] bg-(--color-secondary-light) rounded-full opacity-25" />
        </div>

        <div className="container-custom relative z-10 section-padding">
          <p className="uppercase tracking-[0.2em] text-sm font-semibold text-(--color-primary)">
            Insights
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4 max-w-3xl">
            Global perspectives on early careers, internships, and the future of work
          </h1>
          <p className="text-lg text-(--color-gray-dark) max-w-2xl">
            Articles, playbooks, and resources for students, companies, and educators building work-based
            learning programs.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="section-padding bg-(--color-light)">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.title}
                className="bg-white rounded-3xl border border-(--color-light) shadow-sm p-6 flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] uppercase text-(--color-primary)">
                    {post.category}
                  </p>
                  <h2 className="mt-3 text-xl font-semibold">{post.title}</h2>
                  <p className="mt-3 text-sm text-(--color-gray-dark)">{post.highlight}</p>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-(--color-gray)">
                  <span>{post.readTime}</span>
                  <span>Coming soon</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

