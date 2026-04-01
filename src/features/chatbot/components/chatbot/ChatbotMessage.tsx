"use client";

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';
import styles from './Chatbot.module.css';

type Role = 'user' | 'assistant';

interface ChatbotMessageProps {
  id: string;
  role: Role;
  content: string;
}

const ChatbotMessage: React.FC<ChatbotMessageProps> = ({ id, role, content }) => {
  const isUser = role === 'user';

  return (
    <div className={`${styles.message} ${isUser ? styles.userMessage : styles.aiMessage}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSanitize]}
        components={{
          a: ({ node, ...props }: any) => (
            <a {...props} target="_blank" rel="noopener noreferrer" />
          ),
          code: ({ node, inline, className, children, ...props }: any) => {
            if (inline) return <code className={styles.inlineCode} {...props}>{children}</code>;
            return (
              <pre className={styles.codeBlock}>
                <code {...props} className={className}>{children}</code>
              </pre>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default ChatbotMessage;
