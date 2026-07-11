export default function ContactInfoCard({ contact }) {
  const content = (
    <>
      <h3 className="text-xl font-semibold text-white">
        {contact.title}
      </h3>

      <p className="mt-3 text-slate-400">
        {contact.value}
      </p>
    </>
  );

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500">
      {contact.href && contact.href !== "#" ? (
        <a
          href={contact.href}
          target={contact.href.startsWith("http") ? "_blank" : undefined}
          rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}