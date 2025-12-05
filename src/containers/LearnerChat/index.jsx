import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from '@openedx/paragon';
import { Close, Send, Smile } from '@openedx/paragon/icons';
import { getConfig } from '@edx/frontend-platform';
import { getAuthenticatedUser } from '@edx/frontend-platform/auth';

import './index.scss';

const CHAT_TYPES = {
  general: { key: 'general', label: 'Chung', icon: '💬' },
  qa: { key: 'qa', label: 'Hỏi & Đáp', icon: '❓' },
  technical: { key: 'technical', label: 'Kỹ thuật', icon: '⚙️' },
};

const EMOJI_LIST = [
  '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
  '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚',
  '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩',
  '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣',
  '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬',
  '👍', '👎', '👌', '✌️', '🤞', '🤟', '🤘', '👏', '🙌', '👐',
  '❤️', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❣️',
];

const LearnerChat = ({ courseId, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('general');
  const [messages, setMessages] = useState({});
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [mentionSuggestions, setMentionSuggestions] = useState([]);
  const [showMentionSuggestions, setShowMentionSuggestions] = useState(false);
  const [mentionStartIndex, setMentionStartIndex] = useState(-1);
  const [allUsers, setAllUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const chatContainerRef = useRef(null);
  const pollIntervalRef = useRef(null);

  const lmsBaseUrl = getConfig().LMS_BASE_URL || getConfig().BASE_URL;

  useEffect(() => {
    // Get current user info
    const user = getAuthenticatedUser();
    if (user) {
      setCurrentUser(user);
      setIsAdmin(user.administrator || false);
    }

    // Load initial messages
    if (isOpen && courseId) {
      loadMessages(activeTab);
      startPolling();
    } else {
      stopPolling();
    }

    return () => {
      stopPolling();
    };
  }, [isOpen, courseId, activeTab]);

  useEffect(() => {
    // Auto-scroll to bottom when new messages arrive
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const loadMessages = async (chatType) => {
    if (!courseId) return;

    try {
      setIsLoading(true);
      const response = await fetch(
        `${lmsBaseUrl}/api/learner_chat/${courseId}/${chatType}/messages/`,
        {
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setMessages((prev) => ({
          ...prev,
          [chatType]: data.messages || [],
        }));
      }
    } catch (error) {
      console.error('Error loading messages:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const startPolling = () => {
    // Poll for new messages every 3 seconds
    stopPolling();
    pollIntervalRef.current = setInterval(() => {
      if (isOpen && courseId) {
        loadMessages(activeTab);
      }
    }, 3000);
  };

  const stopPolling = () => {
    if (pollIntervalRef.current) {
      clearInterval(pollIntervalRef.current);
      pollIntervalRef.current = null;
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || !courseId) return;

    const messageText = inputMessage.trim();
    setInputMessage('');
    setShowEmojiPicker(false);
    setShowMentionSuggestions(false);

    try {
      const response = await fetch(
        `${lmsBaseUrl}/api/learner_chat/${courseId}/${activeTab}/messages/`,
        {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCsrfToken(),
          },
          body: JSON.stringify({
            message: messageText,
          }),
        }
      );

      if (response.ok) {
        // Reload messages to get the new one
        await loadMessages(activeTab);
      } else {
        const error = await response.json();
        console.error('Error sending message:', error);
        alert('Không thể gửi tin nhắn. Vui lòng thử lại.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Không thể gửi tin nhắn. Vui lòng thử lại.');
    }
  };

  const deleteMessage = async (messageId) => {
    if (!courseId || !window.confirm('Bạn có chắc chắn muốn xóa tin nhắn này?')) {
      return;
    }

    try {
      const response = await fetch(
        `${lmsBaseUrl}/api/learner_chat/${courseId}/${activeTab}/messages/${messageId}/`,
        {
          method: 'DELETE',
          credentials: 'include',
          headers: {
            'X-CSRFToken': getCsrfToken(),
          },
        }
      );

      if (response.ok) {
        // Reload messages
        await loadMessages(activeTab);
      } else {
        const error = await response.json();
        console.error('Error deleting message:', error);
        alert('Không thể xóa tin nhắn. Vui lòng thử lại.');
      }
    } catch (error) {
      console.error('Error deleting message:', error);
      alert('Không thể xóa tin nhắn. Vui lòng thử lại.');
    }
  };

  const getCsrfToken = () => {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === 'csrftoken') {
        return value;
      }
    }
    return '';
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputMessage(value);

    // Check for @ mention
    const cursorPosition = e.target.selectionStart;
    const textBeforeCursor = value.substring(0, cursorPosition);
    const mentionMatch = textBeforeCursor.match(/@(\w*)$/);

    if (mentionMatch) {
      setMentionStartIndex(cursorPosition - mentionMatch[0].length);
      setShowMentionSuggestions(true);
      // In a real implementation, you'd fetch user list here
      // For now, we'll use a simple filter
      setMentionSuggestions([]);
    } else {
      setShowMentionSuggestions(false);
      setMentionStartIndex(-1);
    }
  };

  const insertEmoji = (emoji) => {
    setInputMessage((prev) => prev + emoji);
    setShowEmojiPicker(false);
    inputRef.current?.focus();
  };

  const insertMention = (username) => {
    if (mentionStartIndex >= 0) {
      const beforeMention = inputMessage.substring(0, mentionStartIndex);
      const afterMention = inputMessage.substring(
        inputMessage.indexOf('@', mentionStartIndex) + 1 + 
        (inputMessage.substring(mentionStartIndex).match(/@(\w*)/)?.[1]?.length || 0)
      );
      setInputMessage(`${beforeMention}@${username} ${afterMention}`);
      setShowMentionSuggestions(false);
      setMentionStartIndex(-1);
      inputRef.current?.focus();
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Vừa xong';
    if (diffMins < 60) return `${diffMins} phút trước`;
    if (diffHours < 24) return `${diffHours} giờ trước`;
    if (diffDays < 7) return `${diffDays} ngày trước`;

    return date.toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const formatMessage = (message) => {
    // Highlight mentions
    let formatted = message;
    const mentionPattern = /@(\w+)/g;
    formatted = formatted.replace(mentionPattern, '<span class="mention">@$1</span>');
    return formatted;
  };

  const currentMessages = messages[activeTab] || [];

  if (!isOpen) return null;

  return (
    <div className="learner-chat-container">
      <div className="learner-chat-header">
        <div className="learner-chat-title">
          {currentUser && `(${currentUser.username})`}
        </div>
        <Button
          variant="tertiary"
          size="sm"
          icon={Close}
          onClick={onClose}
          className="learner-chat-close-btn"
        />
      </div>

      <div className="learner-chat-tabs">
        {Object.values(CHAT_TYPES).map((type) => (
          <button
            key={type.key}
            className={`learner-chat-tab ${activeTab === type.key ? 'active' : ''}`}
            onClick={() => setActiveTab(type.key)}
          >
            <span className="tab-icon">{type.icon}</span>
            <span className="tab-label">{type.label}</span>
          </button>
        ))}
      </div>

      <div className="learner-chat-room-info">
        Phòng chat {CHAT_TYPES[activeTab].label.toLowerCase()}
      </div>

      <div className="learner-chat-messages" ref={chatContainerRef}>
        {isLoading && currentMessages.length === 0 ? (
          <div className="learner-chat-loading">Đang tải tin nhắn...</div>
        ) : currentMessages.length === 0 ? (
          <div className="learner-chat-empty">
            Chưa có tin nhắn nào. Hãy bắt đầu cuộc trò chuyện!
          </div>
        ) : (
          <>
            {currentMessages.map((msg) => (
              <div
                key={msg.id}
                className={`learner-chat-message ${msg.user.id === currentUser?.id ? 'own' : ''} ${msg.is_deleted ? 'deleted' : ''}`}
              >
                <div className="message-header">
                  <span className="message-username">
                    {msg.user.display_name || msg.user.username}
                    {msg.user.id === currentUser?.id && ' (Bạn)'}
                  </span>
                  <span className="message-date">{formatDate(msg.created_at)}</span>
                  {(isAdmin || msg.can_delete) && !msg.is_deleted && (
                    <button
                      className="message-delete-btn"
                      onClick={() => deleteMessage(msg.id)}
                      title="Xóa tin nhắn"
                    >
                      ×
                    </button>
                  )}
                </div>
                {msg.is_deleted ? (
                  <div className="message-deleted">Tin nhắn đã bị xóa</div>
                ) : (
                  <div
                    className="message-content"
                    dangerouslySetInnerHTML={{ __html: formatMessage(msg.message) }}
                  />
                )}
                {msg.mentions && msg.mentions.length > 0 && (
                  <div className="message-mentions">
                    Đã nhắc đến: {msg.mentions.map((m) => m.display_name || m.username).join(', ')}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      <div className="learner-chat-input-container">
        <div className="learner-chat-input-wrapper">
          <button
            className="learner-chat-emoji-btn"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            title="Chèn emoji"
          >
            <Icon src={Smile} />
          </button>
          <input
            ref={inputRef}
            type="text"
            className="learner-chat-input"
            placeholder="Type a message..."
            value={inputMessage}
            onChange={handleInputChange}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
          />
          <Button
            variant="primary"
            size="sm"
            icon={Send}
            onClick={sendMessage}
            disabled={!inputMessage.trim()}
            className="learner-chat-send-btn"
          >
            Gửi
          </Button>
        </div>

        {showEmojiPicker && (
          <div className="learner-chat-emoji-picker">
            {EMOJI_LIST.map((emoji) => (
              <button
                key={emoji}
                className="emoji-item"
                onClick={() => insertEmoji(emoji)}
              >
                {emoji}
              </button>
            ))}
          </div>
        )}

        {showMentionSuggestions && mentionSuggestions.length > 0 && (
          <div className="learner-chat-mention-suggestions">
            {mentionSuggestions.map((user) => (
              <button
                key={user.id}
                className="mention-suggestion-item"
                onClick={() => insertMention(user.username)}
              >
                {user.display_name || user.username}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

LearnerChat.propTypes = {
  courseId: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

LearnerChat.defaultProps = {
  courseId: null,
  isOpen: false,
};

export default LearnerChat;

