"use client";

import React, { useState } from 'react';
// using local fetch to the API route so responses are displayed as plain text
import { SvgInline } from 'react-svg-inliner';
import styles from './Chatbot.module.css';
import ChatbotMessage from './ChatbotMessage';

type Message = {
    id: string;
    role: 'user' | 'assistant' | string;
    content: string;
};

export const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const onSendMessage = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        const text = inputValue.trim();
        if (!text) return;

        // Add user message locally
        const userMessage: Message = { id: String(Date.now()), role: 'user', content: text };
        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            // Prepare payload for the API using the conversation so far (including the new user message)
            // convertToModelMessages expects messages to have `parts` arrays, so wrap text
            const history = [...messages, userMessage].map((m) => ({
                role: m.role,
                parts: [{ type: 'text', text: m.content }],
            }));

            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: history }),
            });

            const assistantText = await res.text();

            const assistantMessage: Message = { id: String(Date.now() + 1), role: 'assistant', content: assistantText };
            setMessages((prev) => [...prev, assistantMessage]);
        } catch (err) {
            console.error('Chat error', err);
            const errorMessage: Message = { id: String(Date.now() + 2), role: 'assistant', content: 'Error: Could not get a response.' };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.chatbotContainer}>
            {/* 1) Button open chat */}
            <button
                className={styles.chatButton}
                onClick={toggleChat}
                aria-label={isOpen ? "Close chat" : "Open chat"}
                id="chatbot-trigger"
            >
                <SvgInline
                    src="/mistral_ai_logo.svg"
                    className={styles.mistralLogo}
                    title="Mistral AI logo"
                    id="mistralLogo"
                />
            </button>

            {/* 2) Div that appears when it is clicked */}
            {isOpen && (
                <div className={styles.chatWindow}>
                    <div className={styles.chatHeader}>
                        <h3>Jorge's personal Assistant</h3>
                        <button className={styles.closeButton} onClick={toggleChat} aria-label="Close chat">
                            ×
                        </button>
                    </div>

                    <div className={styles.chatMessages}>
                        {/* Static welcome message (visible if no other messages) */}
                        {messages.length === 0 && (
                            <div className={`${styles.message} ${styles.aiMessage}`}>
                                <p>Hello! 🤖 I'm Jorge's personal assistant, powered by Mistral AI. I'm here to help you explore his work and background.</p>
                                <p>You can ask me things like:</p>
                                <ul className={styles.introList}>
                                    <li>Who is Jorge?</li>
                                    <li>What are his skills?</li>
                                    <li>Tell me about his repo.</li>
                                </ul>
                            </div>
                        )}

                        {messages.map((m: any) => {
                            const text = m.content || (m as any).parts?.[0]?.text || '';
                            const role = m.role === 'user' ? 'user' : 'assistant';
                            return (
                                <ChatbotMessage key={m.id} id={m.id} role={role} content={text} />
                            );
                        })}
                    </div>

                    <form className={styles.chatInputArea} onSubmit={onSendMessage}>
                        <textarea
                            className={styles.textarea}
                            placeholder="Ask me anything about Jorge..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            aria-label="New message"
                            id="chat-input"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    onSendMessage();
                                }
                            }}
                        />
                        <button type="submit" className={styles.sendButton} disabled={!inputValue.trim()}>
                            Send
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
