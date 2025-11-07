import fs from 'fs';
import path from 'path';

export default function Privacy() {
  // Read the HTML file at build time (server component)
  const htmlContent = fs.readFileSync(
    path.join(process.cwd(), 'app', 'privacy', 'privacy_content.html'),
    'utf8'
  );

  return (
    <div className="min-h-screen bg-black text-white px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </div>
  );
}
