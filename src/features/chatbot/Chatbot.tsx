import React, { useState } from 'react';
import { SvgInline } from 'react-svg-inliner';
import styles from './Chatbot.module.css';

export const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

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
                    title="Mistral AI logo"
                />
            </button>

            {/* 2) Div that appears when it is clicked */}
            {isOpen && (
                <div className={styles.chatWindow}>
                    <div className={styles.chatHeader}>
                        <h3>Jorge's personal AI Assistant</h3>
                        <button className={styles.closeButton} onClick={toggleChat} aria-label="Close chat">
                            ×
                        </button>
                    </div>

                    <div className={styles.chatMessages}>
                        {/* 3) First automatic ai message */}
                        <div className={`${styles.message} ${styles.aiMessage}`}>
                            <p>Hello! 🤖 I'm Jorge's personal assistant, powered by Mistral AI. I'm here to help you explore his work and background.</p>
                            <p>I can help you with:</p>
                            <ul className={styles.introList}>
                                <li><strong>More about Jorge</strong>: Skills, experience, and interests.</li>
                                <li><strong>Explain this repo</strong>: Architecture and technologies.</li>
                                <li><strong>Introduce myself</strong>: My role and how I'm integrated here.</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.chatInputArea}>
                        {/* 4) textarea so the user can write */}
                        <textarea
                            className={styles.textarea}
                            placeholder="Type your message..."
                            aria-label="New message"
                        />
                        {/* 5) Button of send message */}
                        <button className={styles.sendButton}>
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
