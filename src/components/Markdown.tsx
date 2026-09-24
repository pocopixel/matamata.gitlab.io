import { ReactNode } from 'react';

interface MarkdownProps {
  content: string;
}

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g);

  parts.forEach((part, i) => {
    const key = `${keyPrefix}-${i}`;
    if (part.startsWith('**') && part.endsWith('**')) {
      nodes.push(<strong key={key}>{part.slice(2, -2)}</strong>);
    } else if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
      nodes.push(<em key={key}>{part.slice(1, -1)}</em>);
    } else if (part.startsWith('`') && part.endsWith('`')) {
      nodes.push(<code key={key} className="px-1.5 py-0.5 rounded bg-warm-100 dark:bg-warm-700 text-sm font-mono">{part.slice(1, -1)}</code>);
    } else if (part.startsWith('[') && part.includes('](')) {
      const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (match) {
        nodes.push(<a key={key} href={match[2]} className="text-secondary-600 dark:text-secondary-400 hover:underline">{match[1]}</a>);
      } else {
        nodes.push(part);
      }
    } else if (part) {
      nodes.push(part);
    }
  });

  return nodes;
}

export default function Markdown({ content }: MarkdownProps) {
  const lines = content.split('\n');
  const elements: ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const key = `md-${i}`;

    if (line.trim() === '') {
      i++;
      continue;
    }

    if (line.startsWith('## ')) {
      elements.push(<h2 key={key} className="text-2xl font-bold text-warm-800 dark:text-warm-200 mt-8 mb-4">{renderInline(line.slice(3), key)}</h2>);
      i++;
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={key} className="text-xl font-bold text-warm-800 dark:text-warm-200 mt-6 mb-3">{renderInline(line.slice(4), key)}</h3>);
      i++;
    } else if (line.startsWith('> ')) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].startsWith('> ')) {
        quoteLines.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <blockquote key={key} className="border-l-4 border-secondary-400 pl-4 my-6 italic text-warm-600 dark:text-warm-400">
          {renderInline(quoteLines.join(' '), key)}
        </blockquote>
      );
    } else if (line.startsWith('- ')) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={key} className="list-disc list-inside space-y-2 my-4 text-warm-700 dark:text-warm-300">
          {listItems.map((item, j) => <li key={`${key}-li-${j}`}>{renderInline(item, `${key}-li-${j}`)}</li>)}
        </ul>
      );
    } else {
      elements.push(<p key={key} className="my-4 leading-relaxed text-warm-700 dark:text-warm-300">{renderInline(line, key)}</p>);
      i++;
    }
  }

  return <div>{elements}</div>;
}
