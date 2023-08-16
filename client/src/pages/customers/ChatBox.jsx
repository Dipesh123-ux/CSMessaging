import React, { useEffect } from 'react'
import { ChatState } from '../../context/chatContext'
import { Box } from "@chakra-ui/layout";
import Chat from '../../components/CustomerChat/Chat'
import { raiseQuery } from '../../actions/chat';

const user = JSON.parse(localStorage.getItem('userInfo'));

const ChatBox = () => {

    const { selectedChat, setSelectedChat } = ChatState();


    return (
        <Box w="100%" h="100vh" p="10px" >
            <Box
                display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
                alignItems="center"
                flexDir="column"
                p={3}
                bg="white"
                w={{ base: "100%", md: "100%" }}
                borderRadius="lg"
                borderWidth="1px"
                h={"100%"}
            >
                <Chat />
            </Box>
        </Box>
    )
}

export default ChatBox