import { FloatingWhatsApp } from 'react-floating-whatsapp'

function Chat() {
    return (
        // <div className="fixed-bottom right-100 p-3 chat-icon" style={{ zIndex: "10000", left: "initial" }}>
        //     <a href="http://wa.me/916371785300"  target="_blank">
        //         <img src="/images/whatsapp.png" alt="whatsapp_icon" />
        //     </a>
        // </div>
        <FloatingWhatsApp
            phoneNumber="6371785300"
            accountName="Badri"
            avatar="/images/ez-pizi.png"
            chatMessage="Hello, how can I help you?"
            allowClickAway={true}
        />
    )
}

export default Chat;