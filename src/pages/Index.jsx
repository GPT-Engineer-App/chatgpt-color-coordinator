import React, { useState } from "react";
import { Box, Input, Button, VStack, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaPlus, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, topic: determineTopic(input) }]);
      setInput("");
    }
  };

  const determineTopic = (input) => {
    // Simple topic determination logic (placeholder)
    if (input.includes("tech")) return "blue.100";
    if (input.includes("health")) return "green.100";
    if (input.includes("finance")) return "yellow.100";
    return "gray.100";
  };

  return (
    <VStack spacing={4}>
      <VStack spacing={2} w="100%" p={4} bg={useColorModeValue("gray.50", "gray.700")} borderRadius="lg">
        {messages.map((message, index) => (
          <Box key={index} p={3} bg={message.topic} borderRadius="md" w="100%">
            <Text>{message.text}</Text>
          </Box>
        ))}
      </VStack>
      <HStack w="100%">
        <Input placeholder="Type your message..." value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleSend()} />
        <Button onClick={handleSend} colorScheme="blue" rightIcon={<FaPaperPlane />}>
          Send
        </Button>
      </HStack>
    </VStack>
  );
};

export default Index;
