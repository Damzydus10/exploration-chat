import { UserAuth } from "../context/AuthContext";

const Message = ({ message }) => {
  const {currentuser} = UserAuth();
  console.log(message)
  return (
    <div>
       <img src={message.avatar} />
      <div className={`chat ${message.uid === currentuser.uid} ? 
      "chat-end" : "chart-start"}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
          
          </div>
        </div>
        <div className="chat-header">
          {message.name}
        </div>
        <div className="chat-bubble">{message.text}</div>
       
      </div>
     
    </div>
  );
};

export default Message;