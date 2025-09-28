import axios from "axios";

/**
 * 获取聊天消息列表
 */
export const getChatMessages = async () => {
  const response = await axios.get("/api/chat/messages");
  return response.data;
};

/**
 * 发送聊天消息
 * @param chatId 聊天ID
 * @param userId 用户ID
 * @param content 消息内容
 * @param isUser 是否为用户消息
 */
export const sendMessage = async (
  chatId: number,
  userId: number,
  content: string,
  isUser: boolean = true
) => {
  const response = await axios.post("/chat/send", {
    chatId,
    userId,
    content,
    isUser,
  });
  return response.data;
};
